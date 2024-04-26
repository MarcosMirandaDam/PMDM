import { Component, OnInit } from '@angular/core';
import { Peluche } from '../../modelo/peluche';
import { PelucheService } from '../../servicio/peluche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-peluche',
  templateUrl: './anadir-peluche.component.html',
  styleUrl: './anadir-peluche.component.css'
})
export class AnadirPelucheComponent implements OnInit{

  peluche!: Peluche;

  constructor(private pelucheService: PelucheService, private router: Router) { }

  
  
  ngOnInit(): void {
    this.peluche=this.pelucheService.crearPelucheVacio();
  }

  anadirPeluche() {
    this.pelucheService.addPeluche(this.peluche);
    this.router.navigateByUrl('/peluches');
  }

}
