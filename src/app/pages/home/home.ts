import { Component,inject } from '@angular/core';
import { CommonModule,NgOptimizedImage } from "@angular/common";
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  price :number[] = [75, 135, 115, 250, 200];
  locations = [
    {
      name: 'Knorng Phsar Mount',
      img: '/view/Pineapple%20Island.jpg',
      duration: '2 Days 1 Night',
      // The length of the array is 5. We need an index from 0 to 4.
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'Knorng Preah Mount',
      img: '/view/Knorng%20Preah%20Mount.jpeg',
      duration: '4 Days 3Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'Pineapple Island',
      img: '/view/Pineapple%20Island.jpg',
      duration: '2 Days 1 Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'vealthom',
      img: '/view/vealthom.jpg',
      duration: '3 Days 2Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'Koh Kong Krao',
      img: '/view/Koh%20Kong%20Krao.jpg',
      duration: '2 Days 1 Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
  ];

 categories = [
  {name:'Culture Tour', img:'view/curture.jpg'},
  {name:'Hiking and Trekking', img:'view/hiking.jpg'},
  {name:'Day Tour', img:'view/daytour.webp'},
  {name:'Island Tour', img:'view/island.webp'},
]


// constructor(private translate: TranslateService) {
//     translate.setTranslation('en','en.json');
//     translate.setFallbackLang('en');
// }
}
