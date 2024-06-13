/**
 * !Sum the string
 Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):

Ejemplo: (Entrada1, Entrada2 -->Salida)

"4", "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notas:

Si alguna de las entradas es una cadena vacía, considérela como cero.

Las entradas y la salida esperada nunca excederán el límite de enteros de 32 bits con signo (2^31 - 1)
*/

function sumStr(a,b) {
    let num1 = parseInt(a)||0
    let num2 = parseInt(b)||0
    return (num1 + num2).toString()
}

let resultado = sumStr("2", "3")
console.log(resultado)




function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }