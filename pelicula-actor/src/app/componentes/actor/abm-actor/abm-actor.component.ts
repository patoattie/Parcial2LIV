import { Component, OnInit } from '@angular/core';
//para poder hacer las validaciones
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ActoresService } from '../../../servicios/Actores/actores.service';
import { Actor } from '../../../clases/actor';

@Component({
  selector: 'app-abm-actor',
  templateUrl: './abm-actor.component.html',
  styleUrls: ['./abm-actor.component.css']
})
export class AbmActorComponent implements OnInit 
{
  public formRegistro: FormGroup;
  private enEspera: boolean; //Muestra u oculta el spinner

  constructor(
    private miConstructor: FormBuilder,
    private actoresService: ActoresService
  ) 
  {
    this.formRegistro = this.miConstructor.group(
    {
      nombre: ['', Validators.compose([Validators.required])],
      apellido: ['', Validators.compose([Validators.required])],
      nacionalidad: ['', Validators.compose([Validators.required])],
      fecha: ['', Validators.compose([Validators.required])]
      //imagen: ['', Validators.compose([])]
    });
  }

  ngOnInit() 
  {
    this.enEspera = false;
    this.formRegistro.setValue({nombre: '',apellido: '', nacionalidad: '', fecha: ''});
  }

  private mostrarMsjErrorDatos(): void
  {
    let error: string = '';
    if(this.formRegistro.controls['apellido'].invalid)
    {
      if(this.formRegistro.controls['apellido'].hasError('required'))
      {
        error += 'Tenés que ingresar un Apellido para el actor\n';
      }
      else
      {
        error += 'Error al validar el Apellido del actor\n';
      }
    }

    if(this.formRegistro.controls['nombre'].invalid)
    {
      if(this.formRegistro.controls['nombre'].hasError('required'))
      {
        error += 'Tenés que ingresar un Nombre para el actor\n';
      }
      else
      {
        error += 'Error al validar el Nombre del actor\n';
      }
    }

    if(this.formRegistro.controls['nacionalidad'].invalid)
    {
      if(this.formRegistro.controls['nacionalidad'].hasError('required'))
      {
        error += 'Tenés que ingresar una Nacionalidad para el actor\n';
      }
      else
      {
        error += 'Error al validar la Nacionalidad del actor\n';
      }
    }

    if(this.formRegistro.controls['fecha'].invalid)
    {
      if(this.formRegistro.controls['fecha'].hasError('required'))
      {
        error += 'Tenés que ingresar una Fecha de nacimiento para el actor\n';
      }
      else
      {
        error += 'Error al validar la Fecha de nacimiento del actor\n';
      }
    }

    if(error.length > 0)
    {
      alert(error);
    }
  }

  private mostrarMsjOk(): void
  {
    alert('Alta OK');
  }

  public getEnEspera(): boolean
  {
    return this.enEspera;
  }

  public registrar(): void
  {
    this.enEspera = true; //Muestro el spinner

    if(this.formRegistro.valid)
    {
      //let file = (<HTMLInputElement>document.getElementById("img-file")).files[0];

      this.actoresService.AgregarActor(new Actor(this.formRegistro.value.nombre, this.formRegistro.value.apellido, this.formRegistro.value.nacionalidad, this.formRegistro.value.fecha));

      this.mostrarMsjOk();
      this.formRegistro.reset();
    }
    else
    {
//console.log(this.formRegistro.value.fecha);
      this.mostrarMsjErrorDatos();
    }

    this.enEspera = false; //Oculto el spinner
  }
}