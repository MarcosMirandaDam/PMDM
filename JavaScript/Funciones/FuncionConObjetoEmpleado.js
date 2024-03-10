function procesarEmpleado(empleado, errores, bonoGratificacionExtra){
    // salario total mensual
    const salarioMensual=empleado.salarioBase + bonoGratificacionExtra;

    //opciones de rendimiento
    let rendimiento='';
    if(empleado.horasTrabajadas>160 && errores<5){
        rendimiento="Excelente";
    } else if(empleado.horasTrabajadas>160 || errores<5 ){
        rendimiento="Bueno"
    } else{
        rendimiento="Regular"
    }

    //objeto resultante final tras los parametros establecidos
    const resumenEmpleadoFinal={
        'Nombre completo':empleado.nombre  + empleado.apellidos,
        rendimiento: rendimiento,
        salarioMensual:salarioMensual,
    };

    return resumenEmpleadoFinal;
}

//ejecutamos la funcion segun el siguiente ejemplo
const bonoGratificacionExtra=(1000);
const empleado1 = { nombre: 'Marcos', apellidos: 'Miranda', salarioBase: 3000, horasTrabajadas: 161 };
const errores=1;
console.log(procesarEmpleado(empleado1,errores,bonoGratificacionExtra));