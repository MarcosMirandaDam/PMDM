/*Escribe una función llamada agregarArticulo que tome dos parámetros: un array de
strings lista que representa una lista de compras inicial, y un string articulo que
representa el nuevo artículo que se desea agregar a la lista. La función debe
devolver un nuevo array que contenga todos los elementos de la lista original más
el nuevo artículo agregado al final, sin usar los métodos de los arrays. Sólo usando
la composición o spread.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function agregarArticulo(lista, articulo) {
    return __spreadArray(__spreadArray([], lista, true), [articulo], false);
}
//probamos la funcion
var listaDeCompras = ['Manzanas', 'Leche', 'Pan'];
var nuevoArticulo = 'Huevos';
var nuevaListaDeCompras = agregarArticulo(listaDeCompras, nuevoArticulo);
console.log('Lista de compras actualizada:');
console.log(nuevaListaDeCompras);
