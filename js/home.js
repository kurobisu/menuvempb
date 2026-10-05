document.addEventListener('DOMContentLoaded', () => {
    initTopo();
    initMenu();
    initPlanos();
    initDuvidas();
    initRevelar();
    initBarraCta();
    initFaixaClientes();
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
    const abertura = document.querySelector('.abertura');
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

/* Logos dos clientes em 3 fileiras. Cada fileira é duplicada (a cópia fica oculta pra leitores
   de tela) e a duração é proporcional à largura, pra todas andarem na mesma velocidade. */
const VELOCIDADE_LOGOS = 35; // px por segundo

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
    logos.forEach(({ arquivo, nome }, i) => {
        const li = document.createElement('li');
        li.className = 'logo-cliente';
        li.title = nome;
        li.innerHTML = `<img src="img/clientes/${arquivo}" alt="${nome}" width="108" height="108" loading="lazy" decoding="async">`;
        faixas[i % faixas.length].querySelector('.faixa-trilho').appendChild(li);
    });

    faixas.forEach(faixa => {
        const trilho = faixa.querySelector('.faixa-trilho');
        const copia = trilho.cloneNode(true);
        copia.setAttribute('aria-hidden', 'true');
        copia.querySelectorAll('img').forEach(img => { img.alt = ''; });
        copia.querySelectorAll('li').forEach(li => li.removeAttribute('title'));
        faixa.appendChild(copia);
    });

    const ajustar = () => faixas.forEach(faixa => {
        const largura = faixa.querySelector('.faixa-trilho').scrollWidth;
        faixa.style.setProperty('--duracao', `${Math.max(20, largura / VELOCIDADE_LOGOS)}s`);
    });
    ajustar();
    window.addEventListener('resize', ajustar);
}
