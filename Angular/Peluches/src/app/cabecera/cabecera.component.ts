import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  tittle: string;		
  constructor() {		
    this.tittle = 'Los peluches de Martina';		
  }		


}
