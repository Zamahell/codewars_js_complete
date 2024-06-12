/**
 Un cuadrado de cuadrados
Te gustan los bloques de construcción. Te gustan especialmente los bloques de construcción que son cuadrados. ¡Y lo que más te gusta es organizarlos en un cuadrado de bloques de construcción cuadrados!

Sin embargo, a veces no es posible organizarlos en un cuadrado. ¡En lugar de eso, terminas con un rectángulo ordinario! ¡Esas malditas cosas! Si tuvieras una manera de saber si actualmente estás trabajando en vano... ¡Espera! ¡Eso es todo! Sólo tienes que comprobar si tu número de bloques de construcción es un cuadrado perfecto.

Tarea
Dado un número entero, determina si es un número cuadrado:

En matemáticas, un número cuadrado o cuadrado perfecto es un número entero que es el cuadrado de un número entero; en otras palabras, es el producto de algún número entero consigo mismo.

Las pruebas siempre utilizarán algún número entero, así que no se preocupe por eso en lenguajes de tipo dinámico.
 * 
 * 
 */


let n=39
let x = Math.sqrt(n)
let y = Math.floor(x)
if (y*y == n){
    console.log("true")
}else{
    console.log('false')
}



    console.log(y)
    
var isSquare = function(n){
    let x = Math.sqrt(n)
    let y = Math.floor(x)
    return (y*y == n ) ? true : false
}