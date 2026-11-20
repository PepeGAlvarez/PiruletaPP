import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './Components/semaforo/semaforo';
import { Frutasyverduras } from './Components/frutasyverduras/frutasyverduras';
import { ListaPersonajes } from './Components/lista-personajes/lista-personajes';
import { Navbar } from './Components/navbar/navbar';
import { Calculadora } from './Components/calculadora/calculadora';
import { Padre } from './Components/padre/padre';
import {Hijo} from './Components/hijo/hijo';
import { Hermingo} from './Components/hermingo/hermingo';

@Component({
  imports: [RouterOutlet, Semaforo, Frutasyverduras, ListaPersonajes, Navbar, Calculadora],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('PiruletaPP');
}
