import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'renovations-site';

  jobs = [
    {
      title: 'Building',
      image: '/assets/pexels-brett-jordan-4692281.jpg',
    },
    {
      title: 'Painting',
      image: '/assets/pexels-stephanie-ho-994164.jpg',
    },
    {
      title: 'Plastering',
      image: '/assets/pexels-la-miko-3616762.jpg',
    },
    {
      title: 'Tiling',
      image: '/assets/pexels-henry-&-co-1144871.jpg',
    },
    {
      title: 'Window Installations',
      image: '/assets/pexels-ksenia-chernaya-5691526.jpg',
    },
    {
      title: 'Door installations',
      image: '/assets/pexels-henry-&-co-1144871.jpg',
    },
  ];
}
