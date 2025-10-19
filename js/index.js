/* let num1 = prompt("Ingresa un número");
let num2 = prompt("Ingresa otro número");

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingresa números válidos");
} else {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
}


let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log("Suma= " + suma)
console.log("Resta= " + resta)
console.log("Multiplicación= " + multiplicacion)
console.log("División= " + division) */

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

if (isNaN(edad)) {
    alert("Por favor ingresa una edad válida");
} else {
    edad = parseInt(edad);
    if (edad < 18) {
        alert("Eres menor de edad");
    } else {
        alert("Eres mayor de edad");
}
}