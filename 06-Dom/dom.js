/* Métodos/Funções de acesso e seleção

getElementById() -> seleciona um elemento pelo ID
querySelector() -> seleciona UM elemento de acordo com um seletor
querySelectorAll() -> seleciona VÁRIOS elementos de acordo com um seletor */

// selecionando pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);

// selecionado pela TAG
const pagina = document.querySelector('body');
console.log(pagina);

// selecionado todas as TAGs H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);
// ____________________________________________________________________________

// Modificando elementos
titulo.textContent = "Olá Mundo";
subtitulo[1].textContent="Full-Stack";

const legenda = document.querySelector('figcaption');
// legenda.textContent = "Legenda da imagem";
legenda.innerHTML = "<b>Legenda da imagem</b>"; // Aceita Tags (Linha cima não)

// ____________________________________________________________________________

// CSS vis JS

titulo.style.textAlign = "center";
titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)';
titulo.style.color ="red";

