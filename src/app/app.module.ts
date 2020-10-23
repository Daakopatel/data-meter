import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { PublicComponent } from './public/public.component';
import { DeshboardComponent } from './public/deshboard/deshboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicComponent,
    DeshboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
