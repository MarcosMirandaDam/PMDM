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
function obtenerPersonaMayorEdad(){

    return new Promise((resolve,reject)=> {
        let personaMayorEdad;
	    let edadMaxima=0;
        
        for(let i=0;i<personas.length;i++){
        if(personas[i].edad>=edadMaxima){
            edadMaxima=personas[i].edad;
            personaMayorEdad=personas[i];
        }
    }
    if(edadMaxima!=0){
        resolve(personaMayorEdad);
    }else{
        reject(new Error('No hay personas para comparar edades'));
    }

    });
    
}
//probar function

obtenerPersonaMayorEdad()
.then(persona=>console.log(persona))
.catch(error=> console.log(error.message))
