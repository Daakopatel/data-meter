import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { PublicComponent } from './public/public.component';
import { DeshboardComponent } from './public/deshboard/deshboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { AgeComponent } from './public/age/age.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

// mat data
import { MaterialModule } from './material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatDatepickerModule } from '@angular/material';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { UsersComponent } from './common/users/users.component';
import { EditComponent } from './common/users/edit/edit.component';
import { AddusersComponent } from './common/users/addusers/addusers.component';
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
    AgeComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    EditComponent,
    AddusersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
    // MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
