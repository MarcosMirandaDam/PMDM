"EJERCICIO 6: Funciones que devuelven otra función – 
Validador de palabras clave
Escribe una función llamada validarPalabraClave que acepta una palabra clave como parámetro. Esta función devolverá otra función que, al ser invocada con un texto, verificará si la palabra clave está presente en el contenido y devolverá true o false en consecuencia.
Esta función podría ser útil en un programa de búsqueda en un sitio web donde se necesite verificar si una palabra clave está presente en el contenido."

function presenciaPalabraEnTexto(palabraBuscar) {
    // Devuelve una función que verifica si la palabra clave está presente en el texto proporcionado
    return function(texto) {
        
        const textoParaBuscar = texto.toLowerCase();

        // Verifica si la palabra a buscar está presente en el texto
        return textoParaBuscar.includes(palabraBuscar.toLowerCase());
    };
}

// Ejemplo de uso
const palabraSecreta = prompt('Introduce la palabra clave:');

const textoParaBuscar = prompt('Introduce el texto a buscar:');
const resultado = presenciaPalabraEnTexto(palabraSecreta);

if(resultado(textoParaBuscar)){
   console.log("La palabra clave "+palabraSecreta+ "está en el texto introducido ") 
} else {
    console.log("La palabra clave "+palabraSecreta+ " no está en el texto introducido ")
}