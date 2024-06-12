/**

* ! : Will you make it?
Estabas acampando con tus amigos lejos de casa, pero cuando llega el momento de regresar, te das cuenta de que se te está acabando el combustible y que el surtidor más cercano está a 50 millas de distancia. Usted sabe que, en promedio, su automóvil recorre aproximadamente 25 millas por galón. Quedan 2 galones.

Teniendo en cuenta estos factores, escribe una función que te indique si es posible llegar a la bomba o no.

La función debe devolver verdadero si es posible y falso si no.

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (fuelLeft*mpg >= distanceToPump)
  };