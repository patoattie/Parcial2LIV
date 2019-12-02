import { Injectable } from '@angular/core';
import { Actor } from '../../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class LocalActoresService 
{
  constructor() { }

  public cargaInicialStorage(): void
  {
    let actores: Actor[] = [];
    let unActor: Actor;

    //Carga de array de peliculas
    unActor = new Actor('Juan', 'Perez', 'argentino', '1988-08-08');
    actores.push(unActor);

    //Carga del localStorage
    this.setPeliculas(actores);
  }

  public setActores(actores: Pelicula[]): void
  {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }

  private getUrlFoto(id: number): string
  {
    return '../../../assets/peliculas/' + id.toString() + '.jpg';
  }

  public getPeliculas(): Pelicula[]
  {
    if(!this.hayBase())
    {
      this.cargaInicialStorage();
    }

    return JSON.parse(localStorage.getItem('peliculas'));
  }

  private hayBase(): boolean 
  {
    return JSON.parse(localStorage.getItem('peliculas')) !== null;
  }
}
