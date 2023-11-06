// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const frase = prompt("Escribi una frase para invertirla")

for (i = frase.length; i >= 1; i--){
    document.write(frase[i-1])
}
