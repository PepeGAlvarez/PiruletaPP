import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  imports: [MatButtonModule],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {

  contador = signal(5);
  colorin = signal("red");
  repeticiones = [1, 2, 3, 4, 5];   
  // En realidad también valdría con todo 1s pero así se ve más claro 

  incrementar() {

        this.contador.update((value) => value + 1);
        this.revisarColor();
  }
  decrementar() {
    if (this.contador() > 0) {
      this.contador.update((value) => value - 1);
      this.revisarColor();
    }
  }
  resetear() {
        this.contador.set(5);
        this.revisarColor();
  }
  revisarColor(){
    if(this.contador()>=4){
      this.colorin.set("red");
    } else if(this.contador() > 0) {
      this.colorin.set("orange");
    } else if(this.contador() === 0) {
      this.colorin.set("green"); 
    }
  }
  
}

