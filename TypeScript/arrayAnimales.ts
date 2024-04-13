let arrayAnimales: any = [
    {
        nombre: "Poppy",
        especie: "Burro",
        hobbies: ["Comer", "Rascarse", "Galopar"],
        propietario: {
            nombre: "Adrián",
            ciudad: "Avilés",
            tfno: "601112235"
        },
        añoNacimiento: 2000
    },
    {
        nombre: "Pepa Pig",
        especie: "Cerdo",
        hobbies: ["Comer", "Rascarse", "Dormir"],
        propietario: {
            nombre: "Andrea",
            ciudad: "Avilés",
            tfno: "671182295"
        },
        añoNacimiento: 2010
    },
    {
        nombre: "Luck",
        especie: "Perro",
        hobbies: ["Correr", "Jugar con la pelota"],
        propietario: {
            nombre: "Belarmino",
            ciudad: "Sama",
            tfno: "641145235"
        },
        añoNacimiento: 2005
    },
    {
        nombre: "Srek",
        especie: "Burro",
        hobbies: ["Comer", "Rascarse", "Galopar"],
        propietario: {
            nombre: "Beatriz",
            ciudad: "Oviedo",
            tfno: "689512266"
        },
        añoNacimiento: 2001
    },
    {
        nombre: "Pirata",
        especie: "Perro",
        hobbies: ["Correr", "Buscar cosas"],
        propietario: {
            nombre: "Adrián",
            ciudad: "Avilés",
            tfno: "601112235"
        },
        añoNacimiento: 2005
    }
];

// filtrar por tipo de animal funcion flecha
let tipoDeseado="Perro";
let arrayAnimales2 = arrayAnimales.filter((animal) => animal.especie === tipoDeseado);

console.log(arrayAnimales2);

// filtrar por tipo de animal
let tipoDeseado2="Burro";
let arrayAnimales3 = arrayAnimales.filter(function(animal){
    return animal.especie === tipoDeseado2;
});
console.log(arrayAnimales3);

// el nombre de todos los propietarios
for (let i = 0; i < arrayAnimales.length; i++) {
    console.log(arrayAnimales[i].propietario.nombre);
}
// for in
for (let i in arrayAnimales) {
    console.log(arrayAnimales[i].propietario.nombre);
}
// for of
for (let animal of arrayAnimales) {
    console.log(animal.propietario.nombre);
}   



