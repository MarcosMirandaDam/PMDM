/*Escribe una función llamada dividirArray que tome un array de números como
argumento y devuelva un objeto con las propiedades pares y impares, que
contienen los números pares e impares del array, respectivamente.*/
function dividirArray(numeros) {
    var pares = []; //declaramos las variables para recibir los datos pares
    var impares = []; //declaramos las variables para recibir los datos impares
    numeros.forEach(function (numero) {
        if (numero % 2 === 0) {
            pares.push(numero);
        }
        else {
            impares.push(numero);
        }
    });
    return { pares: pares, impares: impares };
}
//probamos la funcion
var arrayNumeros = [1, 2, 3, 4, 5];
var resultadoFinal = dividirArray(arrayNumeros);
console.log(resultadoFinal);
