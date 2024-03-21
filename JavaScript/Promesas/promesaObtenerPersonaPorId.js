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
function obtenerPersonaPorId(id){

    return new Promise((resolve,reject)=> {
        let personaConId= personas.find(persona=>persona.id===id);

        if(personaConId!==undefined){
            resolve(personaConId);
        } else{
            reject(new Error('Persona no encontrada'))
        }
    });

}
//probar function

obtenerPersonaPorId(1)
.then(persona=> { console.log('Persona encontrada-->',persona);
})
.catch(error => {console.log('Error: ' + error.message);
});
