//funcion que unirá un numero de cadenas indeterminado
//hacemos uso del join para unirlas, en ese caso separadas por un espacio

function unirCadenas(...cadenas) {
    return cadenas.join(" ");
}

const cadenaConcatenada = unirCadenas('Me', 'llamo ', 'Marcos', 'Miranda');
console.log('Vamos a mostrar el resultado de las cadenas unidas--->' +cadenaConcatenada);