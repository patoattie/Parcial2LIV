import { ETipo } from '../enums/etipo.enum';
import { Actor } from './actor';

export class Pelicula 
{
    public id: number;
    public nombre: string;
    public tipo: ETipo;
    public estreno: string;
    public cantidad: number;
    public foto: string;
    public actorPrincipal: Actor;

    constructor(id?: number, nombre?: string, tipo?: ETipo, estreno?: string, cantidad?: number, foto?: string, actorPrincipal?: Actor)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.estreno = estreno;
        this.cantidad = cantidad;
        this.foto = foto;
        this.actorPrincipal = actorPrincipal;
    }
}
