export class Actor 
{
    public nombre: string;
    public apellido: string;
    public nacionalidad: string;
    public fechaNacimiento: string;

    constructor(nombre?: string, apellido?: string, nacionalidad?: string, fechaNacimiento?: string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }
}
