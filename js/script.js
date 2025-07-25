// Função para toggle do PDF
function togglePDF() {
    const iframe = document.getElementById('pdfViewer');
    const botao = document.getElementById('botaoToggle');

    if (iframe.style.display === 'block') {
        // Se já estiver visível, oculta
        iframe.style.display = 'none';
        iframe.src = '';
        botao.innerHTML = '<span class="icon">👁️</span> Ver Currículo';
    } else {
        // Se estiver escondido, mostra
        iframe.style.display = 'block';
        iframe.src = 'CV_KEVIN.pdf';
        botao.innerHTML = '<span class="icon">❌</span> Fechar Currículo';
    }
}

// Animação de partículas flutuantes
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 12000);
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Criar partículas periodicamente
    setInterval(createParticle, 1200);
    
    // Animação de entrada suave para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.hero, .buttons-container, .pdf-container, footer').forEach(element => {
        observer.observe(element);
    });
    
    // Efeito de hover nos botões
    document.querySelectorAll('.botao').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
