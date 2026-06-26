import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal.directive';

type Size = 'lg' | 'sm';
type Dir = 'up' | 'down' | 'left' | 'right';

interface Project {
  slug: string;
  name: string;
  arabic?: string;
  tagline: string;
  tags: string[];
  image?: string; // screenshot in /public
  pos?: string; // object-position, to crop browser chrome out
  gradient: string; // fallback cover behind the image
  url?: string; // live site
  size: Size;
  from: Dir; // scroll-reveal direction
  draft?: boolean; // renders as a "coming soon" placeholder tile
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Reveal, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      slug: 'artisan',
      name: 'Artisan',
      arabic: 'أرتيزان',
      tagline:
        'A marketplace where Syrian artisans showcase and sell their handmade craft — every piece tells a story.',
      tags: ['Full Stack', 'E-Commerce', 'Arabic · RTL'],
      image: 'artisan1.png',
      pos: '50% 42%',
      gradient: 'linear-gradient(150deg, #b85c38, #e3b183)',
      url: 'https://artisan.taqtech-agency.tech',
      size: 'lg',
      from: 'left',
    },
    {
      slug: 'pay-it-forward',
      name: 'Pay It Forward',
      tagline: 'Activate mobile bundles in Syria from anywhere in the world, in seconds.',
      tags: ['Full Stack', 'Fintech', 'i18n'],
      image: 'payitforward1.jpg',
      pos: '50% 62%',
      gradient: 'linear-gradient(150deg, #6c5ce7, #b3a4f5)',
      size: 'lg',
      from: 'right',
    },
    {
      slug: 'coming-1',
      name: '',
      tagline: '',
      tags: [],
      gradient: '',
      size: 'sm',
      from: 'up',
      draft: true,
    },
    {
      slug: 'coming-2',
      name: '',
      tagline: '',
      tags: [],
      gradient: '',
      size: 'sm',
      from: 'down',
      draft: true,
    },
  ];
}
