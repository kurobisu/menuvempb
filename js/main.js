document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initBentoSpotlight();
    initPlansCalculator();
    initFaq();
    initMenuvemFunctionalities();
    initVideoViewToggle();
});

/* --- Cabeçalho Dinâmico --- */
function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

/* --- Menu Mobile --- */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('mobile-menu-active');
        
        // Altera o ícone de hambúrguer para fechar (X)
        if (isActive) {
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        } else {
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }
    });

    // Fechar ao clicar em um link
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu-active');
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });
    });
}

/* --- Animações de Entrada no Scroll --- */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (reveals.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Para elementos que só devem animar uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

/* --- Efeito Spotlight (Brilho do Mouse nas Bento Cards) --- */
function initBentoSpotlight() {
    const cards = document.querySelectorAll('.bento-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/* --- Carrossel de Planos Interativo --- */
function initPlansCalculator() {
    const cardSecreto = document.getElementById('plan-secreto');
    const cardBronze = document.getElementById('plan-bronze');
    const cardPrata = document.getElementById('plan-prata');
    const cardOuro = document.getElementById('plan-ouro');

    const priceSecreto = document.getElementById('price-secreto');
    const priceBronze = document.getElementById('price-bronze');
    const pricePrata = document.getElementById('price-prata');
    const priceOuro = document.getElementById('price-ouro');

    const addChatbot = document.getElementById('add-chatbot');
    const addTef = document.getElementById('add-tef');
    const addFiscal = document.getElementById('add-fiscal');

    const btnPrev = document.getElementById('btn-planos-prev');
    const btnNext = document.getElementById('btn-planos-next');

    const allCards = [cardSecreto, cardBronze, cardPrata, cardOuro];

    if (!btnPrev || !btnNext || allCards.some(card => !card)) return;

    // Valores Base dos Planos
    const BASE_SECRETO = 100;
    const BASE_BRONZE = 167;
    const BASE_PRATA = 227;
    const BASE_OURO = 267;

    // Custos dos Add-ons (Atualmente inclusos: R$ 0)
    const COST_CHATBOT = 0;
    const COST_TEF = 0;
    const COST_FISCAL = 0;

    // Inicia no Plano 1 (Iniciante); o Plano Secreto fica oculto à esquerda
    // e só aparece quando o usuário navega para trás a partir dele.
    let currentIndex = 1;

    // Atualiza os preços exibidos com base nos add-ons ativos
    function updatePrices() {
        let totalAddons = 0;
        if (addChatbot && addChatbot.classList.contains('addon-active')) totalAddons += COST_CHATBOT;
        if (addTef && addTef.classList.contains('addon-active')) totalAddons += COST_TEF;
        if (addFiscal && addFiscal.classList.contains('addon-active')) totalAddons += COST_FISCAL;

        const finalSecreto = BASE_SECRETO + totalAddons;
        const finalBronze = BASE_BRONZE + totalAddons;
        const finalPrata = BASE_PRATA + totalAddons;
        const finalOuro = BASE_OURO + totalAddons;

        if (priceSecreto) animateValue(priceSecreto, parseInt(priceSecreto.textContent) || BASE_SECRETO, finalSecreto, 300);
        animateValue(priceBronze, parseInt(priceBronze.textContent) || BASE_BRONZE, finalBronze, 300);
        animateValue(pricePrata, parseInt(pricePrata.textContent) || BASE_PRATA, finalPrata, 300);
        animateValue(priceOuro, parseInt(priceOuro.textContent) || BASE_OURO, finalOuro, 300);
    }

    function updateCoverflow(activeIndex) {
        allCards.forEach((card, idx) => {
            if (!card) return;

            // Remove as classes de estado do Coverflow
            card.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');

            // Adiciona as classes do Coverflow
            if (idx === activeIndex) {
                card.classList.add('active');
            } else if (idx === activeIndex - 1) {
                card.classList.add('prev');
            } else if (idx === activeIndex + 1) {
                card.classList.add('next');
            } else if (idx < activeIndex - 1) {
                card.classList.add('far-prev');
            } else if (idx > activeIndex + 1) {
                card.classList.add('far-next');
            }
        });
    }

    // Animação de contagem numérica suave para o preço
    function animateValue(obj, start, end, duration) {
        if (!obj) return;
        if (start === end) {
            obj.textContent = end;
            return;
        }
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.textContent = end;
            }
        };
        window.requestAnimationFrame(step);
    }

    // Listeners das Setas (sem loop: para no Secreto à esquerda e no Ouro à direita)
    btnPrev.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCoverflow(currentIndex);
    });

    btnNext.addEventListener('click', () => {
        currentIndex = Math.min(allCards.length - 1, currentIndex + 1);
        updateCoverflow(currentIndex);
    });

    // Arrastar/Deslizar os cards com o mouse ou toque (sem ficar preso nas setas)
    const track = document.querySelector('#planos .tcg-carousel-track');
    if (track) {
        const DRAG_THRESHOLD = 50;
        let startX = 0;
        let dragging = false;

        function onPointerMove(e) {
            if (!dragging) return;
            const deltaX = e.clientX - startX;

            if (deltaX <= -DRAG_THRESHOLD) {
                currentIndex = Math.min(allCards.length - 1, currentIndex + 1);
                updateCoverflow(currentIndex);
                endDrag();
            } else if (deltaX >= DRAG_THRESHOLD) {
                currentIndex = Math.max(0, currentIndex - 1);
                updateCoverflow(currentIndex);
                endDrag();
            }
        }

        function endDrag() {
            dragging = false;
            track.classList.remove('dragging');
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', endDrag);
        }

        track.addEventListener('pointerdown', (e) => {
            dragging = true;
            startX = e.clientX;
            track.classList.add('dragging');
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', endDrag);
        });
    }

    // Listeners dos Add-ons
    const addonCards = [
        { el: addChatbot, checkbox: document.getElementById('chk-chatbot') },
        { el: addTef, checkbox: document.getElementById('chk-tef') },
        { el: addFiscal, checkbox: document.getElementById('chk-fiscal') }
    ];

    addonCards.forEach(item => {
        if (!item.el) return;
        item.el.addEventListener('click', () => {
            item.el.classList.toggle('addon-active');
            updatePrices();
        });
    });

    // Setup Inicial
    updateCoverflow(currentIndex);
    updatePrices();
}

