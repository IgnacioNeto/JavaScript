let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

function clique(){
    resultado.textContent = nome.value;
}




let moeda = document.getElementById("moeda");
let resultadoMoeda = document.getElementById("resultadoMoeda");

function converter(){
    return  resultadoMoeda.textContent = (moeda.value * 4.95).toLocaleString('pt-br',{
        style: 'currency',
        currency:'BRL'
    }); ;
    
};

// function converter(){
//     resultadoMoeda.textContent = formataMoeda(moeda.value * 4.95);
    
    
// };
// function formataMoeda(valor){
//     return valor.toLocaleString('pt-br',{
//         style: 'currency',
//         currency:'BRL'
//     });
// };
