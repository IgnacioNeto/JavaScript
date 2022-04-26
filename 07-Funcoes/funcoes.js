/* Sintaxe 1 (Tradicional)
Função literal/anônima */

let exemplo1 = function() {
    console.log("Função anônima / literal");
};
// Chamando a função
exemplo1();

// ________________________________________________________________________

/* Sintaxe 2 (Tradicional)
Função nomeada */

function exemplo2() {
    console.log("Função nomeada");
};

exemplo2();

// ________________________________________________________________________

/* Sintaxe 3 (Moderna)
Função Seta/Flecha (Arrow Function) */

let exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3();

// _______________________ 3B

let exemplo3b = () => console.log("Arrow Function B");

exemplo3b();
// ________________________________________________________________________

/* Exemplos

Função para dobrar */
function dobra(valor) {
    return valor * 2;
}

console.log( dobra(10) );
document.write( dobra(10) );

// ________________ Usando "Arrow Function"

let dobraB = (valor) => {
    return valor * 2;
}
console.log( dobraB(100) );

// ______________________________________

let dobraC = valor => valor * 100;
console.log( dobraC(20) );

console.log('______________________________________________')

// ______________________________________
// Exemplos anteriores

let preco =1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor) {
    return valor.toLocaleString('en', {
        style: 'currency', currency:'USD'
    });
}

// Arrow
let formataValor = valor => {
    return valor.toLocaleString('pt-br', {
        style: 'currency', currency:'BRL'
    });
}

console.log( formataMoeda(preco) );
console.log( formataValor(desconto) );
console.log( formataValor(precoFinal) );

console.log('______________________________________________')