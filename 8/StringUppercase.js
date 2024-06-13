/**
 * !Is the String Uppercase?
Tarea
Cree un método para ver si la cadena está TODO EN MAYÚSCULAS.

Ejemplos (entrada -> salida)
"c" -> Falso
"C" -> Verdadero
"hola SOY DONALD" -> Falso
"HOLA SOY DONALD" -> Verdadero
"ACSKLDFJSgSKLDFJSKLDFJ" -> Falso
"ACSKLDFJSGSKLDFJSKLDFJ" -> Verdadero
En este Kata, se dice que una cadena está TODO EN MAYÚSCULAS siempre que no contenga ninguna letra minúscula, por lo que cualquier cadena que no contenga ninguna letra se considera trivialmente que está TODO EN MAYÚSCULAS.
 */


String.prototype.isUpperCase=function() {return this==this.toUpperCase()}