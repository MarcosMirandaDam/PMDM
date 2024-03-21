//usando callback, tomamos un array y modificamos sus valores a mayusculas

function modificar(array, callback){

//hacemos algo
array.push('hola','mar','sol')
//despues de hacer algo
return callback(array)
}

//funcion callback
function llamada(){
    return array.map(palabra=>palabra.toUpperCase());
    
}

let array=['perro']                             //array original
let arrayNuevo=modificar(array,llamada);       //la funcion con el callback
console.log(arrayNuevo);