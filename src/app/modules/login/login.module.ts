import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@modules/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from '@app/layout.enum';

const routes: Routes = [
  {
    path: '',
    layout: Layout.AUTH,
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModule {}
