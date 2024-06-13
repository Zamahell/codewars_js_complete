/**
 * !Area o perimeter 
Te dan el largo y el ancho de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado.
Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.

Ejemplo (Entrada1, Entrada2 --> Salida):

6, 10 --> 32
3, 3 --> 9
Nota: para los propósitos de este kata asumirás que es un cuadrado si su largo y ancho son iguales, de lo contrario es un rectángulo.
 */

const areaOrPerimeter = function(l , w) {
    if ( l == w){
      return l*w
    }else {
      return (l*2 + w*2)
    }
  };


console.log(areaOrPerimeter(5,4))