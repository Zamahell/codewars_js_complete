/**
La cucaracha es uno de los insectos más rápidos. Escribe una función que tome su velocidad en km por hora y la devuelva en cm por segundo, redondeada hacia abajo al número entero (= piso). */

function cockroachSpeed(s){
    let cm = Math.floor(s*27.778)
    return cm
}

let velocidad = cockroachSpeed(1);
console.log(velocidad)

function cockroachSpeed2(s){
    let m = s*1000
    let cm = m*100
    return Math.floor(cm/3600)
}

let velocidad2 = cockroachSpeed2(1);
console.log(velocidad2)