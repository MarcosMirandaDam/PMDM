var personas = [ 
    { 
        nombre: 'Ana', 
        edad: 30, 
        salario:2000, 
        id: 1 
    },
    { 
        nombre: 'Bea', 
        edad: 18, 
        salario:1500, 
        id: 2 
    }, 
    { 
        nombre: 'Carlos', 
        edad: 15, 
        salario:1000, 
        id: 3 
    }, 
    { 
        nombre: 'Daniel', 
        edad: 40, 
        salario:1800, 
        id: 4 
    } 
];
function obtenerPersonaPorId(id,callback){

    let personaConId = personas.find(persona=>persona.id===id);

    if(personaConId !== undefined){
        callback(null,personaConId);
    } else {
        callback(new Error('Persona no encontarda'));
    }

}
//probar function

function getPersonaCallback(error,persona){
    if(error){
        console.log(error.message);
    } else{
        console.log('Persona encontrada-->',persona);
    }

}
obtenerPersonaPorId(1,getPersonaCallback);