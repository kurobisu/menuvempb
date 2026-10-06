/* Funcionalidades: busca nos módulos, assunto ativo na barra fixa, vídeos que só tocam
   quando aparecem na tela e destaque do módulo aberto por link (#mesas, #kds...) */
document.addEventListener('DOMContentLoaded', () => {
    const modulos = [...document.querySelectorAll('.modulo')];
    const categorias = [...document.querySelectorAll('.categoria')];
    const chips = [...document.querySelectorAll('.chip-categoria')];
    const campo = document.getElementById('busca-modulos');
    const semModulo = document.querySelector('.sem-modulo');
    const resultado = document.querySelector('.resultado-modulos');
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // módulos com vídeo alternam o lado da imagem
    modulos.filter(m => m.classList.contains('com-midia')).forEach((m, i) => m.classList.toggle('inverte', i % 2 === 1));

    // ---- Vídeos: carregam e tocam só quando estão visíveis ----
    const videos = document.querySelectorAll('.modulo video[data-src]');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entradas => entradas.forEach(({ target: v, isIntersecting }) => {
            if (isIntersecting) {
                if (!v.src) v.src = v.dataset.src;
                if (!reduzido) v.play().catch(() => {});
            } else {
                v.pause();
            }
        }), { threshold: 0.35 });
        videos.forEach(v => obs.observe(v));
    } else {
        videos.forEach(v => { v.src = v.dataset.src; });
    }

    // ---- Assunto ativo na barra conforme a rolagem ----
    const marcar = id => chips.forEach(c => {
        const ativo = c.dataset.cat === id;
        c.classList.toggle('ativo', ativo);
        if (ativo) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
    });
    if ('IntersectionObserver' in window) {
        const visiveis = new Map();
        const obsCat = new IntersectionObserver(entradas => {
            entradas.forEach(e => visiveis.set(e.target.id, e.isIntersecting ? e.intersectionRect.height : 0));
            let melhor = null, maior = 0;
            visiveis.forEach((altura, id) => { if (altura > maior) { maior = altura; melhor = id; } });
            if (melhor) marcar(melhor.replace('cat-', ''));
        }, { rootMargin: '-160px 0px -35% 0px', threshold: [0, .25, .5, .75, 1] });
        categorias.forEach(c => obsCat.observe(c));
    }
    // mantém o chip ativo visível na faixa (celular)
    const faixa = document.querySelector('.chips-categorias');
    // (só rola quando o chip ativo está fora da área visível da faixa; posições medidas em relação à faixa)
    new MutationObserver(() => {
        const ativo = faixa.querySelector('.ativo');
        if (!ativo || faixa.scrollWidth <= faixa.clientWidth) return;
        const caixa = faixa.getBoundingClientRect();
        const chip = ativo.getBoundingClientRect();
        const margem = 24;
        let destino = null;
        if (chip.left < caixa.left + margem) destino = faixa.scrollLeft - (caixa.left + margem - chip.left);
        else if (chip.right > caixa.right - margem) destino = faixa.scrollLeft + (chip.right - (caixa.right - margem));
        if (destino !== null) faixa.scrollTo({ left: Math.max(0, destino), behavior: reduzido ? 'auto' : 'smooth' });
    }).observe(faixa, { subtree: true, attributes: true, attributeFilter: ['class'] });

    // esmaecido nas bordas só quando há mais chips escondidos daquele lado
    const bordas = () => {
        const sobra = faixa.scrollWidth - faixa.clientWidth;
        faixa.classList.toggle('tem-esquerda', faixa.scrollLeft > 4);
        faixa.classList.toggle('tem-direita', sobra > 4 && faixa.scrollLeft < sobra - 4);
    };
    bordas();
    faixa.addEventListener('scroll', bordas, { passive: true });
    window.addEventListener('resize', bordas);

    // ---- Busca ----
    const normalizar = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const indice = modulos.map(m => ({ m, texto: normalizar(m.querySelector('.modulo-texto').textContent) }));
    const marcarTermo = (el, termo) => {
        const passeio = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nos = [];
        while (passeio.nextNode()) nos.push(passeio.currentNode);
        nos.forEach(no => {
            let resto = no, i;
            while (resto && (i = normalizar(resto.nodeValue).indexOf(termo)) >= 0) {
                const meio = resto.splitText(i);
                resto = meio.splitText(termo.length);
                const mark = document.createElement('mark');
                mark.textContent = meio.nodeValue;
                meio.replaceWith(mark);
            }
        });
    };
    const limparMarcas = () => document.querySelectorAll('.catalogo mark').forEach(mk => mk.replaceWith(document.createTextNode(mk.textContent)));

    campo.addEventListener('input', () => {
        limparMarcas();
        document.querySelectorAll('.modulo-texto').forEach(t => t.normalize());
        const termo = normalizar(campo.value.trim());
        const palavras = termo.split(/\s+/).filter(p => p.length > 1);
        let achados = 0;
        indice.forEach(({ m, texto }) => {
            const ok = !palavras.length || palavras.every(p => texto.includes(p));
            m.hidden = !ok;
            if (ok) {
                achados++;
                if (termo.length > 2) palavras.filter(p => p.length > 2).forEach(p => marcarTermo(m.querySelector('.modulo-texto'), p));
            }
        });
        categorias.forEach(c => { c.hidden = !c.querySelector('.modulo:not([hidden])'); });
        semModulo.hidden = achados > 0;
        resultado.textContent = palavras.length && achados ? `${achados} ${achados === 1 ? 'funcionalidade encontrada' : 'funcionalidades encontradas'}` : '';
    });

    // ---- Link direto pra um módulo (#mesas): destaca o cartão ----
    const destacar = () => {
        const alvo = location.hash && document.getElementById(location.hash.slice(1));
        const modulo = alvo && alvo.closest('.modulo');
        modulos.forEach(m => m.classList.toggle('alvo', m === modulo));
    };
    destacar();
    window.addEventListener('hashchange', destacar);
});
