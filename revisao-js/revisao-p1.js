// Descobrir se alguém já pode dirigir no Brasil

/* const nome = "Marquinhos";
const nasc = 1998;

// Pegando a data atual
var data = new Date();
var anoAtual = data.getFullYear();
// console.log(anoAtual);

let idade = anoAtual - nasc;
console.log(idade);

if(idade >=18) {
    console.log(`${nome} tem ${idade} e já pode dirigir.`)
    if (idade >30) {
        console.log(`Com ${idade} anos, aconselhamos a comprar um carro zero.`)

    } else {
        console.log('Acomselhamos a comprar um carro usado.')
    }
} else {
    console.log(nome + ' poderá dirigir quando completar 18 anos.')
}; */
// ________________________________________________________
// Variação 1: Usando prompt

const nomeUser = prompt("Digite seu nome");
const nascUser = prompt("Digite seu ano de nascimento com 4 dígitos");

let dataUser = new Date();
let anoAtualUser = dataUser.getFullYear();

let idadeUser = anoAtualUser - nascUser;
let conteudo = document.getElementById("conteudo");

if(idadeUser >=18) {
    conteudo.innerHTML = `${nomeUser} tem ${idadeUser} e já pode dirigir.`

    if(idadeUser >30) {
        conteudo.innerHTML += `<br>Com ${idadeUser} anos, aconselhamos a comprar um carro zero.`
    } else {
        conteudo.innerHTML += '<br>Aconselhamos a comprar um carro usado.'
    }
    
} else {
    conteudo.innerHTML = `${nomeUser} poderá dirigir ao completar 18 anos.`
}
// ________________________________________________________
// Variação 2: Usando funções

function podeDirigir (nome, nasc) {

    // Pegando a data atual
    var data = new Date();
    var anoAtual = data.getFullYear();
    // console.log(anoAtual);

    let idade = anoAtual - nasc;
    console.log(idade);

    if(idade >=18) {
        console.log(`${nome} tem ${idade} e já pode dirigir.`)
        if (idade >30) {
            console.log(`Com ${idade} anos, aconselhamos a comprar um carro zero.`)

        } else {
            console.log('Acomselhamos a comprar um carro usado.')
        }
    } else {
        console.log(nome + ' poderá dirigir quando completar 18 anos.')
    }
}

podeDirigir("João", 1993);
podeDirigir("Marina", 2000);
podeDirigir("Valter", 2015);