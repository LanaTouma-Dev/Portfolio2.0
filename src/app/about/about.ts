import { Component } from '@angular/core';
import { Reveal } from '../shared/reveal.directive';

interface Milestone {
  year: string;
  title: string;
  org?: string;
  note?: string;
  current?: boolean; // gets the mint accent
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly timeline: Milestone[] = [
    {
      year: '2022',
      title: 'BSc in Artificial Intelligence',
      note: 'Graduated — where the obsession with intelligent systems started.',
    },
    {
      year: '2022 — 2023',
      title: 'Freelance Full Stack Developer',
      note: 'Shipped products end-to-end for clients, solo.',
    },
    {
      year: '2023 — Now',
      title: 'Full Stack Developer',
      org: 'Syriatel',
      note: 'Built real-time, large-scale systems, picking up side projects along the way.',
      current: true,
    },
    // {
    //   year: '2026 · Now',
    //   title: 'Focusing on System Design',
    //   note: 'Open to new opportunities. Still experimenting with UI/UX and training AI into systems.',
    //   current: true,
    // },
  ];
}
