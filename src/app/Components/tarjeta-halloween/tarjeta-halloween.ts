import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta-halloween',
  imports: [],
  templateUrl: './tarjeta-halloween.html',
  styleUrl: './tarjeta-halloween.css',
})

  export class TarjetaHalloweenComponent {
  @Input() item: any;
  @Output() eliminar = new EventEmitter<any>();

  pulsarEliminar() {
    this.eliminar.emit(this.item);
  }
}