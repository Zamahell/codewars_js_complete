/**
 * !Round up to the next multiple of 5
 *
Dado un número entero como entrada, ¿puedes redondearlo al siguiente (es decir, "mayor o igual") múltiplo de 5?

Ejemplos:

de entrada y salida:
0 -> 0
2 -> 5
3 -> 5
12 -> 15
21 -> 25
30 -> 30
-2 -> 0
-5 -> -5
etc.
La entrada puede ser cualquier número entero positivo o negativo (incluido 0).
Puede asumir que todas las entradas son números enteros válidos.
 * 
 * 
 */

function roundToNext5(n){
    if(n % 5 === 0 )
        return n
    return Math.ceil(n / 5 ) * 5;
   
  }