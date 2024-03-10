function validarMail(dominiosPermitidos, ...correosComprobar) {
    const confirmacionValidacion = [];

    for (let correo of correosComprobar) {
        if (dominiosPermitidos.length === 0) {
            // Si no hay dominios permitidos, todos los correos son válidos
            confirmacionValidacion.push(true);
        } else {
            const correoSinArroba = correo.split('@')[1];
            const correoSinPunto=correoSinArroba.split('.')[0];
            if(dominiosPermitidos.includes(correoSinPunto)) confirmacionValidacion.push(true);
            else confirmacionValidacion.push(false);
            }
            
        
    }

    return confirmacionValidacion;
}

console.log(validarMail([], 'marcos@gmail.com')); // todos permitidos
console.log(validarMail(['gmail'], 'marcos@gmail.com', 'marcos@hotmail.com')); //permitidos gmail
console.log(validarMail(['gmail','yahoo'], 'marcos@gmail.com', 'marcos@hotmail.com','marcos@yahoo.es')); //permitidos gmail
