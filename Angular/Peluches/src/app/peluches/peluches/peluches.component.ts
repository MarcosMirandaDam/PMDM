import { Component, OnInit } from '@angular/core';
import { PelucheService } from '../../servicio/peluche.service';
import { Peluche } from '../../modelo/peluche';

@Component({
  selector: 'app-peluches',
  templateUrl: './peluches.component.html',
  styleUrl: './peluches.component.css'
})
export class PeluchesComponent implements OnInit{

  peluches!: Peluche[];

  constructor(private pelucheService: PelucheService) { }

  ngOnInit(): void {
    //obtenemos los peluches del servicio
    this.peluches=this.pelucheService.getPeluches();
    };

    

  }


