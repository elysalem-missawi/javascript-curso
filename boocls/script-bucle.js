// 1 Bucles for:
// Crea un programa que utilice un bucle for para imprimir los números del 1 al 10

/* for (let i = 1; i <= 11; i++) {
 console.log(i);
 }
 */
//  2. Crea un programa que pida un número al usuario e imprima la tabla de multiplicar de ese número (del 1 al 10) usando un bucle while
/* let multi = 1
let numero =parseInt(prompt("Por favor, ingresa un número entero:"));
while (multi <= 10) {
 console.log(multi*numero);
 multi++;
} */
// 3. Crea un programa que utilice un bucle do-while para imprimir los números del 5 al 15.

 /* number = 5;
 do {
    console.log(number++)
 }
 while(number <= 15){
    console.log(number++);
 } */
/* let num=5
do{
    console.log(num)
    num = num +1
}while(num >= 15) */
  /*   let numero = 5;

    do {
      console.log(numero);
      numero++;
    } while (numero <= 15); */
    // 4. Crea un programa que utilice un bucle for para sumar los números del 1 al 50 y muestre el resultado 
    let suma = 0; // Inicializamos la variable suma en 0

    for (let i = 1; i <= 50; i++) {
      suma += i; // Sumamos el valor actual de i a la variable suma
    }
    
    console.log("La suma de los números del 1 al 50 es:", suma);  
    // 5. Crea un programa que pida al usuario un número y luego imprima los primeros n números pares usando un bucle while
  /*   const n = parseInt(prompt("Introduce un número entero positivo:"));

if (isNaN(n) || n <= 0) {
  console.log("Por favor, introduce un número entero positivo válido.");
} else {
  let contador = 0;
  let numeroPar = 2; // El primer número par es 2

  console.log(`Los primeros ${n} números pares son:`);

  while (contador < n) {
    console.log(numeroPar);
    numeroPar += 2; // Incrementamos en 2 para obtener el siguiente número par
    contador++;
  }
} */