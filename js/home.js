/* Home: faixa de logos dos clientes (a base comum está em js/site.js) */
document.addEventListener('DOMContentLoaded', () => {
    initFaixaClientes();
});

/* Logos dos clientes em 3 fileiras. Cada fileira é duplicada (a cópia fica oculta pra leitores
   de tela) e a duração é proporcional à largura, pra todas andarem na mesma velocidade.
   1º toque num logo: as fileiras param e o logo fica em destaque.
   2º toque no mesmo logo: abre o cardápio da loja em outra aba.
   Toque fora (ou 8 s sem interação): solta o logo e as fileiras voltam a andar. */
const VELOCIDADE_LOGOS = 35; // px por segundo
const SOLTAR_LOGO_MS = 8000;

async function initFaixaClientes() {
    const caixa = document.querySelector('.faixas[data-fonte]');
    if (!caixa) return;
    let logos;
    try {
        logos = await (await fetch(caixa.dataset.fonte)).json();
    } catch (e) {
        caixa.closest('section').hidden = true; // sem lista, sem seção vazia
        return;
    }

    const faixas = [...caixa.querySelectorAll('.faixa')];
    const ICONE_LOJA = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1.5-5h15L21 9"></path><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"></path><path d="M5 13v7h14v-7"></path></svg>';
    logos.forEach(({ arquivo, nome, link, unidades }, i) => {
        const li = document.createElement('li');
        li.className = 'logo-cliente' + (unidades ? ' rede' : '');
        const img = `<img src="img/clientes/${arquivo}" alt="${nome}" width="108" height="108" loading="lazy" decoding="async">`;
        const lojas = unidades ? `${unidades} lojas` : '';
        const tag = unidades ? `<span class="tag-lojas" aria-hidden="true">${ICONE_LOJA}${lojas}</span>` : '';
        li.innerHTML = link
            ? `<a href="${link}" target="_blank" rel="noopener" data-nome="${nome}" data-lojas="${lojas}" aria-label="${nome}${unidades ? `, ${lojas}` : ''}: abrir o cardápio">${img}<span class="abrir" aria-hidden="true">${unidades ? 'Ver lojas' : 'Ver cardápio'}</span></a>${tag}`
            : `<span class="sem-link" title="${nome}">${img}</span>${tag}`;
        faixas[i % faixas.length].querySelector('.faixa-trilho').appendChild(li);
    });

    faixas.forEach(faixa => {
        const trilho = faixa.querySelector('.faixa-trilho');
        const copia = trilho.cloneNode(true);
        copia.setAttribute('aria-hidden', 'true');
        copia.querySelectorAll('img').forEach(img => { img.alt = ''; });
        copia.querySelectorAll('a').forEach(a => { a.tabIndex = -1; a.removeAttribute('aria-label'); });
        faixa.appendChild(copia);
    });

    const ajustar = () => faixas.forEach(faixa => {
        const largura = faixa.querySelector('.faixa-trilho').scrollWidth;
        faixa.style.setProperty('--duracao', `${Math.max(20, largura / VELOCIDADE_LOGOS)}s`);
    });
    ajustar();
    window.addEventListener('resize', ajustar);

    // Toque duplo: o 1º seleciona, o 2º abre
    const aviso = document.querySelector('.faixas-aviso');
    let ativo = null;
    let timer = null;
    const soltar = () => {
        if (ativo) ativo.classList.remove('ativo');
        ativo = null;
        caixa.classList.remove('parado');
        if (aviso) aviso.innerHTML = aviso.dataset.padrao;
        clearTimeout(timer);
    };
    const selecionar = link => {
        if (ativo) ativo.classList.remove('ativo');
        ativo = link;
        link.classList.add('ativo');
        caixa.classList.add('parado');
        if (aviso) aviso.innerHTML = link.dataset.lojas
            ? `<strong>${link.dataset.nome}</strong> · ${link.dataset.lojas} · toque de novo para escolher a unidade`
            : `<strong>${link.dataset.nome}</strong> · toque de novo para abrir o cardápio`;
        clearTimeout(timer);
        timer = setTimeout(soltar, SOLTAR_LOGO_MS);
    };
    if (aviso) aviso.dataset.padrao = aviso.innerHTML;

    caixa.addEventListener('click', e => {
        const link = e.target.closest('a[data-nome]');
        if (!link) return soltar();
        if (link === ativo) { soltar(); return; } // 2º toque: deixa o link abrir
        e.preventDefault();
        selecionar(link);
    });
    document.addEventListener('click', e => { if (ativo && !caixa.contains(e.target)) soltar(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') soltar(); });
}
