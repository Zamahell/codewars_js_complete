/**
 * !Thinkful - Logic Drills: Traffic light
Estás escribiendo código para controlar los semáforos de tu ciudad. Necesita una función para manejar cada cambio de verde, a amarillo, a rojo y luego a verde nuevamente.

Complete la función que toma una cadena como argumento que representa el estado actual de la luz y devuelve una cadena que representa el estado al que debe cambiar la luz.

Por ejemplo, cuando la entrada es verde, la salida debería ser amarilla.
 */

function updateLight(current){
    switch (current.toLowerCase()){
        case 'green':
            return 'yellow';
            break;
        case 'yellow':
            return 'red';
            break;
        case 'red':
            return 'green';
            break;
    }


}

let resultado = updateLight('red')
console.log(resultado)