/*Implementa una función que reciba un array de objetos de tipo empleado y
devuelva la suma de los valores de una propiedad específica como el salario
utilizando reduce().*/

function sumaSalarios(empleados: any[]) {
  return empleados.reduce((acc, empleado) => acc + empleado.salario, 0);
}

//probamos la funcion
let empleados = [{nombre: "Juan", salario: 1000}, {nombre: "Maria", salario: 2000}];

console.log(sumaSalarios(empleados));

