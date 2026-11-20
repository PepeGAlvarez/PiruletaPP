import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})

export class Calculadora {

  pantalla = signal('0');

  primerNumero: number | null = null;
  operador: string | null = null;
  esperandoSegundoNumero = false;

  fila1 = ['7', '8', '9', '/'];
  fila2 = ['4', '5', '6', '*'];
  fila3 = ['1', '2', '3', '-'];
  fila4 = ['0', '.', '=', '+'];

  pulsarBoton(valor: string) {

    if (valor === 'AC') {
      this.pantalla.set('0');
      this.primerNumero = null;
      this.operador = null;
      this.esperandoSegundoNumero = false;
      return;
    }

    if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      this.primerNumero = Number(this.pantalla());
      this.operador = valor;
      this.esperandoSegundoNumero = true;
      return;
    }

    if (valor === '=') {
      if (this.primerNumero !== null && this.operador !== null) {
        const segundoNumero = Number(this.pantalla());
        let resultado = 0;

        if (this.operador === '+') resultado = this.primerNumero + segundoNumero;
        if (this.operador === '-') resultado = this.primerNumero - segundoNumero;
        if (this.operador === '*') resultado = this.primerNumero * segundoNumero;
        if (this.operador === '/') {
          resultado = segundoNumero !== 0 ? this.primerNumero / segundoNumero : 0;
        }

        this.pantalla.set(String(resultado));
        this.primerNumero = null;
        this.operador = null;
        this.esperandoSegundoNumero = false;
      }
      return;
    }

    if (this.esperandoSegundoNumero) {
      this.pantalla.set(valor === '.' ? '0.' : valor);
      this.esperandoSegundoNumero = false;
    } else {

      if (valor === '.' && this.pantalla().includes('.')) return;

      if (this.pantalla() === '0' && valor !== '.') {
        this.pantalla.set(valor);
      } else {
        this.pantalla.update((actual) => actual + valor);
      }
    }
  }
}