var valor;			
				
function conversao(){
    let dolar = 5;		
    valor = parseFloat(document.getElementById("texto").value);			

    document.getElementById("valorFinal").innerHTML = (valor * dolar).toFixed(2);	  
            
}
