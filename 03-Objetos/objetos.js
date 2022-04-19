// Exemplo 1: objeto básico
let livro = {
    // propriedade : valor
    titulo: 'Senhor dos Anéis',
    ano: 1954,
    volumes: 3,
    autor: 'J.R.R. Tolkien',
};

console.log(livro);
console.log(livro.ano);

// Exibir
console.log(`Meu livro preferido é o: ${livro.titulo}, que foi lançado em ${livro.ano}.`);
//_________________________________________________________________________________

// Exemplo 2: Objeto contendo array e outro objeto

let pessoa = {
    // propriedades
    nome: 'Certo alguém',
    idade: 39,
    sexo: 'masculino',
    telefones: ['2222-3333','5555-6666'], // Matriz
    cidade: 'São Paulo',
    medidas: { // Objeto
        peso: 90,
        altura: 1.80,
    }
};

// Exibir
console.log(pessoa.medidas.altura); // 1.80

console.log(pessoa.telefones[0]); // 2222-3333

console.log(`${pessoa.nome} é uma pessoa incrível, contrate através do telefone ${pessoa.telefones[1]}.`); // 2222-3333
//_________________________________________________________________________________

// Exemplo 3: Array do objeto
let livros = [
    {
        titulo: 'Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
    },
    {
        titulo: 'Ghost Rider',
        autor: 'Neil Peart',
    },
    {
        titulo: 'Game of Thrones',
        autor: 'George R.R. Martin',
    },
];

console.log(`Meu livro favorito é: ${livros[1].titulo} do autor ${livros[1].autor}.`);