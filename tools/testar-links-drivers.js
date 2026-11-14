#!/usr/bin/env node
/* Bateria mensal: confere se todos os links de js/drivers-dados.js ainda respondem.
   Uso:  node tools/testar-links-drivers.js           (resumo no terminal + docs/implementations/teste-links-drivers.md)
   Saída com código 1 quando algum link falha. Links de página (pagina: true) precisam responder 2xx; arquivos também
   têm o tamanho comparado com o campo "tamanho" (aviso quando difere mais de 15%). 403/406/429 viram "verificar". */
const fs = require('fs'), path = require('path'), vm = require('vm');
const raiz = path.join(__dirname, '..');
const DRIVERS = vm.runInNewContext(fs.readFileSync(path.join(raiz, 'js/drivers-dados.js'), 'utf8') + ';DRIVERS');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';

const itens = [], vistos = new Map();
const add = (url, desc, esperado) => { if (!url) return; if (!vistos.has(url)) { vistos.set(url, { url, usos: [], esperado }); itens.push(vistos.get(url)); } vistos.get(url).usos.push(desc); };
DRIVERS.forEach(d => {
    add(d.pagina, `${d.marca} ${d.modelo} (página do modelo)`);
    d.downloads.forEach(x => add(x.url, `${d.marca} ${d.modelo}: ${x.rotulo}`, x.pagina ? null : x.tamanho));
});

const bytes = t => { const m = /([\d.,]+)\s*(KB|MB)/i.exec(t || ''); if (!m) return null; const n = parseFloat(m[1].replace(',', '.')); return n * (m[2].toUpperCase() === 'MB' ? 1048576 : 1024); };
const tentar = async url => {
    const opts = { redirect: 'follow', signal: AbortSignal.timeout(40000), headers: { 'User-Agent': UA, Range: 'bytes=0-0', Accept: '*/*' } };
    const r = await fetch(url, opts);
    let total = null;
    const cr = r.headers.get('content-range');
    if (cr && /\/(\d+)$/.test(cr)) total = +/\/(\d+)$/.exec(cr)[1]; else if (r.status === 200) total = +r.headers.get('content-length') || null;
    const tipo = r.headers.get('content-type') || '';
    try { await r.body?.cancel(); } catch {}
    return { status: r.status, total, tipo };
};
const testar = async it => {
    let ultimo;
    for (let n = 0; n < 3; n++) {
        try { ultimo = await tentar(it.url); if (ultimo.status < 500) break; } catch (e) { ultimo = { erro: e.cause?.code || e.name || String(e) }; }
        await new Promise(r => setTimeout(r, 1500));
    }
    const r = { ...it, ...ultimo };
    if (r.erro) r.res = 'FALHA';
    else if ([403, 406, 429].includes(r.status)) r.res = 'VERIFICAR';
    else if (r.status >= 200 && r.status < 300) {
        r.res = 'OK';
        const esp = bytes(it.esperado);
        if (esp && r.total && Math.abs(r.total - esp) / esp > 0.15) { r.res = 'AVISO'; r.nota = `tamanho no servidor ${(r.total / 1048576).toFixed(2)} MB, no cadastro ${it.esperado}`; }
        if (it.esperado && /html/i.test(r.tipo) && !/\.php/.test(it.url)) { r.res = 'AVISO'; r.nota = 'o link devolveu uma página HTML em vez de um arquivo'; }
    } else r.res = 'FALHA';
    return r;
};

(async () => {
    const resultados = []; let i = 0;
    await Promise.all(Array.from({ length: 6 }, async () => { while (i < itens.length) { const it = itens[i++]; resultados.push(await testar(it)); process.stdout.write('.'); } }));
    resultados.sort((a, b) => itens.indexOf(itens.find(x => x.url === a.url)) - itens.indexOf(itens.find(x => x.url === b.url)));
    const cont = k => resultados.filter(r => r.res === k).length;
    const data = new Date().toLocaleDateString('pt-BR');
    const linhas = resultados.filter(r => r.res !== 'OK');
    const md = `# Teste mensal dos links de drivers\n\nRodado em ${data}. ${resultados.length} links: ${cont('OK')} OK, ${cont('AVISO')} avisos, ${cont('VERIFICAR')} para verificar à mão, ${cont('FALHA')} falhas.\n\n` +
        (linhas.length ? '| Resultado | Link | Onde aparece | Detalhe |\n|---|---|---|---|\n' + linhas.map(r => `| ${r.res} | ${r.url} | ${r.usos[0]}${r.usos.length > 1 ? ` (+${r.usos.length - 1})` : ''} | ${r.erro || r.nota || 'HTTP ' + r.status} |`).join('\n') + '\n' : 'Todos os links responderam.\n');
    fs.writeFileSync(path.join(raiz, 'docs/implementations/teste-links-drivers.md'), md);
    console.log(`\n${resultados.length} links: ${cont('OK')} OK, ${cont('AVISO')} avisos, ${cont('VERIFICAR')} verificar, ${cont('FALHA')} falhas`);
    linhas.forEach(r => console.log(`  ${r.res.padEnd(9)} ${r.url}  ${r.erro || r.nota || 'HTTP ' + r.status}`));
    process.exit(cont('FALHA') ? 1 : 0);
})();
