/**
*!La historia:
Bob trabaja como conductor de autobús. Sin embargo, se ha vuelto extremadamente popular entre los residentes de la ciudad. Con tantos pasajeros queriendo subir a su autobús, ¡a veces tiene que enfrentarse al problema de que no queda suficiente espacio en el autobús! Quiere que escribas un programa sencillo que le indique si podrá acomodar a todos los pasajeros.

Descripción general de la tarea:
Tienes que escribir una función que acepte tres parámetros:

El límite es la cantidad de personas que puede llevar el autobús, excluyendo al conductor.
on es el número de personas en el autobús excluyendo al conductor.
espera es el número de personas que wait para subir al autobús excluyendo al conductor.
Si hay suficiente espacio, devuelve 0, y si no lo hay, devuelve el número de pasajeros que no puede llevar.

Ejemplos de uso:
cap = 10, on = 5, wait = 5 --> 0 # Puede acomodar a los 5 pasajeros
cap = 100, on = 60, wait = 50 --> 10 # No caben 10 de los 50 que "wait"
 */

function enough(cap, on, wait){
   let bus = ((on+wait)-cap)

    if(bus<0){
        return 0
    }else{
        return bus
    }   
}

let respuesta = enough(20, 5, 5);
console.log(respuesta)


