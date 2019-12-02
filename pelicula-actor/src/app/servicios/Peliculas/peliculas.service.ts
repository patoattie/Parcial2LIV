import { Injectable } from '@angular/core';
import { LocalPeliculasService } from '../localPeliculas/local-peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private localPeliculas: LocalPeliculasService) { }

  public BuscarTodos(): Pelicula[]
  {
    return this.localPeliculas.getPeliculas();
  }

  public BorrarPelicula(pelicula: Pelicula): void
  {
    let listaPeliculas: Pelicula[] = this.BuscarTodos();

    listaPeliculas = listaPeliculas.filter((unaPelicula) => unaPelicula.id != pelicula.id);

    this.GuardarTodos(listaPeliculas);
  }

  public AgregarPelicula(pelicula: Pelicula): void
  {
    let listaPeliculas: Pelicula[] = this.BuscarTodos();

    listaPeliculas.push(pelicula);

    this.GuardarTodos(listaPeliculas);
  }

  public GuardarTodos(peliculas: Pelicula[]): void
  {
    this.localPeliculas.setPeliculas(peliculas);
  }
}
