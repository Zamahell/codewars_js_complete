/**
 * !Third Angle of a triangle
Te dan dos ángulos interiores (en grados) de un triángulo.
Escribe una función para devolver el tercero.

Nota: sólo se probarán números enteros positivos.
*/

function otherAngle(a, b) {
    return (180 - (a + b) );
  }

let resultado = otherAngle(60,60)
console.log(resultado)