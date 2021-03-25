import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Application modules
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LayoutsModule } from '@app/layouts.module';
import { CoreModule } from '@app/core.module';
import { CommonlyModule } from './common/commonly.module';

// Application components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule,
    LayoutsModule,
    CoreModule,
    CommonlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
