// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese la frase para contar las vocales que contiene")
let contador = 0

if(texto !== null){
    for (i = 0; i < texto.length; i++){
        texto = texto.toLowerCase()
        if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u' ){
            console.log(texto[i])
            contador++
        }
    }

    if (contador === 1){
        document.write(`El texto contiene ${contador} vocal`)
    } else {
        document.write(`El texto contiene ${contador} vocales`)
    }
} else {
    alert("Ingrese una frase para analizar")
}



