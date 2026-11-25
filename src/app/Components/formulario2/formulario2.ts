import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaHalloweenComponent } from '../tarjeta-halloween/tarjeta-halloween';

@Component({
  selector: 'app-formulario2',
  imports: [ReactiveFormsModule, TarjetaHalloweenComponent],
  templateUrl: './formulario2.html',
  styleUrl: './formulario2.css',
})
export class Formulario2 {

  objetosHalloween: any[] = [];   // No importa el tipo de dato, montamos el array
  private siguienteId = 1;        //Contador ID

  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    propietario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
  });

  enviar() {
    if (this.formularioHalloween.valid) {
      const nuevoObjeto = {
        id: this.siguienteId++,
        imagen: this.formularioHalloween.value.imagen,
        objeto: this.formularioHalloween.value.objeto,
        descripcion: this.formularioHalloween.value.descripcion,
        propietario: this.formularioHalloween.value.propietario,
      };

      this.objetosHalloween.push(nuevoObjeto);  //Nueva tarjeta sin borrar las anterioes
      this.formularioHalloween.reset();
    }
  }

  eliminarObjeto(objetoAEliminar: any) {
    const posicion = this.objetosHalloween.indexOf(objetoAEliminar);  // Recibimos en objetoAEliminar la tarjeta que marcamos como Eliminar que PADRE recogió como $event
    if (posicion !== -1) {    //Si no está en la lista (posición -1) nada, si está borramos el objeto de la lista
      this.objetosHalloween.splice(posicion, 1);    //Splice para poder borrar elementos de enmedio reordenando
    }
  }
}