/* --- FAQ Acordeão --- */
function initFaq() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.parentElement;
            const isActive = faqItem.classList.contains('faq-item-active');
            
            // Fecha todas as outras perguntas abertas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('faq-item-active');
            });
            
            // Alterna o estado da pergunta atual
            if (!isActive) {
                faqItem.classList.add('faq-item-active');
            }
        });
    });
}

/* --- Seção de Funcionalidades Interativas (Estilo Menuvem) --- */
function initMenuvemFunctionalities() {
    const tabButtons = document.querySelectorAll('.menuvem-tab-btn');
    const panes = document.querySelectorAll('.menuvem-pane');
    
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
            const firstSubBtn = targetPane.querySelector('.menuvem-sub-btn');
            if (firstSubBtn) {
                firstSubBtn.click();
            }
        });
    });

    // Lógica para cada Painel (Sidebar + Carrossel)
    panes.forEach(pane => {
        const subBtns = pane.querySelectorAll('.menuvem-sub-btn');
        const cards = pane.querySelectorAll('.menuvem-card');
        const prevBtn = pane.querySelector('.menuvem-arrow.prev');
        const nextBtn = pane.querySelector('.menuvem-arrow.next');

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

/* --- Alternância Manual Mobile/Desktop do Vídeo do Hero (em qualquer tamanho de tela) --- */
function initVideoViewToggle() {
    const toggleBtn = document.getElementById('video-view-toggle');
    const heroMockup = document.getElementById('hero-mockup');
    const label = toggleBtn ? toggleBtn.querySelector('span') : null;

    if (!toggleBtn || !heroMockup || !label) return;

    const LABEL_DESKTOP = 'Ver versão Desktop';
    const LABEL_MOBILE = 'Ver versão Mobile';

    // Ponto de partida: a mesma versão que a tela já exibiria por padrão
    let showingDesktop = !window.matchMedia('(max-width: 768px)').matches;

    function render() {
        heroMockup.classList.toggle('force-desktop-video', showingDesktop);
        heroMockup.classList.toggle('force-mobile-video', !showingDesktop);
        toggleBtn.setAttribute('aria-pressed', String(showingDesktop));
        label.textContent = showingDesktop ? LABEL_MOBILE : LABEL_DESKTOP;
    }

    toggleBtn.addEventListener('click', () => {
        showingDesktop = !showingDesktop;
        render();
    });

    render();
}
