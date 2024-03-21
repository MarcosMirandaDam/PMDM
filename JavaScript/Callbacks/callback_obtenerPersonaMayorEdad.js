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
function obtenerPersonaMayorEdad(callback){

    let personaMayorEdad;
	let edadMaxima=0;
	
    for(let i=0;i<personas.length;i++){
        if(personas[i].edad>=edadMaxima){
            edadMaxima=personas[i].edad;
            personaMayorEdad=personas[i];
        }
    }

    if(edadMaxima!=0){
        callback(null,personaMayorEdad);
    }else{
        callback(new Error('No hay personas para comparar edades'));
    }
		
}
//probar function

function getPersonaMayorEdad(error,persona){
    if(error){
        console.log(error.message);
    } else{
        console.log('Persona mayor edad-->',persona);
    }

}
obtenerPersonaMayorEdad(getPersonaMayorEdad);