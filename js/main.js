// Función para sumar dos números
function sumarNumeros(a, b) {
    return a + b;  // Hay un error: la variable 'B' debería ser 'b'
}

function multiplicarNumeros(a, b) {
    return a * b; 
}

// Llamada a la función con dos números
let resultado = sumarNumeros(3, 5);
let multiplicar = multiplicarNumeros(3,5)

console.log("El resultado de la suma es: " + resultado);
console.log(multiplicar);