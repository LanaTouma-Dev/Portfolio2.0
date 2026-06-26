import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  // { path: 'projects/:slug', component: ProjectDetail }, // case-study pages — later
  { path: '**', redirectTo: '' },
];
