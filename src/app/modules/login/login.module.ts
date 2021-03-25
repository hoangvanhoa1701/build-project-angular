import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@modules/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from '@app/layout.enum';
import { LoginGuard } from '@app/guards/login.guard';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    layout: Layout.AUTH,
    canActivate: [LoginGuard],
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class LoginModule {}
