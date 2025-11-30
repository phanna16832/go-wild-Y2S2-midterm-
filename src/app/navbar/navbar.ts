import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule ,TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslateModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbar: {path:string; route: string}[]=[
    {path:'', route:'Home'},
    {path:'story', route:'Story'},
    {path:'experience', route:'Experiences'},
    {path: 'booking',route: 'Booking'},
  ]

}
