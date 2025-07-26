console.log("Estamos dentro de adivina el numero ");// esto se muestra solo en la consola

let numSecreto =6;// declara la variable y le asigna el valor de 6 
let numUsuario = 0; //declara la variable numUsuario y esta es inicializada en 0 
let intentos =1; // declara y inicializa 
let numeroDeVeces = "vez";
alert("hola mundo, soy un cientifico de datos  ");// esto se muestra al ususario 
//let es para declarar un variable de cualquier tipo de dato
// numSecreto = Math.floor(Math.random() * 10) + 1; // asigna un numero aleatorio 
 
 while(numUsuario != numSecreto)// si se cumple que numUsuario es distinto de numSecreto entra 
   {// bloque de codigo de while miestra se cumpla la condicion queda en bucle 
   numUsuario = prompt("me  indicas un numero ");// pide un dato al usuario 

   console.log(numUsuario);// muestra la variable por consola 

 
   if(numUsuario == numSecreto)/*condicion y revisa si las variables son iguales
   entre numUsuario y numSecreto si es igual entra y ejecuta el codigo  */
      {// bloque de codigo if inicio
   console.log("son iguales " + numSecreto);
   alert(`Acertaste, el número es :${numUsuario}. lo hiciste en ${intentos} - ${numeroDeVeces}`); // MUESTRA EL VALOR DE LA VARIABLE 

      }//Bloque de codigo if  final
            else//si no son igual entra aqui osea es falso 
               {// bloque de codigo del else 1
                     if(numUsuario < numSecreto)
                     {// inicio if 2  anidado 
                     alert("debe escojer un numero mayor a :");// muestra mensaje a usuario 
                          
                     }//fin if 2  anidado 
                        else// else de if 2 
                           {//inicio bloque de codigo else de if 2
                           alert("debe escojer un numero menor a :");// muestra mensaje a usuario
                           }//fin bloque de codigo else de if 2
                        /*CANTIDAD DE INTENTOS */
                         
    intentos ++;//incrementa en 1 los intentos 
    numeroDeVeces = "veces";//cambia el texto de vez a veces 


                             
      alert("has fallado");// este mensaje se muestra al usuario si no es el numero correto 
   //alert("el numero era el siguiente " + numSecreto);
   if(intentos > 3)
                              {//inicio de bloque de if cantidad de intentos 3 
                                    alert("has alcanzado la cantidad de intentos " + intentos);
                                    break;// termina o finaliza el codigo no se sigue ejecutando

                              }

                }// fin de bloque de codido del else 1
}// fin de while 