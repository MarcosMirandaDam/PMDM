var empleados2 = [
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
var subida = 10; //es 10%
//ejemplo de uso de map    
var nuevosSalarios = empleados2.map(function (empleado) { return empleado.salario += empleado.salario * subida / 100; });
console.log(nuevosSalarios);
//ejemplo de desestructuración y de resto de parámetros ...
var _a = empleados2[nuevosSalarios.indexOf(Math.max.apply(Math, nuevosSalarios))], nombre1 = _a.nombre1, salario = _a.salario;
console.log("El empleado ".concat(nombre1, " con un salario de ").concat(salario, " es el que m\u00E1s gana"));
//el array de empleados despues de subir el sueldo es:
console.log("El array de empleados después subida sueldo es:");
console.log(empleados2);
