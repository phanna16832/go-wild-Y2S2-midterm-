import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbar: {path:string; route: string}[]=[
    {path:'', route:'home'},
    {path:'story', route:'story'},
    {path:'experience', route:'experiences'},
    {path:'notFound', route:'Notfound-page'},
  ]
}
