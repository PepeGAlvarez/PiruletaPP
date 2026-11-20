import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html', 
})
export class FormularioHalloween {

  objetos: string[] = [];

  formularioHalloween =  new FormGroup({ 
    nombre: new FormControl('', [ Validators.required, Validators.maxLength(50), Validators.minLength(2), ]),
    email: new FormControl('', [ Validators.required,Validators.email, ]),
    edad: new FormControl('', [ Validators.required, Validators.min(0), Validators.max(120)]),
    objeto: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
  });


  enviar() {
    // console.log('Formulario enviado!!!!');
    console.log(this.formularioHalloween.value);
    console.log(this.formularioHalloween.get('email')?.value);
    // const variable = this.formularioHalloween.get('email')?.value;
   if (this.formularioHalloween.valid) {
      const nuevoObjeto = this.formularioHalloween.get('objeto')?.value;
      if (nuevoObjeto) {
        this.objetos.push(nuevoObjeto);
        this.formularioHalloween.reset(); // Reinicia el formulario después de enviar los datos!!!!!
      }
   } 
  }
}
