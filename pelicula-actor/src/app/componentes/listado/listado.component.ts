import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../servicios/Peliculas/peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit 
{
  @Input() peliculas: Pelicula[] = [];
  @Input() accionBorrar: boolean;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  private leerPeliculas(): Pelicula[]
  {
    return this.peliculasService.BuscarTodos();
  }

  public procesarBaja(): void
  {
    this.peliculas = this.leerPeliculas();
  }
}
