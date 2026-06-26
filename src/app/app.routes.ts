import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { ProjectDetail } from './project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'projects/:slug', component: ProjectDetail },
  { path: '**', redirectTo: '' },
];
