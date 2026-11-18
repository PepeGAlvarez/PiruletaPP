import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-personajes',
  styleUrl: './lista-personajes.css',
  templateUrl: './lista-personajes.html',
})
export class ListaPersonajes {
  

personajes:personaje[] = [
  new personaje("Yoda", "/images/Yoda.png", "Como Jordi Pujol, pero a este se le entiende."),
  new personaje("Boba Fett", "/images/Boba.png", "This is the guay."),
  new personaje("Darth Vader", "/images/Darth.png", "¿Tienes unas juanolas por ahí?"),
  new personaje("Obi-Wan Kenobi", "/images/ObiWan.png", "Yayo en bata."),
  new personaje("Stormtrooper", "/images/Stormtrooper.png", "No ve tres en un burro y viste como un trono de Roca.")
];
}

class personaje {
  nombre:string;
  imagen:string;
  descripcion:string;

  constructor (n:string, s:string, d:string) {
    this.nombre = n;
    this.imagen = s;
    this.descripcion = d;
  }
}