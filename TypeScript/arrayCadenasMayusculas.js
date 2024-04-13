//Crear un programa que convierta un array de cadenas de texto a mayúsculas
var array = ["hola", "que", "tal"];
var arrayMayusculas = array.map(function (elemento) { return elemento.toUpperCase(); });
console.log(arrayMayusculas);
