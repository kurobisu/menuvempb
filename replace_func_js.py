import re

with open("js/main.js", "r", encoding="utf-8") as f:
    js = f.read()

# Replace function call
js = js.replace("initFunctionalityTabs();", "initYoogaFunctionalities();")

# Replace function definition
new_func = """/* --- Seção de Funcionalidades Interativas (Estilo Yooga) --- */
function initYoogaFunctionalities() {
    const tabButtons = document.querySelectorAll('.yooga-tab-btn');
    const panes = document.querySelectorAll('.yooga-pane');
    
    if (tabButtons.length === 0 || panes.length === 0) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(`pane-${targetId}`);

            if (!targetPane) return;

            // Desativa todos os botões principais
            tabButtons.forEach(button => button.classList.remove('active'));
            // Oculta todos os painéis
            panes.forEach(pane => pane.classList.remove('active'));

            // Ativa o botão e o painel atual
            btn.classList.add('active');
            targetPane.classList.add('active');
            
            // Reseta o carrossel da nova aba para o primeiro slide
            const firstSubBtn = targetPane.querySelector('.yooga-sub-btn');
            if (firstSubBtn) {
                firstSubBtn.click();
            }
        });
    });

    // Lógica para cada Painel (Sidebar + Carrossel)
    panes.forEach(pane => {
        const subBtns = pane.querySelectorAll('.yooga-sub-btn');
        const cards = pane.querySelectorAll('.yooga-card');
        const prevBtn = pane.querySelector('.yooga-arrow.prev');
        const nextBtn = pane.querySelector('.yooga-arrow.next');

        if (subBtns.length === 0 || cards.length === 0) return;

        let currentIndex = 0;

        function updateCarousel(index) {
            subBtns.forEach(btn => btn.classList.remove('active'));
            cards.forEach(card => card.classList.remove('active'));

            if (subBtns[index]) subBtns[index].classList.add('active');
            if (cards[index]) cards[index].classList.add('active');
            currentIndex = index;
        }

        subBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                updateCarousel(index);
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = cards.length - 1;
                updateCarousel(newIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                let newIndex = currentIndex + 1;
                if (newIndex >= cards.length) newIndex = 0;
                updateCarousel(newIndex);
            });
        }
    });
}
"""

pattern = re.compile(r'/\* --- Seção de Funcionalidades Interativas \(Abas\) --- \*/.*?function initFunctionalityTabs\(\) \{.*?\}\s*$', re.DOTALL)
js = pattern.sub(new_func, js)

with open("js/main.js", "w", encoding="utf-8") as f:
    f.write(js)
