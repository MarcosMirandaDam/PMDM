/*Implementa una función que reciba un array de objetos de tipo empleado y
devuelva la suma de los valores de una propiedad específica como el salario
utilizando reduce().*/
function sumaSalarios(empleados) {
    return empleados.reduce(function (acc, empleado) { return acc + empleado.salario; }, 0);
}
//probamos la funcion
var empleados = [{ nombre: "Juan", salario: 1000 }, { nombre: "Maria", salario: 2000 }];
console.log(sumaSalarios(empleados));
