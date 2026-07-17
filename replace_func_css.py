import re

with open("css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

new_css = """/* --- Seção de Funcionalidades Interativas (Estilo Yooga) --- */
.functionalities {
    background: radial-gradient(circle at 50% 50%, rgba(100, 29, 222, 0.05) 0%, rgba(5, 5, 8, 0) 80%);
    border-top: 1px solid var(--border-color);
    padding: 5rem 0;
}

.yooga-tabs {
    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;
    margin-bottom: 3rem;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    scrollbar-width: none; /* Firefox */
}

.yooga-tabs::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}

@media (min-width: 768px) {
    .yooga-tabs {
        justify-content: center;
        overflow: visible;
        padding-bottom: 0;
    }
}

.yooga-tab-btn {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    font-family: var(--font-title);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.yooga-tab-btn:hover {
    border-color: rgba(100, 29, 222, 0.4);
    color: var(--text-primary);
    background: rgba(100, 29, 222, 0.05);
}

.yooga-tab-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--text-primary);
    box-shadow: 0 0 20px rgba(100, 29, 222, 0.4);
}

.yooga-pane {
    display: none;
    opacity: 0;
    animation: fadeInPane 0.4s ease forwards;
}

.yooga-pane.active {
    display: block;
}

@keyframes fadeInPane {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.yooga-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 992px) {
    .yooga-layout {
        flex-direction: row;
        gap: 3rem;
        align-items: flex-start;
    }
}

/* Sidebar (Left) */
.yooga-sidebar {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--bg-card);
}

.yooga-sidebar::-webkit-scrollbar {
    height: 6px;
}
.yooga-sidebar::-webkit-scrollbar-track {
    background: var(--bg-card);
    border-radius: 10px;
}
.yooga-sidebar::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
}

@media (min-width: 992px) {
    .yooga-sidebar {
        flex: 0 0 320px;
        flex-direction: column;
        overflow-x: visible;
        padding-bottom: 0;
    }
}

.yooga-sub-btn {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 1rem 1.25rem;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s;
    min-width: 200px;
    position: relative;
    overflow: hidden;
}

@media (min-width: 992px) {
    .yooga-sub-btn {
        min-width: 100%;
        padding: 1.25rem 1.5rem;
        font-size: 1rem;
    }
}

.yooga-sub-btn:hover {
    background: rgba(255,255,255,0.02);
    color: var(--text-primary);
    border-color: rgba(255,255,255,0.15);
}

.yooga-sub-btn.active {
    background: rgba(100, 29, 222, 0.1);
    border-color: var(--primary);
    color: var(--text-primary);
    font-weight: 600;
}

.yooga-sub-btn.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--primary);
}

/* Carousel (Right) */
.yooga-carousel {
    flex: 1;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    border: 1px solid var(--border-color);
    background: #000;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

@media (min-width: 992px) {
    .yooga-carousel {
        aspect-ratio: 16/9;
    }
}

.yooga-carousel-track {
    position: relative;
    width: 100%;
    height: 100%;
}

.yooga-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s;
    display: flex;
    align-items: flex-end;
}

.yooga-card.active {
    opacity: 1;
    visibility: visible;
}

.yooga-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 6s ease;
}

.yooga-card.active .yooga-card-bg {
    transform: scale(1.05);
}

.yooga-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
}

.yooga-card-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
    max-width: 80%;
}

@media (min-width: 768px) {
    .yooga-card-content {
        padding: 3rem;
        max-width: 60%;
    }
}

.yooga-card-content h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-family: var(--font-title);
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

@media (min-width: 768px) {
    .yooga-card-content h3 {
        font-size: 2rem;
    }
}

.yooga-card-content p {
    color: rgba(255,255,255,0.9);
    font-size: 0.95rem;
    line-height: 1.6;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

@media (min-width: 768px) {
    .yooga-card-content p {
        font-size: 1.05rem;
    }
}

/* Controls */
.yooga-carousel-controls {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    gap: 0.75rem;
    z-index: 3;
}

@media (max-width: 767px) {
    .yooga-carousel-controls {
        bottom: 1.5rem;
        right: 1.5rem;
    }
}

.yooga-arrow {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.2);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: bold;
}

.yooga-arrow:hover {
    background: var(--primary);
    border-color: var(--primary);
    transform: scale(1.1);
}

"""

pattern = re.compile(r'/\* --- Seção de Funcionalidades Interativas \(Estilo Yooga\) ---\s*\*/.*?/\* --- Footer & CTA Final --- \*/', re.DOTALL)
result = pattern.sub(new_css + "\n/* --- Footer & CTA Final --- */", css)

with open("css/style.css", "w", encoding="utf-8") as f:
    f.write(result)
