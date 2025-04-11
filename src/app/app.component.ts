import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModelComponent } from './pages/ng-model/model.component';
import { OptimizacionImagenesComponent } from './pages/optimizacion-imagenes/optimizacion-imagenes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, ModelComponent, OptimizacionImagenesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18Practice';
}
