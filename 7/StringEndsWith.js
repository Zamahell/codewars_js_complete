/**
 * !String ends with?
Complete la solución para que devuelva verdadero si el primer argumento (cadena) pasado termina con el segundo argumento (también una cadena).

Ejemplos:

solución('abc', 'bc') // devuelve verdadero
solución('abc', 'd') // devuelve falso
 */

function solution(str, ending){
    if(ending.length == 0 ){
        return true;
    }

    return str.slice(-ending.length) == ending
  }



function solution(str, ending){
return str.endsWith(ending);
}
console.log(solution("hola", "la"))