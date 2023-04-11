
function Calcular(){
const result1 = document.getElementById("Resultado1");
const result2 = document.getElementById("Resultado2");
const result3 = document.getElementById("Resultado3");
const Calcular = document.getElementById("buton");
const Real = parseFloat(document.getElementById("Real").value);

var  Dolar = parseFloat(document.getElementById("num1").value);
var  Euro  = parseFloat(document.getElementById("num2").value);
var  Libra = parseFloat(document.getElementById("num3").value);

result1.innerHTML = Real / Dolar;
result2.innerHTML = Real / Euro;
result3.innerHTML = Real / Libra;






   

}
//selectt = document.getElementById("selectt");
  //  resut = document.getElementById("resut");
   // Real = document.getElementById("Real");
  //  Dolar = document.getElementById("Dolar");
  //  num1 = document.getElementById("num1");
//if(selectt=Dolar){