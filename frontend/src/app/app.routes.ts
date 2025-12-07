import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./components/signup/signup.component').then(m => m.SignupComponent) },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  }
];
