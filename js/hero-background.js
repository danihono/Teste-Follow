// Script para gerenciar o fundo dinâmico do hero
document.addEventListener('DOMContentLoaded', function() {
    // Array com os caminhos das imagens de fundo
    const backgroundImages = [
        'images/hero-bg/bg-1.jpg',
        'images/hero-bg/bg-2.jpg',
        'images/hero-bg/bg-3.jpg',
        'images/hero-bg/bg-4.jpg',
        'images/hero-bg/bg-5.jpg',
        'images/hero-bg/bg-6.jpg',
        'images/hero-bg/bg-7.jpg'
    ];
    
    // Elemento hero
    const heroSection = document.getElementById('hero');
    
    // Criar o container para o background dinâmico
    const heroBackground = document.createElement('div');
    heroBackground.className = 'hero-background';
    
    // Adicionar slides para cada imagem
    backgroundImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${image})`;
        
        // Tornar o primeiro slide ativo
        if (index === 0) {
            slide.classList.add('active');
        }
        
        heroBackground.appendChild(slide);
    });
    
    // Inserir o background no hero antes de qualquer outro elemento
    heroSection.insertBefore(heroBackground, heroSection.firstChild);
    
    // Função para alternar os slides
    let currentSlide = 0;
    
    function nextSlide() {
        // Remover classe active do slide atual
        const slides = document.querySelectorAll('.hero-background .slide');
        slides[currentSlide].classList.remove('active');
        
        // Avançar para o próximo slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Adicionar classe active ao novo slide
        slides[currentSlide].classList.add('active');
    }
    
    // Iniciar o temporizador para alternar slides a cada 4 segundos
    setInterval(nextSlide, 4000);
});
