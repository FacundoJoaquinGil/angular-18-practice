import {  Component, ErrorHandler, inject } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-redirection-route',
  imports: [],
  templateUrl: './redirection-route.component.html',
  styleUrl: './redirection-route.component.css'
})
export class RedirectionRouteComponent {
 
  const routes: Routes = [
    {path: "primer componente", component: PrimerComponente },
    {
      path: "anterior pagina", 
      redirectTo: ({ queryParams }) =>{
        const errorHandle = inject(ErrorHandler);
        const userIdParam = queryParams['userId'];
        if (userIdParam !== undefined) {
          return `/user/${userIdParam}`
        } else {
          errorHandle.handleError(new Error('Intento de navegacion sin el ID de usuario'));
          return `/not-found`
        }
      },
    },
    { path: "user/:userId", component: OtroComponente }
  ];
}


