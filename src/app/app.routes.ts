import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'projects',
    loadComponent: () => 
      import('./components/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'ai-projects',
    loadComponent: () => 
      import('./components/ai-projects/ai-projects.component').then(m => m.AiProjectsComponent)
  },
  {
    path: 'about',
    loadComponent: () => 
      import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => 
      import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
