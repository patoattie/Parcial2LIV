import { Injectable } from '@angular/core';
import { LocalActoresService } from '../LocalActores/local-actores.service';
import { Actor } from '../../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService 
{

  constructor(private localActores: LocalActoresService) { }
  
  public BuscarTodos(): Actor[]
  {
    return this.localActores.getActores();
  }

  public BorrarActor(actor: Actor): void
  {
    let listaActores: Actor[] = this.BuscarTodos();

    listaActores = listaActores.filter((unActor) => (unActor.apellido != actor.apellido 
      || unActor.nombre != actor.nombre 
      || unActor.nacionalidad != actor.nacionalidad
      || unActor.fechaNacimiento != actor.fechaNacimiento));

    this.GuardarTodos(listaActores);
  }

  public GuardarTodos(actores: Actor[]): void
  {
    this.localActores.setActores(actores);
  }
}
