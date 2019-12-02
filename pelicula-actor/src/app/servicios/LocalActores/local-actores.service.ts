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

    //Carga de array de actores
    unActor = new Actor('Juan', 'Perez', 'argentino', '1988-08-08');
    actores.push(unActor);

    //Carga del localStorage
    this.setActores(actores);
  }

  public setActores(actores: Actor[]): void
  {
    localStorage.setItem('actores', JSON.stringify(actores));
  }

  private getUrlFoto(id: number): string
  {
    return '../../../assets/actores/' + id.toString() + '.jpg';
  }

  public getActores(): Actor[]
  {
    if(!this.hayBase())
    {
      this.cargaInicialStorage();
    }

    return JSON.parse(localStorage.getItem('actores'));
  }

  private hayBase(): boolean 
  {
    return JSON.parse(localStorage.getItem('actores')) !== null;
  }
}
