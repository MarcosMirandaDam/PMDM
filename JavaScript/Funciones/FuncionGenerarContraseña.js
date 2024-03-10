// funcion con dos parametros que indican max y min caracteres disponibles para generar conrtrasenia
function generarContrasenia(longitudMax,longitudMin){
     longitudMax=12;                               //valor constante maximo 12
     longitudMin=8;                                //valor constante minimo 8
    //caracteres disponibles
    const caracteresDisponibles='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
    // creamos la variable que haya la longitud de la contrasenia a generar
    const longitudContrasenia = (Math.random() * (longitudMax - longitudMin + 1)) + longitudMin;
    //creamos variable almacenar contrasenia generada
    let contraseniaGenerada='';

    //por el numero de caracteres a generar resultante, añadimos los caracteres a la constante contraseniaGenerada
    for (let i = 0; i < longitudContrasenia; i++) {
        const posicionAleatoria = (Math.random() * caracteresDisponibles.length);
        contraseniaGenerada += caracteresDisponibles.charAt(posicionAleatoria);
    }

    return contraseniaGenerada;

}

// ejecutamos la funcion
let contraseniaGenerada=generarContrasenia();
console.log(contraseniaGenerada)