import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Debra',
      comment: 'Best renovations in town!',
      detail: 'My kitchen is stunning!',
      img: 'https://randomuser.me/api/portraits/women/91.jpg',
      title: 'CEO',
    },
    {
      name: 'Maxwell',
      comment: 'My House looks great',
      detail: '10/10 Would recommend',
      img: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      title: 'Professional House Child',
    },
    {
      name: 'Gaben',
      comment: 'I used to love leaving the house',
      detail: "Now I don't",
      img: 'https://randomuser.me/api/portraits/men/82.jpg',
      title: 'Former Extrovert',
    },
  ];
}
