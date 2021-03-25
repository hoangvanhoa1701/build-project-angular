import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthLayoutComponent, MainLayoutComponent]
})
export class LayoutsModule {}
