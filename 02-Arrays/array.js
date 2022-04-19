// Criando um array (ou vetor)

let alunos =["Inacinho", "Verônica","Antônico"];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Exibir
console.log(`O aluno: ${alunos[0]} é sem sombra de dúvidas o melhor desta sala!`)

// ________________________________________________________________________________
// Array como matriz (array bidimensional)

let tecnologias = [
    // 0      1     2
    ['html','css','js'], // 0

    // 0       1      2       3       4
    ['php','mysql','nodejs','java','python'], //1
];

// Exibir nodejs
console.log(tecnologias[1][2]);