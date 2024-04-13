var arrayAnimales = [
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
//usando funcion flecha 
var tipoDeseado = "Perro";
var arrayAnimales2 = arrayAnimales.filter(function (animal) { return animal.especie === tipoDeseado; });
console.log(arrayAnimales2);

//con callback
var tipoDeseado2 = "Burro";
var arrayAnimales3 = arrayAnimales.filter(function (animal) {
    return animal.especie === tipoDeseado2;
});
console.log(arrayAnimales3);




