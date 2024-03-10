EJERCICIO 1: Uso de parámetros opcionales - Conversor de Temperatura
Escribe una función llamada convertirTemperatura que acepte dos parámetros. El primer parámetro es un número que representa una temperatura, expresada ya sea en grados Celsius o Fahrenheit. El segundo parámetro es un valor booleano opcional que indica si la temperatura proporcionada está en grados Fahrenheit (true) o grados Celsius (false, valor predeterminado).
La función debe convertir la temperatura dada a la unidad de temperatura opuesta y devolver el resultado. Si la temperatura original está en grados Celsius, la función debe convertirla a grados Fahrenheit y viceversa.
Ejemplo de posible llamada: convertirTemperatura(20); // Devuelve la temperatura de 20 ºC convertida a ºF convertirTemperatura(68, true); // Devuelve la temperatura de 68 ºF convertida a ºC


//declaramos variable para recoger la temperatura a convertir
let temperatura;
//variable que recogera el dato resultante de la conversión
let temperaturaConvertida
//funcion que recoge los parametros necesarios de temperatura y el boolean para convertir a ºF o ºC
function convertirTemperatura(temperatura, convertir) {
    if (!convertir) {
        temperaturaConvertida = (parseFloat(temperatura) * 1.8) + 32;
    } else {
        temperaturaConvertida = (parseFloat(temperatura) - 32) / 1.8;
    }
    return temperaturaConvertida;
}

//ejecutamos con las dos opciones solicitando temperatura al usuario
temperatura=prompt('Introduce la temperatura a convertir-->')
console.log('Temperatura de '+temperatura+ 'ºC a Farenheit --->'+convertirTemperatura(temperatura));             //celsius a Farenheit
console.log('Temperatura de '+temperatura+ 'ºF a Celsius --->'+convertirTemperatura(temperatura, true))        //convertido Farenheit a Celsius