/*
Escopo local (Let) e global (var)

for (var i = 0; i < 100; i++){
    console.log(i);
};
document.write(i);

*/
// ____________________________________________________________________________
/* Acessando o DOM e manipulando

let qualquer = document.getElementById("subtitulo-exemplo01");
console.log(qualquer);
qualquer.style.color = "red";
qualquer.innerHTML = "Qualquer coisa";

*/
// ____________________________________________________________________________
// Resolução exemplo 1 

const pagina = document.querySelector("body");
const titulo = pagina.querySelector("h1");
const msg = pagina.querySelector("#mensagem");
const sub01 = pagina.querySelector("#subtitulo-exemplo01");

// addEventListener (Observador de eventos)
// Quando mouse sobre, mostra a frase
sub01.addEventListener('mouseover', function() {
    msg.textContent = 'você passou o mouse sobre...';

});

// Quando mouse sai, frase vazia
sub01.addEventListener('mouseout', function() {
    msg.textContent = '';

});
// ____________________________________________________________________________
// Resolução exemplo 2
const botao = pagina.querySelector("#noturno");
botao.addEventListener('click', function() {
    pagina.classList.toggle('modo-noturno');
    if (botao.textContent == 'Ativar') {
        botao.textContent = 'Desativar';
    } else {
        botao.textContent = 'Ativar'
    }
});

// ____________________________________________________________________________
// Resolução exemplo 3

const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event) {
    // previne o comportamento padrão do formulário
    event.preventDefault();

    // Capturando os dados digitados
    // parseFloat => Transforma uma String em número (decimal)
    // parseInt => Transforma uma String em número (inteiro)

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // Calcula a média
    let media = calculaMedia(nota1, nota2);

    // Verifica a situação
    let situacao = verificaSituacao(media);

    // Montagem do resumo do aluno
    montaResumo(nome, media, situacao);

    // Resetando o formulario
    formulario.reset();

    // Levando o foco para o campo nome
    campoNome.focus();

});

function calculaMedia(nota1 , nota2) {
    // usado return para permitir qua o calculo possa sair da função
    return (nota1 + nota2) / 2;
};

function verificaSituacao(media) {
    if (media >= 7) {
        return 'aprovado';
    } else {
        return 'reprovado';
    }
};


function montaResumo(nome, media, situacao) {
    // 1) Criar o elemento dinamicamente
    let linha = document.createElement('tr');

    // 2) Montar o conteudo do elemento criado
    linha.innerHTML = `<td> ${nome} </td>
                       <td> ${media} </td>
                       <td> ${situacao} </td> `;

    // 3) Adicionar o elemento ao DOM (corpoTabela)
    corpoTabela.appendChild(linha);

};

