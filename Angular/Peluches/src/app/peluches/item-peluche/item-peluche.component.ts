import { Component, Input } from '@angular/core';
import { Peluche } from '../../modelo/peluche';


@Component({
  selector: 'app-item-peluche',
  templateUrl: './item-peluche.component.html',
  styleUrl: './item-peluche.component.css'
})
export class ItemPelucheComponent {

  @Input() peluche!: Peluche;  //hacemos el input de la clase principal

}
