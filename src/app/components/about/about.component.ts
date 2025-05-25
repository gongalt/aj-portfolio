import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-container">
      <div class="about-content">
        <h1>About Me</h1>
        <div class="intro">
          <p>
            Hello! I'm Adrian, a passionate Full Stack Developer based in Mandaue, Philippines.
            I enjoy creating things that live on the internet, whether that be websites, applications,
            or anything in between.
          </p>
          <p>
            My goal is to leverage my extensive experience in web and mobile development, team leadership,
            and cutting-edge technologies to create impactful software solutions and contribute to innovative projects.
          </p>
        </div>
      </div>

      <section class="experience">
        <h2>Work Experience</h2>
        <div class="timeline">
          <div class="job" *ngFor="let job of experience">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <div class="company-info">
                <span class="company">{{ job.company }}</span>
                <span class="period">{{ job.period }}</span>
                <span class="location">{{ job.location }}</span>
              </div>
            </div>
            <div class="technologies">
              <span class="tech" *ngFor="let tech of job.technologies">{{ tech }}</span>
            </div>
            <p class="description">{{ job.description }}</p>
          </div>
        </div>
      </section>

      <section class="education">
        <h2>Education</h2>
        <div class="degree">
          <h3>Bachelor's in Computer Engineering</h3>
          <p>University of San Carlos • Philippines</p>
          <span>Jun 2010 - Apr 2016</span>
          <p class="note">Working scholar while pursuing degree</p>
        </div>
      </section>

      <section class="skills-section">
        <h2>Core Technologies</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Frontend</h4>
            <ul>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Ionic</li>
            </ul>
          </div>
          <div class="skill-category">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Microservices</li>
              <li>AWS</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div class="skill-category">
            <h4>Tools & Methods</h4>
            <ul>
              <li>Cypress</li>
              <li>Agile Methodologies</li>
              <li>Team Leadership</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  `,
  styles: [`
    .about-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
      background: #0a192f;
      color: #e6f1ff;
      min-height: 100vh;
    }

    h1 {
      color: #64ffda;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      position: relative;

      &::before {
        content: "01.";
        color: #64ffda;
        font-family: 'Courier New', monospace;
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }
    }

    h2 {
      color: #ccd6f6;
      font-size: 2rem;
      margin: 3rem 0 2rem 0;
      position: relative;

      &::after {
        content: "";
        display: inline-block;
        width: 200px;
        height: 1px;
        background: #112240;
        margin-left: 1rem;
        vertical-align: middle;
      }
    }

    .intro p {
      color: #8892b0;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .job {
      margin-bottom: 3rem;
      padding: 2rem;
      background: #112240;
      border-radius: 4px;
      border: 1px solid #233554;
      transition: transform 0.25s;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .job-header {
      margin-bottom: 1rem;

      h3 {
        color: #ccd6f6;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      .company-info {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;

        .company {
          color: #64ffda;
          font-weight: 500;
        }

        .period, .location {
          color: #8892b0;
          font-size: 0.9rem;
          font-family: 'Courier New', monospace;
        }
      }
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;

      .tech {
        background: rgba(100, 255, 218, 0.1);
        color: #64ffda;
        padding: 0.25rem 0.75rem;
        border-radius: 3px;
        font-size: 0.85rem;
        font-family: 'Courier New', monospace;
        border: 1px solid rgba(100, 255, 218, 0.3);
      }
    }

    .description {
      line-height: 1.6;
      color: #8892b0;
    }

    .degree {
      background: #112240;
      padding: 2rem;
      border-radius: 4px;
      border: 1px solid #233554;

      h3 {
        color: #ccd6f6;
        margin-bottom: 0.5rem;
      }

      p {
        color: #8892b0;
        margin-bottom: 0.25rem;
      }

      span {
        color: #64ffda;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
      }

      .note {
        font-style: italic;
        margin-top: 1rem;
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .skill-category {
      background: #112240;
      padding: 1.5rem;
      border-radius: 4px;
      border: 1px solid #233554;

      h4 {
        color: #64ffda;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          color: #8892b0;
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1rem;

          &::before {
            content: "▸";
            color: #64ffda;
            position: absolute;
            left: 0;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .about-container {
        padding: 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      h2::after {
        display: none;
      }

      .job-header .company-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Malogica Solutions',
      period: '01/2023 - 03/2025',
      location: 'Remote',
      technologies: ['Angular', 'TypeScript', 'Cypress', 'Vue.js'],
      description: 'Led a frontend team of 2 developers for an HPC cloud platform, delivering high-quality components using Angular, TypeScript, Cypress, and Vue. Collaborated with an agile team (2 backend developers, 1 QA engineer, 1 solutions architect) to integrate frontend with backend APIs. Ensured quality standards through coordination with QA and alignment with project goals under the solutions architect.'
    },
    {
      title: 'Freelance Web and Mobile Developer',
      company: 'Upwork',
      period: '10/2024 - 01/2025',
      location: 'Remote',
      technologies: ['MEAN Stack', 'React', 'Ionic', 'Angular', 'Firebase', 'GCP'],
      description: 'Delivered web and mobile solutions for startups using MEAN Stack, React, Ionic, Angular, Firebase, and GCP. Managed multiple contractual projects with a focus on scalable and user-friendly software.'
    },
    {
      title: 'Mobile Developer',
      company: 'Logmaster Australia',
      period: '06/2024 - 09/2024',
      location: 'Remote',
      technologies: ['Ionic', 'Angular', 'Firebase', 'GCP'],
      description: 'Developed a mobile app using Ionic, Angular, Firebase, and GCP as a contractor. Collaborated with a team to design and implement viable software modules.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Direct Sourcing Solutions Inc.',
      period: '02/2022 - 05/2024',
      location: 'Philippines',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      description: 'Built a SaaS platform using Angular, Node.js, PostgreSQL, and AWS microservices. Focused on full-stack development and collaborated with a team to deliver robust software solutions.'
    },
    {
      title: 'Software Engineer',
      company: 'Author-it Software Company',
      period: '02/2022 - 05/2024',
      location: 'New Zealand (Offshore)',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      description: 'Contributed to a SaaS project using Angular, Node.js, PostgreSQL, and AWS microservices. Worked on full-stack development and microservices architecture in a remote team setting.'
    },
    {
      title: 'Lead Developer',
      company: 'CodingChiefs',
      period: '01/2021 - 02/2022',
      location: 'Philippines',
      technologies: ['Angular', 'Ionic', 'Frontend Frameworks'],
      description: 'Led web and mobile development projects using Angular, Ionic, and other frontend frameworks. Oversaw the delivery of high-quality software solutions for clients.'
    },
    {
      title: 'Freelance Software Developer',
      company: 'Freelance',
      period: '07/2016 - 12/2020',
      location: 'Remote',
      technologies: ['JavaScript', 'Cross-platform Development'],
      description: 'Developed web, mobile, and desktop applications using a JavaScript single-codebase approach. Delivered versatile, cross-platform solutions for diverse clients.'
    },
    {
      title: 'Mobile & Front-End Web Developer',
      company: 'Droptek',
      period: '10/2017 - 07/2019',
      location: 'Philippines',
      technologies: ['Ionic', 'Angular', 'React Native', 'React.js'],
      description: 'Built mobile and web applications using Ionic, Angular, React Native, and React.js. Focused on creating responsive and efficient frontend solutions.'
    }
  ];
}