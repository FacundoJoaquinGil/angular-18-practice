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

  //Tarea para la casa (Ver ejemplo)
  deshabilitado = input(false, {transform:  (v: boolean | string) => ( typeof v === 'string' ? v === "" : v),});

  //Uso de el alias para un dato entrante enviado por el padre hacia una signal de el hijo
  edadHijo = input(0, {alias: 'edadEstudiante'});
}
