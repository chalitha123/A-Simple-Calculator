
/* A Simple Calculator for Decimal to Binary,Octal,Hexa-Decimal */


let display = document.getElementById("display");
let decimalVal = document.getElementById("decimalValBox");


function calculate() {
  let toBinary = document.getElementById("binary");
  let toOctal = document.getElementById("octal");
  let toHexa = document.getElementById("hexa");

  let fromDecimal;

  let convertBinary;
  let convertOctal;
  let convertHexa;


  if(toBinary.checked) {
    fromDecimal = Number(decimalVal.value);
    convertBinary = fromDecimal.toString(2);
    display.innerHTML = convertBinary;
  }
  else if(toOctal.checked) {
    fromDecimal = Number(decimalVal.value);
    convertOctal = fromDecimal.toString(8);
    display.innerHTML = convertOctal;
  }
  else if(toHexa.checked) {
    fromDecimal = Number(decimalVal.value);
    convertHexa = fromDecimal.toString(16).toUpperCase();
    display.innerHTML = convertHexa;
  }
  else {
    display.innerHTML = "Invalid";
    alert("Invalid! Please Select a Number & Select convert type.");
  }
}


function reset() {
  location.reload();
}

