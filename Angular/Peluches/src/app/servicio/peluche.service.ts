import { Injectable } from '@angular/core';
import { Peluche } from '../modelo/peluche';      //imoprtamos el modelo de la clase principal


//array de peluches
let peluches: Peluche[] = [
  new Peluche('Mickey Mago','Disney',29,'../../assets/imagenes/IMG_5126.jpg'),
  new Peluche('Frigiliana', 'Disney', 30, '../../assets/imagenes/IMG_5125.jpg'),
  new Peluche('Canela', 'Disney', 14.95, '../../assets/imagenes/IMG_5127.jpg'),
  new Peluche('Valentino', 'Disney', 16, '../../assets/imagenes/IMG_5128.jpg'),
  new Peluche('Nook', 'Disney', 17, '../../assets/imagenes/IMG_5129.jpg'),
  new Peluche('Nook', 'Disney', 17, '../../assets/imagenes/IMG_5129.jpg'),
  new Peluche('Canela', 'Disney', 14.95, '../../assets/imagenes/IMG_5127.jpg')
]


@Injectable({
  providedIn: 'root'
})
export class PelucheService {

  //metodo para obtener los peluches
  getPeluches(): Peluche[] {
    return peluches;
  }

  // metodo para obtener un peluche por id
  getPeluche(id: number): Peluche {
    return peluches[id - 1];
  }

  // metodo para obtener el numero de peluches
  getNumPeluches(): number {
    return peluches.length;
  }

  //metodo para borrar un peluche
  deletePeluche(id: number): void {
    peluches.splice(id - 1, 1);
  }

  //metodo para agregar un peluche
  addPeluche(peluche: Peluche): void {
    peluches.push(peluche);
  }

  //metodo para modificar un peluche
  updatePeluche(id: number, peluche: Peluche): void {
    peluches[id - 1] = peluche;
  }

  //crear peluche vacio
  crearPelucheVacio(): Peluche {
    return new Peluche('', '', 0, '');
  }





  constructor() { }
}
