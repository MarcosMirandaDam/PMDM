import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//aqui importamos los componentes de la aplicacion
import { InicioAppComponent } from './inicio-app/inicio-app.component';
import { QueDedicamosComponent } from './que-dedicamos/que-dedicamos.component';
import { PeluchesComponent } from './peluches/peluches/peluches.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AnadirPelucheComponent } from '../app/peluches/anadir-peluche/anadir-peluche.component';


//aqui ponemos las rutas de la aplicacion
const routes: Routes = [
  { path: '', component: InicioAppComponent },
  { path: 'inicio', component: InicioAppComponent},
  { path: 'que-dedicamos', component: QueDedicamosComponent},
  { path: 'peluches', component: PeluchesComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'anadir-peluche', component: AnadirPelucheComponent},

  //aqui ponemos las rutas de error
  { path: '**', redirectTo: '' }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
