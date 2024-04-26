import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioAppComponent } from './inicio-app/inicio-app.component';
import { BarraNavInicioComponent } from './barra-nav-inicio/barra-nav-inicio.component';
import { QueDedicamosComponent } from './que-dedicamos/que-dedicamos.component';
import { ItemPelucheComponent } from './peluches/item-peluche/item-peluche.component';
import { PeluchesComponent } from './peluches/peluches/peluches.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AnadirPelucheComponent } from '../app/peluches/anadir-peluche/anadir-peluche.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioAppComponent,
    BarraNavInicioComponent,
    QueDedicamosComponent,
    PeluchesComponent,
    ItemPelucheComponent,
    PeluchesComponent,
    ContactoComponent,
    AnadirPelucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
