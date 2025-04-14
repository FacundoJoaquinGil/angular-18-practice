import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-signal-inputs',
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.css'
})
export class SignalInputsComponent {

  // Inputs o entras de tipo opcional
  nombre  = input<string>();
  numero = input(0);

  // Inputs o Entradas de tipo obligatorio
  // apellido  = input.required<string>();

  // Inputs computados
  edad = input(15);
  multiplicarEdad = computed(()=> this.edad() * 2)


  //Uso de el alias para un dato entrante enviado por el padre hacia una signal de el hijo
  edadHijo = input(0, {alias: 'edadEstudiante'});

  //un poco de logica...
  deshabilitado = input(false, {
    transform: (value: boolean | string) => (typeof value === 'string' ) ? value === '' : value
  })
}
