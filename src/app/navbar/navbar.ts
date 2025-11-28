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
    {path:'', route:'nav.home'},
    {path:'story', route:'nav.story'},
    {path:'experience', route:'nav.experiences'},
    {path:'notFound', route:'nav.notfound'},
  ]


  //translate
    constructor(private translate: TranslateService) {
  this.translate.use('en');
  this.translate.setFallbackLang('en');
}

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
