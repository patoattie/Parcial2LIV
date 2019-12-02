import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { PeliculasService } from '../../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit 
{
  public peliculas: Pelicula[] = [];
  public peliculaSeleccionada: Pelicula;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    this.peliculas = this.leerPeliculas();
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }
}
