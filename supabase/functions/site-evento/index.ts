// Contador anônimo do menuvempb.com.br: sem cookie, sem IP gravado, sem identificação.
// Projeto Supabase menuvem-lojista, schema site_metricas (migration site_metricas_funil_anonimo).
import postgres from 'npm:postgres@3.4.4';

const sql = postgres(Deno.env.get('SUPABASE_DB_URL')!, { max: 1, prepare: false });

const ORIGENS = ['https://menuvempb.com.br', 'https://www.menuvempb.com.br'];
const EVENTOS = new Set(['chegada', 'rolagem', 'viu_planos', 'tempo', 'escolher_plano', 'contato', 'cadastro_etapas', 'cookies']);
const DETALHES: Record<string, RegExp> = {
  rolagem: /^(25|50|75|100)$/,
  tempo: /^(0-5s|5-15s|15-60s|60s\+)$/,
  escolher_plano: /^(1|2|3|nenhum)$/,
  contato: /^(whatsapp|telegram)$/,
  cookies: /^(aceito|recusado|ignorado)$/,
};

// Limite por instância, só em memória (o IP nunca é gravado): 40 eventos por minuto por origem de rede.
const janela = new Map<string, { n: number; ate: number }>();
function limitado(chave: string): boolean {
  const agora = Date.now();
  const j = janela.get(chave);
  if (!j || j.ate < agora) {
    if (janela.size > 5000) janela.clear();
    janela.set(chave, { n: 1, ate: agora + 60_000 });
    return false;
  }
  return ++j.n > 40;
}

const limpa = (v: unknown, max: number): string | null => {
  if (typeof v !== 'string') return null;
  const t = v.trim().slice(0, max).replace(/[^\w\-.+ ]/g, '');
  return t || null;
};

Deno.serve(async (req) => {
  const origem = req.headers.get('origin') ?? '';
  const cors = {
    'Access-Control-Allow-Origin': ORIGENS.includes(origem) ? origem : ORIGENS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    'Vary': 'Origin',
  };
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (req.method !== 'POST' || !ORIGENS.includes(origem)) return new Response(null, { status: 403, headers: cors });

  const rede = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'x';
  if (limitado(rede)) return new Response(null, { status: 429, headers: cors });

  let b: Record<string, unknown>;
  try {
    const texto = await req.text();
    if (texto.length > 1000) throw new Error('grande');
    b = JSON.parse(texto);
  } catch {
    return new Response(null, { status: 400, headers: cors });
  }

  const evento = String(b.evento ?? '');
  const visita = String(b.visita ?? '');
  const pagina = limpa(b.pagina, 60);
  const detalhe = String(b.detalhe ?? '');
  if (!EVENTOS.has(evento) || !/^[a-z0-9]{8,24}$/.test(visita) || !pagina) return new Response(null, { status: 400, headers: cors });
  if (evento in DETALHES ? !DETALHES[evento].test(detalhe) : detalhe !== '') return new Response(null, { status: 400, headers: cors });

  const chegada = evento === 'chegada';
  const dispositivo = chegada && (b.dispositivo === 'mobile' || b.dispositivo === 'desktop') ? b.dispositivo : null;
  const interno = chegada && ['instagram', 'facebook', 'outro'].includes(String(b.navegador_interno)) ? String(b.navegador_interno) : null;

  try {
    await sql`insert into site_metricas.eventos
      (visita, evento, pagina, detalhe, utm_source, utm_campaign, utm_content, dispositivo, navegador_interno)
      values (${visita}, ${evento}, ${pagina}, ${detalhe},
        ${chegada ? limpa(b.utm_source, 40) : null}, ${chegada ? limpa(b.utm_campaign, 60) : null}, ${chegada ? limpa(b.utm_content, 60) : null},
        ${dispositivo}, ${interno})
      on conflict do nothing`;
  } catch (e) {
    console.error('falha ao gravar evento', e instanceof Error ? e.message : e);
    return new Response(null, { status: 500, headers: cors });
  }
  return new Response(null, { status: 204, headers: cors });
});
