import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BorrarElementoComponent } from './componentes/BorrarElemento/borrar-elemento/borrar-elemento.component';
import { Punto2Component } from './componentes/punto2/punto2/punto2.component';
import { BuscarPeliculaComponent } from './componentes/BuscarPelicula/buscar-pelicula/buscar-pelicula.component';
import { Punto3Component } from './componentes/punto3/punto3/punto3.component';
import { Punto4Component } from './componentes/punto4/punto4.component';
import { Punto5Component } from './componentes/punto5/punto5.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AbmPeliculasComponent } from './componentes/peliculas/abm-peliculas/abm-peliculas.component';
import { ListadoPeliculasComponent } from './componentes/peliculas/listado-peliculas/listado-peliculas.component';
import { AbmActorComponent } from './componentes/actor/abm-actor/abm-actor.component';
import { ListadoActorComponent } from './componentes/actor/listado-actor/listado-actor.component';
import { Punto6Component } from './componentes/punto6/punto6.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    BorrarElementoComponent,
    Punto2Component,
    BuscarPeliculaComponent,
    Punto3Component,
    Punto4Component,
    Punto5Component,
    BienvenidoComponent,
    BusquedaComponent,
    AbmPeliculasComponent,
    ListadoPeliculasComponent,
    AbmActorComponent,
    ListadoActorComponent,
    Punto6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
