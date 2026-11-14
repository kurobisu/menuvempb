#!/usr/bin/env node
/* Gera as páginas de SEO (soluções) a partir das definições abaixo.  Uso:  node tools/gerar-paginas-seo.js
   O <head>, o cabeçalho e o rodapé vêm de drivers.html (fonte única). Depois de rodar, rode também
   node tools/gerar-paginas-drivers.js, porque o rodapé muda e o sitemap junta as duas listas.
   Fatos: só o que está marcado ✅ em a base de conhecimento do projeto.
   Regras do site: sem taxas/preços de terceiros, sem horário de suporte, sem presencial, sem marcas concorrentes. */
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..');
const SITE = 'https://menuvempb.com.br';
const base = fs.readFileSync(path.join(raiz, 'drivers.html'), 'utf8');
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const WHATS = 'https://wa.me/5583988559423?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Menuvem.';
const SETA = '<svg class="seta" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>';

// ---------- blocos de conteúdo ----------
const p = t => `<p>${t}</p>`;
const lista = itens => `<ul class="sol-lista">${itens.map(i => `<li>${i}</li>`).join('')}</ul>`;
const passos = itens => `<ol class="sol-passos">${itens.map(([t, d], i) => `<li><span class="n">${i + 1}</span><div><strong>${t}</strong><span>${d}</span></div></li>`).join('')}</ol>`;
const cards = itens => `<div class="sol-grade">${itens.map(([t, d]) => `<article class="sol-card"><h3>${t}</h3><p>${d}</p></article>`).join('')}</div>`;
const aviso = t => `<p class="sol-aviso">${t}</p>`;
const videoV = (n, legenda, alt) => `<figure class="sol-video vertical"><video autoplay muted loop playsinline preload="metadata" width="540" height="1168" poster="img/demos/${n}-m-poster.jpg" aria-label="${esc(alt)}"><source src="img/demos/${n}-m.mp4" type="video/mp4"><source src="img/demos/${n}-m.webm" type="video/webm"></video><figcaption>${legenda} <em>Exemplo ilustrativo, com nomes e valores fictícios.</em></figcaption></figure>`;
const video = (n, legenda, alt, movel) => `<figure class="sol-video${movel ? ' real' : ''}"><video autoplay muted loop playsinline preload="metadata" width="1366" height="768" poster="img/demos/${n}-poster.jpg" aria-label="${esc(alt)}">${movel ? `<source media="(max-width: 640px)" src="img/demos/${n}-m.mp4" type="video/mp4"><source media="(max-width: 640px)" src="img/demos/${n}-m.webm" type="video/webm">` : ''}<source src="img/demos/${n}.mp4" type="video/mp4"><source src="img/demos/${n}.webm" type="video/webm"></video>${movel ? '' : '<button type="button" class="sol-ampliar" aria-label="Ampliar o vídeo em tela cheia">Ampliar vídeo</button>'}<figcaption>${legenda} <em>Exemplo ilustrativo, com nomes e valores fictícios.</em></figcaption></figure>`;

const LINKS = {
    cardapio: ['cardapio-digital.html', 'Cardápio digital com QR Code'],
    ifood: ['alternativa-ao-ifood.html', 'Alternativa ao iFood sem comissão'],
    integracoes: ['integracoes-delivery.html', 'iFood, 99Food, Keeta e Aiqfome no mesmo painel'],
    pdv: ['pdv-restaurante.html', 'PDV e frente de caixa'],
    pagamento: ['pagamento-online-mercado-pago.html', 'Pix e cartão online com Mercado Pago'],
    paraiba: ['paraiba.html', 'Menuvem na Paraíba'],
    mesas: ['mesas-qr-code-garcom.html', 'Mesas e garçom digital'],
    kds: ['kds-cozinha.html', 'KDS: monitor da cozinha'],
    impressao: ['impressao-automatica.html', 'Impressão automática de comanda'],
    entregadores: ['gestao-entregadores.html', 'Gestão de entregadores'],
    fidelidade: ['fidelidade-cupons-delivery.html', 'Fidelidade e cupons'],
    nota: ['nota-fiscal-restaurante.html', 'Nota fiscal para restaurante'],
    solucoes: ['solucoes.html', 'Todas as soluções'],
    drivers: ['drivers.html', 'Drivers de impressora térmica'],
    funcionalidades: ['funcionalidades.html', 'Todas as funcionalidades'],
    planos: ['planos.html', 'Planos e preços'],
};

