// callback que eleva al cuadrado los numeros recibidos

function elevarCuadrado(numeros,callback){
    let resultado = numeros.map(numero => numero * numero);
    return callback(resultado);
}

function callback(resultado){
    console.log(resultado);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosElevados = elevarCuadrado(numeros, callback);