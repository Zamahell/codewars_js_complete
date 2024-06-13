/**
 * !Delete occurrence of an element if it occurs more than n times
 * 
Alice y Bob estaban de vacaciones. Ambos tomaron muchas fotografías de los lugares en los que han estado y ahora quieren mostrarle a Charlie toda su colección. Sin embargo, a Charlie no le gustan estas sesiones, ya que el motivo suele repetirse. No le gusta ver la torre Eiffel 40 veces.
Les dice que sólo se sentará en la sesión si muestran el mismo motivo como máximo N veces. Afortunadamente, Alice y Bob pueden codificar el motivo como un número. ¿Puedes ayudarlos a eliminar números de modo que su lista contenga cada número solo hasta N veces, sin cambiar el orden?

Tarea
Dada una lista y un número, cree una nueva lista que contenga cada número de lista como máximo N veces, sin reordenar.
Por ejemplo, si el número de entrada es 2 y la lista de entrada es [1,2,3,1,2,1,2,3], toma [1,2,3,1,2] y suelta el siguiente [ 1,2] ya que esto llevaría a que 1 y 2 estuvieran en el resultado 3 veces, y luego tomar 3, lo que lleva a [1,2,3,1,2,3].
Con la lista [20,37,20,21] y el número 1, el resultado sería [20,37,21]
*/


function deleteNth(arr,n){
    let counts = {}
    let result = []

    for(let num of arr){
        if(counts[num]){
            if(counts[num]<n){
                result.push(num)
                counts[num]++;
            }
        }else{
            result.push(num);
            counts[num]=1;
        }
    }
    return result;
  }