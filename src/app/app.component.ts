import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModelComponent } from './pages/ng-model/model.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18Practice';
}
