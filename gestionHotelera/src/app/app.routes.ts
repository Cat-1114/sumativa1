import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'reserva',
    loadComponent: () => import('./pages/reserva/reserva.page').then( m => m.ReservaPage)
  },
  {
    path: 'habitaciones',
    loadComponent: () => import('./pages/habitaciones/habitaciones.page').then( m => m.HabitacionesPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
