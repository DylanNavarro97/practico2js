// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

const numero = parseInt(prompt("Ingrese un número"))
let acumulado = ''

if (numero > 0 && numero <= 50 && !isNaN(numero)){
    for (i = 1; i <= numero; i++){
        if (acumulado === ''){
            acumulado = i
        } else {
            acumulado = `${acumulado}${i}`
        }

        document.write(acumulado)
        document.write('<br>')
    }
    console.log(acumulado)
} else {"Ingrese un número válido"}


