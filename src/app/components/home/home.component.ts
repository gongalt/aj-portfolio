import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Senior Full Stack Developer';
  summary = `A passionate Full Stack Developer seeking to leverage extensive experience in web and mobile development, team leadership, and cutting-edge technologies to create impactful software solutions and contribute to innovative projects.`;

  resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2FAdrian%20Resume%202025%20latest.pdf?alt=media&token=e2eb54f1-84e7-4350-9547-7db33264690a';

  contact = {
    email: 'jensonadrian@gmail.com',
    location: 'Mandaue, Philippines',
    github: 'github.com/gongalt',
    linkedin: 'linkedin.com/in/adrianjenson'
  };

  skills = [
    { name: 'Angular', years: 8, level: 95, projects: 15 },
    { name: 'TypeScript', years: 8, level: 95, projects: 15 },
    { name: 'Node.js', years: 6, level: 90, projects: 12 },
    { name: 'Firebase', years: 6, level: 85, projects: 10 },
    { name: 'AWS', years: 4, level: 80, projects: 8 },
    { name: 'Vue.js', years: 3, level: 75, projects: 6 },
    { name: 'React', years: 4, level: 80, projects: 8 },
    { name: 'Ionic', years: 6, level: 85, projects: 10 },
    { name: 'PostgreSQL', years: 5, level: 80, projects: 8 },
    { name: 'Cypress', years: 3, level: 75, projects: 6 }
  ];

  keyStrengths = [
    'Team Leadership',
    'Agile Methodologies',
    'Critical Thinking',
    'Time Management',
    'Goal-Oriented',
    'Microservices Architecture'
  ];

  testimonials = [
    {
      name: 'Solutions Architect at Malogica',
      quote: 'Adrian led our frontend team with exceptional skill, delivering high-quality components using Angular and TypeScript while ensuring seamless API integration.',
      project: 'HPC Cloud Platform'
    },
    {
      name: 'Mobile Developer at Logmaster',
      quote: 'His expertise in Ionic and mobile development significantly improved our transport compliance app performance and user experience.',
      project: 'Electronic Work Diary System'
    },
    {
      name: 'Software Engineer at Author-it',
      quote: 'Adrian consistently delivered robust full-stack solutions using Angular, Node.js, and AWS microservices, contributing significantly to our SaaS platform.',
      project: 'Docuvera Content Platform'
    }
  ];

  githubStats = {
    repos: 25,
    contributions: 500,
    stars: 15,
    followers: 8
  };

  downloadResume() {
    window.open(this.resumeUrl, '_blank');
  }
}