import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage, TranslateModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  price :number[] = [75, 135, 115, 250, 200];
  locations = [
    {
      name: 'home.location.knorngPhsarMount',
      img: '/view/Pineapple%20Island.jpg',
      duration: '2 Days 1 Night',
      // The length of the array is 5. We need an index from 0 to 4.
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'home.location.knorngPreahMount',
      img: '/view/Knorng%20Preah%20Mount.jpeg',
      duration: '4 Days 3Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'home.location.pineappleMount',
      img: '/view/Pineapple%20Island.jpg',
      duration: '2 Days 1 Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'home.location.vealthom',
      img: '/view/vealthom.jpg',
      duration: '3 Days 2Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'home.location.kohKongKrav',
      img: '/view/Koh%20Kong%20Krao.jpg',
      duration: '2 Days 1 Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
  ];

 categories = [
  {name:'home.categories.culture', img:'view/curture.jpg'},
  {name:'home.categories.hiking', img:'view/hiking.jpg'},
  {name:'home.categories.dayTour', img:'view/daytour.webp'},
  {name:'home.categories.islandTour', img:'view/island.webp'},
]



  router = inject(Router);
  redirectToAbout():void{
    this.router.navigateByUrl('/story');
  }
  redirectToExperience():void{
    this.router.navigateByUrl('/experience');
  }


}