const PAGINAS = [
    {
        arq: 'cardapio-digital.html', nome: 'Cardápio digital',
        titulo: 'Cardápio Digital com Link Próprio e QR Code | Menuvem PB',
        desc: 'Cardápio digital com link próprio, QR Code e pedidos online sem comissão por pedido. Delivery, retirada e mesa num só painel. Teste 30 dias grátis.',
        sobre: 'Cardápio digital',
        h1: 'Cardápio digital com link próprio e <span class="marcador">QR Code</span>',
        intro: 'Receba pedidos de delivery, retirada e mesa direto pelo seu cardápio, sem comissão por pedido. A equipe da Menuvem PB monta tudo com você, online.',
        secoes: [
            ['Como funciona o cardápio digital da Menuvem', passos([
                ['Você faz o cadastro e testa 30 dias grátis', 'Sem cartão de crédito e sem fidelidade.'],
                ['Envia o que já tem', 'Fotos, o cardápio atual em PDF, foto ou texto, preços e complementos, horário de funcionamento e área de entrega.'],
                ['A gente monta e configura com você', 'Cardápio, formas de pagamento e impressora, tudo online, por vídeo e acesso remoto.'],
                ['Você divulga o link e o QR Code', 'No Instagram, no WhatsApp, na vitrine e nas mesas. Os pedidos chegam no seu painel.'],
            ])],
            ['Pedido por telefone ou balcão? Lance no painel', video('pedido-delivery', 'Novo pedido de delivery: produto com opções e observação, dados do cliente, endereço no mapa e taxa de entrega calculada.', 'Vídeo do painel da Menuvem lançando um pedido de delivery', true) + p('Escolha os produtos com as opções e a observação do cliente, informe o nome, o celular e o endereço, e o painel calcula a taxa de entrega pela área atendida. Depois é só salvar e avançar o pedido para "Em preparo".')],
            ['O que o seu cliente encontra', cards([
                ['Pedido pelo celular', 'O cliente abre o link ou lê o QR Code e faz o pedido no navegador, sem instalar aplicativo.'],
                ['Produtos que se montam', 'Pizza meio a meio com a cobrança que você escolher (média, maior valor ou valor fixo), complementos, sabores limitados ou ilimitados e preços por faixa.'],
                ['Promoção em destaque', 'Preço riscado e selo de promoção na foto, mais produtos em destaque num carrossel acima da primeira categoria.'],
                ['Pagamento do jeito dele', 'Pix e cartão online com conciliação automática, ou pagamento na entrega com cálculo de troco.'],
                ['Fale com a loja', 'Botão de WhatsApp com mensagem pronta e link direto para cada produto, ótimo para divulgar um item específico.'],
                ['Loja fechada sem confusão', 'O cliente vê que a loja está fechada e navega pelo cardápio, mas não consegue pôr itens na sacola.'],
            ])],
            ['O que você controla no painel', lista([
                'Edite o cardápio pelo celular: ligue ou desligue produtos, mude preço, foto e promoção.',
                'Defina horários para a loja inteira ou para uma categoria, como "Almoço".',
                'Escolha entre 4 modelos de exibição dos produtos e mostre um nome mais atrativo no site.',
                'Use estoque: ao zerar, o produto é desativado sozinho e volta se o pedido for cancelado.',
                'Edite nome, descrição e preços de vários produtos de uma vez, com a edição em lote.',
                'Ofereça pedido mínimo, cupons e programa de fidelidade, se quiser.',
            ])],
            ['Sem comissão por pedido', p('Nos pedidos do seu cardápio próprio, a Menuvem não cobra taxa por transação: você paga só a mensalidade, sem fidelidade. Se também vende em aplicativos de delivery, veja como <a href="integracoes-delivery.html">receber tudo no mesmo painel</a> ou como <a href="alternativa-ao-ifood.html">criar um canal próprio de vendas</a>.')],
        ],
        faq: [
            ['Cardápio digital é grátis?', 'Você testa 30 dias grátis, sem cartão de crédito. Depois escolhe um plano mensal, sem fidelidade. Veja os valores na página de planos.'],
            ['O cliente precisa instalar um aplicativo?', 'Não. Ele abre o link ou lê o QR Code e faz o pedido pelo navegador do celular.'],
            ['Dá para usar o link no Instagram e no WhatsApp?', 'Sim. Você divulga o link do cardápio, o link de cada produto e ainda tem um botão de WhatsApp com mensagem pronta.'],
            ['Posso editar o cardápio pelo celular?', 'Sim. Produtos, preços, promoções, categorias e fotos podem ser editados pelo celular, e os pedidos também são gerenciados por ele.'],
            ['Funciona para pizzaria e outros negócios de comida?', 'Sim. Restaurantes, lanchonetes, marmitarias, açaí, hamburguerias, docerias e bares com garçom usam a plataforma para delivery, mesa e balcão.'],
            ['O cardápio serve também para as mesas?', 'Sim, com QR Code na mesa e autoatendimento. Veja o que cada plano inclui na página de planos.'],
        ],
        rel: ['integracoes', 'ifood', 'pagamento', 'pdv', 'planos'],
    },
    {
        arq: 'integracoes-delivery.html', nome: 'iFood, 99Food, Keeta e Aiqfome',
        titulo: 'Integre iFood, 99Food, Keeta e Aiqfome | Menuvem PB',
        desc: 'Receba os pedidos do iFood, 99Food, Keeta e Aiqfome no mesmo painel do seu cardápio próprio. Menos telas, comanda impressa sozinha e tudo organizado.',
        sobre: 'Integração com aplicativos de delivery',
        h1: 'iFood, 99Food, Keeta e Aiqfome <span class="marcador">no mesmo painel</span>',
        intro: 'Os pedidos dos aplicativos chegam na mesma tela dos pedidos do seu cardápio próprio. Menos telas, menos confusão e a comanda sai sozinha na impressora.',
        secoes: [
            ['Quais aplicativos se integram', cards([
                ['iFood', 'Os pedidos caem direto no painel para aceite e acompanhamento.'],
                ['99Food', 'Chegam no mesmo painel, junto com os demais canais.'],
                ['Keeta', 'Mesma tela, mesmo fluxo de aceite e acompanhamento.'],
                ['Aiqfome', 'Pedidos no painel, sem alternar entre aplicativos.'],
            ])],
            ['O que muda na rotina da loja', lista([
                'Uma tela só para pedidos de delivery próprio, aplicativos, mesa e balcão.',
                'Impressão automática da comanda nas impressoras de cada setor de produção, sem ninguém clicar.',
                'Relatórios com todos os canais no mesmo lugar.',
                'Entregadores e acerto de contas no mesmo sistema, para os pedidos de entrega.',
            ])],
            ['Combine com o seu canal próprio', p('Você continua nos aplicativos e ainda abre um canal de vendas diretas com <a href="cardapio-digital.html">cardápio digital sem comissão por pedido</a>, pagamento online e <a href="funcionalidades.html">fidelidade e cupons</a> para o cliente voltar a comprar.')],
            ['Entenda o alcance da integração', aviso('A integração cuida da <strong>recepção e da gestão dos pedidos</strong>. O sistema não sincroniza o cardápio nem altera preços dentro dos aplicativos: isso continua sendo feito em cada um deles.')],
            ['Como começar', passos([
                ['Cadastre-se e teste 30 dias grátis', 'Sem cartão de crédito e sem fidelidade.'],
                ['Fale com a equipe na implantação', 'A conexão com os aplicativos é orientada pela equipe, junto com o cardápio e a impressora.'],
                ['Receba tudo no painel', 'Aceite, acompanhe e imprima os pedidos de todos os canais.'],
            ])],
        ],
        faq: [
            ['Posso receber pedidos do iFood e do meu cardápio no mesmo lugar?', 'Sim. Os pedidos do iFood, 99Food, Keeta e Aiqfome chegam na mesma tela dos pedidos do cardápio próprio.'],
            ['Preciso sair do iFood para usar a Menuvem?', 'Não. Você continua nos aplicativos e passa a receber tudo no mesmo painel, ainda ganhando um canal próprio de vendas.'],
            ['A comanda dos pedidos dos aplicativos imprime sozinha?', 'Sim. Com a impressão automática, a comanda sai na impressora do setor assim que o pedido entra.'],
            ['A Menuvem muda o preço ou o cardápio dentro do iFood?', 'Não. A integração recebe e gerencia os pedidos; o cardápio e os preços de cada aplicativo continuam sendo editados lá.'],
            ['Quais impressoras posso usar?', 'Impressoras térmicas de 58 e 80 mm. A central de drivers reúne os downloads dos modelos mais usados.'],
        ],
        rel: ['cardapio', 'ifood', 'drivers', 'pdv', 'planos'],
    },
    {
        arq: 'alternativa-ao-ifood.html', nome: 'Alternativa ao iFood',
        titulo: 'Alternativa ao iFood: Delivery sem Comissão | Menuvem PB',
        desc: 'Crie seu canal de vendas próprio sem comissão por pedido e continue nos aplicativos de delivery. Cardápio digital, Pix, cartão e fidelidade na Menuvem.',
        sobre: 'Alternativa ao iFood',
        h1: 'Alternativa ao iFood: seu delivery próprio, <span class="marcador">sem comissão</span>',
        intro: 'Você não precisa escolher entre os aplicativos e o seu canal próprio. Venda direto para o seu cliente, sem comissão por pedido, e receba tudo num painel só.',
        secoes: [
            ['Por que ter um canal próprio', cards([
                ['Cliente seu', 'No cardápio próprio você conhece o cliente, tem o contato dele e pode incentivar a próxima compra com cupons e fidelidade.'],
                ['Sem comissão por pedido', 'A Menuvem não cobra taxa por transação: o que você paga é a mensalidade, sem fidelidade.'],
                ['Preço e regras suas', 'Você define as promoções, o pedido mínimo, a taxa de entrega e até taxa ou desconto por forma de pagamento.'],
                ['Divulgação direta', 'Link e QR Code para colocar no Instagram, no WhatsApp, na embalagem e no balcão.'],
            ])],
            ['Mensalidade fixa, em vez de comissão por pedido', p('Nos aplicativos, quanto mais você vende, mais paga de comissão. No cardápio próprio da Menuvem, o custo da plataforma é a mensalidade do plano, e os pedidos do seu link não pagam comissão à Menuvem. O pagamento online tem as taxas e os prazos do meio de pagamento escolhido. <a href="planos.html">Veja os planos</a>.')],
            ['Continue nos aplicativos, se quiser', p('Muita gente mantém os aplicativos para ser encontrado e usa o canal próprio para a recompra. Na Menuvem, os pedidos do iFood, 99Food, Keeta e Aiqfome chegam no <a href="integracoes-delivery.html">mesmo painel</a> do cardápio próprio, e a comanda imprime sozinha.')],
            ['O que você usa para fazer o cliente voltar', lista([
                'Programa de fidelidade com pontos que viram produtos de recompensa.',
                'Cupons com valor mínimo, validade, dias da semana e limite de uso.',
                'Status do pedido no WhatsApp Oficial; o custo das mensagens é o da Meta, não da Menuvem.',
                'Pagamento por Pix e por cartão de crédito e débito online, com conciliação automática.',
            ])],
            ['Como sair do zero', passos([
                ['Cadastre-se e teste 30 dias grátis', 'Sem cartão e sem fidelidade.'],
                ['Envie o cardápio e as fotos', 'A equipe monta o cardápio online com você.'],
                ['Divulgue o link e o QR Code', 'Comece levando os clientes que já pedem pelos aplicativos para o seu canal.'],
            ])],
        ],
        faq: [
            ['Qual é a alternativa ao iFood?', 'Ter um canal próprio de vendas, como um cardápio digital com link e QR Code, e receber os pedidos dos aplicativos no mesmo painel. Assim você não depende de um canal só.'],
            ['Existe delivery próprio sem comissão?', 'Sim. Na Menuvem, os pedidos feitos no seu cardápio próprio não pagam comissão por pedido: a Menuvem não cobra taxa por transação e o custo é a mensalidade do plano.'],
            ['Preciso deixar o iFood para usar a Menuvem?', 'Não. Você pode manter os aplicativos e receber os pedidos deles no mesmo painel do seu cardápio.'],
            ['Posso testar antes de contratar?', 'Sim, são 30 dias grátis, sem cartão de crédito e sem fidelidade.'],
        ],
        rel: ['cardapio', 'integracoes', 'pagamento', 'planos'],
    },
    {
        arq: 'pdv-restaurante.html', nome: 'PDV e frente de caixa',
        titulo: 'PDV e Frente de Caixa para Restaurante | Menuvem PB',
        desc: 'PDV com frente de caixa, mesas, delivery, nota fiscal ilimitada, estoque e relatórios para restaurante, lanchonete e bar. Teste a Menuvem 30 dias grátis.',
        sobre: 'PDV e frente de caixa',
        h1: 'PDV e frente de caixa para <span class="marcador">quem vende comida</span>',
        intro: 'Balcão, mesa e delivery no mesmo sistema, com nota fiscal, impressão automática de comanda e relatórios. Tudo online, com implantação remota.',
        secoes: [
            ['O que o PDV da Menuvem faz', cards([
                ['Frente de caixa', 'Vendas de balcão, abertura e revisão do caixa, com a contagem do dinheiro.'],
                ['Mesas e garçom', 'O garçom lança a mesa com qualquer nome ou código, e o cliente também pode pedir pelo QR Code da mesa.'],
                ['Delivery e aplicativos', 'Pedidos do cardápio próprio, iFood, 99Food, Keeta e Aiqfome na mesma tela.'],
                ['Cozinha e impressão', 'A comanda sai sozinha na impressora de cada setor de produção, e o KDS leva a produção para uma tela.'],
            ])],
            ['Nota fiscal', p('Emita NFC-e ou NF-e direto do pedido, em lote, de forma automática ou só quando quiser. As notas são ilimitadas. Você envia o certificado digital e a equipe faz todo o cadastro fiscal.')],
            ['Controle da operação', lista([
                'Estoque com baixa automática a cada pedido.',
                'Financeiro e relatório de resultado por categoria, com exportação.',
                'Dia operacional ajustável, para os relatórios não cortarem o expediente de quem fecha tarde.',
                'Usuários e permissões, com acesso rápido e temporário para garçom de curto prazo.',
                'Comissão do garçom calculada no fechamento da mesa.',
                'Carteira de fiado e pré-pago e contas de empresas contratantes, só para os clientes que você autorizar.',
                'Maquininha integrada pelo Total TEF, para receber as cobranças do painel direto na máquina.',
            ])],
            ['Impressora térmica', p('A impressão automática funciona com impressoras térmicas de 58 e 80 mm. Na <a href="drivers.html">central de drivers</a> você baixa o driver do seu modelo, e na implantação a equipe configura a impressora por acesso remoto.')],
        ],
        faq: [
            ['A Menuvem tem PDV com frente de caixa?', 'Sim. O PDV faz as vendas de balcão e de mesa, com revisão do caixa, e recebe também os pedidos de delivery e dos aplicativos.'],
            ['Emite nota fiscal?', 'Sim, NFC-e e NF-e, em lote, automática ou opcional. As notas são ilimitadas e a equipe faz o cadastro fiscal com o certificado digital que você enviar.'],
            ['Preciso de um computador especial?', 'Você precisa de um computador com internet. A impressora térmica é opcional para imprimir comandas e é configurada por acesso remoto.'],
            ['Dá para controlar mesas e garçons?', 'Sim, com permissões por usuário, comissão do garçom e autoatendimento por QR Code na mesa. Veja o que cada plano inclui na página de planos.'],
        ],
        rel: ['cardapio', 'integracoes', 'drivers', 'pagamento', 'planos'],
    },
    {
        arq: 'pagamento-online-mercado-pago.html', nome: 'Pagamento online com Mercado Pago',
        titulo: 'Pix e Cartão Online com Mercado Pago | Menuvem PB',
        desc: 'Receba crédito, débito e Pix no seu cardápio digital. Mercado Pago com ativação imediata para quem já tem conta e estorno de pedidos direto no painel.',
        sobre: 'Pagamento online',
        h1: 'Cartão e Pix online com <span class="marcador">Mercado Pago</span>',
        intro: 'Receba crédito e débito direto no cardápio, com ativação imediata para quem já tem conta no Mercado Pago. Cancelou um pedido? Estorne pelo painel.',
        secoes: [
            ['Crédito e débito online pelo Mercado Pago', cards([
                ['Ativação imediata', 'Se você já tem cadastro no Mercado Pago, é só conectar a sua conta no painel e começar a receber.'],
                ['Dinheiro na sua conta', 'O valor cai direto na conta Mercado Pago da loja. As taxas e os prazos são os do Mercado Pago.'],
                ['Estorno pelo painel', 'Cancelou o pedido de quem pagou no crédito ou no débito online? Estorne o valor ali mesmo, sem abrir o aplicativo do Mercado Pago.'],
                ['CPF ou CNPJ', 'Vale para quem recebe em CPF ou em CNPJ. Você só precisa de uma conta no Mercado Pago.'],
            ])],
            ['Pix no cardápio', lista([
                '<strong>Pix com QR Code e "copia e cola":</strong> gerado automaticamente com o valor do pedido, sem custo. Você confere o depósito.',
                '<strong>Pix dinâmico:</strong> o pedido só chega depois que o banco confirma o pagamento, com conciliação automática. Disponível para contas de pessoa jurídica (CNPJ).',
            ])],
            ['Sem maquininha e sem taxa da Menuvem', p('Pix e cartão acontecem online, com conciliação automática, então você não precisa de maquininha para o cardápio digital. A Menuvem não cobra taxa por transação: ganha só a mensalidade. Taxas e prazos do pagamento online são do meio de pagamento escolhido. Se você também usa maquininha, a Menuvem oferece integração por Total TEF.')],
            ['Você escolhe como cobrar', lista([
                'Taxa ou desconto por forma de pagamento, em todos os planos, inclusive para repassar o custo do cartão ao cliente.',
                'Pagamento na entrega, com o cliente informando de quanto precisa de troco.',
                'Carteira para fiado e pré-pago, só para os clientes que você autorizar.',
            ])],
            ['Como ativar', passos([
                ['Tenha uma conta no Mercado Pago', 'Se ainda não tem, crie a conta do seu estabelecimento.'],
                ['Conecte a conta no painel', 'Em Configurações, no pagamento online, escolha Mercado Pago e autorize a conexão.'],
                ['Pronto para receber', 'O cliente passa a pagar com cartão de crédito ou débito no cardápio.'],
            ])],
        ],
        faq: [
            ['Como receber cartão de crédito e débito no cardápio digital?', 'Conecte a sua conta do Mercado Pago no painel da Menuvem. A ativação é imediata para quem já tem cadastro no Mercado Pago.'],
            ['Dá para estornar um pedido pago no cartão?', 'Sim. Ao cancelar o pedido no painel, você estorna o valor do crédito ou do débito online ali mesmo, sem acessar o aplicativo do Mercado Pago. O prazo para o dinheiro voltar ao cliente depende do banco ou da operadora do cartão dele.'],
            ['Quem recebe em CPF pode usar?', 'Sim. O crédito e o débito online pelo Mercado Pago valem para CPF e para CNPJ.'],
            ['A Menuvem cobra taxa por transação?', 'Não. A Menuvem ganha só a mensalidade. As taxas e os prazos do pagamento online são do meio de pagamento escolhido.'],
            ['Preciso de maquininha?', 'Para o cardápio digital, não: Pix e cartão são online, com conciliação automática.'],
        ],
        rel: ['cardapio', 'pdv', 'ifood', 'planos'],
    },
    {
        arq: 'paraiba.html', nome: 'Menuvem na Paraíba',
        titulo: 'Sistema para Restaurantes na Paraíba | Menuvem PB',
        desc: 'Menuvem PB, representante oficial da Menuvem na Paraíba: cardápio digital, PDV e delivery sem comissão, com implantação e suporte online. 30 dias grátis.',
        sobre: 'Menuvem na Paraíba',
        h1: 'Sistema para restaurantes na <span class="marcador">Paraíba</span>',
        intro: 'A Menuvem PB é a representante oficial da Menuvem na Paraíba. Cardápio digital, PDV e delivery sem comissão, com implantação e suporte feitos online, para o Brasil inteiro.',
        secoes: [
            ['Para quem vende comida na Paraíba (e no Brasil)', p('Restaurantes, lanchonetes, marmitarias, açaí, hamburguerias, docerias, casas de bolo e bares com garçom usam a Menuvem para vender por delivery, mesa e balcão. O atendimento é feito online e vale para o Brasil inteiro, então a sua loja não precisa esperar ninguém ir até ela.')],
            ['Implantação e suporte online', passos([
                ['Cadastro com 30 dias grátis', 'Sem cartão de crédito e sem fidelidade.'],
                ['Demonstração online', 'Mostramos a plataforma focando no que você quer ver e nas suas dúvidas.'],
                ['A gente monta com você', 'Cardápio, formas de pagamento, impressora e nota fiscal, online e por acesso remoto.'],
                ['Suporte de gente de verdade', 'Quem atende conhece a rotina de quem vende comida. O Canal de Suporte é da Paraíba.'],
            ])],
            ['O que você leva', cards([
                ['Cardápio digital', 'Link próprio e QR Code, sem comissão por pedido. <a href="cardapio-digital.html">Saiba mais</a>.'],
                ['Todos os canais num painel', 'iFood, 99Food, Keeta e Aiqfome junto com o seu canal próprio. <a href="integracoes-delivery.html">Saiba mais</a>.'],
                ['Pagamento online', 'Pix e cartão de crédito e débito pelo Mercado Pago. <a href="pagamento-online-mercado-pago.html">Saiba mais</a>.'],
                ['PDV e nota fiscal', 'Frente de caixa, mesas, estoque e nota fiscal ilimitada. <a href="pdv-restaurante.html">Saiba mais</a>.'],
            ])],
            ['Quem somos', p('O menuvempb.com.br é o representante oficial da Menuvem na Paraíba. A Menuvem é uma plataforma da Nuc Tecnologia, no mercado desde 2016.')],
        ],
        faq: [
            ['A Menuvem atende a Paraíba?', 'Sim. O atendimento e a implantação são online, para a Paraíba e para o Brasil inteiro.'],
            ['Preciso de alguém na minha loja para instalar?', 'Não. O cardápio, o pagamento, a impressora e a nota fiscal são configurados online, por acesso remoto.'],
            ['Posso testar antes de contratar?', 'Sim, são 30 dias grátis, sem cartão de crédito e sem fidelidade.'],
            ['Para que tipo de negócio serve?', 'Para quem vende comida: restaurantes, lanchonetes, marmitarias, açaí, hamburguerias, docerias, casas de bolo e bares com garçom, por delivery, mesa ou balcão.'],
        ],
        rel: ['cardapio', 'ifood', 'integracoes', 'planos'],
    },
];

