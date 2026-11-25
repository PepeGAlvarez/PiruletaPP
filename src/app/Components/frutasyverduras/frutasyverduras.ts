import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-frutasyverduras',
  styleUrl: './frutasyverduras.css',
  templateUrl: './frutasyverduras.html',
})
export class Frutasyverduras {

// nombre_frutas:string[] = ["Manzana", "Banana", "Naranja", "Fresa", "Uva"];

frutas:Fruta[] = [
  new Fruta("Manzana", true, "/images/manzana.png"),
  new Fruta("Banana", false, "/images/banana.png"),
  new Fruta("Naranja", true, "/images/naranja.png"),
  new Fruta("Fresa", false, "/images/fresa.png"),
  new Fruta("Uva", true, "/images/uva.png")
];
}

class Fruta {
  nombre:string;
  like:boolean;
  imagen:string;

  constructor (n:string, l:boolean, s:string) {
    this.nombre = n;
    this.like = l;
    this.imagen = s;
  }
}