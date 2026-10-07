/* Comportamentos comuns a todas as páginas no visual novo (cabeçalho, menu, revelar ao rolar,
   dúvidas, planos e barra de CTA). Cada função só age se a página tiver os elementos dela. */
document.addEventListener('DOMContentLoaded', () => {
    initTopo();
    initMenu();
    initPromo();
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

/* Recursos por plano. `plano` = menor plano que inclui o recurso; `ver` = módulo em funcionalidades.html;
   `destaque` = item que ganha realce amarelo.
   Mesma lista de planos.html; a ordem é a mesma nos três cartões, pra linhas baterem lado a lado. */
const RECURSOS = [
    { grupo: 'Delivery', itens: [
        { nome: 'Link próprio de delivery', plano: 1, ver: 'delivery-proprio' },
        { nome: 'Gestão de pedidos do delivery', plano: 1, ver: 'pdv-agil' },
        { nome: 'Painel de monitoramento de entregas', plano: 1, ver: 'entregadores' },
        { nome: 'App de entregas (motoboy)', plano: 1, ver: 'entregadores' },
        { nome: 'Integração com motoboys terceirizados', plano: 1, ver: 'entregadores' },
        { nome: 'Relatórios avançados do delivery', plano: 1, ver: 'relatorios' },
    ] },
    { grupo: 'Apps de delivery', itens: [
        { nome: 'Pedidos do iFood, Keeta, 99Food e Aiqfome', plano: 1, ver: 'integracao-ifood' },
    ] },
    { grupo: 'Vendas e gestão', itens: [
        { nome: 'Pagamento online Pix e cartão (consultar taxas)', plano: 1, ver: 'pagamento-online' },
        { nome: 'Nota fiscal (NFC-e/NF-e) ilimitada', plano: 1, ver: 'emissao-fiscal' },
        { nome: 'Gestão de caixa', plano: 1, ver: 'fechamento-caixa' },
        { nome: 'Controle de estoque', plano: 1, ver: 'estoque-minimo' },
        { nome: 'Sistema de fidelização', plano: 1, ver: 'fidelidade' },
        { nome: 'Impressão automática por setor', plano: 1, ver: 'impressao' },
    ] },
    { grupo: 'Salão e mesas', itens: [
        { nome: 'Gestão de mesas', plano: 2, ver: 'mesas' },
        { nome: 'App do garçom', plano: 2, ver: 'mesas' },
        { nome: 'Pedidos das mesas no balcão', plano: 2, ver: 'mesas' },
        { nome: 'Carteira digital (fiado e pré-pago)', plano: 2, ver: 'carteira' },
        { nome: 'Relatórios avançados das mesas', plano: 2, ver: 'relatorios' },
    ] },
    { grupo: 'Gestão completa', itens: [
        { nome: 'Monitor de produção por setores', plano: 3, ver: 'kds' },
        { nome: 'Gestão de funcionários, contratos e fornecedores', plano: 3, ver: 'permissoes' },
        { nome: 'Gestão de entradas e saídas', plano: 3, ver: 'dre' },
        { nome: 'Comissão de funcionários por venda', plano: 3, ver: 'taxa-servico' },
        { nome: 'Acerto de funcionários e diaristas', plano: 3, ver: 'taxa-servico' },
        { nome: 'Fluxo de caixa, DRE e mapa de recebimentos', plano: 3, ver: 'dre' },
        { nome: 'Toda novidade da plataforma, sem limite de plano', plano: 3, destaque: true },
    ] },
    { grupo: 'Implantação e suporte', itens: [
        { nome: 'Cardápio montado por nós', plano: 1 },
        { nome: 'Treinamento completo', plano: 1 },
        { nome: 'Suporte técnico todos os dias', plano: 1 },
    ] },
];

/* Promoções sazonais: entram e saem sozinhas pela data do aparelho do visitante.
   `mes` começa em 0 (10 = novembro); vale do dia 1 até o último dia do mês.
   Prévia fora do mês: abra localhost com ?promo (só funciona no localhost). */
const PROMOS = [
    { nome: 'Black Friday', mes: 10, fim: '30/11', descontos: { 2: 10, 3: 15 } },
];

function promoAtiva() {
    const previa = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && new URLSearchParams(location.search).has('promo');
    const mes = new Date().getMonth();
    return PROMOS.find(p => previa || p.mes === mes);
}

function initPromo() {
    const promo = promoAtiva();
    if (!promo) return;
    const reais = v => v.toFixed(2).replace('.', ',');
    document.querySelectorAll('.plano[data-plano]').forEach(cartao => {
        const desconto = promo.descontos[cartao.dataset.plano];
        const preco = cartao.querySelector('.preco strong');
        if (!desconto || !preco) return;
        const base = Number(preco.textContent.trim());
        const [inteiro, centavos] = reais(base * (1 - desconto / 100)).split(',');
        cartao.dataset.precoAntigo = base;
        cartao.classList.add('em-promo');
        preco.innerHTML = `${inteiro}<span class="centavos">,${centavos}</span>`;
        cartao.querySelector('.preco').insertAdjacentHTML('beforebegin',
            `<div class="promo-linha"><span class="promo-selo">${promo.nome} −${desconto}%</span><s>R$ ${base}</s></div>`);
        cartao.querySelector('.preco').insertAdjacentHTML('afterend',
            `<p class="promo-nota">no 1º ano, escolhendo o plano até ${promo.fim}</p>`);
    });
    document.querySelectorAll('[data-promo]').forEach(el => { el.hidden = false; });
}

function initPlanos() {
    const cartoes = document.querySelectorAll('.plano[data-plano]');
    if (!cartoes.length) return;

    cartoes.forEach(cartao => {
        const n = Number(cartao.dataset.plano);
        const caixa = cartao.querySelector('.plano-completo');
        if (!caixa) return; // cartões sem comparação embutida (ex.: página de Planos, que tem a tabela)
        const grupos = RECURSOS.map(({ grupo, itens }) => {
            const linhas = itens.map(({ nome, plano, destaque }) => {
                const tem = plano <= n;
                const novo = tem && n > 1 && plano === n ? '<span class="novo">Novo</span>' : '';
                const leitor = tem ? '' : '<span class="sr-only"> (não incluso)</span>';
                return `<li class="${tem ? '' : 'nao'}${destaque ? ' realce-item' : ''}">${nome}${leitor}${novo}</li>`;
            }).join('');
            return `<div class="grupo"><h4>${grupo}</h4><ul>${linhas}</ul></div>`;
        }).join('');
        caixa.innerHTML = `<div>${grupos}</div>`;
    });

    // "Ver tudo que inclui" abre só o cartão clicado
    const grade = document.querySelector('.planos-grade');
    cartoes.forEach(cartao => {
        const botao = cartao.querySelector('.ver-tudo');
        const caixa = cartao.querySelector('.plano-completo');
        if (!botao || !caixa) return;
        botao.setAttribute('aria-controls', caixa.id);
        botao.addEventListener('click', () => {
            const aberto = botao.getAttribute('aria-expanded') !== 'true';
            botao.setAttribute('aria-expanded', String(aberto));
            botao.querySelector('span').textContent = aberto ? 'Fechar' : 'Ver tudo que inclui';
            cartao.classList.toggle('comparando', aberto);
            grade.classList.toggle('tem-aberto', !!grade.querySelector('.plano.comparando'));
            if (aberto) {
                caixa.hidden = false;
                requestAnimationFrame(() => requestAnimationFrame(() => caixa.classList.add('aberto')));
            } else {
                caixa.classList.remove('aberto');
                const esconder = () => { if (!cartao.classList.contains('comparando')) caixa.hidden = true; };
                SEM_MOVIMENTO ? esconder() : caixa.addEventListener('transitionend', esconder, { once: true });
                // Ao fechar, volta o topo do cartão pra tela
                if (cartao.getBoundingClientRect().top < 0) cartao.scrollIntoView({ behavior: SEM_MOVIMENTO ? 'auto' : 'smooth', block: 'start' });
            }
        });
    });
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
        antigo: c.dataset.precoAntigo,
        destaque: c.classList.contains('destaque'),
        cta: c.querySelector('.btn'),
    }));
    const cls = p => (p.destaque ? 'destaque' : '') + ` col-${p.n}`;
    const TEM = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12.5l4 4 8-9"></path></svg>';
    const NAO = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M7 12h10"></path></svg>';
    const OLHO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    const SETA = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>';

    const cabeca = planos.map(p => `<th scope="col" class="${cls(p)}"><div class="cab-plano">${p.destaque ? '<span class="selo-mini">Mais escolhido</span>' : ''}<strong><span class="nome-longo">${p.nome}</span><span class="nome-curto">${p.curto}</span></strong>${p.antigo ? `<s class="preco-antigo">R$ ${p.antigo}</s>` : ''}<span>R$ <b>${p.preco}</b>/mês</span></div></th>`).join('');
    const corpo = RECURSOS.map(({ grupo, itens }) => {
        const linhas = itens.map(({ nome, plano, ver, destaque }) => {
            const celulas = planos.map(p => {
                if (plano > p.n) return `<td class="${cls(p)}"><span class="nao-tem" role="img" aria-label="Não incluso">${NAO}</span></td>`;
                const novo = p.n > 1 && plano === p.n;
                return `<td class="${cls(p)}"><span class="tem${novo ? ' novo' : ''}" role="img" aria-label="${novo ? 'Incluso, novo neste plano' : 'Incluso'}">${TEM}</span></td>`;
            }).join('');
            const verMais = ver ? `<span class="ver-mais"><button type="button" class="ver-mais-botao" aria-expanded="false" aria-label="Ver mais sobre ${nome}">${OLHO}</button><a class="ver-mais-balao" href="funcionalidades.html#${ver}">Ver mais sobre isso?${SETA}</a></span>` : '';
            return `<tr${destaque ? ' class="realce-linha"' : ''}><th scope="row"><span class="recurso-nome">${nome}${verMais}</span></th>${celulas}</tr>`;
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

    // Olho ao lado de cada recurso: o 1º clique abre o balão "Ver mais sobre isso?", que leva a Funcionalidades
    const fecharBaloes = exceto => tabela.querySelectorAll('.ver-mais.aberto').forEach(v => {
        if (v === exceto) return;
        v.classList.remove('aberto');
        v.querySelector('button').setAttribute('aria-expanded', 'false');
    });
    tabela.addEventListener('click', e => {
        const botao = e.target.closest('.ver-mais-botao');
        if (!botao) return;
        const caixa = botao.parentElement;
        fecharBaloes(caixa);
        const abrir = !caixa.classList.contains('aberto');
        caixa.classList.toggle('aberto', abrir);
        botao.setAttribute('aria-expanded', String(abrir));
    });
    document.addEventListener('click', e => { if (!e.target.closest('.ver-mais')) fecharBaloes(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharBaloes(); });

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
