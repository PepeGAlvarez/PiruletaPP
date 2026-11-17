import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './Components/semaforo/semaforo';
import { Frutasyverduras } from './Components/frutasyverduras/frutasyverduras';

@Component({
  imports: [RouterOutlet, Semaforo, Frutasyverduras],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('PiruletaPP');
}
