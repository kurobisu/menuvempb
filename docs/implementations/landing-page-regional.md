# Implementação Final: Landing Page Regional (menuvempb.com)

## Objetivo
Desenvolvimento e publicação de uma landing page regional mobile-first sob medida para a Menuvem no estado da Paraíba (PB), combinando design de alto padrão (Framer-like), performance excepcional e copy adaptada para quebrar objeções comerciais da região.

## Arquivos Afetados (Client-Side)
- [index.html](file:///home/clovis/Git/menuvempb/index.html) - Estrutura e marcação com SEO avançado.
- [css/style.css](file:///home/clovis/Git/menuvempb/css/style.css) - Design System, Bento Grid e estilização moderna.
- [js/main.js](file:///home/clovis/Git/menuvempb/js/main.js) - Controladores interativos da calculadora, FAQ e animações de scroll.

## Lógica e Funcionamento
1. **Design System & Acessibilidade**: Interface em Dark Mode premium (`#050508`) utilizando a paleta de cores oficial da Menuvem (extraída do site oficial): Roxo (`#641DDE`) como primário e Amarelo (`#F2C200`) como secundário/acento. Uso de SVGs inline nativos para todos os gráficos (evitando carregar arquivos externos pesados de imagem/vídeo).
2. **Mockup do Sistema**: Um mockup vetorial interativo (SVG) que ilustra o painel do Gestor de Pedidos da Menuvem com pedidos em andamento (iFood, WhatsApp e QR Code), dados de faturamento e status ativo de suporte na PB.
3. **Ordem das Seções**: Reordenado para fluxo de conversão otimizado:
   - 1º: Hero Section (Abertura / Mockup)
   - 2º: Planos & Calculadora de faturamento (Fácil visualização de preços e 30 dias grátis)
   - 3º: Bento Grid de Soluções (Detalhes das funcionalidades principais)
   - 4º: O Fator Local (Particularidades do suporte regional)
   - 5º: Prova Social & FAQ
4. **O Fator Local**: Seção com mapa da Paraíba redesenhado em SVG inline. A copy foi ajustada para destacar o suporte regional dedicado das **10h às 21h30 todos os dias** (incluindo fins de semana). Explicita-se que apresentações, treinamentos e setups são 100% online por videoconferência (custo de setup zero / R$ 0), e suporte presencial é restrito a casos muito especiais na região da Grande João Pessoa (João Pessoa, Bayeux, Cabedelo, Conde e Santa Rita).
5. **Calculadora Dinâmica de Planos**: Slider interativo de faturamento mensal acoplado a add-ons. 
   - Se faturamento <= R$ 8.000: O Plano Bronze (R$ 149/mês) é destacado.
   - Se faturamento de R$ 8.001 a R$ 25.000: O Plano Prata (R$ 249/mês) é destacado.
   - Se faturamento > R$ 25.000: O Plano Ouro (R$ 349/mês) é destacado.
   - Ativação de add-ons (Chatbot +R$99, TEF +R$79, Fiscal +R$49) soma o valor ao plano e executa uma animação de contagem numérica fluida em JS.
   - Todo o site comunica a oferta de **30 dias de teste gratuito** sem investimento inicial.

## Dependências
- Google Fonts (Outfit e Inter) - Carregadas remotamente de forma assíncrona.
- Recursos estáticos e SVGs integrados inline.

## Histórico de Modificações
- **2026-07-15:** Implementação e documentação iniciais criadas por Antigravity.
- **2026-07-16:** Substituição de cores pelas oficiais da Menuvem (Roxo `#641DDE` e Amarelo `#F2C200`), reordenação de seções colocando a calculadora em 2º lugar e Soluções em 3º, e ajuste geral de copy para 30 dias grátis, suporte 10h-21h30 e foco em videoconferência/setup gratuito.
