# PLAN-landing-page-regional: Reconstrução da Landing Page Regional (menuvempb.com)

## Objetivo
Desenvolver do zero uma landing page sob medida e altamente performática para a Menuvem no mercado da Paraíba. O foco é uma interface premium (estilo Framer/Yooga/SaaS), mobile-first, contendo um Bento Grid de soluções, prova social dinâmica de clientes locais, seção do Fator Local e uma calculadora de planos interativa baseada no faturamento mensal com opcionais adicionais.

## Arquivos Afetados
- `index.html` (Client)
- `css/style.css` (Client)
- `js/main.js` (Client)

## Lógica e Arquitetura
1. **Design System & Acessibilidade:** Uso de variáveis CSS para controle estrito de cores, sombras e transições.
2. **Mobile-First & Grid:** Layout responsivo baseado em CSS Flexbox e Grid, otimizado para navegação mobile rápida.
3. **Animações Fluidas:** Ativação de classes de entrada via scroll usando o `IntersectionObserver` em JavaScript, acelerando via propriedades de renderização de GPU.
4. **Calculadora Dinâmica:** Slider de faturamento mensal e seletores de add-ons que recalculam e renderizam os preços dinamicamente em JS puro.

## Dependências
- Google Fonts (Outfit e Inter)
- SVGs Inline (para maior performance e sem downloads de recursos pesados)

## Histórico de Modificações
- **2026-07-15:** Planejamento inicial criado.
- **2026-07-15:** Execução e implementação total realizada com sucesso, atendendo às modificações solicitadas pelo usuário (não utilização de mídias de vídeo/imagem diretas e exclusão do Kanban).
- **2026-07-16:** Coleta de cores oficiais da Menuvem (`#641DDE` e `#F2C200`) a partir do site institucional oficial e aplicação no CSS. Reordenação das seções (Planos agora é a 2ª seção e Bento Grid de Soluções a 3ª). Atualização de copy para 30 dias de teste gratuito, suporte regional diário das 10h às 21h30 (sem 24/7) e suporte presencial restrito em casos muito especiais a João Pessoa, Bayeux, Cabedelo, Conde e Santa Rita, priorizando videoconferência e setup gratuito remoto.
