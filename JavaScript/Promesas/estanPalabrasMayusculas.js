//promesa que devuelve si todas las palabras estan en mayusculas, en este ejemplo

function estaEnMayusculas(...palabras){
    return new Promise((resolve,reject)=>{
        palabras.every(palabra => palabra === palabra.toUpperCase()) ? resolve(true) : reject(false);
    });

}

//probamos la function

let palabras=['PERRO','casa','ARMARIO'];

estaEnMayusculas(palabras)
    .then(resultado =>console.log('estan en mayusculas'))
    .catch(resultado=>console.log('hay palabras que no estan en mayusculas'))