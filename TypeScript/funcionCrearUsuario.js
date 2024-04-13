/*Define una función llamada crearUsuario que tome tres parámetros:
un string nombre que representa el nombre del usuario, un número opcional edad
que representa la edad del usuario (por defecto, 18),
y un objeto opcional detalles que contiene información adicional
del usuario como objeto de pares clave-valor*/
function crearUsuario(nombre, edad, detalles) {
    if (edad === void 0) { edad = 18; }
    if (detalles === void 0) { detalles = {}; }
    return {
        nombre: nombre,
        edad: edad,
        detalles: detalles
    };
}
//probamos la funcion
var usuario = crearUsuario('Juan', 30, { telefono: '123456789' });
console.log(usuario);
var usuario2 = crearUsuario('Pedro');
console.log(usuario2);
