// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

const numero = parseInt(prompt("Ingrese un numero del 1 al 50"))

if(numero > 0 && numero <= 50 && !isNaN(numero)){
    for(i = numero; i > 0; i--){
        for(j = 0; j < i; j++){
            document.write(i)
        }
        document.write('<br>')
    }
} else {
    alert("Ingresa un numero válido")
}