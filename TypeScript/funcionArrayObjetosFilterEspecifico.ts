/*Crea una función que reciba un array de objetos y devuelva un nuevo array con solo
los objetos que tengan una propiedad específica utilizando filter().*/

function filtraObjeto(objects: any[], property: string) {
  return objects.filter(obj => obj[property]);
}

//probamos la funcion
const personas = [
  { name: 'Marcos', age: 47 },
  { name: 'Mariana', age: 46 },
  { name: 'Martina', age: 7 }];

  console.log(filtraObjeto(personas, 'name'));
  