/**
 * !Build Tower
Construya una torre en forma de pirámide, como una matriz/lista de cadenas, dado un número entero positivo de pisos. Una torre se representa con el carácter "*".

Por ejemplo, una torre de 3 pisos se ve así:
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */ 

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i<nFloors; i++){
        tower.push(' '.repeat(nFloors - i -1) + "*".repeat((i*2) + 1) + " ".repeat(nFloors - i - 1))
    }
    return tower;
  }

  let result = towerBuilder(3)
  console.log(result)