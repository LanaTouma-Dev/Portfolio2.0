import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Reveal, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly email = 'lanatouma.c@gmail.com';
  readonly mailto =
    'mailto:lanatouma.c@gmail.com?subject=' + encodeURIComponent("Let's work together");
  readonly year = new Date().getFullYear();
}
