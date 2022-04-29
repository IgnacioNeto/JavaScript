let moeda = document.getElementById("moeda");
let resultadoMoeda = document.getElementById("resultadoMoeda");

function converter(){
    return  resultadoMoeda.textContent = (moeda.value * 4.95).toLocaleString('pt-br',{
        style: 'currency',
        currency:'BRL'
    }); ;
    
};