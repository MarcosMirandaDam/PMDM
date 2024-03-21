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
function obtenerMediaSalariosPromesa() {

    return new Promise((resolve, reject) => {

        let sumaTotalSalarios = 0;
        let mediaSalarios = 0;

        for (let i = 0; i < personas.length; i++) {
            sumaTotalSalarios += personas[i].salario;
        }

        mediaSalarios = sumaTotalSalarios / personas.length;

        if (sumaTotalSalarios != 0) {
            resolve(mediaSalarios);
        } else {
            reject('No se han encontrado salarios.');
        }


    });



}

//probamos la función

obtenerMediaSalariosPromesa()
.then(mediaSalarios=> console.log('Media de salarios-->' +mediaSalarios))
.catch(error=> console.log(error.message))

