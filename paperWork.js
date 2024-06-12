/*
Tus compañeros de clase te pidieron que les copiaras algunos documentos. Sabes que hay 'n' compañeros y el papeleo tiene 'm' páginas.
Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0 o m < 0, devuelve 0.

Ejemplo:
n= 5, m=5: 25
n=-5, m=5: 0

*/ 

function paperwork(n,m){
    return n<0 || m<0 ? 0 : n*m;
}

let resultado = paperwork(5, 5)
console.log(resultado)