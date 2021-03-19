import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Application modules
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LayoutsModule } from '@app/layouts.module';

// Application components
import { AppComponent } from './app.component';
import { ScreenLoaderComponent } from '@app/components/screen-loader/screen-loader.component';

@NgModule({
  declarations: [AppComponent, ScreenLoaderComponent],
  imports: [BrowserModule, AppRoutingModule, LoadingBarModule, LayoutsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
