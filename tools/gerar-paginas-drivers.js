#!/usr/bin/env node
/* Gera uma página estática por modelo (driver-<marca>-<modelo>.html) a partir de js/drivers-dados.js e atualiza o
   sitemap.xml. Rode de novo sempre que mexer nos dados:  node tools/gerar-paginas-drivers.js
   O cabeçalho, o rodapé e o <head> são copiados de drivers.html (fonte única). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const raiz = path.join(__dirname, '..');
const dados = fs.readFileSync(path.join(raiz, 'js/drivers-dados.js'), 'utf8');
const DRIVERS = vm.runInNewContext(dados + ';DRIVERS');
const base = fs.readFileSync(path.join(raiz, 'drivers.html'), 'utf8');
const SITE = 'https://menuvempb.com.br';
const HOJE = new Date().toISOString().slice(0, 10);

const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const norm = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const slug = d => norm(d.marca + ' ' + d.modelo).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const slugFam = d => norm(d.marca + ' ' + d.familia).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const ORDEM_SO = ['Windows', 'Linux', 'macOS', 'Android', 'iOS'];
const ORDEM_TIPO = ['driver', 'utilitario', 'app', 'sdk', 'manual'];
const TIPOS = { driver: 'Driver', utilitario: 'Utilitário', app: 'Aplicativo', sdk: 'SDK', manual: 'Manual' };
const larguras = d => d.larguras || [d.largura];
const fotoFam = d => d.foto || (DRIVERS.find(x => x.familia === d.familia && x.marca === d.marca && x.foto) || {}).foto || '';
const NAO_OFICIAL = 'Arquivo reunido de uma fonte de terceiros, não publicado pelo fabricante. Confira a origem e passe o antivírus antes de instalar.';
const ICO_PLAY = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.600 2.200c-.4.3-.6.8-.6 1.400v16.800c0 .6.2 1.100.6 1.400L13 12z" fill="#00C2FF"/><path d="M3.600 2.200L13 12l3.200-3.200L5.200 2.400c-.6-.3-1.100-.3-1.600-.2z" fill="#00F076"/><path d="M3.600 21.800c.5.1 1 .1 1.600-.2l11-6.400L13 12z" fill="#FF3A44"/><path d="M16.200 8.800L13 12l3.200 3.200 3.900-2.200c1.100-.6 1.100-1.600 0-2.200z" fill="#FFD500"/></svg>';
const ICO_APPLE = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.500" fill="#1C8DFF"/><path d="M8 17.500l4-8.500M12.600 8.500l3.400 7M8.300 14.200h7.400" fill="none" stroke="#fff" stroke-width="1.800" stroke-linecap="round"/></svg>';
const botao = x => {
    const loja = x.tipo === 'app' && x.pagina;
    if (loja && /play\.google\.com/.test(x.url)) return `Google Play ${ICO_PLAY}`;
    if (loja && /apps\.apple\.com/.test(x.url)) return `App Store ${ICO_APPLE}`;
    return `${x.pagina ? (x.tipo === 'app' ? 'Abrir na loja' : 'Abrir página') : x.tipo === 'manual' ? 'Abrir PDF' : 'Baixar'} ${x.pagina || x.tipo === 'manual' ? externo : seta}`;
};
const WHATS = 'https://wa.me/5583988559423?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20o%20driver%20da%20minha%20impressora.';
const seta = '<svg class="baixar" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/></svg>';
const externo = '<svg class="baixar" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/></svg>';

const head = base.slice(0, base.indexOf('</head>'));
const cabecalho = base.slice(base.indexOf('<header class="topo">'), base.indexOf('</header>') + 9);
const rodape = base.slice(base.indexOf('<footer class="rodape">'), base.indexOf('<script src="js/drivers-dados.js'));
const fim = base.slice(base.indexOf('<!-- Chatwoot -->'));

const gerar = d => {
    const nome = `${d.marca === 'Genérica' ? '' : d.marca + ' '}${d.modelo}`.trim();
    const arq = `driver-${slug(d)}.html`;
    const url = `${SITE}/${arq}`;
    const sistemas = ORDEM_SO.filter(so => d.downloads.some(x => x.so === so));
    const tem = d.downloads.length > 0;
    const conex = d.conexao.join(', ');
    const titulo = `Driver ${nome}: download ${sistemas.includes('Windows') ? 'Spooler, ' : ''}${d.conexao.includes('USB') ? 'USB' : d.conexao[0]}${d.conexao.includes('Rede') ? ' e Rede' : ''} | Menuvem PB`;
    const desc = tem
        ? `Baixe o driver da impressora térmica ${nome} (${larguras(d).join('/')} mm) para ${sistemas.join(', ')}. Conexão ${conex}. Link direto do site oficial${d.utilitario ? `, com o utilitário ${d.utilitario}` : ''}.`
        : `Driver da impressora térmica ${nome} (${larguras(d).join('/')} mm): como instalar e quais drivers genéricos usar. Conexão ${conex}.`;
    const faq = [
        [`Qual driver instalar na ${nome}?`, tem ? `Para ${sistemas.join(', ')}, use os downloads desta página. O driver de impressão (Spooler) faz a ${nome} aparecer na lista de impressoras do sistema; o driver USB cria a porta virtual para programas que a exigem.` : `A ${nome} funciona com o driver genérico ${larguras(d).includes(58) && d.largura === 58 ? 'POS58' : 'POS80'}, escolhido pelo tamanho da bobina.`],
        [`A ${nome} usa papel de qual largura?`, `A ${nome} usa bobina de ${larguras(d).join(' ou ')} mm.`],
        [`A ${nome} funciona por ${conex.replace(/, ([^,]*)$/, ' e $1')}?`, `Sim, o modelo oferece conexão ${conex.replace(/, ([^,]*)$/, ' e $1')}${d.obs ? `. ${d.obs}` : '.'}`],
        ['Os arquivos são oficiais?', 'Os itens com selo Site oficial levam direto ao fabricante. Arquivos de terceiros aparecem com o selo Não oficial: confira a origem e passe o antivírus antes de instalar.'],
    ];
    const ld = [
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Menuvem PB', item: SITE + '/' },
            { '@type': 'ListItem', position: 2, name: 'Drivers de impressora', item: SITE + '/drivers.html' },
            { '@type': 'ListItem', position: 3, name: `Driver ${nome}`, item: url }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
        { '@context': 'https://schema.org', '@type': 'WebPage', name: titulo.replace(' | Menuvem PB', ''), url, inLanguage: 'pt-BR', isPartOf: { '@type': 'WebSite', name: 'Menuvem PB', url: SITE + '/' } },
    ];
    let h = head
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(titulo)}</title>`)
        .replace(/<meta name="description"[\s\S]*?>/, `<meta name="description" content="${esc(desc)}">`)
        .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`)
        .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}">`)
        .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(titulo.replace(' | Menuvem PB', ''))}">`)
        .replace(/(<meta property="og:description"\s+content=")[^"]*"/, `$1${esc(desc)}"`)
        .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
        .replace('<!-- Google tag (gtag.js) -->', ld.map(x => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n    ') + '\n    <!-- Google tag (gtag.js) -->');
    const foto = fotoFam(d);
    const blocos = sistemas.map(so => {
        const itens = d.downloads.filter(x => x.so === so || x.so === 'Todos').sort((a, b) => ORDEM_TIPO.indexOf(a.tipo) - ORDEM_TIPO.indexOf(b.tipo));
        return `<h2 class="modelo-so">Driver ${esc(nome)} para ${so}</h2><div class="downloads">${itens.map(x => {
            const meta = [x.versao ? 'versão ' + x.versao : '', x.tamanho || ''].filter(Boolean).map(esc).join(' · ');
            const ext = x.pagina || x.tipo === 'manual';
            return `<div class="download"><div class="download-tipo">${TIPOS[x.tipo] || esc(x.tipo)}</div><div class="download-nome"><strong>${esc(x.rotulo)}</strong>${meta ? `<span>${meta}</span>` : ''}${x.oficial === false ? `<span class="tag-naooficial" title="${esc(NAO_OFICIAL)}">Não oficial</span>` : `<span class="tag-oficial">${x.tipo === 'app' && x.pagina ? 'Loja oficial' : 'Site oficial'}</span>`}${x.so === 'Todos' ? '<span>Todos os sistemas</span>' : ''}${x.recomendado ? '<span class="tag-recomendado">★ Recomendado</span>' : ''}${x.nota ? `<em class="download-nota">${esc(x.nota)}</em>` : ''}</div><a href="${esc(x.url)}" target="_blank" rel="noopener" class="btn btn-amarelo btn-loja">${botao(x)}</a></div>`;
        }).join('')}</div>`;
    }).join('\n                ');
    const irmaos = DRIVERS.filter(x => x.familia === d.familia && x.marca === d.marca && x !== d);
    const corpo = `
    <main>
        <section class="pagina-topo">
            <div class="circulo"></div>
            <div class="container">
                <nav class="migalhas" aria-label="Você está em"><a href="drivers.html">Drivers de impressora</a> <span aria-hidden="true">/</span> <span>${esc(nome)}</span></nav>
                <h1 class="entrada" style="--i:1">Driver <span class="marcador">${esc(nome)}</span></h1>
                <p class="entrada" style="--i:2">Download do driver ${sistemas.includes('Windows') ? 'Spooler, ' : ''}${d.conexao.includes('USB') ? 'USB' : esc(d.conexao[0])}${d.conexao.includes('Rede') ? ' e Rede' : ''} da impressora térmica ${esc(nome)}, direto do site oficial.</p>
            </div>
        </section>
        <section class="secao drivers-pagina">
            <div class="container">
                <div class="modelo-ficha">
                    ${foto ? `<div class="modelo-foto"><img src="${esc(foto)}" alt="Impressora ${esc(nome)}"></div>` : ''}
                    ${d.recomendada ? '<span class="selo-texto">★ Marca recomendada</span>' : ''}
                    <ul class="modelo-dados">
                        <li><b>Papel</b><span>${larguras(d).join(' / ')} mm${d.portatil ? ' · portátil' : ''}</span></li>
                        <li><b>Conexão</b><span>${esc(conex)}</span></li>
                        <li><b>Sistemas</b><span>${sistemas.length ? sistemas.join(', ') : 'Drivers genéricos POS58/POS80'}</span></li>
                        ${d.bateria ? `<li><b>Bateria</b><span>${d.bateria === true ? 'Sim' : esc(d.bateria)}</span></li>` : ''}
                        <li><b>Utilitário</b><span>${d.utilitario ? esc(d.utilitario) : 'Não possui'}</span></li>
                    </ul>
                </div>
                ${d.obs ? `<p class="modal-obs">${esc(d.obs)}</p>` : ''}
                ${d.downloads.some(x => x.oficial === false) ? `<p class="modal-aviso"><span>Os arquivos com o selo <b>Não oficial</b> foram reunidos de fontes de terceiros. Confira a origem e passe o antivírus antes de instalar.</span></p>` : ''}
                ${tem ? blocos : `<div class="modal-vazio"><strong>Esta impressora usa driver genérico.</strong><span>Escolha o POS58 ou o POS80 pelo tamanho da bobina na lista de drivers.</span><a href="drivers.html" class="btn btn-amarelo">Ver drivers genéricos</a></div>`}
                ${d.pagina ? `<p class="modal-rodape"><span>Página oficial do modelo: <a href="${esc(d.pagina)}" target="_blank" rel="noopener">abrir no site do fabricante</a>.</span></p>` : ''}
                ${irmaos.length ? `<h2 class="modelo-so">Outras variações da linha ${esc(d.familia)}</h2><ul class="driver-variantes grande">${irmaos.map(x => `<li><a href="driver-${slug(x)}.html">${esc(x.marca === 'Genérica' ? x.modelo : x.marca + ' ' + x.modelo)}</a></li>`).join('')}</ul>` : ''}
                <p class="voltar-lista"><a href="drivers.html#${slugFam(d)}" class="btn btn-roxo">Ver todos os drivers de impressora</a></p>
                <div class="nao-achou">
                    <div>
                        <strong>Cliente Menuvem e deu erro na instalação?</strong>
                        <span>O suporte técnico é exclusivo para clientes Menuvem: ele entra no seu computador por acesso remoto e resolve com você.</span>
                        <a class="chip-cliente" href="cadastro-etapas.html"><b>Ainda não é cliente?</b> Conheça a Menuvem →</a>
                    </div>
                    <div class="acoes"><a href="${WHATS}" target="_blank" rel="noopener" class="btn btn-amarelo">Suporte para clientes</a></div>
                </div>
                <section class="faq-driver"><h2>Dúvidas sobre o driver ${esc(nome)}</h2>
                    ${faq.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n                    ')}
                </section>
            </div>
        </section>
    </main>
`;
    const html = `${h}</head>\n\n<body>\n    ${cabecalho}\n${corpo}\n    ${rodape}${fim}`;
    const alvo = path.join(raiz, arq);
    if (!fs.existsSync(alvo) || fs.readFileSync(alvo, 'utf8') !== html) fs.writeFileSync(alvo, html);
    return arq;
};

// remove páginas antigas que não existem mais nos dados
const arquivos = DRIVERS.map(gerar);
fs.readdirSync(raiz).filter(f => /^driver-.*\.html$/.test(f) && !arquivos.includes(f)).forEach(f => fs.unlinkSync(path.join(raiz, f)));

const total = require('./sitemap')();
console.log(arquivos.length + ' páginas de modelo + sitemap com ' + total + ' URLs');
