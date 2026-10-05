/* Dúvidas: busca (sem diferenciar acentos), filtro por assunto e ?q= vindo de outras páginas */
document.addEventListener('DOMContentLoaded', () => {
    const campo = document.getElementById('busca-duvidas');
    const limpar = document.querySelector('.busca-limpar');
    const filtros = [...document.querySelectorAll('.filtro')];
    const grupos = [...document.querySelectorAll('.grupo-duvidas')];
    const semResultado = document.querySelector('.sem-resultado');
    const resultado = document.querySelector('.resultado-busca');
    if (!campo) return;

    const normalizar = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    // guarda o texto original de cada pergunta/resposta pra poder marcar e desmarcar a busca
    const itens = grupos.flatMap(g => [...g.querySelectorAll('details')].map(det => ({
        det,
        grupo: g,
        partes: [det.querySelector('summary > span'), det.querySelector('p')].map(el => ({ el, html: el.innerHTML })),
        texto: normalizar(det.textContent),
    })));
    let filtro = '';

    // marca o termo só nos nós de texto (não estraga links dentro das respostas)
    const marcar = (el, termo) => {
        const passeio = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nos = [];
        while (passeio.nextNode()) nos.push(passeio.currentNode);
        nos.forEach(no => {
            let resto = no;
            let i;
            // marca todas as ocorrências do termo neste trecho de texto
            while (resto && (i = normalizar(resto.nodeValue).indexOf(termo)) >= 0) {
                const meio = resto.splitText(i);
                resto = meio.splitText(termo.length);
                const mark = document.createElement('mark');
                mark.textContent = meio.nodeValue;
                meio.replaceWith(mark);
            }
        });
    };

    const aplicar = () => {
        const termo = normalizar(campo.value.trim());
        // cada palavra precisa aparecer (em qualquer ordem): "multa cancelar" acha "multa se eu quiser cancelar"
        const palavras = termo.split(/\s+/).filter(p => p.length > 1);
        limpar.hidden = !campo.value;
        let visiveis = 0;
        itens.forEach(item => {
            item.partes.forEach(p => { p.el.innerHTML = p.html; });
            const noFiltro = !filtro || item.grupo.dataset.categoria === filtro;
            const naBusca = !palavras.length || palavras.every(p => item.texto.includes(p));
            item.det.hidden = !(noFiltro && naBusca);
            if (!item.det.hidden) {
                visiveis++;
                if (termo.length > 2) {
                    item.det.open = true;
                    palavras.filter(p => p.length > 2).forEach(palavra => item.partes.forEach(p => marcar(p.el, palavra)));
                }
            }
        });
        grupos.forEach(g => { g.hidden = !g.querySelector('details:not([hidden])'); });
        semResultado.hidden = visiveis > 0;
        resultado.textContent = termo
            ? (visiveis ? `${visiveis} ${visiveis === 1 ? 'dúvida encontrada' : 'dúvidas encontradas'}` : '')
            : '';
    };

    campo.addEventListener('input', aplicar);
    limpar.addEventListener('click', () => { campo.value = ''; aplicar(); campo.focus(); });
    filtros.forEach(botao => botao.addEventListener('click', () => {
        filtro = botao.dataset.filtro;
        filtros.forEach(b => b.setAttribute('aria-pressed', String(b === botao)));
        aplicar();
    }));

    // Links antigos e da home: duvidas.html?q=...
    const q = new URLSearchParams(location.search).get('q');
    if (q) {
        campo.value = q;
        aplicar();
    }
});
