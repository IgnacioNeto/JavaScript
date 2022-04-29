let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
event.preventDefault();

let numeroEscolhido = parseInt(Math.random() * 4);
let palpiteUsuario = parseInt(document.getElementById('palpite').value);
let sorteado = document.getElementById('sorteado');

let resultado = document.getElementById('resultado');

// var i = 1;

// while(i <= 3){

if (palpiteUsuario == numeroEscolhido) {
    resultado.innerHTML = "Você acertou!";
    sorteado.innerHTML = `O número sorteado foi: ${numeroEscolhido}`;


} else if (palpiteUsuario < 0 || palpiteUsuario > 3) {
    resultado.innerHTML = "Digite um número entre 0 e 3!";

} else if (palpiteUsuario != numeroEscolhido && palpiteUsuario > numeroEscolhido) {
    resultado.innerHTML = `Você errou. Digite um número < do que: ${palpiteUsuario}`;

    sorteado.innerHTML = `O número sorteado foi: ${numeroEscolhido}`;




} else {
    resultado.innerHTML = `Você errou. Digite um número > do que: ${palpiteUsuario}`;

    sorteado.innerHTML = `O número sorteado foi: ${numeroEscolhido}`;
};

/*   } else {
    resultado.innerHTML = "Você errou...";
}; */

// while (i++ < 3); }
// alert("Número máximo de tentativas atingido!!");
});

            

            

