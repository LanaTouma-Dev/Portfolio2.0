import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal.directive';
import { PROJECTS, ProjectData } from '../shared/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Reveal, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: ProjectData[] = PROJECTS;
}
