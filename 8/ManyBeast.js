/**
 * !The feast of many beast
¡Todos los animales se están divirtiendo! Cada animal trae un plato. Sólo hay una regla: el plato debe empezar y terminar con las mismas letras que el nombre del animal. Por ejemplo, la gran garza azul trae pan de ajo y el carbonero trae pastel de chocolate.

Escribe una función festín que tome el nombre y el plato del animal como argumentos y devuelva verdadero o falso para indicar si la bestia puede llevar el plato al festín.

Supongamos que bestia y plato son siempre cadenas en minúsculas y que cada una tiene al menos dos letras. bestia y plato pueden contener guiones y espacios, pero estos no aparecerán al principio ni al final de la cadena. No contendrán números.

the "great blue heron" is bringing "garlic naan"
"chickadee" is bringing "chocolate cake"
"brow bear" "bear claw" => farso farso
*/

function feast(beast, dish) {
    let bestia = beast[0]
    let bestia1 = beast[beast.length - 1]
    let plato = dish[0]
    let plato1 = dish[dish.length - 1]

    return bestia == plato && bestia1 == plato1;
}

let resultado = feast("garza", "gorota")
console.log(resultado)