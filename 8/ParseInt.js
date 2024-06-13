/**
* !Parse nice int from char problem
* 
Le preguntas a una niña pequeña: "¿Cuántos años tienes?" Ella siempre dice "x años", donde x es un número aleatorio entre 0 y 9.

Escriba un programa que devuelva la edad de la niña (0-9) como un número entero.

Suponga que la cadena de entrada de prueba es siempre una cadena válida. Por ejemplo, la entrada de prueba puede ser "1 año" o "5 años". El primer carácter de la cadena es siempre un número.
* 
* 
*/

function getAge(inputString){
    return parseInt(inputString[0])

}