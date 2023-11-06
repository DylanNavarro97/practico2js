// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const frase = prompt("Ingrese la frase")
let fraseConGuiones = ''
for (let i = 0; i < frase.length; i++){
    fraseConGuiones += frase[i]
    if (i < frase.length -1){
        fraseConGuiones += '-'
    }
}
document.write(fraseConGuiones)