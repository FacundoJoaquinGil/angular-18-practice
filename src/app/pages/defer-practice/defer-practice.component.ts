import 'zone.js';
import { Component, signal } from '@angular/core';
// import { ChartComponent } from './chart/chart.component';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-defer-practice',
  imports: [],
  // imports: [ChartComponent, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './defer-practice.component.html',
  styleUrl: './defer-practice.component.css'
})
export class DeferPracticeComponent {
  isVisible = signal(false);
}
