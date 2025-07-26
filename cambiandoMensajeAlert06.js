
// Muestra una ventana emergente al usuario con un mensaje de bienvenida
alert('Bienvenido al juego del número secreto7');

// Solicita al usuario que ingrese un número entre 1 y 10
// El valor ingresado se guarda en la variable 'intento'
// Nota: prompt siempre devuelve un dato tipo "string" (texto)
let intento = prompt('Elige un número entre 1 y 10');

// Define el número secreto (el número correcto que debe adivinar el usuario)
let numeroSecreto = 4;

// Compara si el valor ingresado por el usuario es igual al número secreto
// La comparación se muestra en la consola del navegador (true o false)
console.log(intento == numeroSecreto);

// Estructura condicional:
// Si el número ingresado por el usuario (intento) es igual al número secreto...
if (intento == numeroSecreto) {
    // ...entonces muestra un mensaje diciendo que acertó
    alert('Acertaste');
} else {
    // ...si no es igual, muestra el número secreto correcto
    alert('El número secreto era ' + numeroSecreto);
}