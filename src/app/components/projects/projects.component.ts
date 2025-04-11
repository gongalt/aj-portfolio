import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      company: 'Upwork',
      role: 'Freelance Web and Mobile Developer',
      period: '10/2024 - 01/2025',
      description: 'Delivered web and mobile solutions for startups using MEAN Stack, React, Ionic, Angular, Firebase, and GCP. Managed multiple contractual projects with a focus on scalable and user-friendly software.',
      technologies: ['MEAN Stack', 'React', 'Ionic', 'Angular', 'Firebase', 'GCP'],
      link: 'https://www.upwork.com/',
      image: 'assets/upwork.png'
    },
    {
      company: 'Malogica Solutions',
      role: 'Senior Frontend Developer',
      period: '01/2023 - 03/2025',
      description: 'Led a frontend team of 2 developers for an HPC cloud platform, delivering high-quality components using Angular, TypeScript, Cypress, and Vue. Collaborated with an agile team (2 backend developers, 1 QA engineer, 1 solutions architect) to integrate frontend with backend APIs. Ensured quality standards through coordination with QA and alignment with project goals under the solutions architect.',
      technologies: ['Angular', 'TypeScript', 'Cypress', 'Vue.js'],
      link: 'https://www.malogica.com/',
      image: 'assets/malogica.png'
    },
    {
      company: 'Logmaster',
      role: 'Mobile Developer',
      period: 'Jun 2024 - Sep 2024',
      description: 'Helped build new features and improvements to their mobile app for transport compliance and electronic work diary system.',
      technologies: ['Ionic', 'Angular', 'Firebase'],
      link: 'https://logmaster.com.au/',
      image: 'assets/logmaster.png'
    },
    {
      company: 'Docuvera',
      role: 'Software Engineer',
      period: 'Feb 2022 - May 2024',
      description: 'Worked as a software engineer for Author-it Solutions Company with their content authoring platform Docuvera. Collaborated with cross-functional teams to develop and maintain the platform.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'DynamoDB', 'AWS Microservices'],
      link: 'https://docuvera.com/',
      image: 'assets/docuvera.png'
    },
    {
      company: 'Daisycon',
      role: 'Lead Frontend Engineer',
      period: 'Jan 2021 - Feb 2022',
      description: 'Led frontend development in one of the squads for this affiliate marketing platform in Netherlands. Responsible for implementing new features and maintaining the platform.',
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'PHP', 'Laravel'],
      link: 'https://www.daisycon.com/en/',
      image: 'assets/daisycon.png'
    },
    {
      company: 'Droptek',
      role: 'Frontend & Mobile Developer',
      period: 'Oct 2017 - Jul 2019',
      description: 'Worked as a frontend and mobile developer for this Argentina-based software company. Contributed to various projects involving cloud solutions and digital transformation. Specialized in developing responsive web applications and cross-platform mobile solutions.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'AWS Microservices', 'React', 'React Native', 'Ionic'],
      link: 'https://www.droptek.com/',
      image: 'assets/droptek.png'
    }
  ];
}
