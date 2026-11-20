import { Routes } from '@angular/router';
import { Semaforo } from './Components/semaforo/semaforo';
import { Frutasyverduras } from './Components/frutasyverduras/frutasyverduras';
import { Calculadora } from './Components/calculadora/calculadora';
import { ListaPersonajes } from './Components/lista-personajes/lista-personajes';
import { PageNotFound } from './Components/page-not-found/page-not-found';
import { FormularioHalloween } from './Components/formulario-halloween/formulario-halloween';
import { Hermingo } from './Components/hermingo/hermingo';
import { Padre } from './Components/padre/padre';
import { Hijo } from './Components/hijo/hijo';


export const routes: Routes = [
    {path: '', component: Semaforo},
    {path: 'semaforo', component: Semaforo},
    {path: 'frutasyverduras', component: Frutasyverduras},
    {path: 'lista-personajes', component: ListaPersonajes},
    {path: 'calculadora', component: Calculadora},
    {path: 'formulario-halloween', component: FormularioHalloween},
    {path: 'hermingo', component: Hermingo},
    {path: 'padre', component: Padre},
    {path: 'hijo', component: Hijo},
    {path: '**', component: PageNotFound}



];
 