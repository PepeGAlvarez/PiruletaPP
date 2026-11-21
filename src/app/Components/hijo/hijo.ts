import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {

  mensaje = input('');

  tunelNotificar = output<string>();

  hablarAPadre() { 
    this.tunelNotificar.emit("Mensaje deasde el hijo al padre");
  }
}