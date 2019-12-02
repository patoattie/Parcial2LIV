import { Injectable } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { ETipo } from '../../enums/etipo.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalPeliculasService 
{
  constructor() { }

  public cargaInicialStorage(): void
  {
    let peliculas: Pelicula[] = [];
    let unaPelicula: Pelicula;

    //Carga de array de peliculas
    unaPelicula = new Pelicula(475557, 'Joker', ETipo.otros, '2019-10-02', 68443, this.getUrlFoto(475557));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(513045, 'Stuber Express', ETipo.otros, '2019-07-11', 142849, this.getUrlFoto(513045));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(523139, 'En la hierba alta', ETipo.terror, '2019-09-19', 30068, this.getUrlFoto(523139));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(89247, 'Papá, soy una zombi', ETipo.otros, '2012-01-10', 2674, this.getUrlFoto(89247));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(474350, 'It Capítulo 2', ETipo.terror, '2019-09-04', 245811, this.getUrlFoto(474350));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(420817, 'Aladdín', ETipo.amor, '2019-05-22', 117755, this.getUrlFoto(420817));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(62688, 'Nevalyashka', ETipo.comedia, '2007-04-26', 2507, this.getUrlFoto(62688));
    peliculas.push(unaPelicula);

    unaPelicula = new Pelicula(489064, '3 from Hell', ETipo.terror, '2019-09-26', 45581, this.getUrlFoto(489064));
    peliculas.push(unaPelicula);

    //Carga del localStorage
    this.setPeliculas(peliculas);
  }

  public setPeliculas(peliculas: Pelicula[]): void
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
