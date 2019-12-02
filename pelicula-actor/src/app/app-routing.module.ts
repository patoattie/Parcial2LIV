import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListadoComponent } from './componentes/listado/listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AbmPeliculasComponent } from './componentes/peliculas/abm-peliculas/abm-peliculas.component';
import { ListadoPeliculasComponent } from './componentes/peliculas/listado-peliculas/listado-peliculas.component';
import { AbmActorComponent } from './componentes/actor/abm-actor/abm-actor.component';
import { ListadoActorComponent } from './componentes/actor/listado-actor/listado-actor.component';
import { Punto2Component } from './componentes/punto2/punto2/punto2.component';
import { Punto3Component } from './componentes/punto3/punto3/punto3.component';
import { Punto4Component } from './componentes/punto4/punto4.component';
import { Punto5Component } from './componentes/punto5/punto5.component';
import { Punto6Component } from './componentes/punto6/punto6.component';


const routes: Routes = 
[
  //{ path: 'listado', component: ListadoComponent }
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: AbmPeliculasComponent },
  { path: 'peliculas/listado', component: ListadoPeliculasComponent },
  { path: 'actor/alta', component: AbmActorComponent },
  { path: 'actor/listado', component: ListadoActorComponent },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto3', component: Punto3Component },
  { path: 'punto4', component: Punto4Component },
  { path: 'punto5', component: Punto5Component },
  { path: 'punto6', component: Punto6Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
