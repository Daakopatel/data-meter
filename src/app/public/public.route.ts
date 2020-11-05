import { Routes } from '@angular/router';
import { LoginComponent } from '../common/login/login.component';
import { RegisterComponent } from '../common/register/register.component';
import { AddusersComponent } from '../common/users/addusers/addusers.component';
import { EditComponent } from '../common/users/edit/edit.component';
import { UsersComponent } from '../common/users/users.component';
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
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'edit',
        component: EditComponent
    },
    {
        path: 'adduser',
        component: AddusersComponent
    }
];
