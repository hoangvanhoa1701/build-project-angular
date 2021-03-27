/**
 * Commonly Module used to on all page
 * If it will be useful for the common
 * Add modules, components, pipes, directives, services,...
 */

import { NgModule } from '@angular/core';
import { DataModule } from '@data/data.module';
import { environment } from '@env';
import { ScreenLoaderComponent } from './components/screen-loader/screen-loader.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { VnCurrencyPipe } from './pipes/vn-currency.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

// Contains all modules
const MODULES = [
  DataModule.forRoot({ url: environment.apiUrl, prefix: environment.prefix }),
  HotToastModule.forRoot()
];

// Contains all components
const COMPONENTS: any[] = [ScreenLoaderComponent];

// Contains all pipes
const PIPES: any[] = [DateFormatPipe, VnCurrencyPipe];

// Contains all directives
const DIRECTIVES: any[] = [];

// Contains all services
const SERVICES: any[] = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  providers: [...SERVICES]
})
export class CommonlyModule {}
