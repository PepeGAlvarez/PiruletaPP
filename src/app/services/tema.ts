import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tema {
  modoOscuro = signal<boolean>(false);

  cambiarTema() {
    this.modoOscuro.update((valorActual) => !valorActual);
  }
}