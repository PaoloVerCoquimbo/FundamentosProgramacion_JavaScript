// -------------------------------
// 1. Contador del 1 al 10
// -------------------------------
let contador1 = 1;

while (contador1 <= 10) {
  console.log("CONTADOR DEL 1 AL 10 . " + contador1); // Muestra el número actual
  contador1++;            // Incrementa el contador en 1
}

// -------------------------------
// 2. Contador del 10 al 0
// -------------------------------
let contador2 = 10;

while (contador2 >= 0) {
  console.log("CONTADOR DEL 10 AL 0 . " + contador2); // Muestra el número actual
  contador2--;            // Decrementa el contador en 1
}

// -------------------------------
// 3. Cuenta progresiva desde 0 hasta un número ingresado por el usuario
// -------------------------------
let numeroFinal = parseInt(prompt("Ingresa un número para la cuenta progresiva:"));
let contador3 = 0;

while (contador3 <= numeroFinal) {
  console.log("CONTADOR DEL 0 AL NUMERO INGRESADO OR USUARIO . " + contador3); // Muestra el número actual
  contador3++;            // Incrementa hasta alcanzar el número ingresado
}

// -------------------------------
// 4. Cuenta regresiva desde un número ingresado por el usuario hasta 0
// -------------------------------
let numeroInicio = parseInt(prompt("Ingresa un número para la cuenta regresiva:"));

while (numeroInicio >= 0) {
  console.log("Cuenta regresiva desde un número ingresado por el usuario hasta 0" + numeroInicio); // Muestra el número actual
  numeroInicio--;            // Disminuye el número hasta llegar a 0
}
