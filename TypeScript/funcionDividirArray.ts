/*Escribe una función llamada dividirArray que tome un array de números como
argumento y devuelva un objeto con las propiedades pares y impares, que
contienen los números pares e impares del array, respectivamente.*/

function dividirArray(numeros: number[]) {          //recibe un array de numeros

  const pares: number[] = [];                       //declaramos las variables para recibir los datos pares
  const impares: number[] = [];                     //declaramos las variables para recibir los datos impares

  numeros.forEach((numero) => {                     //recorremos el array de los numeros
    if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
  });

  return { pares, impares };
}

//probamos la funcion
const arrayNumeros = [1, 2, 3, 4, 5];
const resultadoFinal = dividirArray(arrayNumeros);
console.log(resultadoFinal);

