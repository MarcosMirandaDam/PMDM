import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  enviando:boolean;
  mensaje:string;
  detalles!:string;

  constructor(private location:Location) {
    this.enviando=false;
    this.mensaje='';  
   }

   /** Método que envia el mensaje y vuelve al componente anterior */
  enviarMensaje() {
    this.enviando = true;
    this.detalles = 'Enviando mensaje...';

    setTimeout(() => {
      this.enviando = false;
      this.volverAtras();
    }, 2000);

  }

  /** Método que navega hacia atrás a la página anteriormente visitada */
  volverAtras() {
    this.location.back();
  }


}
