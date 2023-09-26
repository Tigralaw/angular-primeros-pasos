import { Component } from "@angular/core";

// Component es un decorador que transforma mi clase en un componente
// Cuando creas un componente, necesitas asignarle un template
// Este se escribe dentro de llaves {}
 @Component({
  // Nombre del componente, se recomienda asignarle un prefijo
  selector: 'app-counter',
  // Contenido html, éste puede escribirse dentro de este espacio
  // para proyectos demasiado cortos, pero si el código tiene más
  // de 4 líneas, se recomienda crear un archivo html separado
  template: `
    <h3> Counter: {{ counter }}</h3>>

    <button (click) = "increaseBy(+1)">+1</button>
    <button (click) = "resetCounter()">Reset</button>
    <button (click) = "increaseBy(-1)">-1</button>
  `
 })

 // Esta clase se exporta y se importa en el html app.component.html
 // con la etiqueta <app-counter></app-counter> utilizando el
 // selector del componente
 export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ): void {
    if (value >= 0) {
        this.counter += 1;
    } else {
        this.counter -= 1;
    }
  }

  resetCounter(): void {
    this.counter = 10;
  }

 }
