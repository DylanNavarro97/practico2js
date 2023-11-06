// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = 0

do {
    const numeroASumar = parseInt(prompt("Ingresa el número a sumar"))
    if(!isNaN(numeroASumar)){
        if (numero === 0){
            numero = numeroASumar
        } else {
            numero = numero + numeroASumar
        }
    } else {
        alert("Ingresa un número válido")
    }
}
while(confirm("¿Querés seguir sumando números?"))

document.write(`La suma total de los números indicados es de ${numero}`)
