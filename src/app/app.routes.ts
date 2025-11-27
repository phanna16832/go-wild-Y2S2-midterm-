import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Story } from './pages/story/story';
import { Experiences } from './pages/experiences/experiences';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'story', component:Story},
    {path: 'experience',component:Experiences},
    {path:'**', component:NotFound}
];
