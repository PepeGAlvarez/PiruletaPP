import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-frutasyverduras',
  styleUrl: './frutasyverduras.css',
  templateUrl: './frutasyverduras.html',
})
export class Frutasyverduras {

// nombre_frutas:string[] = ["Manzana", "Banana", "Naranja", "Fresa", "Uva"];

frutas:fruta[] = [
  new fruta("Manzana", true, "/images/manzana.png"),
  new fruta("Banana", false, "/images/banana.png"),
  new fruta("Naranja", true, "/images/naranja.png"),
  new fruta("Fresa", false, "/images/fresa.png"),
  new fruta("Uva", true, "/images/uva.png")
];
}

class fruta {
  nombre:string;
  like:boolean;
  imagen:string;

  constructor (n:string, l:boolean, s:string) {
    this.nombre = n;
    this.like = l;
    this.imagen = s;
  }
}