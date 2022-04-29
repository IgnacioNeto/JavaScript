/* ================== Solução 3 ================== */
let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (recarregar)
    event.preventDefault();

    let cotacao = parseFloat(document.getElementById('cotacao').value );
    let valor = parseFloat(document.getElementById('valor').value );

    let converte = (valor * cotacao).toFixed(2);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em R$ é: ${converte}`;
    
});
