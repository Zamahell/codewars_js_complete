/**
 * Función de escritura RemoveExclamationMarks que elimina todos los signos de exclamación de una cadena determinada.
 */

let s = "Hello word¡¡"
function removeExclamationMarks(s) {
    let word = s.replace(/¡/g, '')
    return word;
  }

console.log(removeExclamationMarks(s))