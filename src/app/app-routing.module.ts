import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('./modules/home/home.component').then(c=>c.HomeComponent),
  //   canActivate: [authenticationGuard()]
  // },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/home/routes').then(c=>c.ADMIN_ROUTES),
    canActivate: [authenticationGuard()]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
