'use strict'

function sumar(Multiplicando, Multiplicador) {
    let suma= 0;
    for (let i = 0; i < Multiplicador; i++) {
    suma = suma + Multiplicando;
}
return suma;
}

let num1 = Number(prompt('ingrese un numero'));
let num2 = Number(prompt('ingrese un numero'));

let result = sumar(num1, num2);
alert(result);


