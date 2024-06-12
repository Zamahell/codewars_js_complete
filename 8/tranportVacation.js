/**
 * !Transportion on vacation
Después de un duro trimestre en la oficina, decides descansar un poco y tomarte unas vacaciones. Así que reservarás un vuelo para ti y tu novia e intentarás dejar todo el desorden atrás.

Necesitará un coche de alquiler para poder desplazarse durante sus vacaciones. El responsable del alquiler de coches te hace buenas ofertas.

Cada día que alquilas el auto cuesta $40. Si alquilas el auto por 7 días o más, obtienes $50 de descuento en tu total. Alternativamente, si alquilas el auto por 3 días o más, obtienes $20 de descuento en tu total.

Escriba un código que proporcione el monto total para diferentes días (d).
 */

function rentalCarCost(d) {
    if (d >= 7 ){
        return (d*40)-50
    }else if(d >= 3) {
        return (d*40)-20
    }else {
        return (d*40)
    }
}

let resultado = rentalCarCost(10)
console.log(resultado)