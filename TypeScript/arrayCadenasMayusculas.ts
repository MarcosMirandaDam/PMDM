//Crear un programa que convierta un array de cadenas de texto a mayúsculas

let array: string[] = ["hola", "que", "tal"];

let arrayMayusculas: string[] = array.map((elemento) => elemento.toUpperCase());

console.log(arrayMayusculas);