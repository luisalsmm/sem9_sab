//1.- Crea un programa que al ingresar un número diga si es positivo o negativo. 
// let numero = prompt("Ingrese un número");
// if (numero > 0) {
//     console.log("El número es positivo.");
// } else if (numero < 0) {
//     console.log("El número es negativo.");
// } else {
//     console.log("El número es cero.");
// }

//2.- Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
      //No considerar el caso en que ambos números son iguales. 
//  let numero1 = prompt("Ingrese el primer número");
//  let numero2 = prompt("Ingrese el segundo número");
//  if (numero1 > numero2) {
//      console.log("El número ", numero2, "es menor");
//  } else if(numero1 < numero2) {
//      console.log("El número ", numero1, "es menor");
//  }
      
//3.- Solicitar al usuario un número, y determinar si es divisible entre dos o no.
      //Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número
      //no es divisible entre 2”. (un número es divisible entre otro número si su división sea
      //exacta, es decir, el resto es igual a cero)

// let numero = prompt("Ingrese un numero:");
// if (numero % 2 === 0) {
//     console.log("El numero " + numero + " es divisible entre 2.");
// } else {
//     console.log("El numero " + numero + " no es divisible entre 2.");
// }

//4.- Calcular la factorial de un número: 

// let numero = prompt("Ingrese un numero para calcular su factorial:");
// function calcularFactorial(num){
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         let factorial = 1;
//         for (let i = 2; i <= num; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     }
// }
// let resultadoFactorial = calcularFactorial(numero);
// console.log("El factorial de " + numero + " es: " + resultadoFactorial);

//5.- Escriba un programa en JavaScript de un bucle que itere del 1 al 15. Para cada
    //iteración, verifica si el número actual es impar o par, y muestra un mensaje en la
    //pantalla. 

    // for (let i = 1; i <= 15; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i + " es un número par.");
    //     } else {
    //         console.log(i + " es un número impar.");
    //     }
    // }

//6.- Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
    //mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
    //solo al mostrar los números indicados por el usuario.  

    // let numero1 = prompt("Ingrese el primer número entre 1 y 50:");
    // let numero2 = prompt("Ingrese el segundo número entre 1 y 50:");
    
    // numero1 = parseInt(numero1);
    // numero2 = parseInt(numero2);
    
    // for (let i = 1; i <= 50; i++) {
    //     if (i === numero1 || i === numero2) {
    //         console.log(i + " ¡Lotería!");
    //     } else {
    //         console.log(i);
    //     }
    // }

//7.- Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para
    //múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco
    //imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz". 

    // for (let i = 1; i <= 100; i++) {
    //      if (i % 3 === 0 && i % 5 === 0) {
    //         console.log(i + " Fizzbuzz");
    //      }  else if (i % 3 ===0){
    //         console.log(i + " Fizz")
    //      } else if (i % 5 ===0){
    //         console.log(i + " Buzz")
    //      } else {
    //         console.log(i)
    //      }
    //     }
          
//8.- Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que
    //el número efectivamente esté en ese rango, si no lo está imprima un mensaje de
    //error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si
    //está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10. 

// let calificacion = prompt("Ingrese un numero entre 1 y 10");

// calificacion = parseFloat(calificacion);

// if (!isNaN(calificacion) && calificacion >= 1 && calificacion <= 10) {
//     if (calificacion < 6) {
//         console.log("Reprobado");
//     } else if (calificacion >= 6 && calificacion <= 8) {
//         console.log("Regular");
//     } else if (calificacion === 9) {
//         console.log("Bien");
//     } else if (calificacion === 10) {
//         console.log("Excelente");
//     }
// } else {
//     console.log("Error: La calificación debe estar entre 1 y 10.");
// }

