# TASK-desenvolvimento-lp: Desenvolvimento da Landing Page Regional (menuvempb.com)

## Objetivos e Checklist
- [x] Criação do Design System em `css/style.css` (Cores, Fontes, Grid, Efeitos Globais)
- [x] Estrutura HTML semântica em `index.html` (Header, Hero, Bento Grid, Fator Local, Planos, FAQ, Footer)
- [x] Implementação de animações baseadas em Scroll com `IntersectionObserver` em `js/main.js`
- [x] Implementação da Calculadora Dinâmica de Planos com add-ons em `js/main.js`
- [x] Implementação do Carrossel Marquee infinito e interações do FAQ em `css/style.css` e `js/main.js`
- [x] Ajustes finos de responsividade mobile-first e acessibilidade (a11y)
- [x] Validação de performance, tags SEO e imagens
- [x] Criação da página explicativa de etapas de cadastro (`cadastro-etapas.html`)
- [x] Remoção de temas claro/escuro e fixação de Tema Escuro padrão da marca no CSS e HTML
- [x] Levantamento de ajustes manuais de conteúdo (depoimentos da PB, direitos autorais e descrições)
- [x] Implementação de tooltip (i) na Etapa 3 de cadastro-etapas.html com acessibilidade (tabindex) e responsividade móvel

## Histórico de Modificações
- **2026-07-15:** Criação da tarefa no Obsidian.
- **2026-07-15:** Conclusão de todas as tarefas e implementação completa dos arquivos estáticos (`index.html`, `css/style.css` e `js/main.js`).
- **2026-07-16:** Alteração e aplicação das cores oficiais obtidas da Menuvem, ajuste na ordem das seções (Planos em 2º, Soluções em 3º) e correção de copy para 30 dias gratuitos, suporte regional 10h-21h30 e foco em implantação/treinamento via videoconferência.
- **2026-07-16:** Alteração de preços básicos (R$ 167, R$ 227, R$ 267), add-ons gratuitos (R$ 0) e inclusão dos fluxos com ênfase de cadastro autônomo (link dedicado) e contato com o WhatsApp (83) 9 8855-9423 do Suporte PB para aplicar bônus de 30 dias.
- **2026-07-16:** Criação da página de etapas de cadastro (`cadastro-etapas.html`), ênfase no botão de Login do painel administrativo, e centralização da informação de horário de suporte especificamente no FAQ (deixando suporte "todos os dias" em outras seções).
- **2026-07-16:** Remoção das lógicas de Tema Claro/Escuro do CSS e do JS. Exclusão dos botões de alternância de tema no cabeçalho em `index.html` e `cadastro-etapas.html`.
- **2026-07-16 (Ajustes Manuais do Usuário - Commit 47689f7):**
  * *Hero*: Badge alterada para "Representante Oficial da Menuvem na Paraíba" e CTA alterado para "Experimente 30 Dias Grátis".
  * *Depoimentos*: Clientes locais atualizados para "Ponto Burgers" (João Pessoa), "Rancho" (Santa Rita), "Weel Pizza" (João Pessoa) e "Jaguaribe Espetos" (João Pessoa) com os respectivos depoimentos reais da operação.
  * *FAQ*: Remoção de detalhamento geográfico do suporte e ajuste nas respostas de gratuidade e montagem de cardápio para cobrir treinamento gratuito.
  * *Footer*: Razão social atualizada para "NUC Tecnologia - MenuvemPB" e domínio ajustado para "menuvempb.com.br".
- **2026-07-16 (Ajustes de Acessibilidade - Commit 71bbaa1):**
  * Criação do tooltip explicativo `(i)` na Etapa 3 de cadastro para alertar contra contratação autônoma de plano.
  * Estilização de contraste WCAG no balão explicativo (`#0d0d16` sólido e texto claro) com suporte a `focus-within`.
  * Adicionado `tabindex="0"` e suporte a leitores de tela no ícone.
  * Otimização de flexbox mobile para evitar a quebra do ícone.
