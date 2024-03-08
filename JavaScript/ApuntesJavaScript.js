//uso de map

let miArray=[1,2,3,4,5,6,7,8,9,10];

let resultado=miArray.map(numero=>(numero*2));    //uso de map, cambiar los elementos del array
console.log(resultado)

// ahora con posiciones determinadas, uso de indice. posiciones pares

let resultado2=miArray.map((numero,i)=>{
    if(i%2===0){
        return numero*2;
    }
});
console.log(resultado2);

// con operador ternario

let resultado3=miArray.map((numero,i)=>{
    return (i%2===0)? numero*2 : numero;      // (condicion) ? hacemosAlgo : (si no...) algo
    
});
console.log(resultado3);

//de un array, hacemos otro con las modificaciones deseadas
let arrayPrincipal=['perro','gato','hormiga'];

let arrayModificado=arrayPrincipal.map(palabra=>palabra.toUpperCase());

console.log(arrayModificado);

// push añade al final del array

// pop elimina y lo recoge para mostrarlo

console.log(arrayModificado.pop());

//unshift añade al principio del array

arrayPrincipal.unshift('rinoceronte');    //añade rinoceronte al principio de ese array

//shift elimina el primero del array y lo recoge

console.log(arrayModificado.shift());

//busca el indice  de un elemento

let posicion=arrayPrincipal.indexOf('gato');
console.log(posicion);


//eliminar de un array. le decimos la pos a partir de la que queremos borrar y luego num elementos a borrar
let pos=1;
arrayPrincipal.splice(pos,1);
console.log(arrayPrincipal);

// copiar un array
let copiaArray=arrayPrincipal.slice();
console.log(copiaArray);

//concat() ..... une dos arrays...
let arrayConcatenado=arrayPrincipal.concat(arrayModificado);
console.log(arrayConcatenado);

// join().... le pasas el simbolo intermedio y te convierte el array a string
let stringDelArrayPrincipal=arrayPrincipal.join('---');
console.log(stringDelArrayPrincipal);
