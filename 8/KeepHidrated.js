/**
A Nathan le encanta andar en bicicleta.
Como Nathan sabe que es importante mantenerse hidratado, bebe 0,5 litros de agua por hora de ciclismo.

Te dan el tiempo en horas y debes devolver la cantidad de litros que beberá Nathan, redondeado al valor más pequeño.
Por ejemplo:

time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

*/

function litres(time) {
    return Math.floor(time*0.5);
  }

let tiempo = 11.8
let resultado = litres(tiempo)
console.log(resultado)