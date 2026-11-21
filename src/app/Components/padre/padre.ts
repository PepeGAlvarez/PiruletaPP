  import { Component } from '@angular/core';
  import { Hijo } from '../hijo/hijo';

  @Component({
    imports: [Hijo],
    selector: 'app-padre',
    styleUrl: './padre.css',
    templateUrl: './padre.html',
  })
  export class Padre {

    textoRecibido : string='Aún no se ha comunicado con nosotros ninguno d elos hijos';
    patata = '0 ';
    manejarEvento(texto: string) {
      this.textoRecibido = texto
    }
  }