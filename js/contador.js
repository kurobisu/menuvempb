/* Contador anônimo de visitas: sem cookie, sem armazenamento, sem IP e sem dado pessoal.
   O id da visita vive só na memória da página e some ao fechá-la. Envia só contagens agregadas. */
(function () {
    const URL_EVENTOS = 'https://ossounjsblhmryaieapz.supabase.co/functions/v1/site-evento';
    const visita = Array.from(crypto.getRandomValues(new Uint8Array(12)), b => (b % 36).toString(36)).join('');
    const pagina = location.pathname.replace(/\/$/, '') || '/';
    const enviados = new Set();

    function enviar(evento, detalhe, extra) {
        const chave = evento + '|' + (detalhe || '');
        if (enviados.has(chave) && evento !== 'escolher_plano' && evento !== 'contato') return;
        enviados.add(chave);
        const corpo = JSON.stringify(Object.assign({ visita, pagina, evento, detalhe: detalhe || '' }, extra));
        try {
            fetch(URL_EVENTOS, { method: 'POST', body: corpo, keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(() => {});
        } catch (e) { /* sem medição, o site segue normal */ }
    }
    window.mpbContar = enviar;

    const ua = navigator.userAgent;
    const params = new URLSearchParams(location.search);
    enviar('chegada', '', {
        utm_source: params.get('utm_source'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        dispositivo: window.matchMedia('(max-width: 768px)').matches ? 'mobile' : 'desktop',
        navegador_interno: /Instagram/i.test(ua) ? 'instagram' : /FBAN|FBAV/i.test(ua) ? 'facebook' : /; wv\)|FB_IAB|Line\//i.test(ua) ? 'outro' : undefined,
    });

    /* Profundidade de rolagem */
    const marcos = [25, 50, 75, 100];
    const medirRolagem = () => {
        const alt = document.documentElement.scrollHeight - window.innerHeight;
        const pct = alt <= 0 ? 100 : (window.scrollY / alt) * 100;
        marcos.forEach(m => { if (pct >= m - 1) enviar('rolagem', String(m)); });
    };
    window.addEventListener('scroll', medirRolagem, { passive: true });

    /* Seção de planos visível */
    document.addEventListener('DOMContentLoaded', () => {
        const planos = document.getElementById('planos');
        if (planos && 'IntersectionObserver' in window) {
            const obs = new IntersectionObserver(([e]) => {
                if (e.isIntersecting) { enviar('viu_planos'); obs.disconnect(); }
            }, { threshold: 0.3 });
            obs.observe(planos);
        }
    });

    /* Tempo na página (só tempo visível), em faixas, ao sair */
    let visivelDesde = document.visibilityState === 'visible' ? Date.now() : null;
    let ms = 0;
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            if (visivelDesde) { ms += Date.now() - visivelDesde; visivelDesde = null; }
            enviarTempo();
        } else {
            visivelDesde = Date.now();
        }
    });
    function enviarTempo() {
        const s = ms / 1000;
        const faixa = s < 5 ? '0-5s' : s < 15 ? '5-15s' : s < 60 ? '15-60s' : '60s+';
        // nova faixa substitui a anterior se a pessoa voltar à aba e ficar mais tempo
        enviados.forEach(k => { if (k.startsWith('tempo|')) enviados.delete(k); });
        enviar('tempo', faixa);
    }
    window.addEventListener('pagehide', () => {
        if (visivelDesde) { ms += Date.now() - visivelDesde; visivelDesde = null; }
        enviarTempo();
        if (!window.mpbDecidiuCookies) enviar('cookies', 'ignorado');
    });
})();
