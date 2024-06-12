/**
Nuestro equipo de fútbol ha terminado el campeonato.

Los resultados de los partidos de nuestro equipo se registran en una colección de cadenas. Cada partido está representado por una cadena en el formato "x:y", donde x es la puntuación de nuestro equipo e y es la puntuación de nuestro oponente.

Por ejemplo: ["3:1", "2:2", "0:1", ...]

Los puntos se otorgan por cada partido de la siguiente manera:

si x > y: 3 puntos (ganar)
si x < y: 0 puntos (pérdida)
si x = y: 1 punto (empate)
Necesitamos escribir una función que tome esta colección y devuelva la cantidad de puntos que nuestro equipo (x) obtuvo en el campeonato según las reglas dadas anteriormente.
 * 
 */

function points(games) {
    let puntos = 0;

    for(let resultado of games){
        let [x,y] = resultado.split(':').map(Number)

        if(x>y){
            puntos +=3
        }else if (x === y){
            puntos +=1
        }
        
    }
    return puntos;
  }
 
let juegos = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
let finalTorneo = points(juegos)
console.log(finalTorneo)