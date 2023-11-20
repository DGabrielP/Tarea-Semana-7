'use strict'

function getage(anacimiento){
    let edadactual;
    edadactual = 2023 - anacimiento;
    return edadactual
}
let año = Number(prompt('ingrese año de nacimiento'))
let edad = getage(año);
alert (edad);
