/* ================== Solução 1 ================== */

// Declarando a função que é chamada quando clicamos no botão converter do HTML
function converteDolar() {
    // Pegando o valor digitado no campo valorDolar do HTML
    // .value para pegar o valor (digitado) e não o campo inteiro
    let valorDolar = document.getElementById('valorDolar').value;

    // converte o valor digitado considerando a cotação do dolar
    let converteReal = valorDolar * 4.97;

    // imprime o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em reais é R$: ${converteReal}`;

    // mudar a cor para vermelho
    resultado.style.color = 'red'
}
// ____________________________________________________________________________

