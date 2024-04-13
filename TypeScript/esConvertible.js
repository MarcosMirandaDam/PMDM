/*Definir una función que recibe un parámetro de cualquier tipo y devuelve un string. 
Se debe indicar el tipo en los parámetros y valor devuelto de la función.*/
//let parametro: any;
//let parametro: string;
//let parametro: number;
//let parametro: object;
//let parametro: any[];
//let parametro: {a: number, b: number};

function esConvertible(entrada) {
    var parametro = entrada;
    if (typeof entrada === 'object') {
        parametro = JSON.stringify(entrada); // Si es un objecto (array u objeto) lo pasa a un String
    }
    return isNaN(Number(entrada)) ? "El par\u00E1metro ".concat(parametro, " NO es un n\u00FAmero") : "El par\u00E1metro ".concat(parametro, " S\u00CD es un n\u00FAmero"); // Number() pasa un dato a un numero
}
console.log(esConvertible(3));
//document.body.innerHTML += "Con un número <br>"+esConvertible(3)+"<br>";
//document.body.innerHTML += "Con un string no número <br>" + esConvertible("3A3") + "<br>";
//document.body.innerHTML += "Con un string que es numérico <br>"+ esConvertible("3333") +"<br>";
//document.body.innerHTML += "Con un objeto json <br>"+esConvertible({a:3,b:6}) + "<br>";
