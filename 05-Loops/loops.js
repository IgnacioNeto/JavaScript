/* Estruturas de controle de repetição

while (enquanto)
do/while (faca/enquanto)
for (para uma determinada quantidade de vezes) */

// Exemplo 1: while (Checa a condição e então executa)
let i =1;
while(i < 5) {
    console.log (`O valor de i é: ${i}`);
    i++;
}

// _________________________________________________________

console.log(`_____________________________________________`)
// Exemplo 2: do/while (Ele executa pelo menos 1 vez e checa a condição para ver se continua)
let j =1;
do {
    console.log (`O J é: ${j}`);
    j++;

} while (j <= 3);

// _________________________________________________________

console.log(`_____________________________________________`);
// Exemplo 3: for 

for(let k = 1; k <= 8; k++) {

    console.log (`O K vale: ${k}`);

}
// _________________________________________________________

console.log(`_____________________________________________`);
// Exemplo 4: Loop interando sobre os dados de array
let alunos = [
    "Chiquinha", "Chaves", "Madruga", "Kiko", "Seu barriga"
];

// Cache do tamanho array
let tamanho = alunos.length;

// console.log(tamanho);

for(let i = 0; i < tamanho; i++) {

    console.log ( alunos[i] );

}
// _________________________________________________________

console.log(`_____________________________________________`);