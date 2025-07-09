import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path: 'nueva-tarea',
    loadComponent: () => import('./pages/nueva-tarea/nueva-tarea.component').then(c => c.NuevaTareaComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
