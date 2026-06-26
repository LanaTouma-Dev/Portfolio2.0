import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal.directive';

/** colored brand logos pulled from the devicon CDN */
const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const ICON = {
  angular: `${DEV}/angular/angular-original.svg`,
  react: `${DEV}/react/react-original.svg`,
  typescript: `${DEV}/typescript/typescript-original.svg`,
  dotnet: `${DEV}/dotnetcore/dotnetcore-original.svg`,
  django: `${DEV}/django/django-plain.svg`,
  node: `${DEV}/nodejs/nodejs-original.svg`,
  python: `${DEV}/python/python-original.svg`,
  postgres: `${DEV}/postgresql/postgresql-original.svg`,
  redis: `${DEV}/redis/redis-original.svg`,
  docker: `${DEV}/docker/docker-original.svg`,
  git: `${DEV}/git/git-original.svg`,
  azure: `${DEV}/azure/azure-original.svg`,
};

interface Tech {
  name: string;
  icon: string;
}

interface Work {
  name: string;
  tag: string;
  slug: string; // for /projects/:slug later
}

/* placeholder photos — swap for your real work shots in /public/work later */
const PEXELS = {
  featured:
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery:
    'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=900',
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Reveal, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  /** the daily drivers — the floating "Most Used" pill */
  readonly mostUsed: Tech[] = [
    { name: 'Angular', icon: ICON.angular },
    { name: '.NET', icon: ICON.dotnet },
    { name: 'PostgreSQL', icon: ICON.postgres },
    { name: 'Python', icon: ICON.python },
  ];

  /** the full stack — the Tech Stack tile's logo grid */
  readonly techGrid: Tech[] = [
    { name: 'Angular', icon: ICON.angular },
    { name: 'React', icon: ICON.react },
    { name: 'TypeScript', icon: ICON.typescript },
    { name: '.NET', icon: ICON.dotnet },
    { name: 'Django', icon: ICON.django },
    { name: 'Node.js', icon: ICON.node },
    { name: 'Python', icon: ICON.python },
    { name: 'PostgreSQL', icon: ICON.postgres },
    { name: 'Redis', icon: ICON.redis },
    { name: 'Docker', icon: ICON.docker },
    { name: 'Git', icon: ICON.git },
    { name: 'Azure', icon: ICON.azure },
  ];

  /** the spotlight project — the "Featured" photo card */
  readonly featured: Work & { image: string } = {
    name: 'Project Atlas',
    tag: 'System Design',
    slug: 'atlas',
    image: PEXELS.featured,
  };

  /** the tall "Gallery" photo card teaser */
  readonly galleryImage = PEXELS.gallery;
  readonly gallery: Work[] = [
    { name: 'Lumen AI', tag: 'LLM · RAG', slug: 'lumen' },
    { name: 'DevFlow', tag: 'Full Stack', slug: 'devflow' },
  ];

  /** the "Currently Learning" pill */
  readonly learning = {
    name: 'Agentic AI',
    note: 'LangGraph · multi-agent systems',
  };

  get totalCount(): number {
    return this.techGrid.length;
  }
}
