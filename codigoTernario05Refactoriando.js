/*
Ejemplo normal   
let palabraPersona = "";

if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
} 

*/

let palabraPersona;
let cantidadInput = prompt("Ingresa la cantidad de personas:");

// Validar si no es un número
isNaN(cantidadInput)
  ? console.log("Error: No ingresaste un número.")
  : (
      palabraPersona = (Number(cantidadInput) === 0)
        ? "Ingresaste cero personas."
        : (Number(cantidadInput) === 1)
          ? "Ingresaste 1 persona."
          : `Ingresaste ${cantidadInput} personas.`,
      console.log(palabraPersona)
    );