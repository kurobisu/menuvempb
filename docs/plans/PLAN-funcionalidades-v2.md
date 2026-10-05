# PLAN — Funcionalidades v2 (varredura do menuvempb-instagram)

Data: 2026-10-05 · Status: **aprovado pelo Clóvis (respostas na seção 3); em implementação**

Fontes: `~/menuvempb-instagram/pesquisa/funcionalidades/BASE-DE-CONHECIMENTO.md` (manda no que pode ser divulgado) e o catálogo das telas (`catalogo/*.md`, só afirmações marcadas ✅ "visto na tela"). Levantamento feito em duas rodadas pelo agy e revisado pelo Claude: frases reescritas, itens que contradiziam a base removidos (Disputas, código de recuperação gerado pelo cliente, validação opcional na mesa, cor do tema, dados da nota preenchidos pelo cliente).

Regras mantidas: sem valores de terceiros, TEF, Machine/Saipos, Comandas, horário do suporte, cidades, Plano 0, custo por nota, balança/gaveta, agendamento, venda por peso no delivery, Disputas.

## 1. Nova organização da página (5 categorias)

| Categoria | Módulos (✚ = novo) |
|---|---|
| Delivery e Cardápio | Cardápio digital próprio · Gestão de cardápio · Fidelidade e cupons · Automação no WhatsApp · iFood, 99Food, Keeta e Aiqfome · Entregas e entregadores · Pagamento online e na entrega |
| Salão e Frente de Caixa | PDV no balcão · Controle de mesas · Setores de produção (KDS) · QR Code na mesa · Painel de senhas na TV · ✚ Impressão |
| ✚ Clientes e Marketing | ✚ Clientes · ✚ Avaliações · ✚ Anúncios e Google |
| ✚ Equipe | Usuários e permissões · ✚ Taxa de serviço e acertos da equipe |
| Gestão, Financeiro e Fiscal | Controle de estoque · Nota fiscal · Carteira digital · Caixa e fechamento cego · Financeiro (era "Financeiro e relatórios") · ✚ Relatórios de vendas |

## 2. Itens novos por módulo (prontos pro site)

**Cardápio digital próprio**
- Tabela de taxa de entrega por bairro e mapa da área atendida, visíveis pro cliente no cardápio. (catálogo cliente-24 ✅)
- O cliente preenche o endereço pelo GPS do celular. (cliente-25 ✅)
- Informações da loja num só lugar: horário, formas de pagamento, entrega e retirada. (cliente-27 ✅)
- Loja fechada: o cliente vê o cardápio, mas não consegue pôr na sacola. (base P12)
- Quadros: banners, textos e vídeos seus dentro do cardápio. (modulos-09 ✅)
- Personalize logo, capa, título e descrição do cardápio. (gerais-05 ✅; sem citar a cor — ver confirmação 1)

**Gestão de cardápio**
- Escolha onde cada produto aparece: no delivery ou só no painel, pro balcão. (base Q04; cardapio-02 ✅)
- Preço por faixa no mesmo sabor ou complemento, sem duplicar o item. (base P05)
- Monte produtos por etapas, com mínimo e máximo de escolhas (ex.: quentinha). (cliente-28 ✅)
- Adicionais e brindes oferecidos durante a escolha do produto. (cliente-29 ✅)
- Reordene produtos e categorias arrastando. (cardapio-02 ✅)
- Pedido mínimo opcional. (base)
- Calendário de dias sem funcionamento (feriados, folgas), que bloqueia pedidos nessas datas. (gerais-04 ✅)

**Fidelidade e cupons**
- Promoção com selo e preço riscado ("de / por"), ligada e desligada por você. (base)
- Cupom impresso na comanda pra divulgar a campanha; relatório de desempenho de cada cupom. (base)
- Integração com o Fidelizar.me. (modulos-09 ✅; nome citável pela base)

**Automação no WhatsApp**
- O custo das mensagens do WhatsApp Oficial é da Meta, não da Menuvem. (base)

**Entregas e entregadores**
- O entregador é vinculado sozinho ao pedido quando ele vai pra preparo. (base 03/10)
- Taxa de entrega por bairro ou por distância. (config-entrega-07 ✅)
- Entrega grátis a partir de um valor de pedido. (config-entrega-07 ✅ — ver confirmação 3)
- Relatório de vendas por entregador pro acerto da noite. (vendas-12 ✅)

**Pagamento online e na entrega** (título ampliado)
- Pix com QR Code e "copia e cola" automáticos, sem custo (o lojista confere o depósito). (base Q19)
- Na entrega, o cliente já informa no pedido como vai pagar e de quanto precisa de troco. (cliente-26 ✅, base Q20)
- Taxa ou desconto por forma de pagamento, inclusive pra repassar o custo do cartão ao cliente. (formularios-20 ✅, base)

**PDV no balcão**
- Pedidos do delivery organizados em colunas por status, com atalhos pra imprimir e avisar o cliente. (operacao-01 ✅)
- Lançamento rápido de produtos montados (quentinhas, pizzas) no balcão. (formularios-23 ✅)
- Histórico de vendas com busca por cliente. (vendas-13 ✅)

**Controle de mesas**
- Escolha o modo do salão: mesas, painel de senhas ou fluxo livre. (formularios-22 ✅)
- Relatório de pedidos na mesa. (vendas-13 ✅)

**Setores de produção (KDS)**
- O gerente pode ver a produção agrupada, sem dividir por setor. (base Q55)

**✚ Impressão** (Salão)
- Prévia da comanda na tela, com ajuste de margens, fontes e largura do papel. (gerais-04 ✅)
- Impressão automática por setor. (já no site)
- Ajuda do suporte pra instalar e configurar as impressoras. (base Q51)

