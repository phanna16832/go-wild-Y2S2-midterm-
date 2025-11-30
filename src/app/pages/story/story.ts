import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-story',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './story.html',
  styleUrl: './story.css',
})
export class Story {
  constructor(private title: Title) {
    this.title.setTitle('Stories');
  }
  member = [
    {
      name: 'Nat Rinvireakboth',
      img: '/both.jpg',
      role: 'CEO',
      caption:
        'CEO Nat Rinvireakboth is the visionary leader behind our organization. With a deep passion for environmental conservation and sustainable tourism, Nat founded the company in 2022 to create meaningful travel experiences that benefit both travelers and local communities.',
    },
    {
      name: 'Sak Sochetra (tra)',
      img: '/tra.png',
      role: 'Marketing Manager',
      caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      name: 'Sok Siengsiveng',
      img: '/sieveng.jpg',
      role: 'Tour Leader',
      caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      name: 'Sorn Phou (Phou)',
      img: '/phou.jpg',
      role: 'Degital Marketer',
      caption:
        'He joined team in December 2024, and is responsible for social media management and content creation. Phou is passionate about using digital platforms to raise awareness about environmental issues and engage the community in conservation efforts.',
    },
    {
      name: 'Kan Sopanha',
      img: '/panha.jpg',
      role: 'Video Editor',
      caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      name: 'Sok Siphanna (Phanna)',
      img: '/phanna.jpg',
      role: 'Software Developer',
      caption:
        "Phanna is a skilled software developer who joined the team in January 2025. He is responsible for developing and maintaining the organization's website and mobile applications. Phanna is passionate about using technology to create innovative solutions for environmental conservation.  ",
    },
  ];
}
