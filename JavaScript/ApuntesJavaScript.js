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

// ejemplo de un switch case, dias de la semana
let diaSemana = prompt("¿Qué día es hoy?");

switch (diaSemana) {
	case "lunes":
		alert("Hoy es lunes.");
		break;

	case "martes":
		alert("Hoy es martes.");
		break;

	case "miércoles":
		alert("Hoy es miércoles.");
		break;

	case "jueves":
		alert("Hoy es jueves.");
		break;

	case "viernes":
		alert("Hoy es viernes.");
		break;

	case "sábado":
		alert("Hoy es sábado.");
		break;

	case "domingo":
		alert("Hoy es domingo.");
		break;

	default:
		alert("Escribe el día de la semana en minúsculas.");
}

//Simplemente hay que llamar a las posiciones del array en el orden correcto. Además, hay que ir añadiendo espacios para separar las palabras.
let frase = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];

let concatenaFrase = frase[2] + " " + frase[0] + " " + frase[6]
	+ " " + frase[3] + " " + frase[1] + " " + frase[5] + " " +
	frase[6] + " " + frase[4];

console.log(concatenaFrase);

// copiar un array con slice()
const array1=[1,2,3,4,5];
let copiaArray1=array1.slice();

console.log(copiaArray1)

//copiar objeto, dos formas
const objeto = { uno: 1, dos: 2 };
const objeto2 = objeto;

console.log(
  objeto, // { uno: 1, dos: 2 };
  objeto2, // { uno: 1, dos: 2 };
);


const objeto3={...objeto2};     //usando el spread  ...
console.log(objeto3)

// que numero es mayor
let numero1 = prompt('Introduce un número:');
let numero2 = prompt('Introduce otro número:');
let numeroMayor = calcularNumeroMayor(numero1, numero2);

alert(`El número ${numeroMayor} es mayor.`);

function calcularNumeroMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
};

//mayor o menor de edad

let edad = prompt('Introduce tu edad:');
alert(validarEdad(edad));

function validarEdad(edad) {
    let mensaje;

    // Use parseInt to convert input to a number
    edad = parseInt(edad);

    // Check if the input is a valid number
    if (isNaN(edad)) {
        mensaje = 'Error. No es un número';
    } else {
        switch (true) {
            case edad >= 1 && edad < 18:
                mensaje = 'demasiado joven';
                break;
            case edad >= 18 && edad <= 140:
                mensaje = 'mayor de edad';
                break;
            case edad > 140 || edad < 1:
                mensaje = 'edad incorrecta';
                break;
            default:
                mensaje = 'Error. Algo salió mal.';
        }
    }

    // Add return statement to return the mensaje
    return mensaje;
}

//ordenar numeros menor a mayor
const array = [40, 1, 5, 36, 66, 88, 77, 51, 12];

function comparar(a, b) {
    return a - b;             // si le damos vuelta a b-a ordena mayor a menor
}

array.sort(comparar);
console.log(array);

//buscar varios elementos en un array con filter ( devuelve un array)

let personas = [
    {
        nombre: 'marcos',
        edad: 47,
        ciudad: 'el entrego'
    },
    {
        nombre: 'martina',
        edad: 7,
        ciudad: 'el entrego'
    },
    {
        nombre: 'mariana',
        edad: 46,
        ciudad: 'el entrego'
    },
    {
        nombre: 'pepe',
        edad: 33,
        ciudad: 'sotrondio'
    },
    {
        nombre: 'manolo',
        edad: 33,
        ciudad: 'sotrondio'
    },
    {
        nombre: 'jesus',
        edad: 33,
        ciudad: 'sotrondio'
    },

];

console.log(personas.filter(persona=> persona.ciudad==='sotrondio'));    para cada persona.... persona.ciudad..... deseada...
console.log(personas.filter(persona=> persona.ciudad==='el entrego').map(persona=>persona.nombre));   si añadimos el map... seleccionamos campos deseados

// dar la vuelta a un texto

let texto="La tierra estaba seca.No había ríos ni fuentes.Y brotó de tus ojos el agua, toda el agua."

let textoAlReves=texto.split('').reverse().join('');
console.log(textoAlReves);

//valor maximo o minimo de un array
let array=[1,6,8,7,9,5,6,9,8,7,88,9,66,3,3,144,2];
let valorMaximo=Math.max(...array);
console.log(valorMaximo)

//uso de reduce para hacer la suma total con acumulador
//utilizando un acumulador, hallar una media, etc..
//el valor inicial para sumar puede ser 0, pero para multiplicar DEBE SER 1

//utilizando un acumulador, hallar una media, etc..
//el valor inicial para sumar puede ser 0, pero para multiplicar DEBE SER 1

let arrayNumeros=[1,2,3,4,5,6,7,8,9,10];

let media=arrayNumeros.reduce((suma,valorActual) => suma+valorActual/arrayNumeros.length,0);   //0 en caso de la suma,valorInicial
console.log('La media del array es ---->'+media)
let sumaTotal=arrayNumeros.reduce((suma,valorActual) => suma+valorActual,0);   //0 en caso de la suma,valorInicial
console.log('La sumaTotal del array es ---->'+sumaTotal)

// en este caso con un objeto persona, buscando el total de personas de una ciudad determinada
let cantidadPersonasEntrego =personas.reduce((acumulador,persona)=>{
    if(persona.ciudad==='el entrego')
    return acumulador+1;
    else
    return acumulador;}, 0)
console.log('Total de personas '+cantidadPersonasEntrego)