import { Route } from '@angular/router';
import { NgxPermissionsData } from 'ngx-permissions';
import { Layout } from '@app/layout.enum';

declare module '@angular/router' {
  interface Route {
    layout?: Layout;
    permissions?: NgxPermissionsData;
  }
}
