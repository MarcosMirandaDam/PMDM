/*Define una función llamada crearUsuario que tome tres parámetros: 
un string nombre que representa el nombre del usuario, un número opcional edad 
que representa la edad del usuario (por defecto, 18), 
y un objeto opcional detalles que contiene información adicional 
del usuario como objeto de pares clave-valor*/

function crearUsuario(nombre: string, edad: number = 18, detalles: any = {}) {     //detalles es otro objetode tipo any
    return {
        nombre,
        edad,
        detalles
    }
}

//probamos la funcion
let usuario = crearUsuario('Juan', 30, { telefono: '123456789' });
console.log(usuario);
let usuario2 = crearUsuario('Pedro');
console.log(usuario2);