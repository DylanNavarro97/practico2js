// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

const texto = prompt("Escriba un texto y este será mostrado en mayúsculas")
if(texto !== null){
    alert(texto.toUpperCase())
} else {
    alert("Ingrese texto para convertir")
}
console.log(texto)

