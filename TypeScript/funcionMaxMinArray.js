/*Define una función llamada obtenerMinimoMaximo que tome un array de números
como argumento y devuelva un objeto con las propiedades minimo y maximo, que
contienen el valor mínimo y máximo del array, respectivamente. Para calcula el
mínimo y máximo del array se usará el operador spread (…) combinado con las
funciones Math.max() y Math.min()*/
function obtenerMinimoMaximo(numeros) {
    var minimo = Math.min.apply(Math, numeros);
    var maximo = Math.max.apply(Math, numeros);
    return { minimo: minimo, maximo: maximo };
}
//probamos la funcion
var numeros = [1, 2, 3, 4, 5];
var objetoResultado = obtenerMinimoMaximo(numeros);
console.log(objetoResultado);
