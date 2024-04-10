/*Define una función llamada operacionMatematica que tome un string operador
como argumento y devuelva una función que, al ser llamada con dos números
como argumentos, realice la operación matemática correspondiente (suma,
resta, multiplicación o división) según el operador proporcionado. Es un ejemplo
para practicar funciones que devuelven funciones.*/
function operacionMatematica(operador) {
    return function (a, b) {
        switch (operador) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
        }
    };
}
//probamos la funcion
console.log(operacionMatematica("+")(2, 3));
console.log(operacionMatematica("-")(2, 3));
console.log(operacionMatematica("*")(2, 3));
console.log(operacionMatematica("/")(2, 3));
