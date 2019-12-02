import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { PeliculasService } from '../../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-buscar-pelicula',
  templateUrl: './buscar-pelicula.component.html',
  styleUrls: ['./buscar-pelicula.component.css']
})
export class BuscarPeliculaComponent implements OnInit 
{
  @Input() peliculas: Pelicula[] = [];
  @Input() admiteNulo: boolean;
  @Output() existePelicula: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  public BuscarPeliculaNombre(): void
  {
    let nombrePelicula:string = $("#nombrePeliculaSearch").val().toString();
    let listaPeliculas: Pelicula[] = this.peliculasService.BuscarTodos();

    listaPeliculas = listaPeliculas.filter((unaPelicula) => unaPelicula.nombre.toLowerCase() == nombrePelicula.toLowerCase() || (this.admiteNulo && nombrePelicula.length == 0));

    this.existePelicula.emit(listaPeliculas);
  }

}
