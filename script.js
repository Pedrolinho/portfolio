// Seleciona os itens de navegação e seções
const navItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');

// Adiciona um evento de clique a cada item de navegação
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe "active" de todos os itens de navegação
        navItems.forEach(navItem => navItem.classList.remove('active'));

        // Remove a classe "active-section" de todas as seções
        sections.forEach(section => section.classList.remove('active'));

        // Adiciona a classe "active" ao item de navegação clicado
        item.classList.add('active');

        // Pega o alvo da seção clicada
        const target = item.getAttribute('data-target');

        // Adiciona a classe "active-section" à seção correspondente
        document.getElementById(target).classList.add('active');
    });
});