//9.- Escribe un programa que responda a un usuario que quiere comprar un helado
    //en una conocida marca de comida rápida, cuánto le costará en función del
    //topping que elija. 
    
    //• El helado sin topping cuesta 50 MXN. 
    //• El topping de oreo cuesta 10 MXN. 
    //• El topping de KitKat cuesta 15 MXN. 
    //• El topping de brownie cuesta 20 MXN. 
    
    //En caso de no disponer del topping solicitado por el usuario, el programa le 
    //indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el 
    //precio del helado sin ningún topping.
   
    //*****SOLUCION 1 usando if****/
        //  let topping = prompt("Para calcular el precio de su helado, ingrese una de las siguientes opciones de Tooping: (oreo - kitkat - brownie)");

        //  if (topping.toLowerCase() === "oreo"){
        //     console.log("El precio de su helado es 60 MXN")
        //  } else if (topping.toLowerCase() === "kitkat"){
        //     console.log("El precio de su helado es 65 MXN")
        //  } else if (topping.toLowerCase() === "brownie"){
        //     console.log("El precio de su helado es 70 MXN")
        //  } else {
        //     console.log("No tenemos este topping, lo sentimos. El precio de su helado sin Topping es 50 MXN")
        //  }

    //*****SOLUCION 2 usando switch****/

        // let topping = prompt("Elija un topping para su helado (oreo, KitKat, brownie):");

        // let precioHeladoSolo = 50;
        // let precioToppingOreo = 10;
        // let precioToppingKitKat = 15;
        // let precioToppingBrownie = 20;

        // switch (topping.toLowerCase()) {
        //     case "oreo":
        //         console.log("El precio total de su helado es: " + (precioHeladoSolo + precioToppingOreo) + " MXN");
        //         break;
        //     case "kitkat":
        //         console.log("El precio total de su helado es: " + (precioHeladoSolo + precioToppingKitKat) + " MXN");
        //         break;
        //     case "brownie":
        //         console.log("El precio total de su helado es: " + (precioHeladoSolo + precioToppingBrownie) + " MXN");
        //         break;
        //     default:
        //         console.log("Lo sentimos, no tenemos este topping.");
        //         console.log("El precio total del helado sin topping es: " + precioHeladoSolo + " MXN");
        // }


//10.- Un conocido portal de educación en tecnología está ofreciendo programas para
    //aprender a desarrollar aplicaciones. Escribe un programa que le indique a la
    //persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción
    //elegida. 
    //El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 

    //• Course: $4999 MXN 
    //• Carrera $3999 MXN 
    //• Master: $2999 MXN 

    //Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
    //correspondiente al precio final. 

    //• Beca Facebook: 20% de descuento. 
    //• Beca Google: 15% de descuento. 
    //• Beca Jesua: 50% de descuento. 

    //Finalmente, además del precio mensual con descuento, indicar al usuario cuánto
    //gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones: 

    //• Course: 2 meses 
    //• Carrera 6 meses 
    //• Master: 12 meses

    //SOLUCION:
        // let programa = prompt("Elija un Programa Educativo (Course - Carrera - Master):");
        // let beca = prompt("Elija una Beca (Facebook - Google - Jesua):");

        //     let precio = 0;
        //     let duracion = 0;
        //     let descuento = 0;
        
        // switch (programa.toLowerCase()){
        //     case "course":
        //         precio = 4999;
        //         duracion = 2;
        //         break;
        //     case "carrera":
        //         precio = 3999;
        //         duracion = 6;
        //     case "master":
        //         precio = 2999;
        //         duracion = 12;
        //     default:
        //         console.log("opcion Invalida")
        // }

        // switch (beca.toLowerCase()){
        //     case "facebook":
        //         descuento = 0.2;
        //         break;
        //     case "google":
        //         descuento = 0.15;
        //         break;
        //     case "jesua":
        //             descuento = 0.5;
        //         break;
        //     default:
        //         console.log("opcion Invalida")
        // }
        
        // let descuentoMensual = descuento*precio;
        // let costoMensual = precio-(descuentoMensual);
        // let costoTotal = costoMensual * duracion;
        
        // console.log("El Precio Mensual del Programa Educativo que eligió " + programa + " con descuento es: " + costoMensual);
        // console.log("El costo Total del Programa Educativo que eligió es: " + costoTotal);

//11.-  Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
        // distancia recorrida por un vehículo con cargo extra por los litros consumidos,
        // tomando en consideración lo siguiente: 
        
        // Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser
        // 0.10 y si es “autobús” 0.5. 
        
        // Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es
        // mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
        // Considere: 
        // total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. 

        let tipoVehiculo = prompt("Ingrese el tipo de vehiculo: (coche - moto - autobus)");
        let kmsRecorridos = prompt("Ingrese la distancia recorrida por su vehiculo en Kms");
        let litrosConsumidos = prompt("Ingrese los litros consumidos por su vehiculo");
        
        let precioKm = 0;
        kmsRecorridos = parseInt(kmsRecorridos);
        litrosConsumidos = parseInt(litrosConsumidos);


        switch (tipoVehiculo){
            case "coche":
                precioKm = 0.2;
                break;
            case "moto":
                precioKm = 0.1;
                break;
            case "autobus":
                precioKm = 0.5;
                break;
            default:
                console.log("opcion Invalida");
        }
        
        let extra = 0;

        if (litrosConsumidos > 0 && litrosConsumidos <= 100){
            extra = 5;
        } else if (litrosConsumidos > 100) {
            extra = 10;
        } else {
            console.log("Error");
        }

        let precio = precioKm * kmsRecorridos;
        let precioTotal = precio + extra;

        console.log("El precio Total a pagar de acuerdo a la distancia recorrida por su vehículo es: " + precioTotal);