# Implementação Final: Landing Page Regional (menuvempb.com)

## Objetivo
Desenvolvimento e publicação de uma landing page regional mobile-first sob medida para a Menuvem no estado da Paraíba (PB), combinando design de alto padrão (Framer-like), performance excepcional e copy adaptada para quebrar objeções comerciais da região.

## Arquivos Afetados (Client-Side)
- [index.html](file:///home/clovis/Git/menuvempb/index.html) - Estrutura e marcação com SEO avançado.
- [cadastro-etapas.html](file:///home/clovis/Git/menuvempb/cadastro-etapas.html) - Página explicativa das etapas de cadastro.
- [css/style.css](file:///home/clovis/Git/menuvempb/css/style.css) - Design System, Bento Grid e estilização moderna.
- [js/main.js](file:///home/clovis/Git/menuvempb/js/main.js) - Controladores interativos da calculadora, FAQ e animações de scroll.

## Lógica e Funcionamento
1. **Design System & Acessibilidade**:
   - **Tema Escuro Fixo (Padrão Oficial)**: O site opera exclusivamente no tema escuro padrão. Utiliza fundo preto espacial (`#050508`) e cores clássicas de alto contraste da Menuvem: Roxo (`#641DDE`) e Amarelo (`#F2C200`).
   - **Tooltip Informativo Acessível**: Inserido ao lado do botão de WhatsApp na Etapa 3 de cadastro para alertar contra a contratação autônoma de plano. O elemento possui `tabindex="0"`, suporta navegação por teclado via `:focus-within` e exibe alto contraste sob fundo sólido escuro `#0d0d16` e texto em `var(--text-primary)`. No mobile, o layout flexbox assegura que o ícone permaneça posicionado ao lado do botão sem quebras de linha soltas.
2. **Ordem das Seções**: Reordenado para fluxo de conversão otimizado:
   - 1º: Hero Section (Abertura / Mockup)
   - 2º: Planos & Calculadora de faturamento (Bronze R$ 167, Prata R$ 227, Ouro R$ 267)
   - 3º: Bento Grid de Soluções
   - 4º: O Fator Local
   - 5º: Prova Social & FAQ
3. **Fluxos de Entrada & Ativação de Gratuidade**:
   - **Login**: Botão com ênfase no topo (Header) e no rodapé/menus apontando diretamente para `https://painel.menuvem.com.br` para usuários existentes.
   - **Etapas de Cadastro**: Link de cadastro agora aponta para a nova página explicativa `cadastro-etapas.html`. Nela, detalha-se de forma clara e interativa as 3 etapas de onboarding:
     - *Etapa 1*: Clicar no link personalizado `https://painel.menuvem.com.br/#/cadastro/23/clovis` para cadastrar o estabelecimento.
     - *Etapa 2*: Após validação de dados via WhatsApp/E-mail, realizar o primeiro login de teste em `https://painel.menuvem.com.br`.
     - *Etapa 3*: Chamar o WhatsApp de Suporte PB no número **(83) 9 8855-9423** para ativar o bônus de 30 dias grátis e o plano mensal escolhido (a cobrar somente após o período de teste).
   - **Redes Sociais do Rodapé**:
     - Link do Instagram atualizado para direcionar à conta oficial da Paraíba: `https://www.instagram.com/menuvem.pb/`
     - Botão do Facebook removido e substituído por um atalho direto para o WhatsApp do Suporte PB `(83) 9 8855-9423`.
4. **Modelo de Suporte Regional**:
   - Mapeamos a copy em todo o site para exibir apenas **"suporte humano todos os dias"** ou **"suporte todos os dias"**.
   - O horário exato de suporte regional (**das 10h às 21h30 todos os dias**) é visível exclusivamente na seção de **Perguntas Frequentes (FAQ)**.
   - O suporte presencial é restrito a casos muito especiais na Grande JPA (João Pessoa, Bayeux, Cabedelo, Conde e Santa Rita), com foco principal em implantações online via videoconferência (R$ 0).

## Dependências
- Google Fonts (Outfit e Inter) - Carregadas remotamente de forma assíncrona.
- Recursos estáticos e SVGs integrados inline.

## Histórico de Modificações
- **2026-07-15:** Implementação e documentação iniciais criadas por Antigravity.
- **2026-07-16:** Substituição de cores pelas oficiais da Menuvem (Roxo `#641DDE` e Amarelo `#F2C200`), reordenação de seções colocando a calculadora em 2º lugar e Soluções em 3º, e ajuste geral de copy para 30 dias grátis, suporte 10h-21h30 e foco em videoconferência/setup gratuito.
- **2026-07-16:** Ajuste de planos (R$ 167, R$ 227, R$ 267) e add-ons (R$ 0), e ênfase nos botões/links de cadastro autônomo (painel) e contato no WhatsApp de suporte regional `(83) 9 8855-9423` para ativação manual do bônus de 30 dias de gratuidade.
- **2026-07-16:** Criação da página `cadastro-etapas.html` para fluxo de onboarding de 3 etapas. Adicionado botão de Login destacado, e centralização da informação de horário de suporte especificamente no FAQ.
- **2026-07-16:** Desenvolvimento do Tema Claro por padrão com alternador interativo para o Tema Escuro (Sol/Lua). Reestruturação do cabeçalho agrupando o seletor de temas e o hambúrguer em um contêiner flexível para assegurar o funcionamento responsivo em celulares.
- **2026-07-16:** Calibração fina e otimização do contraste no CSS seguindo a escala Slate (Tailwind/Yooga) atingindo conformidade com a acessibilidade WCAG AAA/AA.
- **2026-07-16:** Correção de gradientes e fundos estáticos no Hero, Planos e FAQ para contraste absoluto; atualização dos botões de redes sociais e atalho de WhatsApp no rodapé.
- **2026-07-16:** Remoção total das rotinas de temas dinâmicos (claro/escuro) e reincorporação do Tema Escuro fixo original em todo o projeto.
- **2026-07-16 (Ajustes de Copy e Prova Social pelo Usuário - Commit 47689f7):** Atualização dos depoimentos para Ponto Burgers, Rancho, Weel Pizza e Jaguaribe Espetos; alteração do domínio oficial do footer para `menuvempb.com.br` e razão social para `NUC Tecnologia - MenuvemPB`.
- **2026-07-16 (Ajustes de Acessibilidade - Commit 71bbaa1):** Criação e refinamento de tooltip interativo (i) na timeline de cadastro de etapas.
