/**
Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Todo lo positivo se vuelve negativo y lo negativo se vuelve positivo.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

Puede suponer que todos los valores son números enteros. No mute la matriz de entrada.
 */

function invert(array){
    let arrayInvert = []
    for(let i=0; i < array.length; i++){
        arrayInvert.push((array[i]*-1))
    }
    return arrayInvert;

}

let matriz = [1, -2, 3, -4, 5]
let resultado = invert(matriz)
console.log(resultado)