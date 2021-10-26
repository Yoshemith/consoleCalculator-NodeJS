//EJERCICIO DE CALCULADORA

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const suma = require('./suma');
const resta = require('./resta');
const multiplicacion = require('./multiplicacion');
const dividir = require('./dividir');

//CALCULADORA GENERICA
console.log("*Calculadora generica*");
console.log("Suma de 5 + 10 = " + suma(5,10));
console.log("Resta de 15 - 10 = " + resta(15,10));
console.log("Multiplicacion de 5 * 10 = " + multiplicacion(5,10));
console.log("Multiplicacion de 5 * 0 = " + multiplicacion(5,0));
console.log("Division de 15 / 5 = " + dividir(15,5));
console.log("Division de 15 / 0 = " + dividir(15,0));

//CALCU PRO
console.log("------------CALCULADORA---------------");

rl.question('Pulsa (1)Suma, (2)Resta, (3)Multiplicacion o (4)Division: ', (answerCase) => {
    switch(answerCase) {
        case '1':
            console.log("--------SUMA--------");
          break;
        case '2':
            console.log("--------RESTA--------");
          break;
        case '3':
            console.log("------MULTIPLICACION------");
          break;
        case '4':
            console.log("--------DIVISION---------");
          break;
        default:
          console.log("Lo sentimos, esa opcion no esta disponible.");
          return rl.close();
      }
    rl.question('Ingresa el primer numero: ', (answerA) => {
        rl.question('Ingresa el segundo numero: ', (answerB) => {
            switch(answerCase) {
                case '1':
                    console.log(`El resultado de la suma es ${suma(Number(answerA),Number(answerB))}.`);
                  break;
                case '2':
                    console.log(`El resultado de la suma es ${resta(Number(answerA),Number(answerB))}.`);
                  break;
                case '3':
                    console.log(`El resultado de la suma es ${multiplicacion(Number(answerA),Number(answerB))}.`);
                  break;
                case '4':
                    console.log(`El resultado de la suma es ${dividir(Number(answerA),Number(answerB))}.`);
                  break;
                default:
                  console.log("ERROR");
              }
            return rl.close();
        });
    });
});

//EJEMPLO COMENTADO
/* 
  rl.question('Ingresa el primer numero: ', (a) => {
    if(!a) {
        console.log('Necesitas ingresar ambos numeros para poder hacer la suma.');
        return rl.close();
    }
    if(a <= 0) {
        console.log('Ambos numeros deben ser positivos y mayores a cero!');
        return rl.close();
    }
    if(isNaN(a)) {
        console.log('Debes escribir un numero!');
        return rl.close();
    }
    rl.question('Ingresa el segundo numero: ', (b) => {
        if(!b) {
            console.log('Necesitas ingresar ambos numeros para poder hacer la suma.');
            return rl.close();
        }
        if(b <= 0) {
            console.log('Ambos numeros deben ser positivos y mayores a cero!');
            return rl.close();
        }
        if(isNaN(b)) {
            console.log('Debes escribir un numero!');
            return rl.close();
        }
        let suma = Number(a) + Number(b);
        console.log(`El resultado de la suma es ${suma}.`);
        return rl.close();
    });
});

 */