PAGINAS.push(...require('./paginas-seo-mais.js')({ p, lista, passos, cards, aviso, video, videoV }));

// ---------- montagem ----------
const head = base.slice(0, base.indexOf('</head>'))
    .replace(/\s*<link rel="stylesheet" href="css\/(duvidas|drivers)\.css[^>]*>/g, '')
    .replace('<link rel="stylesheet" href="css/marca.css', '<link rel="stylesheet" href="css/solucoes.css?v=5">\n    <link rel="stylesheet" href="css/marca.css');
const cabecalho = base.slice(base.indexOf('<header class="topo">'), base.indexOf('</header>') + 9);
const rodape = base.slice(base.indexOf('<footer class="rodape">'), base.indexOf('<script src="js/drivers-dados.js'));
const fim = base.slice(base.indexOf('<!-- Chatwoot -->'));

const gerar = pg => {
    if (pg.titulo.length > 60 || pg.desc.length > 155) console.warn(`AVISO ${pg.arq}: título ${pg.titulo.length}, descrição ${pg.desc.length}`);
    const url = `${SITE}/${pg.arq}`;
    const ld = [
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Menuvem PB', item: SITE + '/' },
            { '@type': 'ListItem', position: 2, name: pg.nome, item: url }] },
        { '@context': 'https://schema.org', '@type': 'WebPage', '@id': url + '#pagina', url, name: pg.titulo.replace(' | Menuvem PB', ''), description: pg.desc, inLanguage: 'pt-BR',
            isPartOf: { '@type': 'WebSite', name: 'Menuvem PB', url: SITE + '/' }, about: { '@type': 'SoftwareApplication', name: 'Menuvem', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: pg.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) },
    ];
    const h = head
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(pg.titulo)}</title>`)
        .replace(/<meta name="description"[\s\S]*?>/, `<meta name="description" content="${esc(pg.desc)}">`)
        .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`)
        .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}">`)
        .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(pg.titulo.replace(' | Menuvem PB', ''))}">`)
        .replace(/(<meta property="og:description"\s+content=")[^"]*"/, `$1${esc(pg.desc)}"`)
        .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
        .replace('<!-- Google tag (gtag.js) -->', ld.map(x => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n    ') + '\n    <!-- Google tag (gtag.js) -->');
    const rel = pg.rel.map(k => `<li><a href="${LINKS[k][0]}">${LINKS[k][1]}</a></li>`).join('');
    const corpo = `
    <main>
        <section class="pagina-topo">
            <div class="circulo"></div>
            <div class="container">
                <nav class="migalhas" aria-label="Você está em"><a href="index.html">Início</a> <span aria-hidden="true">/</span> <span>${esc(pg.nome)}</span></nav>
                <h1 class="entrada" style="--i:1">${pg.h1}</h1>
                <p class="entrada" style="--i:2">${pg.intro}</p>
                <div class="acoes entrada" style="--i:3">
                    <a href="planos.html" class="btn btn-amarelo btn-brilho">Testar 30 dias grátis${SETA}</a>
                    <a href="${WHATS}" target="_blank" rel="noopener" class="btn btn-contorno-claro">Falar com a Menuvem PB</a>
                </div>
            </div>
        </section>
        <section class="secao sol-pagina">
            <div class="container">
                ${pg.secoes.map(([t, c]) => `<section class="sol-bloco"><h2>${t}</h2>${c}</section>`).join('\n                ')}
                <section class="sol-bloco">
                    <h2>Perguntas frequentes</h2>
                    ${pg.faq.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}</summary><p>${a}</p></details>`).join('\n                    ')}
                </section>
                <section class="sol-bloco">
                    <h2>Veja também</h2>
                    <ul class="sol-relacionadas">${rel}</ul>
                </section>
            </div>
        </section>
        <section class="secao chamada">
            <div class="circulo"></div>
            <div class="container revelar">
                <span class="pilula">30 dias grátis</span>
                <h2>Teste no seu negócio antes de decidir</h2>
                <p>Sem cartão, sem fidelidade. A gente monta seu cardápio e treina sua equipe, tudo online.</p>
                <div class="acoes">
                    <a href="planos.html" class="btn btn-amarelo btn-brilho">Testar 30 dias grátis${SETA}</a>
                    <a href="cadastro-etapas.html" class="btn btn-contorno-claro">Como funciona o cadastro</a>
                </div>
            </div>
        </section>
    </main>
    <script>
    (function () {
        var v = document.querySelectorAll('.sol-video video'); if (!v.length) return;
        var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
        v.forEach(function (el) { if (reduz) { el.removeAttribute('autoplay'); el.setAttribute('controls', ''); el.pause(); } });
        if (!reduz && 'IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (es) { es.forEach(function (e) { var el = e.target; if (e.isIntersecting) { var r = el.play(); if (r && r.catch) r.catch(function () {}); } else el.pause(); }); }, { threshold: .35 });
            v.forEach(function (el) { io.observe(el); });
        }
        /* Ampliar (celular): telas só de computador abrem o vídeo inteiro em tela cheia, girado para a horizontal */
        document.querySelectorAll('.sol-ampliar').forEach(function (b) {
            b.addEventListener('click', function () {
                var orig = b.parentNode.querySelector('video');
                var o = document.createElement('div'); o.className = 'sol-lightbox';
                var c = document.createElement('video'); c.muted = true; c.loop = true; c.autoplay = true; c.playsInline = true; c.setAttribute('controls', '');
                c.innerHTML = orig.innerHTML; c.setAttribute('poster', orig.getAttribute('poster') || '');
                var x = document.createElement('button'); x.type = 'button'; x.className = 'sol-fechar'; x.setAttribute('aria-label', 'Fechar'); x.textContent = '×';
                o.appendChild(c); o.appendChild(x); document.body.appendChild(o); document.body.style.overflow = 'hidden';
                var p = c.play(); if (p && p.catch) p.catch(function () {});
                function fechar() { o.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', tecla); }
                function tecla(e) { if (e.key === 'Escape') fechar(); }
                x.addEventListener('click', fechar); document.addEventListener('keydown', tecla);
            });
        });
    })();
    </script>
`;
    const html = `${h}</head>\n\n<body>\n    ${cabecalho}\n${corpo}\n    ${rodape}${fim}`;
    const alvo = path.join(raiz, pg.arq);
    if (!fs.existsSync(alvo) || fs.readFileSync(alvo, 'utf8') !== html) fs.writeFileSync(alvo, html);
};
PAGINAS.forEach(gerar);
fs.writeFileSync(path.join(__dirname, 'paginas-seo.json'), JSON.stringify(PAGINAS.map(x => x.arq), null, 2) + '\n');
console.log(PAGINAS.length + ' páginas de soluções geradas');
