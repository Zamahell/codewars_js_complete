/**
 * Dado el triángulo de números impares consecutivos:

             1
            3 5
           7 9 11
        13 15 17 19
      21 23 25 27 29

*!Calcule la suma de los números en la enésima fila de este triángulo (comenzando en el índice 1), por ejemplo: (Entrada --> Salida)

    1 --> 1
    2 --> 3 + 5 = 8
*/
// n2 − n+1.
// 2*2 - 2 + 1 = 3 3+2
// 3 5 
function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

let resultado = rowSumOddNumbers(2)
console.log(resultado)