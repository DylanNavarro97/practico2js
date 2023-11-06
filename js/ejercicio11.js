// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let contador = 0;
let nombres = [];
let edades = [];
let mayorEdad = 0

do {
  const nombre = prompt("Indique el nombre");
  const edad = parseInt(prompt("Indique la edad"));
  if (nombre !== null && nombre !== undefined && !isNaN(edad)) {
    nombres.push(nombre);
    edades.push(edad);
    contador++;
  } else {
    alert("Indique datos válidos")
  }
} while (contador < 3);

mayorEdad = Math.max.apply(null, edades)
alert(`${nombres[edades.indexOf(mayorEdad)]} es el mayor con ${mayorEdad} años`)