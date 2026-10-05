/* Cadastro: a linha do tempo se preenche de amarelo conforme a rolagem e cada etapa
   alcançada acende o número */
document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('etapas');
    if (!lista) return;
    const etapas = [...lista.querySelectorAll('.etapa')];
    let agendado = false;

    const atualizar = () => {
        agendado = false;
        const caixa = lista.getBoundingClientRect();
        const alvo = window.innerHeight * 0.6; // ponto da tela que "puxa" a linha
        const progresso = Math.min(1, Math.max(0, (alvo - caixa.top) / caixa.height));
        lista.style.setProperty('--progresso', progresso.toFixed(3));
        etapas.forEach(etapa => {
            const numero = etapa.querySelector('.etapa-numero').getBoundingClientRect();
            etapa.classList.toggle('alcancada', numero.top + numero.height / 2 < alvo);
        });
    };
    const agendar = () => {
        if (agendado) return;
        agendado = true;
        requestAnimationFrame(atualizar);
    };
    atualizar();
    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
});
