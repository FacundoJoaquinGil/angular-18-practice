import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  template: `<div #el>Elemento a consultar</div>`,
})
export class SignalQueriesComponent {

  //Sirve para hacer consultas o modificaciones HTML dentro de el typescript

divEl = viewChild<ElementRef<HTMLDivElement>>("el");

// si un elemento es required quiere decir que si o si debe devolver algo, sino va a ocurrir un error solamente en tiempo de ejecucion o sea en la consola
divElReq = viewChild.required<ElementRef<HTMLDivElement>>("el");

//viewChildren solo de por si no se puede modificar ya que es read only, los dos anteriores si
divEls = viewChildren("el");
}