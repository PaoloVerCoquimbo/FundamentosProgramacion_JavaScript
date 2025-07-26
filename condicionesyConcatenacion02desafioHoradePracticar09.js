// ------------------- 1. PREGUNTAR DÍA DE LA SEMANA -------------------

// prompt: pide al usuario que escriba qué día es
let dia = prompt("¿Qué día de la semana es?");

// Convertimos la respuesta a minúsculas para evitar errores por mayúsculas (por ejemplo, "Lunes" vs "lunes")
dia = dia.toLowerCase();

// Verificamos si el día ingresado es sábado o domingo
// || significa "o" lógico. Si es uno u otro, mostramos mensaje de fin de semana
if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
    alert("¡Buen fin de semana!"); // alert: muestra mensaje emergente al usuario
} else {
    alert("¡Buena semana!"); // Se muestra si no es sábado ni domingo
}

// ------------------- 2. POSITIVO O NEGATIVO -------------------

// prompt: pide al usuario que escriba un número
let numero = prompt("Ingresa un número (positivo o negativo):");

// Number(): convierte el texto ingresado en número
numero = Number(numero);

// isNaN(): verifica si lo ingresado **no** es un número (NaN = Not a Number)
if (isNaN(numero)) {
    alert("Eso no es un número válido."); // Muestra si el usuario escribió algo no numérico
} else if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero."); // Caso especial si el número es exactamente 0
}

// ------------------- 3. SISTEMA DE PUNTUACIÓN -------------------

// prompt: pedimos al usuario que diga cuántos puntos hizo
let puntos = prompt("¿Cuántos puntos hiciste en el juego?");

// Convertimos a número
puntos = Number(puntos);

// Verificamos que sea un número válido
if (isNaN(puntos)) {
    alert("Puntaje inválido."); // Si no es número, lo informamos
} else if (puntos >= 100) {
    alert("¡Felicidades, has ganado!"); // Si sacó 100 o más, gana
} else {
    alert("Inténtalo nuevamente para ganar."); // Si sacó menos, se motiva
}

// ------------------- 4. MENSAJE DE SALDO -------------------

// Definimos un saldo de ejemplo (puede venir de una variable real o de una base de datos)
let saldo = 1540.75;

// Template string: usamos backticks `` y ${variable} para crear un mensaje con el valor dentro
alert(`Tu saldo actual es de $${saldo}`); // Muestra mensaje con el saldo actual

// ------------------- 5. NOMBRE DEL USUARIO -------------------

// prompt: pedimos al usuario que escriba su nombre
let nombre = prompt("¿Cuál es tu nombre?");

// Verificamos si el usuario escribió algo (por ejemplo, no dejó vacío)
if (nombre) {
    alert(`¡Bienvenido, ${nombre}!`); // Mostramos mensaje personalizado usando template string
} else {
    alert("No ingresaste un nombre."); // Si no escribió nada, lo avisamos
}
