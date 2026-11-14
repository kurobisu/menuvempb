/* Monta o sitemap.xml: páginas fixas + páginas de SEO (tools/paginas-seo.json) + páginas de modelo (driver-*.html).
   lastmod = data de modificação do arquivo (só muda quando o arquivo realmente muda). */
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..');
const SITE = 'https://menuvempb.com.br';
module.exports = () => {
    const fixas = ['', 'planos.html', 'funcionalidades.html', 'duvidas.html', 'cadastro-etapas.html', 'drivers.html'];
    let seo = [];
    try { seo = JSON.parse(fs.readFileSync(path.join(__dirname, 'paginas-seo.json'), 'utf8')); } catch {}
    const modelos = fs.readdirSync(raiz).filter(f => /^driver-.*\.html$/.test(f)).sort();
    const urls = [...fixas, ...seo, ...modelos];
    const data = u => fs.statSync(path.join(raiz, u || 'index.html')).mtime.toISOString().slice(0, 10);
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map(u => `  <url><loc>${SITE}/${u}</loc><lastmod>${data(u)}</lastmod></url>\n`).join('') + '</urlset>\n';
    const alvo = path.join(raiz, 'sitemap.xml');
    if (!fs.existsSync(alvo) || fs.readFileSync(alvo, 'utf8') !== xml) fs.writeFileSync(alvo, xml);
    return urls.length;
};
