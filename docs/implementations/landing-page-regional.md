# Implementação Final: Landing Page Regional (menuvempb.com)

## Objetivo
Desenvolvimento e publicação de uma landing page regional mobile-first sob medida para a Menuvem no estado da Paraíba (PB), combinando design de alto padrão (Framer-like), performance excepcional e copy adaptada para quebrar objeções comerciais da região.

## Arquivos Afetados (Client-Side)
- [index.html](file:///home/clovis/Git/menuvempb/index.html) - Estrutura e marcação com SEO avançado.
- [cadastro-etapas.html](file:///home/clovis/Git/menuvempb/cadastro-etapas.html) - Página explicativa das etapas de cadastro.
- [css/style.css](file:///home/clovis/Git/menuvempb/css/style.css) - Design System, Bento Grid e estilização moderna.
- [js/main.js](file:///home/clovis/Git/menuvempb/js/main.js) - Controladores interativos da calculadora, FAQ, alternância de abas de funcionalidades e animações de scroll.

## Lógica e Funcionamento
1. **Design System & Acessibilidade**:
   - **Tema Escuro Fixo (Padrão Oficial)**: O site opera exclusivamente no tema escuro padrão. Utiliza fundo preto espacial (`#050508`) e cores clássicas de alto contraste da Menuvem: Roxo (`#641DDE`) e Amarelo (`#F2C200`).
   - **Seção de Recursos Interativa (Abas)**: Nova seção `#funcionalidades` com botões controladores (`.func-tab-btn`) que alternam dinamicamente a exibição de 4 painéis de grid (`Cardápio & Delivery`, `PDV`, `Estoque` e `Financeiro`). Os botões possuem `role="tab"` e respondem ao teclado (Tab/Enter/Espaço) com acessibilidade semântica. No mobile, as abas são roláveis horizontalmente com arraste suave e ocultação da barra de rolagem nativa. As transições usam fade-in de 0.4s com scale sutil (`transform: scale(...)`).
2. **Ordem das Seções**: Reordenado para fluxo de conversão otimizado:
   - 1º: Hero Section (Abertura / Mockup)
   - 2º: Planos & Calculadora de faturamento (Bronze R$ 167, Prata R$ 227, Ouro R$ 267)
   - 3º: Bento Grid de Soluções
   - 3.5º: Seção Interativa de Funcionalidades (Cardápio, PDV, Estoque, Financeiro)
   - 4º: O Fator Local
   - 5º: Prova Social & FAQ
3. **Fluxos de Entrada & Ativação de Gratuidade**:
   - **Login**: Botão com ênfase no topo (Header) e no rodapé/menus apontando diretamente para `https://painel.menuvem.com.br` para usuários existentes.
   - **Etapas de Cadastro**: Link de cadastro agora aponta para a nova página explicativa `cadastro-etapas.html`. Nela, detalha-se de forma clara e interativa as 3 etapas de onboarding:
     - *Etapa 1*: Clicar no link personalizado `https://painel.menuvem.com.br/#/cadastro/23/clovis` para cadastrar o estabelecimento.
     - *Etapa 2*: Após validação de dados via WhatsApp/E-mail, realizar o primeiro login de teste em `https://painel.menuvem.com.br`.
     - *Etapa 3*: Chamar o WhatsApp de Suporte PB no número **(83) 9 8855-9423** para ativar o bônus de 30 dias grátis e o plano mensal escolhido.
4. **Modelo de Suporte Regional**:
   - Mapeamos a copy em todo o site para exibir apenas **"suporte humano todos os dias"** ou **"suporte todos os dias"**.
   - O horário exato de suporte regional (**das 10h às 21h30 todos os dias**) é visível exclusivamente na seção de **Perguntas Frequentes (FAQ)**.
   - O suporte presencial é restrito a casos muito especiais na Grande JPA (João Pessoa, Bayeux, Cabedelo, Conde e Santa Rita), com foco principal em implantações online via videoconferência (R$ 0).

## Dependências
- Google Fonts (Outfit e Inter) - Carregadas remotamente de forma assíncrona.
- Recursos estáticos e SVGs integrados inline.

## Histórico de Modificações
- **2026-07-15:** Implementação e documentação iniciais criadas por Antigravity.
- **2026-07-16:** Adaptação de copy regional, precificação de planos, fluxo guiado em `cadastro-etapas.html` e exclusão de temas claros para retorno ao visual escuro original da marca.
- **2026-07-16 (Ajustes de Copy e Prova Social pelo Usuário - Commit 47689f7):** Depoimentos reais de estabelecimentos da Paraíba e dados oficiais corporativos atualizados no footer.
- **2026-07-16 (Ajustes de Acessibilidade - Commit 71bbaa1):** Criação e refinamento de tooltip interativo (i) na timeline de cadastro de etapas.
- **2026-07-17 (Seção de Recursos Menuvem Style - Commit 4ec30e8):** Inclusão e estilização de abas e grids dinâmicos para visualização de 16 recursos detalhados do sistema.
