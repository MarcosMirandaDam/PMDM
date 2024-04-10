/*Define una función llamada obtenerMinimoMaximo que tome un array de números
como argumento y devuelva un objeto con las propiedades minimo y maximo, que
contienen el valor mínimo y máximo del array, respectivamente. Para calcula el
mínimo y máximo del array se usará el operador spread (…) combinado con las
funciones Math.max() y Math.min()*/

function obtenerMinimoMaximo(numeros: number[]): { minimo: number; maximo: number } {
  const minimo = Math.min(...numeros);
  const maximo = Math.max(...numeros);
  return { minimo, maximo };
}

//probamos la funcion

const numeros = [1, 2, 3, 4, 5];
const objetoResultado = obtenerMinimoMaximo(numeros);
console.log(objetoResultado);
