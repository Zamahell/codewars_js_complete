/**
El objetivo de este ejercicio es convertir una cadena en una nueva cadena donde cada carácter de la nueva cadena sea "(" si ese carácter aparece solo unavez en la cadena original, o ")" si ese carácter aparece más de una vez en la cadena original. cadena. Ignore las mayúsculas al determinar si un personaje es un duplicado.
 */

function duplicateEncode(word){
    let contador = word.toLowerCase().split('').reduce((contador, caracter) => {
        contador[caracter] = (contador[caracter] || 0) + 1;
        return contador;
    }, {}); // Definir el objeto contador aquí

    let traduccion = word.toLowerCase().split('').map(caracter => {
        return contador[caracter] === 1 ? '(' : ')';
    }).join('');
    
    return traduccion;
}


let x = "holaMundo" 
let resultado = duplicateEncode(x)
console.log(resultado)