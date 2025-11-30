import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Story } from './pages/story/story';
import { Experiences } from './pages/experiences/experiences';
import { NotFound } from './pages/not-found/not-found';
import { Booking } from './pages/booking/booking';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'story', component:Story},
    {path: 'experience',component:Experiences},
    {path: 'booking', component:Booking},
    {path: 'book', redirectTo:'booking', pathMatch:'full'},
    {path:'**', component:NotFound}
];
