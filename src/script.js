// 1. Relógio em tempo real
function updateClock() {
    const clock = document.getElementById('live-clock');
    const now = new Date();
    clock.innerText = now.toLocaleTimeString('pt-BR', { hour12: false });
}
setInterval(updateClock, 1000);

// 2. Spotlight dinâmico que segue o mouse
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

// 3. LOGICA DO UNITY (CARREGA SÓ NO CLIQUE)
const modal = document.getElementById('unityModal');
const container = document.getElementById('unityContainer');

function startUnity() {
    // Mostra o modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Trava o scroll do fundo

    // Cria o iframe agora e insere no HTML
    const iframe = document.createElement('iframe');
    iframe.src = "/unity/portfolio/"; // Caminho do seu jogo
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.id = "unityIframe";

    container.appendChild(iframe);
}

function stopUnity() {
    // Esconde o modal
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Libera o scroll

    // Remove o iframe (Isso para o jogo e libera memória)
    const iframe = document.getElementById('unityIframe');
    if (iframe) {
        iframe.remove();
    }
}