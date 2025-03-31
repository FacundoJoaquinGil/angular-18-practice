import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { SignalInputsComponent } from '../signal-inputs/signal-inputs.component';

@Component({
  selector: 'app-signals',
  imports: [SignalInputsComponent, CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {


}
