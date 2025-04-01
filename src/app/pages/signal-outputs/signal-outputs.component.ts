import { Component, output} from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signal-outputs',
  imports: [],
  templateUrl: './signal-outputs.component.html',
  styleUrl: './signal-outputs.component.css'
})
export class SignalOutputsComponent {

  //Ejemplo de Signal outputs escucha de el cambio de un componente hijo a un padre

  cambiarNombre = output<string>();

  actualizarNombre(nuevoNombre: string) {
    nuevoNombre = <string>("Facundo"); // Simula un cambio de nombre
    this.cambiarNombre.emit(nuevoNombre);
  }

  //Para observables
  
  onCambioNombre$ = new Observable<string>();
  onCambioNombre = outputFromObservable(this.onCambioNombre$)

  //cuando hablamos de observables se puede suscribir a los cambios, este caso en particular se utiliza para cosas muy puntuales.

}
