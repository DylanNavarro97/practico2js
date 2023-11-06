// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("¿Cual es tu edad?"))

if (edad !== NaN && edad >= 18 && edad <= 80){
    document.write("Es mayor de edad, puede conducir")
} else {
    document.write("Escriba un numero válido para le edad entre 18 y 80 años")
}