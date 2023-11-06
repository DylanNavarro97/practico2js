// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Indique un número de filas"));
const columnas = parseInt(prompt("Indique un número de columnas"));

if (!isNaN(filas) && !isNaN(columnas)) {
  let total = filas * columnas;
  document.write(`<table>`);
  document.write("<tbody>");
  for (i = 0; i < filas; i++) {
    document.write("<tr>");
    for (j = 0; j < columnas; j++) {
      document.write(`<td>${total--}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</tbody>");
  document.write(`</table>`);
} else {
  alert("Escriba un número válido");
}
