// Genera un número aleatorio entre 0 y 9 (inclusive) y lo guarda en la variable numeroSecreto
let numeroSecreto = Math.floor(Math.random() * 10);

// Inicializa el contador de intentos en 0
let intentos = 0;

// Inicia un bucle que se repite mientras el número de intentos sea menor a 5
while (intentos < 5) {
  // Solicita al usuario que ingrese un número entre 0 y 9, y lo convierte a entero
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));

  // Incrementa el contador de intentos en 1
  intentos++;

  // Verifica si el número ingresado por el usuario es igual al número secreto
  if (intento == numeroSecreto) {
    // Si el número es correcto, muestra un mensaje de éxito y termina el bucle con 'break'
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }else // mostrar que cantidad de intentos lleva 
        {

            alert("solo tienes 5 intentos y llevas  " + intentos)            
                        
                           
        }

        
        
  // Si el número no es correcto y se llega al máximo de intentos, el bucle termina automáticamente
}

 alert( `se acabaron tus intentos suerte en la proxima vez `)