import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PROJECTS, ProjectData } from '../shared/projects.data';
import { Reveal } from '../shared/reveal.directive';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, Reveal],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  project: ProjectData | undefined;
  slides: string[] = [];
  currentSlide = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = PROJECTS.find(p => p.slug === slug && !p.draft);
    if (!this.project) {
      this.router.navigate(['/projects']);
      return;
    }
    this.slides = this.project.images?.length
      ? this.project.images
      : this.project.image
        ? [this.project.image]
        : [];
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goTo(i: number) {
    this.currentSlide = i;
  }
}
