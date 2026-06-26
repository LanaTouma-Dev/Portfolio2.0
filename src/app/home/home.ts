import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Skills, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-contact />
  `,
})
export class Home {}
