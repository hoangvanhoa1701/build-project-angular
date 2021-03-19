import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@modules/home/home.component';
import { Layout } from '@app/layout.enum';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    layout: Layout.MAIN,
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModule {}
