import { Routes } from '@angular/router';
import { LoginComponent } from '../common/login/login.component';
import { RegisterComponent } from '../common/register/register.component';
import { AgeComponent } from './age/age.component';
import { DeshboardComponent } from './deshboard/deshboard.component'

export const PUBLIC_ROUTES: Routes = [
    {
        path: 'home',
        component: DeshboardComponent
    },
    {
        path: 'age-meter',
        component: AgeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
