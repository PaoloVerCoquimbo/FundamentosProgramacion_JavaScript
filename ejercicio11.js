// 1. Muestra una alerta con el mensaje de bienvenida
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// 2. Declara una variable llamada nombre y asígnale el valor "Lua"
let nombre = "Lua";

// 3. Crea una variable llamada edad y asígnale el valor 25
let edad = 25;

// 4. Establece una variable numeroDeVentas y asígnale el valor 50
let numeroDeVentas = 50;

// 5. Establece una variable saldoDisponible y asígnale el valor 1000
let saldoDisponible = 1000;

// 6. Muestra una alerta con el texto de error
alert("¡Error! Completa todos los campos");

// 7. Declara una variable con el mensaje de error y luego muéstralo con una alerta
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// 8. Usa un prompt para pedir el nombre al usuario
nombre = prompt("¿Cuál es tu nombre?");

// 9. Usa un prompt para pedir la edad al usuario
// El prompt siempre devuelve texto, así que convertimos el valor a número con Number()
edad = Number(prompt("¿Cuál es tu edad?"));

// 10. Si la edad es 18 o más, muestra un mensaje sobre la licencia
if (edad >= 18) 
    {// abre bloque 
  alert("¡Puedes obtener tu licencia de conducir!");
}
