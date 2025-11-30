import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  price :number[] = [75, 135, 115, 250, 200];
    locations = [
    {
      name: 'knorng Phsar Mount',
      img: '/view/Pineapple%20Island.jpg',
      duration: '2 Days 1 Night',
      // The length of the array is 5. We need an index from 0 to 4.
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'knorng Preah Mount',
      img: '/view/Knorng%20Preah%20Mount.jpeg',
      duration: '4 Days 3Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'Pineapple Mount',
      img: '/view/Pineapple%20Island.jpg',
      duration: '2 Days 1 Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'Vealthom',
      img: '/view/vealthom.jpg',
      duration: '3 Days 2Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name: 'Koh Kong Krav',
      img: '/view/Koh%20Kong%20Krao.jpg',
      duration: '2 Days 1 Night',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    },
    {
      name:'Angkor Wat',
      img:'view/angkorwat.jpg',
      duration: '[02-Dec - 08-Dec]',
      price: this.price[Math.floor(Math.random() * this.price.length)],
    }

  ];

categories = [
  { name: 'Culture Tour', img: '/view/curture.jpg' },
  { name: 'Hiking and Trekking', img: '/view/hiking.jpg' },
  { name: 'Day Tour', img: '/view/daytour.webp' },
  { name: 'Island Tour', img: '/view/island.webp' },
];


  router = inject(Router);
  redirectToAbout():void{
    this.router.navigateByUrl('/story');
  }
  redirectToExperience():void{
    this.router.navigateByUrl('/experience');
  }

@Input() data: string = "hello world";
}
