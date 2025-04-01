import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  template: `<div #el>Elemento a consultar</div>`,
})
export class SignalQueriesComponent {

divEl = viewChild<ElementRef<HTMLDivElement>>("el");

divElReq = viewChild.required<ElementRef<HTMLDivElement>>("el");

divEls = viewChildren("el");
}