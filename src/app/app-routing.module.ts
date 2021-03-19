import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout } from '@app/layout.enum';

const routes: Routes = [
  {
    path: 'login',
    layout: Layout.AUTH,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    layout: Layout.MAIN,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
