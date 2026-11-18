import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-personajes',
  styleUrl: './lista-personajes.css',
  templateUrl: './lista-personajes.html',
})
export class ListaPersonajes {
  

personajes:personaje[] = [
  new personaje("Yoda", "/images/Yoda.png"),
  new personaje("Boba Fett", "/images/Boba.png"),
  new personaje("Darth Vader", "/images/Darth.png"),
  new personaje("Obi-Wan Kenobi", "/images/ObiWan.png"),
  new personaje("Stormtrooper", "/images/Stormtrooper.png")
];
}

class personaje {
  nombre:string;
  imagen:string;

  constructor (n:string, s:string) {
    this.nombre = n;
    this.imagen = s;
  }
}