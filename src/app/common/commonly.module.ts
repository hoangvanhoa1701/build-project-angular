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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Contains all modules
const MODULES = [
  DataModule.forRoot({ url: environment.apiUrl, prefix: environment.prefix }),
  HotToastModule.forRoot(),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFirestoreModule
];

// Contains all components
const COMPONENTS: any[] = [ScreenLoaderComponent];

// Contains all pipes
const PIPES: any[] = [];

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
