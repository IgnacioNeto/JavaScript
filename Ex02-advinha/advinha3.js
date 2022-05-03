let formulario = document.querySelector('form');
let i = 0;
let numeroEscolhido = parseInt(Math.random() * 11);

formulario.addEventListener('submit', function(event) {
event.preventDefault();

let palpiteUsuario = parseInt(document.getElementById('palpite').value);
let resultado = document.getElementById('resultado');
let sorteado = document.getElementById('sorteado');

if (palpiteUsuario == numeroEscolhido) {
    i = 0;
    resultado.innerHTML = `<span style="color: green;">Você acertou!</span>`;
    // alert(`Você Acertou, Parabêns!!`);

    // window.location.reload();

} else if (palpiteUsuario < 0 || palpiteUsuario > 10) {
    resultado.innerHTML = "Digite um número entre 0 e 10!";

} else if ( i >= 3 ) {
    alert(`Número máximo de tentativas atingido!!\n(Navegador será resetado!!)`);
    window.location.reload();

} else { 
    let mensagem, j;
    i ++;
    j = (3 - i);
    if ( palpiteUsuario <= 5 ){
        if ( numeroEscolhido > 5 ) {
            mensagem = 'O número sorteado é > que 5';
        } else { mensagem = `O número sorteado é <= que 5`;}
    } else {
        if ( numeroEscolhido > 5 ) {
            mensagem = `O número sorteado é > que 5`;
        } else { mensagem = 'O número sorteado é <= que 5'; }
    }
    let nChances = `Você ainda tem mais ${j} chances`
    if ( j == 0 ) { nChances = `<span style="color: red;">Suas Chances Terminaram!!</span>`}
    resultado.innerHTML = `<span style="color: red;">Você errou!</span><br>${mensagem}<br><br>${nChances}`;
    // sorteado.innerHTML = `<span style="color: rgba(128, 128, 128, 0.15);">Número sorteado:</span><br>${numeroEscolhido}`;

}
});

            

            
