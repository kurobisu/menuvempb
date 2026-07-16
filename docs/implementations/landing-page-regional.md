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
4. **Fluxos de Entrada & Ativação de Gratuidade**:
   - **Cadastro Autônomo**: Link direto enfatizado (`https://painel.menuvem.com.br/#/cadastro/23/clovis`) para clientes que desejam criar suas contas de forma independente.
   - **Ativação da Gratuidade de 30 Dias**: Ênfase no contato obrigatório com o **WhatsApp do Suporte PB (83) 9 8855-9423**. A copy deixa explícito que o bônus de 30 dias grátis só pode ser ativado e configurado sob demanda pela equipe regional de suporte.
5. **Calculadora Dinâmica de Planos**: Slider interativo de faturamento mensal acoplado a add-ons. 
   - **Preços dos Planos**:
     - Plano 1 (Bronze): R$ 167/mês
     - Plano 2 (Prata): R$ 227/mês
     - Plano 3 (Ouro): R$ 267/mês
   - **Add-ons Inclusos (Custo R$ 00)**: Atendente IA (WhatsApp), Integração TEF e Emissão Fiscal Ilimitada aparecem com valor original cortado para indicar que agora já fazem parte dos planos básicos sem custos extras. O código JS foi ajustado para somar R$ 0 por estes módulos (COST_CHATBOT, COST_TEF, COST_FISCAL = 0).
6. **O Fator Local**: Seção com mapa da Paraíba redesenhado em SVG inline. A copy destaca o suporte regional dedicado das **10h às 21h30 todos os dias** da semana. Explicita-se que apresentações, treinamentos e setups são 100% online por videoconferência, e suporte presencial é restrito a casos muito especiais e limitado apenas a João Pessoa, Bayeux, Cabedelo, Conde e Santa Rita.

## Dependências
- Google Fonts (Outfit e Inter) - Carregadas remotamente de forma assíncrona.
- Recursos estáticos e SVGs integrados inline.

## Histórico de Modificações
- **2026-07-15:** Implementação e documentação iniciais criadas por Antigravity.
- **2026-07-16:** Substituição de cores pelas oficiais da Menuvem (Roxo `#641DDE` e Amarelo `#F2C200`), reordenação de seções colocando a calculadora em 2º lugar e Soluções em 3º, e ajuste geral de copy para 30 dias grátis, suporte 10h-21h30 e foco em videoconferência/setup gratuito.
- **2026-07-16:** Ajuste de planos (R$ 167, R$ 227, R$ 267) e add-ons (R$ 0), e ênfase nos botões/links de cadastro autônomo (painel) e contato no WhatsApp de suporte regional `(83) 9 8855-9423` para ativação manual do bônus de 30 dias de gratuidade.
