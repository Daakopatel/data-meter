import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { PublicComponent } from './public/public.component';
import { DeshboardComponent } from './public/deshboard/deshboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { AgeComponent } from './public/age/age.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './common/sidebar/sidebar.component';

// mat data
import { MaterialModule } from './material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatDatepickerModule } from '@angular/material';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicComponent,
    DeshboardComponent,
    FooterComponent,
    SidebarComponent,
    AgeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatDatepickerModule
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
    // MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
