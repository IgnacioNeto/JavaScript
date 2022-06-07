let fomulario = document.querySelector('form');
let conteudo = document.getElementById('conteudo');

fomulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let nasc = document.getElementById("nasc").value;

    var data = new Date();
    var ano = data.getFullYear();

    let idade = ano - nasc;

    if(idade >=18) {
        conteudo.innerHTML = `<p>${nome} tem ${idade} anos e já pode dirigir.`
    
    } else {
        conteudo.innerHTML = `<p>${nome} só poderá dirigir quando fizer 18 anos.`

    }
});
