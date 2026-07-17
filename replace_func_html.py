import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

new_html = """    <section id="funcionalidades" class="section functionalities">
        <div class="container">
            <div class="section-header reveal">
                <span class="badge">Recursos Completos</span>
                <h2>Tudo o que seu negócio precisa em um só lugar</h2>
                <p>Selecione um módulo e explore as ferramentas projetadas para acelerar a sua operação diária.</p>
            </div>
            
            <!-- Main Category Tabs -->
            <div class="yooga-tabs reveal delay-100" role="tablist">
                <button class="yooga-tab-btn active" data-target="delivery">Cardápio & Delivery</button>
                <button class="yooga-tab-btn" data-target="pdv">Frente de Caixa (PDV)</button>
                <button class="yooga-tab-btn" data-target="estoque">Controle de Estoque</button>
                <button class="yooga-tab-btn" data-target="financeiro">Financeiro & Fiscal</button>
            </div>

            <div class="yooga-content reveal delay-200">
                <!-- Delivery Pane -->
                <div class="yooga-pane active" id="pane-delivery">
                    <div class="yooga-layout">
                        <!-- Sidebar -->
                        <div class="yooga-sidebar">
                            <button class="yooga-sub-btn active" data-index="0">QR Code na Mesa & Balcão</button>
                            <button class="yooga-sub-btn" data-index="1">Delivery Próprio Taxa R$ 0</button>
                            <button class="yooga-sub-btn" data-index="2">Automação no WhatsApp</button>
                            <button class="yooga-sub-btn" data-index="3">Fidelidade & Cupons</button>
                        </div>
                        <!-- Carousel -->
                        <div class="yooga-carousel">
                            <div class="yooga-carousel-track">
                                <div class="yooga-card active">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>QR Code na Mesa & Balcão</h3>
                                        <p>Seus clientes escaneiam na mesa, fazem o pedido sem fila e com redução no tempo de atendimento dos garçons.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1621245052951-b8f411ba845a?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Delivery Próprio Taxa R$ 0</h3>
                                        <p>Receba pedidos ilimitados pelo seu próprio link e pare de pagar comissão por venda para marketplaces.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Automação no WhatsApp</h3>
                                        <p>Envio automático de confirmação de pedidos, status e atualizações em tempo real diretamente no WhatsApp do cliente.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Fidelidade & Cupons</h3>
                                        <p>Crie campanhas de fidelidade com acúmulo de pontos e ofereça cupons promocionais para engajar e reter clientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="yooga-carousel-controls">
                                <button class="yooga-arrow prev" aria-label="Anterior">&lt;</button>
                                <button class="yooga-arrow next" aria-label="Próximo">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PDV Pane -->
                <div class="yooga-pane" id="pane-pdv">
                    <div class="yooga-layout">
                        <div class="yooga-sidebar">
                            <button class="yooga-sub-btn active" data-index="0">PDV e Vendas Rápidas</button>
                            <button class="yooga-sub-btn" data-index="1">Mapa de Mesas & Comandas</button>
                            <button class="yooga-sub-btn" data-index="2">Tela KDS para Cozinha</button>
                            <button class="yooga-sub-btn" data-index="3">Direcionamento de Impressão</button>
                        </div>
                        <div class="yooga-carousel">
                            <div class="yooga-carousel-track">
                                <div class="yooga-card active">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>PDV e Vendas Rápidas</h3>
                                        <p>Lançamento de pedidos, pagamentos e controle de caixa em poucos cliques na mesma tela central.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Mapa de Mesas & Comandas</h3>
                                        <p>Visualize o status das mesas (abertas, fechadas, pedindo a conta) e divida contas com facilidade.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Tela KDS para Cozinha</h3>
                                        <p>Substitua papéis por telas intuitivas na cozinha, organizando pedidos em ordem cronológica de preparo.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Direcionamento de Impressão</h3>
                                        <p>Envie pedidos de bebidas para o bar e de pratos para a cozinha automaticamente em impressoras separadas.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="yooga-carousel-controls">
                                <button class="yooga-arrow prev" aria-label="Anterior">&lt;</button>
                                <button class="yooga-arrow next" aria-label="Próximo">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Estoque Pane -->
                <div class="yooga-pane" id="pane-estoque">
                    <div class="yooga-layout">
                        <div class="yooga-sidebar">
                            <button class="yooga-sub-btn active" data-index="0">Baixa Automática de Insumos</button>
                            <button class="yooga-sub-btn" data-index="1">Ficha Técnica por Produto</button>
                            <button class="yooga-sub-btn" data-index="2">Alertas de Estoque Mínimo</button>
                            <button class="yooga-sub-btn" data-index="3">Entrada Automatizada (XML)</button>
                        </div>
                        <div class="yooga-carousel">
                            <div class="yooga-carousel-track">
                                <div class="yooga-card active">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Baixa Automática de Insumos</h3>
                                        <p>O estoque é atualizado automaticamente a cada venda efetuada no PDV ou no cardápio de delivery.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Ficha Técnica por Produto</h3>
                                        <p>Defina a quantidade exata de insumos (ex: gramas de carne) por prato e saiba sua margem de lucro real.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Alertas de Estoque Mínimo</h3>
                                        <p>Receba avisos inteligentes quando o estoque de ingredientes estratégicos estiver abaixo do nível mínimo.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Entrada Automatizada (XML)</h3>
                                        <p>Importe arquivos XML das notas dos seus fornecedores para atualizar custos e quantidades sem digitação manual.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="yooga-carousel-controls">
                                <button class="yooga-arrow prev" aria-label="Anterior">&lt;</button>
                                <button class="yooga-arrow next" aria-label="Próximo">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Financeiro Pane -->
                <div class="yooga-pane" id="pane-financeiro">
                    <div class="yooga-layout">
                        <div class="yooga-sidebar">
                            <button class="yooga-sub-btn active" data-index="0">Fluxo de Caixa Consolidado</button>
                            <button class="yooga-sub-btn" data-index="1">Emissor NFC-e / NF-e</button>
                            <button class="yooga-sub-btn" data-index="2">Relatórios de Faturamento</button>
                            <button class="yooga-sub-btn" data-index="3">Conciliador de Adquirentes</button>
                        </div>
                        <div class="yooga-carousel">
                            <div class="yooga-carousel-track">
                                <div class="yooga-card active">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Fluxo de Caixa Consolidado</h3>
                                        <p>Monitore contas a pagar, a receber e conciliação de cartões em um painel visual unificado.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Emissor NFC-e / NF-e</h3>
                                        <p>Emissão fiscal nativa simplificada homologada pela SEFAZ-PB com contingência para instabilidades de sinal.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Relatórios de Faturamento</h3>
                                        <p>Dados ricos de produtos mais vendidos, margens de lucro, horários de pico e ticket médio diário.</p>
                                    </div>
                                </div>
                                <div class="yooga-card">
                                    <div class="yooga-card-bg" style="background-image: url('https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80');"></div>
                                    <div class="yooga-card-overlay"></div>
                                    <div class="yooga-card-content">
                                        <h3>Conciliador de Adquirentes</h3>
                                        <p>Acompanhe as taxas de cartão cobradas pelas maquininhas e evite cobranças indevidas de operadoras.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="yooga-carousel-controls">
                                <button class="yooga-arrow prev" aria-label="Anterior">&lt;</button>
                                <button class="yooga-arrow next" aria-label="Próximo">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>"""

pattern = re.compile(r'    <section id="funcionalidades" class="section functionalities">.*?</section>', re.DOTALL)
result = pattern.sub(new_html, html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(result)
