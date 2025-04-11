import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimizacion-imagenes',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './optimizacion-imagenes.component.html',
  styleUrl: './optimizacion-imagenes.component.css',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=${config.width}`;
      }
    },
  ],
})
export class OptimizacionImagenesComponent {

}


