/**
El museo de cosas increíblemente aburridas quiere deshacerse de algunas piezas expuestas. Miriam, la arquitecta de interiores, idea un plan para eliminar las exposiciones más aburridas. Ella les da una calificación y luego elimina el que tiene la calificación más baja.

Sin embargo, justo cuando terminó de calificar todas las exhibiciones, se dirige a una feria importante, por lo que le pide que escriba un programa que le indique las calificaciones de las exhibiciones después de eliminar la más baja. Me parece bien.

Tarea
Dada una matriz de números enteros, elimine el valor más pequeño. No mute la matriz/lista original. Si hay varios elementos con el mismo valor, elimine el que tenga el índice más bajo. Si obtiene una matriz/lista vacía, devuelva una matriz/lista vacía.

No cambies el orden de los elementos que quedan.

Ejemplos
* Entrada: [1,2,3,4,5], salida = [2,3,4,5]
* Entrada: [5,3,2,1,4], salida = [5,3,2,4]
* Entrada: [2,2,1,2,1], salida = [2,2,2,1]
 */

function removeSmallest(numbers) {
    if(numbers.length == 0){
        return [];
    }

    let indiceMin = numbers.indexOf(Math.min(...numbers))
    
    return numbers.filter((_, index) => index !== indiceMin)



}
let n = [1,2,3,4,5]
let resultado = removeSmallest(n)
console.log(resultado)
