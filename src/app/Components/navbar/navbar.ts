import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Tema } from '../../services/tema';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  imports: [MatToolbarModule, RouterLink, MatSlideToggleModule, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  temaService = inject(Tema);
  
    private router = inject(Router);
      listar() {
        this.router.navigate(['/lista-personajes']);
  }
}