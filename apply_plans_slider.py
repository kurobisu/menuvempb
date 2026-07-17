import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Insert Slider before the Plans Grid
slider_html = """
                <!-- Revenue Slider -->
                <div class="revenue-slider-wrapper reveal" style="max-width: 600px; margin: 0 auto 3rem auto; text-align: center; background: var(--bg-card); padding: 2rem; border-radius: 16px; border: 1px solid var(--border-color);">
                    <label for="revenueSlider" style="display:block; font-size: 1.1rem; font-weight: 500; margin-bottom: 1.5rem; color: var(--text-primary);">Qual o seu faturamento mensal aproximado?</label>
                    <input type="range" id="revenueSlider" min="1" max="3" value="1" step="1" style="width: 100%; accent-color: var(--primary); height: 8px; border-radius: 4px; outline: none; transition: background 450ms ease-in;">
                    <div style="display: flex; justify-content: space-between; margin-top: 1rem; color: var(--text-muted); font-size: 0.85rem; font-weight: 500;">
                        <span id="label-1" style="color: var(--primary); transition: 0.3s;">Até 20 mil</span>
                        <span id="label-2" style="transition: 0.3s;">20 mil a 35 mil</span>
                        <span id="label-3" style="transition: 0.3s;">Acima de 35 mil</span>
                    </div>
                </div>

                <!-- Grid de Planos -->"""

html = html.replace('<!-- Grid de Planos -->', slider_html)

# 2. Add JavaScript at the end of the file to handle the slider and the single-plan display
js_logic = """
<script>
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('revenueSlider');
    if(slider) {
        const p1 = document.getElementById('plan-bronze');
        const p2 = document.getElementById('plan-prata');
        const p3 = document.getElementById('plan-ouro');
        const l1 = document.getElementById('label-1');
        const l2 = document.getElementById('label-2');
        const l3 = document.getElementById('label-3');
        
        // Ajustar layout da grid para exibir apenas 1 no centro
        const grid = document.querySelector('.plans-grid');
        if(grid) {
            grid.style.display = 'flex';
            grid.style.justifyContent = 'center';
            grid.style.alignItems = 'center';
        }

        function updatePlans(val) {
            p1.style.display = 'none';
            p2.style.display = 'none';
            p3.style.display = 'none';
            l1.style.color = 'var(--text-muted)';
            l2.style.color = 'var(--text-muted)';
            l3.style.color = 'var(--text-muted)';

            if(val == 1) {
                p1.style.display = 'block';
                l1.style.color = 'var(--primary)';
            } else if(val == 2) {
                p2.style.display = 'block';
                l2.style.color = 'var(--primary)';
            } else if(val == 3) {
                p3.style.display = 'block';
                l3.style.color = 'var(--primary)';
            }
        }
        
        slider.addEventListener('input', (e) => {
            updatePlans(e.target.value);
        });
        
        // Initialize
        updatePlans(slider.value);
    }
});
</script>
</body>
"""
html = html.replace('</body>', js_logic)

# 3. Modify Plan 1
# Remove <ul class="plan-features">...</ul>
html = re.sub(r'<div class="plan-card" id="plan-bronze">.*?<ul class="plan-features">.*?</ul>', 
              r'<div class="plan-card" id="plan-bronze" style="width: 100%; max-width: 400px; margin: 0 auto;">\n                        <div>\n                            <h4 class="plan-name">Plano 1</h4>\n                            <p style="font-size: 0.8rem; color: var(--text-muted);">Ideal para negócios iniciantes.</p>\n                            <div class="plan-price-box">\n                                <span class="plan-price">R$ <span id="price-bronze">167</span><span>/mês</span></span>\n                            </div>\n', 
              html, flags=re.DOTALL)
# Add + Info button
html = html.replace('Plano%201%20da%20Menuvem."\n                                target="_blank" class="btn btn-primary"\n                                style="width: 100%; font-size: 0.85rem; padding: 0.65rem 1rem;">Ativar 30 Dias\n                                Grátis</a>',
                    'Plano%201%20da%20Menuvem."\n                                target="_blank" class="btn btn-primary"\n                                style="width: 100%; font-size: 0.85rem; padding: 0.65rem 1rem;">Ativar 30 Dias\n                                Grátis</a>\n                            <a href="planos.html?plano=1" class="btn btn-outline"\n                                style="width: 100%; font-size: 0.8rem; padding: 0.5rem 1rem;">+ Info Detalhada</a>')


# 4. Modify Plan 2
html = re.sub(r'<div class="plan-card" id="plan-prata">.*?<ul class="plan-features">.*?</ul>', 
              r'<div class="plan-card" id="plan-prata" style="width: 100%; max-width: 400px; margin: 0 auto;">\n                        <div>\n                            <h4 class="plan-name">Plano 2</h4>\n                            <p style="font-size: 0.8rem; color: var(--text-muted);">Perfeito para operações consolidadas.</p>\n                            <div class="plan-price-box">\n                                <span class="plan-price">R$ <span id="price-prata">227</span><span>/mês</span></span>\n                            </div>\n', 
              html, flags=re.DOTALL)
html = html.replace('Plano%202%20da%20Menuvem."\n                                target="_blank" class="btn btn-primary"\n                                style="width: 100%; font-size: 0.85rem; padding: 0.65rem 1rem;">Ativar 30 Dias\n                                Grátis</a>',
                    'Plano%202%20da%20Menuvem."\n                                target="_blank" class="btn btn-primary"\n                                style="width: 100%; font-size: 0.85rem; padding: 0.65rem 1rem;">Ativar 30 Dias\n                                Grátis</a>\n                            <a href="planos.html?plano=2" class="btn btn-outline"\n                                style="width: 100%; font-size: 0.8rem; padding: 0.5rem 1rem;">+ Info Detalhada</a>')

# 5. Modify Plan 3
html = re.sub(r'<div class="plan-card" id="plan-ouro">.*?<ul class="plan-features">.*?</ul>', 
              r'<div class="plan-card" id="plan-ouro" style="width: 100%; max-width: 400px; margin: 0 auto;">\n                        <div>\n                            <h4 class="plan-name">Plano 3</h4>\n                            <p style="font-size: 0.8rem; color: var(--text-muted);">Para restaurantes de alta performance.</p>\n                            <div class="plan-price-box">\n                                <span class="plan-price">R$ <span id="price-ouro">267</span><span>/mês</span></span>\n                            </div>\n', 
              html, flags=re.DOTALL)
html = html.replace('Plano%203%20da%20Menuvem."\n                                target="_blank" class="btn btn-primary"\n                                style="width: 100%; font-size: 0.85rem; padding: 0.65rem 1rem;">Ativar 30 Dias\n                                Grátis</a>',
                    'Plano%203%20da%20Menuvem."\n                                target="_blank" class="btn btn-primary"\n                                style="width: 100%; font-size: 0.85rem; padding: 0.65rem 1rem;">Ativar 30 Dias\n                                Grátis</a>\n                            <a href="planos.html?plano=3" class="btn btn-outline"\n                                style="width: 100%; font-size: 0.8rem; padding: 0.5rem 1rem;">+ Info Detalhada</a>')


with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
