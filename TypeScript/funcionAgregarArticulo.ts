/*Escribe una función llamada agregarArticulo que tome dos parámetros: un array de
strings lista que representa una lista de compras inicial, y un string articulo que
representa el nuevo artículo que se desea agregar a la lista. La función debe
devolver un nuevo array que contenga todos los elementos de la lista original más
el nuevo artículo agregado al final, sin usar los métodos de los arrays. Sólo usando
la composición o spread.*/

function agregarArticulo(lista: string[], articulo: string) {
  return [...lista, articulo];
}

//probamos la funcion
const listaDeCompras: string[] = ['Manzanas', 'Leche', 'Pan'];
const nuevoArticulo: string = 'Huevos';
const nuevaListaDeCompras = agregarArticulo(listaDeCompras, nuevoArticulo);
console.log('Lista de compras actualizada:');
console.log(nuevaListaDeCompras);