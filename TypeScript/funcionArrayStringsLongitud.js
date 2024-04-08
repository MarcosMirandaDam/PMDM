//Escribe una función que tome un array de strings y devuelva un nuevo array con la
//longitud de cada string utilizando map().
function stringLength(array) {
    return array.map(function (string) { return string.length; });
}
//probamos la funcion
console.log(stringLength(["hola", "que", "tal"]));
