// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let textoConcatenado = ''

do {
    textoAConcatenar = prompt("Ingrese el texto a concatenar")
    if(textoAConcatenar !== null){
        if(textoConcatenado === ''){
            textoConcatenado = textoAConcatenar
        } else {
            textoConcatenado = `${textoConcatenado}-${textoAConcatenar}`
        }
    }
}
while(confirm("¿Queres seguir concatenando texto?"))

if (textoConcatenado !== ''){
    document.write(textoConcatenado)
} else {
    document.write("No ingresaste ninguna palabra")
}