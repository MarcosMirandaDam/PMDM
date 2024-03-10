//apartado 1
// la funcion devuelve un boolean true o false si la palabra cumple con los requisitos establecidos
function buscarPalabraConO(palabra) {
    return palabra.includes('o');

}

//le pasamos a esta funcion el array de palabras y la funcion buscar palabras con "o"
function buscarPalabrasDeterminadasFuncion(arrayPalabras, funcionBuscarDeseada) {

    const palabrasConO = [];

    for (let i = 0; i < arrayPalabras.length; i++) {
        const palabraDisponible = arrayPalabras[i];

        if (funcionBuscarDeseada(palabraDisponible)) {
            palabrasConO.push(palabraDisponible);
        }

    }

    return palabrasConO;
}
const palabras = ['casa', 'perro', 'gato', 'coche'];
const palabrasConO = buscarPalabrasDeterminadasFuncion(palabras, buscarPalabraConO);
console.log(palabrasConO);


// apartado 2
//funcion que buscará, contará y distinguirá vocales de palabras
function MasTresVocalesDistintas(palabra) {
    const vocales = 'aeiou';
    const vocalesEncontradas = new Set();       //garantiza valores únicos

//recorremos la palabra con con un for / of
    for (const letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
            vocalesEncontradas.add(letra);
        }
    }

    return vocalesEncontradas.size >= 3;
}

// Ejemplo de uso
const palabras = ['Desahucio', 'canguro', 'murciélago', 'agua', 'alegre','maravilloso','enamorado','perro','mantita'];

//con el filter nos aseguramos que solo las palabras que cumplan la funcion
//sean añadidas al array determinado
const palabrasConTresVocalesDiferentes = palabras.filter(MasTresVocalesDistintas);

console.log(palabrasConTresVocalesDiferentes);
