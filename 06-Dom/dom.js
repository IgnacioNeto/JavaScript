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

// ____________________________________________________________________________

// CSS vis JS (Tabela)

// first-child ----- (1º da lista)
// nth-child (2)---- (2º da lista)
// last-child -------(3º da lista)


const listaEditores = document.querySelector('#lista-editores');

const ultimo = listaEditores.querySelector('li:last-child');
const primeiro = listaEditores.querySelector('li:first-child');
const outro = listaEditores.querySelector('li:nth-child(2)');

console.log(outro.textContent);

ultimo.classList.add('destaque-item');

// Adicionando o atributo target em todos os links da lista de referencias
// Selecionando todos os links contidos na lista ul

// Obs .querySelectorAll retorna sempre uma MATRIZ
const links = document.querySelectorAll('ul li a');
console.log(links);

// links[0].style.color ='red';

// Laço para atribuir o atributo target_Blank em todos os Links
for (let i = 0; i < links.length; i++){
    links[i].setAttribute('target', '_blank')
}