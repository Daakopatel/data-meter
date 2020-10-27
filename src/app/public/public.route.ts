import { Routes } from '@angular/router';
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
    }
];
