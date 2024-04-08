/*Crea una función que reciba un array de objetos de tipo ordenador y devuelva un
nuevo array con solo los objetos que tengan una propiedad específica como la
memoria RAM de 8GB utilizando filter().*/
function arrayOrdenadores(array) {
    return array.filter(function (ordenador) { return ordenador.memoriaRAM === "8GB"; });
}
//probamos la funcion
var ordenadores = [{ marca: "Dell", memoriaRAM: "8GB" }, { marca: "HP", memoriaRAM: "16GB" }];
console.log(arrayOrdenadores(ordenadores));
