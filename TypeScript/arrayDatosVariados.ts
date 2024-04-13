/*crear un programa en el que tengáis un array de tipo any: con objetos, 
números, strings,… y debéis imprimir en pantalla si 
cada elemento del array es convertible a número*/

let arrayVariado = [
    { nombre: "Marcos", edad: 47 },
    { nombre: "Martina", edad: 7 },
    45,
    "9.876",
    [3, 4, 5],
    "hola"
    ];

//haciendo uso de map
function esConvertible(entrada:any){
    let parametro=entrada;

    if(typeof parametro === "object"){
        parametro=JSON.stringify(entrada);
    }
        return isNaN(Number(entrada)) ? `El parametro ${parametro} no es un numero` : `El parametro ${parametro} es un numero`;
        
    }

    //probamos la funcion. creamos variable let arrayResultados1... aplicamos el .map y pasamos la función dentro
    let arrayResultados1= arrayVariado.map(esConvertible);
    console.log('Probando con MAP');
    console.log(arrayResultados1);


    // CON FOREACH
function esConvertibleFor(entrada: any) {
    let parametro = entrada;

    if(typeof entrada === 'object') {
        parametro = JSON.stringify(entrada); // Si es un objecto (array u objeto) lo pasa a un String
    }

    console.log((Number(entrada)) ? `El parámetro ${parametro} NO es un número` : `El parámetro ${parametro} SÍ es un número`); // Number() pasa un dato a un numero
}

console.log('CON FOREACH:');
arrayVariado.forEach(esConvertibleFor);


// CON FILTER
function filtroEsConvertibleANumero(entrada: any): boolean {
    return isNaN(Number(entrada))===false; // false porque retorna los que son números
}

console.log('CON FILTER:');
let arrayResultados2 = arrayVariado.filter(filtroEsConvertibleANumero);
console.log(arrayResultados2);