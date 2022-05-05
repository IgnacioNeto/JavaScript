const botaoMenu = document.querySelector('.icone'); /* nav h2 a */
const menu = document.querySelector('.menu'); /* nav ul */

// Função para abrir e fechar menu (hamburguer)
botaoMenu.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('menu-aberto');

    if (menu.classList.contains('menu-aberto') ) {
        botaoMenu.innerHTML = 'Fechar &times;';
    } else {
        botaoMenu.innerHTML = 'Menu &equiv;';
    }

});