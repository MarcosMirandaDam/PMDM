let empleados2 = [
    {
        nombre1: "Abel",
        edad: 22,
        salario: 1000,
        direccion: {
            calle: "Sta Rita",
            numero: 3,
            ciudad: "La Felguera"
        }
    },
    {
        nombre1: "Ana",
        edad: 24,
        salario: 1100,
        direccion: {
            calle: "La Rue",
            numero: 32,
            ciudad: "Oviedo"
        }
    },
    {
        nombre1: "Bartolomé",
        edad: 32,
        salario: 2000,
        direccion: {
            calle: "Uria",
            numero: 4,
            ciudad: "Oviedo"
        }
    },
    {
        nombre1: "Bárbara",
        edad: 42,
        salario: 1800,
        direccion: {
            calle: "La nueva",
            numero: 1,
            ciudad: "Gijón"
        }
    },
    {
        nombre1: "Carlos",
        edad: 34,
        salario: 1000,
        direccion: {
            calle: "El Percebe",
            numero: 9,
            ciudad: "La Felguera"
        }
    },
    {
        nombre1: "Cristina",
        edad: 54,
        salario: 2100,
        direccion: {
            calle: "San Agustín",
            numero: 12,
            ciudad: "Gijón"
        }
    }
];

let subida = 10;  //es 10%

//ejemplo de uso de map    
let nuevosSalarios = empleados2.map(
    empleado => empleado.salario += empleado.salario * subida / 100
);
console.log(nuevosSalarios);

//ejemplo de desestructuración y de resto de parámetros ...
let {nombre1, salario }=empleados2[nuevosSalarios.indexOf(Math.max(...nuevosSalarios))];
console.log(`El empleado ${nombre1} con un salario de ${salario} es el que más gana`);

//el array de empleados despues de subir el sueldo es:
console.log("El array de empleados después subida sueldo es:");
console.log(empleados2);