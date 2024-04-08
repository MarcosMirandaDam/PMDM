//Escribe una función que tome un array de números y devuelva un nuevo array con
//cada número multiplicado por 2 utilizando el método map().

function multiplicarPorDos(numeros: number[]): number[] {
  return numeros.map((numero) => numero * 2);
}

//probamos la función
console.log(multiplicarPorDos([1, 2, 3, 4])); // [2, 4, 6, 8]
