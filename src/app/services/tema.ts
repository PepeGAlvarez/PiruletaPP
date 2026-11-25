import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',       // Disponible en toda la app sin importar componente
})

//Se inuecta también en el app.ts/html y en el navbar.ts/html!!

export class Tema {
  modoOscuro = signal<boolean>(false);

  cambiarTema() {
    this.modoOscuro.update((valorActual) => !valorActual);  // Invierte el tema
  }
}