import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { PeliculasService } from '../../../servicios/Peliculas/peliculas.service';

@Component({
  selector: 'app-borrar-elemento',
  templateUrl: './borrar-elemento.component.html',
  styleUrls: ['./borrar-elemento.component.css']
})
export class BorrarElementoComponent implements OnInit 
{
  @Input() peliculaParaBorrar: Pelicula;
  @Output() novedadBaja: EventEmitter<any> = new EventEmitter<any>();

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  borrarPelicula(): void
  {
//console.info('borrarPelicula()', this.peliculaParaBorrar);
    this.peliculasService.BorrarPelicula(this.peliculaParaBorrar);
    this.novedadBaja.emit();
  }
}
