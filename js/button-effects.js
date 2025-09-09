// Função para atualizar todos os botões "Saiba mais" com ícones e efeitos
function updateLearnMoreButtons() {
    // Seleciona todos os botões "Saiba mais"
    const learnMoreButtons = document.querySelectorAll('.service-details-btn');
    
    // Para cada botão, adiciona o ícone e a classe para efeitos
    learnMoreButtons.forEach(button => {
        // Verifica se o botão já tem o ícone
        if (!button.querySelector('.btn-icon')) {
            // Salva o texto atual do botão
            const buttonText = button.textContent.trim();
            
            // Limpa o conteúdo atual
            button.innerHTML = '';
            
            // Adiciona o ícone e o texto
            const icon = document.createElement('i');
            icon.className = 'fas fa-plus-circle btn-icon me-1';
            button.appendChild(icon);
            
            // Adiciona o texto de volta
            const textNode = document.createTextNode(' ' + buttonText);
            button.appendChild(textNode);
        }
    });
}

// Executa a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    updateLearnMoreButtons();
    
    // Também atualiza os botões após a troca de idioma
    document.querySelectorAll('.lang-switch').forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Pequeno atraso para garantir que a troca de idioma seja concluída primeiro
            setTimeout(updateLearnMoreButtons, 100);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões
    document.querySelectorAll('.service-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // impede scroll para o topo

            // Acha a caixinha extra dentro do mesmo card
            const card = this.closest('.service-card');
            const extra = card.querySelector('.service-extra');

            // Alterna mostrar/ocultar
            if (extra.classList.contains('d-none')) {
                extra.classList.remove('d-none');
                this.textContent = 'Fechar';
            } else {
                extra.classList.add('d-none');
                this.textContent = 'Saiba mais';
            }
        });
    });
});