**✚ Clientes** (Clientes e Marketing)
- Cadastro de clientes com o histórico de pedidos e o total gasto de cada um. (clientes-pessoas-03, outros-14 ✅)
- Clientes inativos: quem parou de pedir há X dias, com a última compra e o total gasto, e exportação da lista. (outros-14 ✅)
- Bloqueio de números que passam trote. (outros-14 ✅)
- Código de validação gerado pelo lojista pra devolver o cadastro (e os pontos) a quem se desconectou. (base P14)

**✚ Avaliações** (Clientes e Marketing)
- O cliente avalia o pedido com estrelas e comentário; você vê a lista e o resumo do mês. (vendas-12 ✅ — ver confirmação 4)

**✚ Anúncios e Google** (Clientes e Marketing)
- Pixel e API de Conversões da Meta pra medir o resultado dos anúncios. (modulos-08 ✅)
- Catálogo do cardápio no Instagram e no Facebook, sempre atualizado. (modulos-08 ✅)
- Google Ads, Google Tag Manager e descrição do site pro Google. (modulos-08 ✅)

**✚ Taxa de serviço e acertos da equipe** (Equipe)
- Taxa de serviço (ex.: 10%) com rateio automático entre a equipe ou por atendente. (formularios-20/21 ✅)
- Acerto de diaristas no fim da noite. (financeiro-10 ✅)
- Acerto mensal de funcionários, já descontando o consumo na loja. (financeiro-10 ✅)
- Equipe, fornecedores e conveniados separados da lista de clientes. (clientes-pessoas-03 ✅)

**Nota fiscal**
- Emissão em lote, automática ou manual. (base R08)
- Busca automática dos dados da empresa pelo CNPJ. (gerais-05 ✅)
- Acesso exclusivo pro seu contador. (gerais-05 ✅)
- Exportação das notas emitidas. (outros-16 ✅)
- Edição dos dados fiscais de vários produtos de uma vez. (gerais-05 ✅)

**Carteira digital**
- Acerto de clientes: veja quem deve e lance os pagamentos ou adiantamentos. (financeiro-10 ✅)

**Caixa e fechamento cego**
- Caixas e contas separados (cofre, banco, Pix), com o saldo de cada um. (financeiro-10 ✅; sem integração bancária)

**Financeiro**
- Painel financeiro com entradas, saídas e resultado do mês. (financeiro-11 ✅)
- Fluxo de caixa com os lançamentos previstos. (outros-15 ✅)
- Mapa de recebimentos: pra onde foi o dinheiro de cada forma de pagamento. (financeiro-11 ✅)
- Rateio de despesas entre categorias do DRE. (financeiro-11 ✅)

**✚ Relatórios de vendas** (Gestão)
- Vendas do dia e do mês, ticket médio e divisão por forma de pagamento. (vendas-13 ✅)
- Resumo anual pra comparar os meses. (vendas-12 ✅)
- Vendas por bairro e desempenho de produtos e complementos. (vendas-13 ✅)
- Relatório de taxas pagas. (vendas-13 ✅)
- Dia operacional pra quem fecha depois da meia-noite. (base Q56)

## 3. A confirmar com o Clóvis

1. **Tema do cardápio:** posso citar "logo, capa, título e descrição"? E a troca de **cor**? (a base diz pra não afirmar que a cor gera tons): Sim, a personalização de cor no tema do cardápio é para botões, textos, e outros que não o fundo do site, então existe e é personalizável. 
2. **Contatos (opt-in):** divulgar a lista de clientes que aceitaram receber promoções? (encosta na regra de disparo em massa): Vamos manter isso arquivado.
3. **Entrega grátis:** a regra vale pra todos os bairros de uma vez?: Sim, a regra ao ser ativada é válida para todos os bairros, o lojista pode sim definir apenas bairros específicos também, mas a função de "Entrega grátis à partir de R$XX" é pra todos os bairros ativos e cadastrados pelo lojista.
4. **Avaliações:** pode divulgar que o cliente avalia o pedido?: Sim, mas deixando claro que a avaliação é apenas um feedback interno, não é exibido em vitrine de forma que possa prejudicar a loja em caso de avaliação negativa.
5. **Integrações de parceiros:** citar Fidelizar.me no site? E o Repediu (CRM)?: Não precisa citar Fidelizar.me, mas pode citar o Repediu.
6. **Destaques da home:** quais 3 a 6 entram nos cards da home? Sugestões: clientes inativos; avaliações; anúncios Meta/Google; taxa de serviço com rateio; acesso do contador e nota em lote; montagem de quentinha por etapas.: Não sei, vê o que é mais atrativo pro lojista e coloca.

### Decisões aplicadas (Claude, 2026-10-05)
- Tema: cita logo, capa, título, descrição e a **cor dos botões e destaques** (não do fundo).
- Contatos/opt-in: arquivado, fora do site.
- Entrega grátis: "a partir de um valor, para todos os bairros cadastrados (ou só bairros escolhidos)".
- Avaliações: entram como **retorno interno**, que não fica público no cardápio.
- Fidelizar.me sai do site; Repediu entra no módulo Clientes.
- Home: cards de recursos atualizados com os itens de maior apelo (quentinha por etapas e entrega grátis; taxa de serviço com rateio; nota em lote e acesso do contador; clientes inativos e avaliações; Meta/Google e relatórios por bairro e produto).

## 4. Não publicar (encontrado e excluído)

Disputas do iFood (arquivado) · TEF e integração com maquininha · Exportação para Saipos · Machine · valores de Pix/cartão/AvantePay · créditos por nota · Open Finance/integração bancária (não existe) · PDF/boleto de fatura do fiado (em construção) · exportação do relatório de entregadores (só no painel) · horário do suporte.
