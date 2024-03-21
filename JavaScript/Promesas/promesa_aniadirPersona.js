var personas = [
    {
        nombre: 'Ana',
        edad: 30,
        salario: 2000,
        id: 1
    },
    {
        nombre: 'Bea',
        edad: 18,
        salario: 1500,
        id: 2
    },
    {
        nombre: 'Carlos',
        edad: 15,
        salario: 1000,
        id: 3
    },
    {
        nombre: 'Daniel',
        edad: 40,
        salario: 1800,
        id: 4
    }
];
function aniadirPersonaPromesa (nombre, edad, salario) {
    return new Promise((resolve, reject) => {
        //creamos objeto nueva persona
        let nuevaPersona = {
            nombre: nombre,
            edad: edad,
            salario: salario,
            id: personas.length + 1    // el id lo crea incrementando en 1
        }

        personas.push(nuevaPersona);    //añadimos la persona
    

    if (nuevaPersona != undefined) {
        resolve('Persona añadida');
    } else {
        reject(new Error('Datos erróneos. Operación cancelada.'));
    }

});
}

//probamos la function

aniadirPersonaPromesa('Mariana',46,2400)
.then(persona=> console.log("persona añadida con exito"))
.catch(error=> console.log(error.message));

console.log(personas);