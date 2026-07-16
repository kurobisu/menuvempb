# Implementação Final: Landing Page Regional (menuvempb.com)

## Objetivo
Desenvolvimento e publicação de uma landing page regional mobile-first sob medida para a Menuvem no estado da Paraíba (PB), combinando design de alto padrão (Framer-like), performance excepcional e copy adaptada para quebrar objeções comerciais da região.

## Arquivos Afetados (Client-Side)
- [index.html](file:///home/clovis/Git/menuvempb/index.html) - Estrutura e marcação com SEO avançado.
- [css/style.css](file:///home/clovis/Git/menuvempb/css/style.css) - Design System, Bento Grid e estilização moderna.
- [js/main.js](file:///home/clovis/Git/menuvempb/js/main.js) - Controladores interativos da calculadora, FAQ e animações de scroll.

## Lógica e Funcionamento
1. **Design System & Acessibilidade**: Interface em Dark Mode premium (`#050508`) com gradientes em roxo-violeta (`#8b5cf6`), ciano (`#0ea5e9`) e rosa-fuchsia (`#d946ef`). Uso de SVGs inline nativos para todos os gráficos (evitando carregar arquivos externos pesados de imagem/vídeo).
2. **Mockup do Sistema**: Um mockup vetorial interativo (SVG) que ilustra o painel do Gestor de Pedidos da Menuvem com pedidos em andamento (iFood, WhatsApp e QR Code), dados de faturamento e status ativo de suporte na PB.
3. **Bento Grid de Soluções**: Layout assimétrico e responsivo destacando o gestor integrado, a impressão automática, o cardápio próprio e a integração fiscal (SEFAZ-PB). Efeito de spotlight dinâmico ativado via mouse (`mousemove` e propriedades CSS `--mouse-x` / `--mouse-y`).
4. **O Fator Local**: Seção com mapa da Paraíba redesenhado em SVG inline, com pins e pulsações neon em João Pessoa e Campina Grande, ressaltando o plantão de suporte de final de semana na região.
5. **Prova Social Contínua**: Carrossel horizontal infinito (Marquee) em CSS puro (`@keyframes marquee`) apresentando depoimentos de estabelecimentos mockados na Paraíba (ex: Mangai Cabo Branco, Pizzaria Cantina em Campina Grande).
6. **Calculadora Dinâmica de Planos**: Slider interativo de faturamento mensal acoplado a add-ons. 
   - Se faturamento <= R$ 8.000: O Plano Bronze (R$ 149/mês) é destacado.
   - Se faturamento de R$ 8.001 a R$ 25.000: O Plano Prata (R$ 249/mês) é destacado.
   - Se faturamento > R$ 25.000: O Plano Ouro (R$ 349/mês) é destacado.
   - Ativação de add-ons (Chatbot +R$99, TEF +R$79, Fiscal +R$49) soma o valor ao plano e executa uma animação de contagem numérica fluida em JS.
7. **FAQ Acordeão**: Sistema sanfona para quebra de objeções.

## Dependências
- Google Fonts (Outfit e Inter) - Carregadas remotamente de forma assíncrona.
- Recursos estáticos e SVGs integrados inline.

## Histórico de Modificações
- **2026-07-15:** Implementação e documentação iniciais criadas por Antigravity.
