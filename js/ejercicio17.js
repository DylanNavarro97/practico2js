// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:

// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1

let frase = prompt("Ingrese su frase para detectar la primer vocal y su posicion")
let posicion = 0
let letra = ''

if (frase !== null){
    frase = frase.toLowerCase()
    for (i = 0; i < frase.length; i++){
        if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u'){
            posicion = i
            letra = frase[i]
            break
        }
    }
}

alert(`La vocal '${letra}' está en la posición ${posicion}`)