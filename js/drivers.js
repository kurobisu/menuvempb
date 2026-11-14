/* Drivers de impressora: monta os cartões a partir de DRIVERS (js/drivers-dados.js), com busca (sem diferenciar
   acentos), filtros e um modal de downloads por sistema operacional. */
document.addEventListener('DOMContentLoaded', () => {
    const grade = document.getElementById('grade-drivers');
    const campo = document.getElementById('busca-drivers');
    const limpar = document.querySelector('.busca-limpar');
    const filtros = [...document.querySelectorAll('.filtro')];
    const semResultado = document.querySelector('.sem-resultado');
    const resultado = document.querySelector('.resultado-busca');
    const modal = document.getElementById('modal-driver');
    if (!grade || typeof DRIVERS === 'undefined') return;

    const normalizar = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const ORDEM_SO = ['Windows', 'Linux', 'macOS', 'Android', 'iOS'];
    const TIPOS = { driver: 'Driver', utilitario: 'Utilitário', app: 'Aplicativo', sdk: 'SDK', manual: 'Manual' };
    const ORDEM_TIPO = ['driver', 'utilitario', 'app', 'sdk', 'manual'];
    const larguras = d => d.larguras || [d.largura];
    const rotuloLargura = d => larguras(d).join(' / ') + ' mm';
    const sistemas = d => ORDEM_SO.filter(so => d.downloads.some(x => x.so === so));
    const WHATS = 'https://wa.me/5583988559423?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20o%20driver%20da%20minha%20impressora.';

    // Ilustração da impressora (usada enquanto não há foto)
    const ilustracao = d => {
        const id = 'g' + Math.random().toString(36).slice(2, 8);
        const rotulo = esc(d.marca === 'Genérica' ? d.modelo : d.marca.toUpperCase());
        const defs = `<defs><linearGradient id="${id}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3156"/><stop offset="1" stop-color="#2B2340"/></linearGradient>
            <linearGradient id="${id}p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#EDE8F8"/></linearGradient></defs>`;
        if (d.portatil) {
            return `<svg viewBox="0 0 280 170" role="img" aria-label="Ilustração da impressora ${esc(d.marca)} ${esc(d.modelo)}" xmlns="http://www.w3.org/2000/svg">${defs}
                <rect x="96" y="14" width="88" height="44" fill="url(#${id}p)" stroke="#D8CFF0"/>
                <rect x="78" y="52" width="124" height="108" rx="22" fill="url(#${id}t)"/>
                <rect x="78" y="52" width="124" height="26" rx="13" fill="#3A3156"/>
                <rect x="92" y="66" width="96" height="6" rx="3" fill="#1E1830"/>
                <circle cx="140" cy="112" r="12" fill="#7418E4"/><path d="M135 112l4 4 7-8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="104" cy="104" r="4" fill="#FFC700"/>
                <text x="140" y="146" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="12" letter-spacing="1.5" fill="#E4DAFB">${rotulo}</text></svg>`;
        }
        const estreita = d.largura === 58;
        const x = estreita ? 70 : 40, w = estreita ? 140 : 200;
        return `<svg viewBox="0 0 280 170" role="img" aria-label="Ilustração da impressora ${esc(d.marca)} ${esc(d.modelo)}" xmlns="http://www.w3.org/2000/svg">${defs}
            <path d="M${x + w * .22} 8 h${w * .56} v36 h-${w * .56} z" fill="url(#${id}p)" stroke="#D8CFF0"/>
            <path d="M${x + w * .22} 44 l${w * .07} 6 l${w * .07} -6 l${w * .07} 6 l${w * .07} -6 l${w * .07} 6 l${w * .07} -6 l${w * .07} 6 l${w * .07} -6 z" fill="url(#${id}p)" stroke="#D8CFF0"/>
            <g stroke="#CFC6E6" stroke-width="2" stroke-linecap="round"><path d="M${x + w * .3} 18h${w * .3}"/><path d="M${x + w * .3} 27h${w * .4}"/><path d="M${x + w * .3} 36h${w * .22}"/></g>
            <rect x="${x}" y="54" width="${w}" height="92" rx="16" fill="url(#${id}t)"/>
            <rect x="${x}" y="54" width="${w}" height="26" rx="13" fill="#3A3156"/>
            <rect x="${x + 12}" y="68" width="${w - 24}" height="7" rx="3.5" fill="#1E1830"/>
            <rect x="${x}" y="146" width="${w}" height="9" rx="4.5" fill="#1E1830" opacity=".55"/>
            <circle cx="${x + 24}" cy="104" r="5" fill="#FFC700"/><circle cx="${x + 44}" cy="104" r="5" fill="#7418E4"/>
            <text x="${x + w - 18}" y="110" text-anchor="end" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="${estreita ? 13 : 15}" letter-spacing="1.5" fill="#E4DAFB">${rotulo}</text>
            <rect x="${x + 20}" y="124" width="${w - 40}" height="3" rx="1.5" fill="#1E1830" opacity=".8"/></svg>`;
    };
    const foto = d => d.foto ? `<img src="${esc(d.foto)}" alt="Impressora ${esc(d.marca)} ${esc(d.modelo)}" loading="lazy">` : ilustracao(d);

    const I = {
        so: '<path d="M3 5l8-1.2v7H3z"/><path d="M13 3.6L21 2v9h-8z"/><path d="M3 13h8v7.2L3 19z"/><path d="M13 13h8v9l-8-1.6z"/>',
        conexao: '<path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><circle cx="12" cy="19" r="2.5"/><path d="M5 11v3a3 3 0 003 3h2"/><path d="M19 11v3a3 3 0 01-3 3h-2"/>',
        utilitario: '<path d="M14.7 6.3a4 4 0 005 5L21 13l-8 8-3-3 8-8"/><path d="M10 14l-6 6"/><path d="M13 3l3 3"/>',
        baixar: '<path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/>',
        externo: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
        selo: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    };
    const svg = (n, t = 18, cls = '') => `<svg ${cls ? `class="${cls}"` : ''} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
    const SOICO = { Windows: '', Linux: '', macOS: '', Android: '', iOS: '' };

    // ---------- Famílias: um cartão por modelo, com as variações dentro do modal ----------
    const unicos = l => [...new Set(l)];
    const familias = [];
    DRIVERS.forEach(d => {
        let f = familias.find(x => x.marca === d.marca && x.nome === d.familia);
        if (!f) { f = { marca: d.marca, nome: d.familia, variantes: [] }; familias.push(f); }
        f.variantes.push(d);
    });
    familias.forEach(f => {
        const v = f.variantes;
        f.foto = (v.find(x => x.foto) || {}).foto || '';
        f.portatil = v.every(x => x.portatil);
        f.largs = unicos(v.flatMap(larguras)).sort((a, b) => b - a);
        f.conexao = unicos(v.flatMap(x => x.conexao));
        f.sistemas = ORDEM_SO.filter(so => v.some(x => sistemas(x).includes(so)));
        f.utilitarios = unicos(v.map(x => x.utilitario).filter(Boolean));
    });
    // foto/ilustração de uma variação (cai na foto da família quando a variação não tem a sua)
    const fotoDe = (f, d) => foto({ ...d, foto: d.foto || f.foto });
    const tituloDe = f => f.variantes.length > 1 ? f.nome : f.variantes[0].modelo;

    const cartao = (f, n) => {
        const base = f.variantes[0], varios = f.variantes.length > 1;
        const el = document.createElement('article');
        el.className = 'driver';
        el.style.setProperty('--n', n);
        el.innerHTML = `
            <div class="driver-foto"><span class="driver-largura">${f.portatil ? 'Portátil · ' : ''}${f.largs.join(' / ')} mm</span>${fotoDe(f, base)}</div>
            <div class="driver-corpo">
                <div>
                    <span class="driver-marca">${esc(f.marca)}</span>
                    <h2>${esc(varios ? f.nome : base.modelo)}</h2>
                    ${varios ? `<ul class="driver-variantes" aria-label="Variações">${f.variantes.map(x => `<li>${esc(x.variacao)}</li>`).join('')}</ul>`
                        : base.obs ? `<p class="driver-obs">${esc(base.obs)}</p>` : ''}
                </div>
                <ul class="driver-info">
                    <li><span class="ico">${svg('so')}</span><div><b>Sistemas</b><span class="val">${f.sistemas.length ? f.sistemas.join(', ') : 'Instalação com o suporte'}</span></div></li>
                    <li><span class="ico">${svg('conexao')}</span><div><b>Conexão</b><span class="val">${f.conexao.map(esc).join(', ')}</span></div></li>
                    <li><span class="ico">${svg('utilitario')}</span><div><b>Utilitário da impressora</b><span class="val ${f.utilitarios.length ? 'sim' : 'nao'}">${f.utilitarios.length ? f.utilitarios.map(esc).join(', ') : 'Não possui'}</span></div></li>
                </ul>
                <button type="button" class="btn btn-roxo">Ver downloads ${svg('baixar', 20, 'baixar')}</button>
            </div>`;
        el.querySelector('.btn').addEventListener('click', () => abrirModal(f));
        return el;
    };

    // ---------- Modal de downloads ----------
    const topo = modal.querySelector('.modal-topo');
    const corpo = modal.querySelector('.modal-corpo');
    let ultimoBotao = null;

    const abrirModal = (f, varianteInicial) => {
        ultimoBotao = document.activeElement;
        const varios = f.variantes.length > 1;
        let atual = varianteInicial || f.variantes[0];
        let soAtual = '';

        corpo.innerHTML = `${varios ? `<div class="bloco-variantes"><p class="modal-pergunta">Qual é o modelo da sua impressora?</p>
                <div class="variantes" role="tablist" aria-label="Modelo">${f.variantes.map((x, i) =>
                    `<button type="button" role="tab" class="variante" data-i="${i}" aria-selected="false">${esc(x.variacao)}</button>`).join('')}</div></div>` : ''}
            <div class="conteudo-variante"></div>
            <p class="modal-rodape">${svg('selo', 16)}<span class="rodape-txt"></span></p>`;
        const conteudo = corpo.querySelector('.conteudo-variante');
        const rodape = corpo.querySelector('.rodape-txt');

        const mostrarSO = (d, so) => {
            soAtual = so;
            conteudo.querySelectorAll('.aba-so').forEach(b => b.setAttribute('aria-selected', String(b.dataset.so === so)));
            const itens = d.downloads.filter(x => x.so === so || x.so === 'Todos')
                .sort((a, b) => ORDEM_TIPO.indexOf(a.tipo) - ORDEM_TIPO.indexOf(b.tipo));
            conteudo.querySelector('.downloads').innerHTML = itens.map(x => {
                const meta = [x.versao ? 'versão ' + x.versao : '', x.tamanho || ''].filter(Boolean).map(esc).join(' · ');
                return `<div class="download">
                    <div class="download-tipo">${TIPOS[x.tipo] || esc(x.tipo)}</div>
                    <div class="download-nome"><strong>${esc(x.rotulo)}</strong>${meta ? `<span>${meta}</span>` : ''}${x.oficial === false ? '<span class="tag-drive">Arquivo Menuvem PB</span>' : '<span class="tag-oficial">Site oficial</span>'}${x.so === 'Todos' ? '<span>Todos os sistemas</span>' : ''}</div>
                    <a href="${esc(x.url)}" target="_blank" rel="noopener" class="btn btn-amarelo">${x.pagina ? 'Abrir página' : x.tipo === 'manual' ? 'Abrir PDF' : 'Baixar'} ${svg(x.pagina || x.tipo === 'manual' ? 'externo' : 'baixar', 18, 'baixar')}</a>
                </div>`;
            }).join('');
        };

        const mostrarVariante = d => {
            atual = d;
            const lista = sistemas(d);
            corpo.querySelectorAll('.variante').forEach(b => b.setAttribute('aria-selected', String(f.variantes[+b.dataset.i] === d)));
            topo.innerHTML = `<div class="modal-foto">${fotoDe(f, d)}</div>
                <div><span class="driver-marca">${esc(f.marca)}</span><h2 id="modal-titulo">${esc(varios ? `${f.nome} · ${d.variacao}` : d.modelo)}</h2>
                <p>${d.portatil ? 'Portátil · ' : ''}Papel de ${rotuloLargura(d)} · ${d.conexao.map(esc).join(', ')}</p></div>`;
            if (!lista.length) {
                conteudo.innerHTML = `<div class="modal-vazio"><strong>${d.marca === 'Genérica' ? 'Não existe um driver oficial único para este tipo de impressora.' : 'Os downloads deste modelo chegam em breve.'}</strong>
                    <span>Fale com o suporte: a gente identifica o modelo e instala o driver por acesso remoto.</span>
                    <a href="${WHATS}" target="_blank" rel="noopener" class="btn btn-amarelo">Falar no WhatsApp</a></div>`;
                rodape.innerHTML = '';
                rodape.parentElement.hidden = true;
                return;
            }
            rodape.parentElement.hidden = false;
            conteudo.innerHTML = `${d.obs ? `<p class="modal-obs">${esc(d.obs)}</p>` : ''}
                <p class="modal-pergunta">Qual é o sistema do seu equipamento?</p>
                <div class="abas-so" role="tablist" aria-label="Sistema operacional">${lista.map(so => `<button type="button" role="tab" class="aba-so" data-so="${so}" aria-selected="false">${so}</button>`).join('')}</div>
                <div class="downloads" role="tabpanel" aria-live="polite"></div>`;
            rodape.innerHTML = `Downloads direto dos sites oficiais dos fabricantes.${d.pagina ? ` <a href="${esc(d.pagina)}" target="_blank" rel="noopener">Página oficial do modelo</a>.` : ''} Em dúvida, <a href="${WHATS}" target="_blank" rel="noopener">fale com o suporte</a>.`;
            conteudo.querySelectorAll('.aba-so').forEach(b => b.addEventListener('click', () => mostrarSO(d, b.dataset.so)));
            const preferido = [soAtual, detectarSO()].find(so => lista.includes(so));
            mostrarSO(d, preferido || lista[0]);
        };

        corpo.querySelectorAll('.variante').forEach(b => b.addEventListener('click', () => mostrarVariante(f.variantes[+b.dataset.i])));
        mostrarVariante(atual);
        modal.showModal();
        document.documentElement.classList.add('modal-aberto');
    };
    const detectarSO = () => {
        const u = navigator.userAgent;
        if (/Android/i.test(u)) return 'Android';
        if (/iPhone|iPad/i.test(u)) return 'iOS';
        if (/Mac/i.test(u)) return 'macOS';
        if (/Linux/i.test(u)) return 'Linux';
        return 'Windows';
    };
    const fechar = () => modal.close();
    modal.querySelector('.modal-fechar').addEventListener('click', fechar);
    modal.addEventListener('click', e => { if (e.target === modal) fechar(); });
    modal.addEventListener('close', () => {
        document.documentElement.classList.remove('modal-aberto');
        if (ultimoBotao && ultimoBotao.focus) ultimoBotao.focus();
    });

    // ---------- Lista, busca e filtros ----------
    const itens = familias.map((f, i) => ({
        f,
        el: cartao(f, i),
        texto: normalizar([f.marca, f.nome, ...f.variantes.flatMap(v => [v.modelo, v.variacao]),
            f.largs.map(l => l + 'mm ' + l + ' mm').join(' '), f.conexao.join(' '), f.sistemas.join(' '),
            f.utilitarios.length ? 'utilitario ' + f.utilitarios.join(' ') : '',
            f.variantes.some(v => v.portatil) ? 'portatil movel celular android ios' : ''].join(' ')),
    }));
    itens.forEach(i => grade.appendChild(i.el));

    let filtro = '';
    const passaFiltro = f => !filtro ||
        (filtro === '80' && f.largs.includes(80)) ||
        (filtro === '58' && f.largs.includes(58)) ||
        (['usb', 'rede', 'bluetooth'].includes(filtro) && f.conexao.some(c => normalizar(c) === filtro)) ||
        (filtro === 'movel' && f.variantes.some(v => v.portatil)) ||
        (filtro === 'utilitario' && f.utilitarios.length);

    const aplicar = () => {
        const palavras = normalizar(campo.value.trim()).split(/\s+/).filter(Boolean);
        limpar.hidden = !campo.value;
        let visiveis = 0;
        itens.forEach(i => {
            const ok = passaFiltro(i.f) && palavras.every(p => i.texto.includes(p));
            i.el.hidden = !ok;
            if (ok) visiveis++;
        });
        semResultado.hidden = visiveis > 0;
        resultado.textContent = (campo.value || filtro) && visiveis
            ? `${visiveis} ${visiveis === 1 ? 'impressora encontrada' : 'impressoras encontradas'}` : '';
    };
    campo.addEventListener('input', aplicar);
    limpar.addEventListener('click', () => { campo.value = ''; aplicar(); campo.focus(); });
    filtros.forEach(b => b.addEventListener('click', () => {
        filtro = b.dataset.filtro;
        filtros.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        aplicar();
    }));
    const q = new URLSearchParams(location.search).get('q');
    if (q) { campo.value = q; aplicar(); }
});
