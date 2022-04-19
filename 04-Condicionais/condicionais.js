// Estrutura de controle condicional

/* if/else, else if */
let nome = "Ignacio";
let idade = 40;

// Verificar idade da pessoa

// Condicional encadeada
 let mensagem;
/*
if (idade > 18) {
    mensagem = ("Você é maior de idade");
} else {
    mensagem = ("Você é menor de idade");
}
console.log(mensagem);
document.write(mensagem); */

if (idade >= 60) {
    mensagem = 'É idoso';
} else if (idade >=18) {
    mensagem = 'É adulto, mas não é idoso';
} else {
    // condicional aninhada
    // && (Operador e)
    if (idade >=12 && idade <18) {
        mensagem = 'É adolescente';
    } else {
        mensagem = 'É baby';
    }
}
console.log(`${nome}, ${mensagem}`); // Mostra no Inspecionar/ Console
document.write(`${nome}, ${mensagem} <br>`); // Mostra a tela (Navegador)

/* __________________________________________________________________________________________ */

console.log(`_____________________________________________`); // Mostra no Inspecionar/ Console
document.write(`__________________________________________<br>`); // Mostra a tela (Navegador)

/* Exercício notas, média e Aprovado e Reprovado */
var n1 = 5.7;
var n2 = 9;

 media = (n1 + n2) / 2;

// SE Tradicional
/* if (media >= 7) {
    situacao = 'Aprovado';
} else {
    situacao = 'Reprovado';
} */

// Operador ternário (2 maneiras diferentes)
// media >= 7 ? situacao = 'Aprovado': situacao = 'Reprovado';
situacao = media >= 7 ? 'Aprovado': 'Reprovado';


console.log(`${media}`);
console.log(`${situacao}`); // Mostra no Inspecionar/ Console

document.write(`${media}`)
document.write(`${situacao}<br>`); // Mostra a tela (Navegador)

/* __________________________________________________________________________________________ */

console.log(`_____________________________________________`); // Mostra no Inspecionar/ Console
document.write(`__________________________________________<br>`); // Mostra a tela (Navegador)

/* switch/ case/ default/ break 
Opçôes do Chat Bot:
1 -> Informações
2 -> Reclamação
3 -> dúvidas
x -> opçao desconhecida, direcionar para um humano */

let opcao = 4;
let textoOpcao;

switch(opcao) {
    case 1:
        textoOpcao = 'Legal, o que deseja saber?';
        break;
    case 2:
        textoOpcao = 'Que pena, o que aconteceu?';
        break;
    case 3:
        textoOpcao = 'Certo, qual sua dúvida?';
        break;
    default:
        textoOpcao = 'Hum, não entendi... vou te transferir.';
        break;
}

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);

/* __________________________________________________________________________________________ */

console.log(`_____________________________________________`); // Mostra no Inspecionar/ Console

// Operadores de comparação

let a = 10;
let b = '10';

// == se é igual/ === estritamente igual (até tipo de dados)
console.log(a == b); // True ou false