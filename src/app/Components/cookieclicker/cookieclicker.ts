import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cookieclicker',
  imports: [],
  templateUrl: './cookieclicker.html',
  styleUrl: './cookieclicker.css',
})
export class Cookieclicker {
  puntos = signal(0);
  puntosPorClic = signal(1);
  creciendo = signal(false);

  hacerClic() {
    this.puntos.update((actual) => actual + this.puntosPorClic());

    const total = this.puntos();
    let n = 0;

    if (total > 0) {
      n = Math.floor(Math.log10(total));
    } else {
      n = 0;
    }

    this.puntosPorClic.set(2 ** n);

    this.creciendo.set(true);
    setTimeout(() => {
      this.creciendo.set(false);
    }, 150);
  }

  reiniciar() {
    this.puntos.set(0);
    this.puntosPorClic.set(1);
  }
}