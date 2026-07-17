document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initBentoSpotlight();
    initPlansCalculator();
    initFaq();
    initMenuvemFunctionalities();
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

/* --- Calculadora de Planos Interativa --- */
function initPlansCalculator() {
    const slider = document.getElementById('faturamento-slider');
    const display = document.getElementById('faturamento-val');
    
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
    
    if (!slider || !display) return;

    // Valores Base dos Planos
    const BASE_SECRETO = 100;
    const BASE_BRONZE = 167;
    const BASE_PRATA = 227;
    const BASE_OURO = 267;
    
    // Custos dos Add-ons (Atualmente inclusos: R$ 0)
    const COST_CHATBOT = 0;
    const COST_TEF = 0;
    const COST_FISCAL = 0;

    // Atualizar cálculo e estados
    function updateCalculator() {
        const faturamento = parseInt(slider.value, 10);
        
        // Atualiza o texto do faturamento no display formatado como moeda
        if (faturamento >= 50000) {
            display.textContent = 'Mais de R$ 50.000';
        } else {
            display.textContent = `R$ ${faturamento.toLocaleString('pt-BR')}`;
        }
        
        // Calcula o custo dos add-ons ativos
        let totalAddons = 0;
        if (addChatbot && addChatbot.classList.contains('addon-active')) totalAddons += COST_CHATBOT;
        if (addTef && addTef.classList.contains('addon-active')) totalAddons += COST_TEF;
        if (addFiscal && addFiscal.classList.contains('addon-active')) totalAddons += COST_FISCAL;
        
        // Preço final dos planos (Base + Add-ons)
        const finalSecreto = BASE_SECRETO + totalAddons;
        const finalBronze = BASE_BRONZE + totalAddons;
        const finalPrata = BASE_PRATA + totalAddons;
        const finalOuro = BASE_OURO + totalAddons;
        
        // Renderizar preços com transição de números
        if(priceSecreto) animateValue(priceSecreto, parseInt(priceSecreto.textContent) || BASE_SECRETO, finalSecreto, 300);
        animateValue(priceBronze, parseInt(priceBronze.textContent) || BASE_BRONZE, finalBronze, 300);
        animateValue(pricePrata, parseInt(pricePrata.textContent) || BASE_PRATA, finalPrata, 300);
        animateValue(priceOuro, parseInt(priceOuro.textContent) || BASE_OURO, finalOuro, 300);
        
        // Ajuste layout do grid para centralizar o card único
        const grid = document.querySelector('.plans-grid');
        if(grid) {
            grid.style.display = 'flex';
            grid.style.justifyContent = 'center';
            grid.style.alignItems = 'center';
        }

        if (faturamento === 1000) {
            setFeaturedPlan(cardSecreto, 'Plano Secreto 🕵️‍♂️', [cardBronze, cardPrata, cardOuro]);
        } else if (faturamento > 1000 && faturamento <= 20000) {
            setFeaturedPlan(cardBronze, 'Plano 1', [cardSecreto, cardPrata, cardOuro]);
        } else if (faturamento > 20000 && faturamento <= 35000) {
            setFeaturedPlan(cardPrata, 'Plano 2', [cardSecreto, cardBronze, cardOuro]);
        } else {
            setFeaturedPlan(cardOuro, 'Plano 3', [cardSecreto, cardBronze, cardPrata]);
        }
    }
    
    function setFeaturedPlan(featuredCard, badgeText, secondaryCards) {
        if (!featuredCard) return;
        
        featuredCard.style.display = 'flex';
        featuredCard.style.width = '100%';
        featuredCard.style.maxWidth = '400px';
        featuredCard.classList.remove('plan-card-hidden');
        featuredCard.classList.add('plan-card-featured');
        featuredCard.setAttribute('data-badge', badgeText);
        
        secondaryCards.forEach(card => {
            if (!card) return;
            card.style.display = 'none';
            card.classList.remove('plan-card-featured');
            card.removeAttribute('data-badge');
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

    // Listeners do Slider
    slider.addEventListener('input', updateCalculator);
    
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
            updateCalculator();
        });
    });

    // Setup Inicial
    updateCalculator();
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
