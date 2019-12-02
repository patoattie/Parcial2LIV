import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { PeliculasService } from '../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit 
{
  public peliculas: Pelicula[] = [];
  private existePelicula: boolean = false;
  private noExistePelicula: boolean = false;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() 
  {
    this.peliculas = this.leerPeliculas();
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }

  public novedadExistePelicula($event): void
  {
    this.existePelicula = $event.length > 0;
    this.noExistePelicula = $event.length == 0;
  }

  public getExistePelicula(): boolean
  {
    return this.existePelicula;
  }

  public getNoExistePelicula(): boolean
  {
    return this.noExistePelicula;
  }

}
