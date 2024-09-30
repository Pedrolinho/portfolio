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

        // Adiciona a classe "active" à seção correspondente
        document.getElementById(target).classList.add('active');
    });
});

// Seleciona os elementos do modal e os botões
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');
const closeModalButton = document.querySelector('#modal-close');
const modalSections = document.querySelectorAll('.modal-section');

const modalHeaderProjetos = document.querySelector('#modal-header-projetos')

function openModal(sectionId, headerId) {
    showDescricao(sectionId);
    showHeader(headerId);
}
function showHeader (headerId) {
    headerId.classList.remove('hide');
}

// Função para abrir o modal e mostrar a seção correta
function showDescricao(sectionId) {
    // Mostra a seção específica
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('modal-hide');

    // Exibe o modal e o fade
    modal.classList.remove('hide');
    fade.classList.remove('hide');
}

// Função para fechar o modal
function closeModal() {
    // Esconde todas as seções do modal
    modalSections.forEach(section => section.classList.add('modal-hide'));

    modalHeaderProjetos.classList.add('hide');
    modal.classList.add('hide');
    fade.classList.add('hide');
}

// Adiciona evento de clique para cada botão que abre o modal
document.getElementById('btn-mapeamento-sistematico').addEventListener('click', () => {
    openModal('mapeamento-sistematico', modalHeaderProjetos);
});
document.getElementById('btn-ufpr-baja').addEventListener('click', () => {
    openModal('ufpr-baja', modalHeaderProjetos);
});
document.getElementById('btn-paft-puc').addEventListener('click', () => {
    openModal('paft-puc', modalHeaderProjetos);
});
document.getElementById('btn-cientista-sincero').addEventListener('click', () => {
    openModal('cientista-sincero', modalHeaderProjetos);
});
document.getElementById('btn-jokenpog').addEventListener('click', () => {
    openModal('jokenpog', modalHeaderProjetos);
});

// Evento para fechar o modal ao clicar no botão de fechar
closeModalButton.addEventListener('click', closeModal);

// Evento para fechar o modal ao clicar fora (no fade)
fade.addEventListener('click', closeModal);