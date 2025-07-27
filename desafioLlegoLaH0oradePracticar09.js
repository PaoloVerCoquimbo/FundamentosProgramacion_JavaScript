// 1. Mostrar mensaje de bienvenida
console.log(" ¡Bienvenido/a al programa de práctica de JavaScript!");

// 2. Crear una variable con tu nombre y mostrarlo en consola
let nombre = "Paolo"; // Puedes cambiar tu nombre aquí
console.log("¡Hola, " + nombre + "!");

// 3. Mostrar mensaje con alert (solo funciona en navegador)
alert("¡Hola, " + nombre + "!");

// 4. Preguntar lenguaje favorito con prompt y mostrar en consola
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje favorito es: " + lenguajeFavorito);

// 5. Sumar dos valores y mostrar el resultado
let valor1 = 10;
let valor2 = 5;
let resultadoSuma = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultadoSuma);

// 6. Restar dos valores y mostrar el resultado
let resultadoResta = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultadoResta);

// 7. Pedir edad y verificar si es mayor de edad
let edad = prompt("¿Cuántos años tienes?");
edad = parseInt(edad); // Convertimos a número
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log(" Eres menor de edad.");
}

// 8. Verificar si un número es positivo, negativo o cero
let numero = prompt("Ingresa un número:");
numero = parseFloat(numero); // Convertimos a número decimal por si acaso
if (numero > 0) {
  console.log(" El número es positivo.");
} else if (numero < 0) {
  console.log(" El número es negativo.");
} else {
  console.log(" El número es cero.");
}

// 9. Bucle while del 1 al 10
let contador = 1;
while (contador <= 10) {
  console.log("Número: " + contador);
  contador++;
}

// 10. Evaluar si una nota es aprobada o reprobada
let nota = 8; // Cambia este valor para probar otras notas
if (nota >= 7) {
  console.log(" Aprobado");
} else {
  console.log(" Reprobado");
}

// 11. Generar número aleatorio (decimal)
let numeroAleatorio = Math.random(); // Entre 0 y 1
console.log("Número aleatorio (decimal): " + numeroAleatorio);

// 12. Número aleatorio entero entre 1 y 10
let aleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10: " + aleatorio1a10);

// 13. Número aleatorio entero entre 1 y 1000
let aleatorio1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entre 1 y 1000: " + aleatorio1a1000);
