
function Calcular(){
const result = document.getElementById("result");
const Calcular = document.getElementById("buton");
const Real = parseFloat(document.getElementById("Real").value);

var  Dolar = parseFloat(document.getElementById("num1").value);
var  Euro  = parseFloat(document.getElementById("num2").value);
var  Libra = parseFloat(document.getElementById("num3").value);

result.innerHTML = Real / Dolar;
result.innerHTML = Real / Libra;
result.innerHTML = Real / Euro;






   

}
//selectt = document.getElementById("selectt");
  //  resut = document.getElementById("resut");
   // Real = document.getElementById("Real");
  //  Dolar = document.getElementById("Dolar");
  //  num1 = document.getElementById("num1");
//if(selectt=Dolar){