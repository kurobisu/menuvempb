# PLAN-landing-page-regional: Reconstrução da Landing Page Regional (menuvempb.com)

## Objetivo
Desenvolver do zero uma landing page regional sob medida e altamente performática para a Menuvem no mercado da Paraíba. O foco é uma interface premium (estilo Framer/Yooga/SaaS), mobile-first, contendo um Bento Grid de soluções, prova social dinâmica de clientes locais, seção do Fator Local e uma calculadora de planos interativa baseada no faturamento mensal com opcionais adicionais.

## Arquivos Afetados
- `index.html` (Client)
- `cadastro-etapas.html` (Client)
- `css/style.css` (Client)
- `js/main.js` (Client)

## Lógica e Arquitetura
1. **Design System & Acessibilidade:** Uso de variáveis CSS para controle estrito de cores, sombras e transições. O site utiliza por padrão e de forma fixa o tema escuro oficial da marca.
2. **Mobile-First & Grid:** Layout responsivo baseado em CSS Flexbox e Grid, otimizado para navegação mobile rápida.
3. **Animações Fluidas:** Ativação de classes de entrada via scroll usando o `IntersectionObserver` em JavaScript, acelerando via propriedades de renderização de GPU.
4. **Calculadora Dinâmica:** Slider de faturamento mensal e seletores de add-ons que recalculam e renderizam os preços dinamicamente em JS puro.
5. **Fluxo de Cadastro Guiado:** Nova página de etapas (`cadastro-etapas.html`) detalhando as 3 etapas essenciais para novos clientes criarem suas contas e ativarem a gratuidade de forma guiada e sem fricção.

## Dependências
- Google Fonts (Outfit e Inter)
- SVGs Inline (para maior performance e sem downloads de recursos pesados)

## Histórico de Modificações
- **2026-07-15:** Planejamento inicial criado.
- **2026-07-15:** Execução e implementação total realizada com sucesso, atendendo às modificações solicitadas pelo usuário (não utilização de mídias de vídeo/imagem diretas e exclusão do Kanban).
- **2026-07-16:** Coleta de cores oficiais da Menuvem (`#641DDE` e `#F2C200`) a partir do site institucional oficial e aplicação no CSS. Reordenação das seções (Planos agora é a 2ª seção e Bento Grid de Soluções a 3ª). Atualização de copy para 30 dias de teste gratuito, suporte regional diário das 10h às 21h30 (sem 24/7) e suporte presencial restrito em casos muito especiais a João Pessoa, Bayeux, Cabedelo, Conde e Santa Rita, priorizando videoconferência e setup gratuito remoto.
- **2026-07-16:** Atualização dos preços base dos planos na calculadora e HTML (Plano 1: R$ 167, Plano 2: R$ 227 e Plano 3: R$ 267). Configuração de Add-ons como gratuitos (R$ 0, inclusos nos planos padrão). Inclusão do link de cadastro autônomo (`https://painel.menuvem.com.br/#/cadastro/23/clovis`) e link de WhatsApp de Suporte PB (`(83) 9 8855-9423`) com ênfase na obrigatoriedade do contato para ativação dos 30 dias grátis.
- **2026-07-16:** Criação da página `cadastro-etapas.html` detalhando a timeline de 3 etapas para cadastro do estabelecimento, primeiro login e ativação de bônus com o Suporte PB. Destaque para o botão de Login (painel) em todo o site. Restrição do horário do suporte para ser visível apenas na seção FAQ/Dúvidas (exibindo suporte humano "todos os dias" em outras seções).
- **2026-07-16:** Restauração total das cores do Tema Escuro fixo original sob demanda e remoção do botão de alternância de tema no cabeçalho das páginas `index.html` e `cadastro-etapas.html`.
- **2026-07-16 (Ajustes Manuais do Usuário):** Levantamento e registro das alterações textuais e de depoimentos feitas pelo usuário no commit `47689f7` (veja `TASK-desenvolvimento-lp.md`).
- **2026-07-16 (Ajustes de Acessibilidade):** Implementação de um tooltip interativo e acessível na Etapa 3 de cadastro para alertar sobre o plano correto (commit `71bbaa1`).
