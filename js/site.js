/* Comportamentos comuns a todas as páginas no visual novo (cabeçalho, menu, revelar ao rolar,
   dúvidas, planos e barra de CTA). Cada função só age se a página tiver os elementos dela. */
document.addEventListener('DOMContentLoaded', () => {
    initTopo();
    initMenu();
    initPlanos();
    initTabelaPlanos();
    initDuvidas();
    initRevelar();
    initBarraCta();
});

const SEM_MOVIMENTO = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initTopo() {
    const topo = document.querySelector('.topo');
    if (!topo) return;
    const atualizar = () => topo.classList.toggle('rolou', window.scrollY > 8);
    atualizar();
    window.addEventListener('scroll', atualizar, { passive: true });
}

function initMenu() {
    const botao = document.querySelector('.botao-menu');
    const menu = document.getElementById('menu');
    if (!botao || !menu) return;

    const fechar = () => {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
    };
    botao.addEventListener('click', () => {
        const aberto = menu.classList.toggle('aberto');
        botao.setAttribute('aria-expanded', String(aberto));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', fechar));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });
}

/* Recursos por plano. `plano` = menor plano que inclui o recurso.
   Mesma lista de planos.html; a ordem é a mesma nos três cartões, pra linhas baterem lado a lado. */
const RECURSOS = [
    { grupo: 'Delivery', itens: [
        { nome: 'Link próprio de delivery', plano: 1 },
        { nome: 'Gestão de pedidos do delivery', plano: 1 },
        { nome: 'Painel de monitoramento de entregas', plano: 1 },
        { nome: 'App de entregas (motoboy)', plano: 1 },
        { nome: 'Integração com motoboys terceirizados', plano: 1 },
        { nome: 'Relatórios avançados do delivery', plano: 1 },
    ] },
    { grupo: 'Apps de delivery', itens: [
        { nome: 'Pedidos do iFood, Keeta, 99Food e Aiqfome', plano: 1 },
    ] },
    { grupo: 'Vendas e gestão', itens: [
        { nome: 'Pagamento online Pix e cartão (consultar taxas)', plano: 1 },
        { nome: 'Nota fiscal (NFC-e/NF-e) ilimitada', plano: 1 },
        { nome: 'Gestão de caixa', plano: 1 },
        { nome: 'Controle de estoque', plano: 1 },
        { nome: 'Sistema de fidelização', plano: 1 },
        { nome: 'Impressão automática por setor', plano: 1 },
    ] },
    { grupo: 'Salão e mesas', itens: [
        { nome: 'Gestão de mesas', plano: 2 },
        { nome: 'App do garçom', plano: 2 },
        { nome: 'Pedidos das mesas no balcão', plano: 2 },
        { nome: 'Carteira digital (fiado e pré-pago)', plano: 2 },
        { nome: 'Relatórios avançados das mesas', plano: 2 },
    ] },
    { grupo: 'Produção', itens: [
        { nome: 'Monitor de produção por setores', plano: 3 },
    ] },
    { grupo: 'Implantação e suporte', itens: [
        { nome: 'Cardápio montado por nós', plano: 1 },
        { nome: 'Treinamento completo', plano: 1 },
        { nome: 'Suporte técnico todos os dias', plano: 1 },
    ] },
];

function initPlanos() {
    const cartoes = document.querySelectorAll('.plano[data-plano]');
    if (!cartoes.length) return;

    cartoes.forEach(cartao => {
        const n = Number(cartao.dataset.plano);
        const caixa = cartao.querySelector('.plano-completo');
        if (!caixa) return; // cartões sem comparação embutida (ex.: página de Planos, que tem a tabela)
        const grupos = RECURSOS.map(({ grupo, itens }) => {
            const linhas = itens.map(({ nome, plano }) => {
                const tem = plano <= n;
                const novo = tem && n > 1 && plano === n ? '<span class="novo">Novo</span>' : '';
                const leitor = tem ? '' : '<span class="sr-only"> (não incluso)</span>';
                return `<li class="${tem ? '' : 'nao'}">${nome}${leitor}${novo}</li>`;
            }).join('');
            return `<div class="grupo"><h4>${grupo}</h4><ul>${linhas}</ul></div>`;
        }).join('');
        caixa.innerHTML = `<div>${grupos}</div>`;
    });

    const botoes = document.querySelectorAll('.ver-tudo');
    const caixas = document.querySelectorAll('.plano-completo');
    let aberto = false;

    botoes.forEach(botao => botao.addEventListener('click', () => {
        aberto = !aberto;
        botoes.forEach(b => {
            b.setAttribute('aria-expanded', String(aberto));
            b.querySelector('span').textContent = aberto ? 'Fechar comparação' : 'Ver tudo que inclui';
        });
        document.querySelector('.planos-grade').classList.toggle('comparando', aberto);
        caixas.forEach(caixa => {
            if (aberto) {
                caixa.hidden = false;
                requestAnimationFrame(() => requestAnimationFrame(() => caixa.classList.add('aberto')));
            } else {
                caixa.classList.remove('aberto');
                const esconder = () => { if (!aberto) caixa.hidden = true; };
                SEM_MOVIMENTO ? esconder() : caixa.addEventListener('transitionend', esconder, { once: true });
            }
        });
        // Ao fechar, volta o topo do cartão clicado pra tela
        if (!aberto) {
            const cartao = botao.closest('.plano');
            if (cartao.getBoundingClientRect().top < 0) cartao.scrollIntoView({ behavior: SEM_MOVIMENTO ? 'auto' : 'smooth', block: 'start' });
        }
    }));
}

/* Tabela de comparação da página de Planos. Nomes, preços e botões vêm dos próprios cartões
   da página; os recursos vêm de RECURSOS (a mesma lista da comparação da home). */
function initTabelaPlanos() {
    const tabela = document.getElementById('tabela-planos');
    if (!tabela) return;
    const cartoes = [...document.querySelectorAll('.plano[data-plano]')];
    const planos = cartoes.map(c => ({
        n: Number(c.dataset.plano),
        nome: c.querySelector('h3').textContent.trim(),
        curto: c.dataset.curto || c.querySelector('h3').textContent.trim(),
        preco: c.querySelector('.preco strong').textContent.trim(),
        destaque: c.classList.contains('destaque'),
        cta: c.querySelector('.btn'),
    }));
    const cls = p => (p.destaque ? 'destaque' : '') + ` col-${p.n}`;
    const TEM = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12.5l4 4 8-9"></path></svg>';
    const NAO = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M7 12h10"></path></svg>';

    const cabeca = planos.map(p => `<th scope="col" class="${cls(p)}"><div class="cab-plano">${p.destaque ? '<span class="selo-mini">Mais escolhido</span>' : ''}<strong><span class="nome-longo">${p.nome}</span><span class="nome-curto">${p.curto}</span></strong><span>R$ <b>${p.preco}</b>/mês</span></div></th>`).join('');
    const corpo = RECURSOS.map(({ grupo, itens }) => {
        const linhas = itens.map(({ nome, plano }) => {
            const celulas = planos.map(p => {
                if (plano > p.n) return `<td class="${cls(p)}"><span class="nao-tem" role="img" aria-label="Não incluso">${NAO}</span></td>`;
                const novo = p.n > 1 && plano === p.n;
                return `<td class="${cls(p)}"><span class="tem${novo ? ' novo' : ''}" role="img" aria-label="${novo ? 'Incluso, novo neste plano' : 'Incluso'}">${TEM}</span></td>`;
            }).join('');
            return `<tr><th scope="row">${nome}</th>${celulas}</tr>`;
        }).join('');
        return `<tr class="titulo-grupo"><th scope="colgroup" colspan="${planos.length + 1}">${grupo}</th></tr>${linhas}`;
    }).join('');
    const pe = planos.map(p => {
        const btn = p.cta.cloneNode(true);
        btn.removeAttribute('id');
        return `<td class="${cls(p)}">${btn.outerHTML}</td>`;
    }).join('');

    tabela.insertAdjacentHTML('beforeend', `
        <colgroup><col class="recurso-col">${planos.map(() => '<col>').join('')}</colgroup>
        <thead><tr><th scope="col"><span class="sr-only">Recurso</span></th>${cabeca}</tr></thead>
        <tbody>${corpo}</tbody>
        <tfoot><tr><td></td>${pe}</tr></tfoot>`);

    // Legenda do destaque amarelo
    tabela.closest('.tabela-caixa').insertAdjacentHTML('beforebegin',
        `<div class="legenda-tabela revelar visivel"><span><span class="tem">${TEM}</span>Incluso</span><span><span class="tem novo">${TEM}</span>Novo neste plano</span><span><span class="nao-tem">${NAO}</span>Não incluso</span></div>`);

    // Vindo da home com ?plano=N: destaca o cartão e a coluna desse plano
    const n = new URLSearchParams(location.search).get('plano');
    if (n && planos.some(p => String(p.n) === n)) {
        document.querySelector(`.plano[data-plano="${n}"]`).classList.add('em-foco');
        tabela.querySelectorAll(`.col-${n}`).forEach(c => c.classList.add('em-foco'));
    }
}

/* Abre/fecha as dúvidas com animação de altura (o <details> nativo abre seco) */
function initDuvidas() {
    document.querySelectorAll('.perguntas details').forEach(det => {
        const resumo = det.querySelector('summary');
        const resposta = det.querySelector('p');
        if (!resumo || !resposta || SEM_MOVIMENTO) return;
        resposta.classList.add('resposta');

        resumo.addEventListener('click', e => {
            e.preventDefault();
            if (det.dataset.animando) return;
            det.dataset.animando = '1';
            const abrindo = !det.open;
            if (abrindo) det.open = true;
            const altura = resposta.scrollHeight;
            const quadros = abrindo
                ? [{ height: '0px', marginTop: '0px', opacity: 0 }, { height: altura + 'px', marginTop: '12px', opacity: 1 }]
                : [{ height: altura + 'px', marginTop: '12px', opacity: 1 }, { height: '0px', marginTop: '0px', opacity: 0 }];
            const anim = resposta.animate(quadros, { duration: 320, easing: 'cubic-bezier(.2, .8, .2, 1)' });
            anim.onfinish = () => {
                if (!abrindo) det.open = false;
                delete det.dataset.animando;
            };
        });
    });
}

function initRevelar() {
    const itens = document.querySelectorAll('.revelar');

    // Itens irmãos entram em sequência
    const porPai = new Map();
    itens.forEach(el => {
        const lista = porPai.get(el.parentElement) || [];
        lista.push(el);
        porPai.set(el.parentElement, lista);
    });
    porPai.forEach(lista => lista.forEach((el, i) => el.style.setProperty('--atraso', `${i * 90}ms`)));

    const mostrar = el => {
        el.classList.add('visivel');
        el.querySelectorAll('.realce').forEach(r => r.classList.add('visivel'));
        // Depois de entrar, tira as classes pra não brigar com os efeitos de hover
        const limpar = () => {
            el.classList.remove('revelar', 'visivel');
            el.style.removeProperty('--atraso');
        };
        SEM_MOVIMENTO ? limpar() : el.addEventListener('transitionend', e => { if (e.target === el && e.propertyName === 'transform') limpar(); });
    };

    if (!('IntersectionObserver' in window)) {
        itens.forEach(mostrar);
        return;
    }
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (!entrada.isIntersecting) return;
            mostrar(entrada.target);
            observador.unobserve(entrada.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    itens.forEach(el => observador.observe(el));
}

/* No celular, um botão fixo aparece depois da abertura e some na chamada final e no rodapé */
function initBarraCta() {
    const barra = document.querySelector('.barra-cta');
    const abertura = document.querySelector('.abertura, .pagina-topo');
    const fim = document.querySelectorAll('.chamada, .rodape');
    if (!barra || !abertura || !('IntersectionObserver' in window)) return;

    let passouAbertura = false;
    const noFim = new Set();
    const atualizar = () => {
        const mostrar = passouAbertura && noFim.size === 0;
        barra.classList.toggle('mostrar', mostrar);
        barra.setAttribute('aria-hidden', String(!mostrar));
        barra.querySelector('a').tabIndex = mostrar ? 0 : -1;
    };

    new IntersectionObserver(([e]) => { passouAbertura = !e.isIntersecting; atualizar(); }).observe(abertura);
    const obsFim = new IntersectionObserver(entradas => {
        entradas.forEach(e => (e.isIntersecting ? noFim.add(e.target) : noFim.delete(e.target)));
        atualizar();
    });
    fim.forEach(el => obsFim.observe(el));
}
