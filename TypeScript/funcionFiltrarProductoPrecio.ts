/*Implementa una función llamada filtrarProductosPorPrecio que tome un número
precioMaximo como parámetro, seguido de un resto de parámetros que
representen una lista de productos que son objetos typescript con las
propiedades: nombreProducto, precio, fabricante. No sabemos cuántos
productos nos van a dar, por eso usaremos resto de parámetros. La función debe
devolver un nuevo array que contenga únicamente el nombre y precio de aquellos
productos cuyo precio sea menor o igual al precio máximo proporcionado. Se
debe usar la composición para facilitar la llamada de la función*/

function filtrarProductosPorPrecio(precioMaximo:number,...productos:any[]){
    let arrayProductos:any[] = [];
    for(let i = 0; i < productos.length; i++){
        if(productos[i].precio <= precioMaximo){
            arrayProductos.push(productos[i].nombreProducto, productos[i].precio);
        }
    }
    return arrayProductos;
}

console.log(filtrarProductosPorPrecio(100, {nombreProducto: "pera", precio: 10, fabricante: "frutas"}, {nombreProducto: "manzana", precio: 20, fabricante: "frutas"}));
