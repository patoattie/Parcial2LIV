import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { PeliculasService } from '../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit 
{
  public peliculas: Pelicula[] = [];
  public peliculasFiltradas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    this.peliculas = this.leerPeliculas();
    this.peliculasFiltradas = this.leerPeliculas();
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }

  public novedadExistePelicula($event): void
  {
    this.peliculasFiltradas = $event;
  }

}
