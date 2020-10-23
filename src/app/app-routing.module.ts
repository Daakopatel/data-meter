import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DeshboardComponent } from './public/deshboard/deshboard.component';
import { PublicComponent } from './public/public.component';
import { PUBLIC_ROUTES } from './public/public.route';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: AppComponent },
    { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
    {
      path: '**',
      redirectTo: '/'
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
