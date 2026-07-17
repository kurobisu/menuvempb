import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove the old "Funcionalidades" (Bento Grid) section completely
# It starts at <!-- AREA 3: Bento Grid of Solutions -->
# And ends at the closing </section> of that section.
pattern_bento = re.compile(r'\s*<!-- AREA 3: Bento Grid of Solutions -->\s*<section class="section" id="solucoes">.*?</section>', re.DOTALL)
html = pattern_bento.sub('', html)

# 2. Clean up the leftover old marquee cards
# We want to remove all <div class="marquee-card"> ... </div> blocks 
# AND the <div class="marquee-content" aria-hidden="true"> wrapper 
# that was left behind from the previous regex replace.
# Looking at the file, the leftover starts with `<div class="marquee-card">` 
# and ends with `</div>\s*</div>\s*</div>\s*</section>` or similar.
# Since we replaced the first block with vertical-marquee-container, we can just delete everything 
# between the closing </div> of vertical-marquee-container and the </section> of depoimentos.
pattern_leftover = re.compile(r'(<!-- Vertical Marquee \(Testimonials\) -->\s*<div class="vertical-marquee-container">.*?</div>\s*</div>\s*</div>\s*</div>\s*</div>).*?</section>', re.DOTALL)
# Wait, the vertical-marquee-container has multiple nested divs.
# It is safer to just remove any `<div class="marquee-card">...</div>` and `<div class="marquee-content"...>...</div>` that are still in the file!

# Let's remove any remaining <div class="marquee-card"> ... </div>
html = re.sub(r'\s*<div class="marquee-card">.*?</div>\s*</div>\s*</div>', '', html, flags=re.DOTALL)

# Let's try an alternative safe approach. Since we know the exact string of the leftover:
# It starts at `                    <div class="marquee-card">` 
# and ends right before `    </section>` in the faq section? No, depoimentos section.

# Let's just remove the specific block by matching the string:
# It's inside id="depoimentos" section.
pattern_depoimentos = re.compile(r'(<section class="section marquee" id="depoimentos">.*?</section>)', re.DOTALL)
depoimentos_match = pattern_depoimentos.search(html)

if depoimentos_match:
    depoimentos_html = depoimentos_match.group(1)
    # We want to keep everything up to the end of vertical-marquee-container, 
    # which is `        </div>`
    # and then put the `    </div>` (for container) and `</section>`
    
    # Let's extract the vertical-marquee-container
    vmc_match = re.search(r'(<div class="vertical-marquee-container">.*?)(\s*<div class="marquee-card"|\s*</section>)', depoimentos_html, re.DOTALL)
    
    if vmc_match:
        # Reconstruct depoimentos section
        # Wait, the original section had <div class="container"> inside?
        # Let's check if it had <div class="container">
        # If yes, we need to close it.
        pass

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
