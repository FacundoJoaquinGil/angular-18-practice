import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule],
  template: `<div>Hola</div>`
})
export class ModelComponent {

    const nombreControlador = new FormControl<string | null>(
        'nombre',
        Validators.required
    );

    this.nombreControlador.event.this.subscribe((event)=>{
        //podemos generar un evento que dispare hacia el controlador
    })
    
}