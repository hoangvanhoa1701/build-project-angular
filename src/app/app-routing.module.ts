import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout } from '@app/layout.enum';
import { AuthGuard } from '@app/guards/auth.guard';
import { LoginGuard } from '@app/guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    layout: Layout.AUTH,
    canActivate: [LoginGuard],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    layout: Layout.MAIN,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
