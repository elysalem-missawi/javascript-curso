
// Ej 1

/* let numero = prompt("Por favor, ingresa un número entero:");
numero = parseInt(numero);
if(numero > 0){
    console.log("Es un numero positivo")
    
}
else if(numero == 0){
    console.log("Es un numero positivo")
    
}
else{
    console.log("Es un numero negativo")
}
 */

// 2 Estaciones del año
/* let dias = prompt("Por favor ente el núnero del día :")
dias = parseInt(dias)
if(dias = 1){
    console.log(" 1 : Es lunes")
}
 else if(dias = 2){
    console.log("2  : Es martes")
}
 
 else if(dias = 3){
    console.log("3 : Es miercoles")
}
 
 else if(dias = 4){
    console.log("4 : Es jueves")
}
 
 else if(dias = 5){
    console.log("5 : Es viernes")
}
 
 else if(dias = 6){
    console.log("6 : Es sábado")
}
 
 else if(dias = 7){
    console.log("s : Es domiengo")
}
 
else{
    console.log("Eres tonto solo hay 7 dias")
} */
// Ex 2

/*  let estacion = prompt("Por favor entre el numero del mes :")
estacion = parseInt(estacion)
if(estacion <= 3){
    console.log("Es el invierno")
}
 else if(estacion <= 6){
    console.log("Es la Primavera")
}
 else if(estacion <= 9){
    console.log("Es el Verano")
}
 else if(estacion <= 12){
    console.log("Es  Otoño")
}
else{
    console.log("Eres tonto son solo 12 meses")
}
   */


// Ex 3 
    /* let dia =prompt("Dias de la semana");
    switch (dia) {
     case "1":
     console.log("Es lunes");
     break;
     case "2":
     console.log("Es martes");
     break;
     case "3":
     console.log("Es miercolos");
     break;
     case "4":
     console.log("Es jueves");
     break;
     case "5":
     console.log("Es viernes");
     break;
     case "6":
     console.log("Es sabad0");
     break;
     case "7":
     console.log("Es domingo");
     break;
      
     default:
        console.log("No es un dia de la semana");
    } */



// Ex 4

/* let nota = prompt("Por favor determina la calificación :")
nota = parseInt(nota)
if(nota <= 60){
    console.log("Insuficiente")
}
 else if(nota <=69){
    console.log("suficiente ")
}
 else if(nota <=79){
    console.log("bien ")
}
 else if(nota <=89){
    console.log("muy bien ")
}
 else if(nota <=100){
    console.log("Excelemte ")
}
else{
    console.log("No tenemos su calificación supongo que eres extraterrestre")
}
    // 5 Crea un programa que pida al usuario una edad y, según esta, determine el tipo de boleto para el cine:
  */
/* let edad = prompt("Escribe tu edad");
edad = parseInt(edad)
if (edad <= 12) {
    console.log("Boleto infantil")
}
else if (edad <= 60) {
    console.log("Boleto general")
}
else {
    console.log("Boleto para adulto mayor")
} */

// Ex 6  Crea un programa que pida al usuario su edad y diga si es mayor de edad, menor de edad, o si es un adulto mayor (más de 65 años).
/* let edadgeneral =prompt("Escribe tu edad");
edadgeneral = parseInt(edadgeneral)
if(edadgeneral > 18){
    console.log("Eres adulto")
}
if(edadgeneral > 65){
    console.log("Eres adulto mayor")
}
else {
    console.log("Entre un número")
} */
/* 
let = prompt(" El numero del día :")
semana = parseInt(semana)
letsemana = "manzana";
switch (semana) {
 case "1":
 console.log("Es lunes");
 break;
 case "2":
 console.log("Es martes");
 case "3":
 console.log("Es miercolos");
 case "4":
 console.log("Es jueves");
 case "5":
 console.log("Es viernes");
 case "6":
 console.log("Es sábado");
 case "7":
 console.log("Es domingo");
 break;
 default:
 console.log("El día de la semana");
} */

//  
 let semana = prompt("El número del día:");
 semana = parseInt(semana); // Convierte la entrada a un número entero
 
 switch (semana) {
   case 1:
     console.log("Es lunes");
     break;
   case 2:
     console.log("Es martes");
     break;
   case 3:
     console.log("Es miércoles");
     break;
   case 4:
     console.log("Es jueves");
     break;
   case 5:
     console.log("Es viernes");
     break;
   case 6:
     console.log("Es sábado");
     break;
   case 7:
     console.log("Es domingo");
     break;
   default:
     console.log("Número de día de la semana no válido");
 }

