// Comentário de 1 linha
/*Bloco de comentário (Shift + ALT + a) */

// alert("Olá, mundo!");

console.log("Olá, mundo!"); // Exibido no: Inspecionar -> Console
// document.write("Olá, mundo!");

/* Variáveis
Palavras-chave: var, let e const

var -> variável de escopo global
let -> variável de escopo de bloco
const -> const de escopo de bloco
*/

const nome = "Ignacio"; // Constante
let ano = 2022; // variável de escopo local
var curso = "Técnico em Informática para Internet"; // Variável global

// Recuperando os valores
console.log(nome);
console.log(ano);
console.log(curso);

// Concatenação
console.log("Eu sou o: "+nome+ ".");
console.log("Eu sou o: "+nome+ ", e em: " +ano+ " estou estudando no curso: " +curso+ "." );

// String literal/ Template String (Usando a crase)
console.log(`Atualmente, estamos fazendo o curso de: ${curso}`);
console.log(`Eu sou o: ${nome}, e em: ${ano} estou estudando no curso: ${curso}.`);

/* Operadores matemáticos

+ adição
- subtração
/ divisão
* multiplicação

*/

let produto = 'TV Led';
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;


console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade} unidades , ao custo de R$${preco} (cada) e valor total de: R$${total}.`);