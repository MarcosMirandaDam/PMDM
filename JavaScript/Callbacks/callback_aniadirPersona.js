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
function aniadirPersonaCallback(nombre, edad, salario, callback) {
    //creamos objeto nueva persona
    let nuevaPersona = {
        nombre: nombre,
        edad: edad,
        salario: salario,
        id: personas.length + 1    // el id lo crea incrementando en 1
    }

    personas.push(nuevaPersona);    //añadimos la persona

    if (nuevaPersona != undefined) {
        callback(null, 'Persona añadida.')
    } else {
        callback(new Error('Datos erróneos. Operación cancelada.'))
    }

}

//probamos la function

aniadirPersonaCallback('Martina',7,2590,function(error,mensaje){
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Success:', mensaje);
    }


});
	