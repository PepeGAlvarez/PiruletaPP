import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// Los que están comentados no hace falta incluirlos en los imports desde que se llaman por el routes desde el navbar.

// import { Semaforo } from './Components/semaforo/semaforo';
// import { Frutasyverduras } from './Components/frutasyverduras/frutasyverduras';
// import { ListaPersonajes } from './Components/lista-personajes/lista-personajes';

import { Navbar } from './Components/navbar/navbar';

// import { Calculadora } from './Components/calculadora/calculadora';
// import { Padre } from './Components/padre/padre';
// import {Hijo} from './Components/hijo/hijo';
// import { Hermingo} from './Components/hermingo/hermingo';
// import { FormularioHalloween } from './Components/formulario-halloween/formulario-halloween';
// import { Formulario2 } from './Components//formulario2/formulario2';
import { Tema } from './services/tema';
@Component({
  imports: [RouterOutlet, 
    // Semaforo, Frutasyverduras, ListaPersonajes, 
    Navbar, 
    // Calculadora, Padre, Hijo, Hermingo, FormularioHalloween, Formulario2  
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('PiruletaPP');
  temaService = inject(Tema);
}
