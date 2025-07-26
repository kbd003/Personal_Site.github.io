// Variável global para controlar o idioma atual
let currentLanguage = 'pt';

// Detecção automática do idioma do browser
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Se o browser estiver em português, mantem português. Caso contrário, inglês.
    return browserLang.startsWith('pt') ? 'pt' : 'en';
}

// Função para trocar idioma
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage();
}

// Função para atualizar todos os textos da página
function updateLanguage() {
    const elements = document.querySelectorAll('[data-pt][data-en]');
    const langBtn = document.getElementById('languageBtn');
    const langText = document.getElementById('langText');
    const flag = langBtn.querySelector('.flag');
    
    elements.forEach(element => {
        if (currentLanguage === 'pt') {
            element.innerHTML = element.getAttribute('data-pt');
        } else {
            element.innerHTML = element.getAttribute('data-en');
        }
    });
    
    // Atualizar botão de idioma
    if (currentLanguage === 'pt') {
        flag.textContent = '🇺🇸';
        langText.textContent = 'EN';
        langBtn.title = 'Switch to English';
    } else {
        flag.textContent = '🇧🇷';
        langText.textContent = 'PT';
        langBtn.title = 'Trocar para Português';
    }
    
    // Atualizar textos específicos dos botões que mudam dinamicamente
    updateToggleButtonText();
    
    // Salvar preferência no navegador
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Função para atualizar o texto do botão toggle do PDF
function updateToggleButtonText() {
    const iframe = document.getElementById('pdfViewer');
    const botao = document.getElementById('botaoToggle');
    
    if (iframe.style.display === 'block') {
        // PDF está aberto
        if (currentLanguage === 'pt') {
            botao.innerHTML = '<span class="icon">❌</span> <span>Fechar Currículo</span>';
        } else {
            botao.innerHTML = '<span class="icon">❌</span> <span>Close Resume</span>';
        }
    } else {
        // PDF está fechado
        if (currentLanguage === 'pt') {
            botao.innerHTML = '<span class="icon">👁️</span> <span>Ver Currículo</span>';
        } else {
            botao.innerHTML = '<span class="icon">👁️</span> <span>View Resume</span>';
        }
    }
}

// Função para toggle do PDF (atualizada para suportar idiomas)
function togglePDF() {
    const iframe = document.getElementById('pdfViewer');
    const botao = document.getElementById('botaoToggle');

    if (iframe.style.display === 'block') {
        // Se já estiver visível, oculta
        iframe.style.display = 'none';
        iframe.src = '';
        if (currentLanguage === 'pt') {
            botao.innerHTML = '<span class="icon">👁️</span> <span>Ver Currículo</span>';
        } else {
            botao.innerHTML = '<span class="icon">👁️</span> <span>View Resume</span>';
        }
    } else {
        // Se estiver escondido, mostra
        iframe.style.display = 'block';
        iframe.src = 'CV_KEVIN.pdf';
        if (currentLanguage === 'pt') {
            botao.innerHTML = '<span class="icon">❌</span> <span>Fechar Currículo</span>';
        } else {
            botao.innerHTML = '<span class="icon">❌</span> <span>Close Resume</span>';
        }
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
    // Detectar idioma preferido (salvo anteriormente ou idioma do browser)
    const savedLanguage = localStorage.getItem('preferredLanguage');
    currentLanguage = savedLanguage || detectBrowserLanguage();
    
    // Aplicar idioma inicial
    updateLanguage();
    
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
    document.querySelectorAll('.hero, .about-section, .tech-section, .experience-section, .buttons-container, .pdf-container, footer').forEach(element => {
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