import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience">
      <h2>Work Experience</h2>
      <div class="timeline">
        <div class="job" *ngFor="let job of experience">
          <div class="job-header">
            <h3>{{ job.title }}</h3>
            <span class="company">{{ job.company }}</span>
            <span class="period">{{ job.period }}</span>
          </div>
          <div class="technologies">
            <span class="tech" *ngFor="let tech of job.technologies">
              {{ tech }}
            </span>
          </div>
          <p class="description">{{ job.description }}</p>
        </div>
      </div>
    </section>

    <section class="education">
      <h2>Education</h2>
      <div class="degree">
        <h3>Bachelor's degree in Computer Engineering</h3>
        <p>University of San Carlos Technological Center</p>
        <span>Jun 2010 - Apr 2016</span>
      </div>
    </section>
  `,
  styles: [`
    .experience, .education {
      padding: 2rem;
    }

    .job {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background-color: #f5f5f5;
      border-radius: 8px;
    }

    .job-header {
      margin-bottom: 1rem;
    }

    .company {
      color: #666;
      display: block;
    }

    .period {
      color: #888;
      font-size: 0.9rem;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .tech {
      background-color: #e0e0e0;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.9rem;
    }

    .description {
      line-height: 1.6;
      color: #444;
    }
  `]
})
export class AboutComponent {
  experience = [
    {
      title: 'Software Engineer',
      company: 'Author-it Software Company',
      period: 'Feb 2022 - May 2024',
      technologies: ['HTML/CSS', 'Node.js', 'Angular', 'PostgreSQL', 'AWS', 'GraphQL', 'Cucumber', 'Mocha', 'Jest', 'Storybook'],
      description: 'In my capacity as an offshore Software Engineer for a reputable New Zealand company, I play an integral role in constructing a Software as a Service (SaaS) platform. Leveraging my expertise in Angular, NodeJS, PostgreSQL, and AWS Microservices, I contribute to the project\'s robust foundation and functionality.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Direct Sourcing Solutions Inc. Philippines',
      period: 'Feb 2022 - May 2024',
      technologies: ['HTML/CSS', 'Node.js', 'Angular', 'PostgreSQL', 'AWS', 'GraphQL', 'Cucumber', 'Mocha', 'Jest', 'Storybook'],
      description: 'In my role, I contribute to the development of a Software as a Service (SaaS) project, employing a versatile tech stack including Angular, NodeJS, PostgreSQL, and AWS services. Engaging in full-stack development, I tackle various aspects of the project lifecycle.'
    },
    {
      title: 'Lead Developer',
      company: 'CodingChiefs',
      period: 'Jan 2021 - Feb 2022',
      technologies: ['HTML/CSS', 'PHP', 'Node.js', 'Angular', 'PostgreSQL', 'Laravel', 'JavaScript', 'Vue.js', 'Ionic capacitor'],
      description: 'As a versatile developer specializing in both web and mobile applications, I proficiently utilize frameworks such as Angular, Ionic, and other frontend technologies. My expertise spans across mobile development, where I leverage platforms like Ionic to craft intuitive and engaging mobile experiences.'
    },
    {
      title: 'Freelance Software Developer',
      company: 'Freelance',
      period: 'Jul 2016 - Dec 2020',
      technologies: ['HTML/CSS', 'PHP', 'Node.js', 'Angular', 'WordPress', 'PostgreSQL', 'Laravel', 'Firebase', 'Ionic', 'React'],
      description: 'In my role, I specialize in the comprehensive development of web, mobile, and desktop applications, employing a unified JavaScript codebase methodology. I excel in crafting versatile solutions that seamlessly translate across platforms.'
    },
    {
      title: 'Mobile & Front-end Web Developer',
      company: 'Droptek',
      period: 'Oct 2017 - Jul 2019',
      technologies: ['Node.js', 'Angular', 'Ionic', 'React', 'DynamoDB', 'React Native', 'AWS'],
      description: 'In my role as a Mobile Developer, I specialize in crafting cross-platform mobile applications using Ionic, Angular, and React Native frameworks. With a focus on mobile development, I leverage these technologies to create seamless and engaging user experiences across iOS and Android platforms.'
    }
  ];
}
