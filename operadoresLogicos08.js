// ===============================
// OPERADORES LÓGICOS EN JAVASCRIPT
// ===============================

// 1. Operador AND (&&)
// ----------------------
// Significa: Y lógico.
// Solo devuelve true si AMBAS condiciones son verdaderas.

let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("✅ AND: Puede conducir.");
} else {
  console.log("❌ AND: No puede conducir.");
}
// En este caso, las dos condiciones son verdaderas => resultado: true

// ---------------------------------------------

// 2. Operador OR (||)
// ----------------------
// Significa: O lógico.
// Devuelve true si AL MENOS una de las condiciones es verdadera.

let tieneManzana = false;
let tieneBanana = true;

if (tieneManzana || tieneBanana) {
  console.log("✅ OR: Tienes frutas.");
} else {
  console.log("❌ OR: No tienes frutas.");
}
// Solo una condición es verdadera => resultado: true

// ---------------------------------------------

// 3. Operador NOT (!)
// ----------------------
// Significa: Negación lógica.
// Invierte el valor lógico de una condición.

let estaLloviendo = false;

if (!estaLloviendo) {
  console.log("✅ NOT: Puedes salir sin paraguas.");
} else {
  console.log("❌ NOT: Mejor lleva paraguas.");
}
// !false => true => puedes salir sin paraguas

// ---------------------------------------------

// 4. Operador de IGUALDAD (==)
// -----------------------------
// Compara si dos valores son IGUALES (sin importar el tipo de dato).

let numero = 10;
let texto = "10";

if (numero == texto) {
  console.log("✅ == : Son iguales (conversión implícita).");
} else {
  console.log("❌ == : Son diferentes.");
}
// Aunque uno es número y otro string, los considera iguales

// ---------------------------------------------

// 5. Operador de DIFERENCIA (!=)
// ------------------------------
// Devuelve true si los valores son diferentes.

if (numero != texto) {
  console.log("✅ != : Son diferentes.");
} else {
  console.log("❌ != : Son iguales.");
}
// En este caso, devuelve false, porque 10 == "10"

// ---------------------------------------------

// 6. Menor que (<)
// -----------------
let edadPersona = 16;

if (edadPersona < 18) {
  console.log("✅ <: Es menor de edad.");
}

// ---------------------------------------------

// 7. Mayor que (>)
// -----------------
if (edadPersona > 10) {
  console.log("✅ >: Tiene más de 10 años.");
}

// ---------------------------------------------

// 8. Menor o igual que (<=)
// --------------------------
if (edadPersona <= 16) {
  console.log("✅ <=: Tiene 16 años o menos.");
}

// ---------------------------------------------

// 9. Mayor o igual que (>=)
// --------------------------
if (edadPersona >= 18) {
  console.log("✅ >=: Es mayor o igual a 18.");
} else {
  console.log("❌ >=: No tiene 18 aún.");
}

// ===============================
// FIN DEL ARCHIVO
// ===============================
