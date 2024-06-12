/*
¿Puedes encontrar la aguja en el pajar?

Escribe una función findNeedle() que tome una matriz llena de basura pero que contenga una "aguja"
Después de que su función encuentre la aguja, debería devolver un mensaje (como una cadena) que diga:
"encontré la aguja en la posición" más el índice en el que encontró la aguja, entonces:
Ejemplo (Entrada --> Salida)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "encontré la aguja en la posición 5"*/ 

function findNeedle(haystack){
    return haystack.indexOf('needle')? `found the needle at position ${haystack.indexOf('needle')}` : "Your function didn't return anything";
    
    
    // let find = haystack.indexOf("needle");
    // if (find === -1){
    //     return "Your function didn't return anything";

    // }
    // return `found the needle at position ${find}`
}

let basura = ['3', '123124234', undefined,'needle'  ,'world', 'hay', 2, '3', true, false];
let resultado = findNeedle(basura)
console.log(resultado)