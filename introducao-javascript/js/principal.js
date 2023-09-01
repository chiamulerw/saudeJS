var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//codigo js

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso < 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
}
if(altura < 0 || altura >= 3.00) {
    console.log("ALtura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!s"
}
  
if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}