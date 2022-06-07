// Matriz
// const nome = ["José", "João", "Maria", "Lucas"];
const nome = [prompt("Nome User 1"), prompt("Nome User 2"),prompt("Nome User 3"),prompt("Nome User 4")];
// const nasc = [1983, 2012, 2000, 1945];
const nasc = [prompt("Nasc User 1"), prompt("Nasc User 2"), prompt("Nasc User 3"), prompt("Nasc User 4")];

const data = new Date();
const ano = data.getFullYear();

let contador = 0;


// Criando um loop

while(contador < nome.length) {
    let idade = ano - nasc[contador];

    if(idade >=18) {

        console.log(`${nome[contador]} tem ${idade} anos e pode dirigir.`);
    } else {
        console.log(`${nome[contador]} só poderá dirigir ao completar 18 anos.`);

    }
    contador++;

}
