import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-container">
      <div class="container">
        <h2 class="numbered-heading">
          <span class="number">05.</span>
          <span class="title">Where I've Worked</span>
          <span class="line"></span>
        </h2>

        <div class="experience-content">
          <div class="experience-tabs">
            <button
              *ngFor="let job of experience; let i = index"
              class="tab-button"
              [class.active]="activeTab === i"
              (click)="setActiveTab(i)">
              {{ job.company }}
            </button>
          </div>

          <div class="experience-details">
            <div class="job-details" *ngIf="experience[activeTab]">
              <h3 class="job-title">
                {{ experience[activeTab].title }}
                <span class="company">&#64; {{ experience[activeTab].company }}</span>
              </h3>
              <p class="job-period">{{ experience[activeTab].period }}</p>
              <ul class="job-responsibilities">
                <li *ngFor="let responsibility of experience[activeTab].responsibilities">
                  <span class="bullet">▹</span>{{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="skills-section">
          <h3 class="skills-title">Core Technologies & Skills</h3>
          <div class="skills-categories">
            <div class="skill-category" *ngFor="let category of skillCategories">
              <h4>{{ category.title }}</h4>
              <ul>
                <li *ngFor="let skill of category.skills">
                  <span class="bullet">▹</span>{{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="education-section">
          <h3 class="education-title">Education</h3>
          <div class="education-item">
            <h4>Bachelor's in Computer Engineering</h4>
            <p class="institution">University of San Carlos • Philippines</p>
            <p class="education-period">06/2010 - 04/2016</p>
            <p class="education-note">Working scholar while pursuing degree</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      --navy: #0a192f;
      --light-navy: #112240;
      --green: #64ffda;
      --slate: #8892b0;
      --light-slate: #a8b2d1;
      --lightest-slate: #ccd6f6;
      --white: #e6f1ff;
    }

    .experience-container {
      background: var(--navy);
      color: var(--white);
      padding: 100px 0;
      min-height: 100vh;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .numbered-heading {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--lightest-slate);
      margin-bottom: 3rem;

      .number {
        color: var(--green);
        font-family: 'Courier New', monospace;
        font-size: 1.25rem;
        margin-right: 0.5rem;
      }

      .title {
        white-space: nowrap;
      }

      .line {
        flex-grow: 1;
        height: 1px;
        background: #303c55;
        margin-left: 1rem;
      }
    }

    .experience-content {
      display: flex;
      gap: 2rem;
      margin-bottom: 6rem;
    }

    .experience-tabs {
      display: flex;
      flex-direction: column;
      min-width: 200px;

      .tab-button {
        width: 100%;
        text-align: left;
        padding: 0.75rem 1.25rem;
        font-size: 0.9rem;
        font-family: 'Courier New', monospace;
        background: transparent;
        border: none;
        border-left: 2px solid #233554;
        color: var(--slate);
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          background: rgba(100, 255, 218, 0.1);
          color: var(--green);
        }

        &.active {
          border-left-color: var(--green);
          background: rgba(100, 255, 218, 0.1);
          color: var(--green);
        }
      }
    }

    .experience-details {
      flex: 1;
      min-height: 400px;

      .job-details {
        .job-title {
          color: var(--lightest-slate);
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 0.5rem;

          .company {
            color: var(--green);
          }
        }

        .job-period {
          color: var(--slate);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .job-responsibilities {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            color: var(--slate);
            line-height: 1.6;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: flex-start;

            .bullet {
              color: var(--green);
              margin-right: 1rem;
              margin-top: 0.5rem;
              min-width: 1rem;
            }
          }
        }
      }
    }

    .skills-section {
      margin-bottom: 4rem;

      .skills-title {
        color: var(--lightest-slate);
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 50px;
          height: 2px;
          background: var(--green);
        }
      }

      .skills-categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;

        .skill-category {
          background: var(--light-navy);
          padding: 1.5rem;
          border-radius: 4px;
          border: 1px solid #233554;

          h4 {
            color: var(--green);
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
              color: var(--slate);
              line-height: 1.4;
              margin-bottom: 0.5rem;
              display: flex;
              align-items: center;

              .bullet {
                color: var(--green);
                margin-right: 0.75rem;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }

    .education-section {
      .education-title {
        color: var(--lightest-slate);
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 50px;
          height: 2px;
          background: var(--green);
        }
      }

      .education-item {
        background: var(--light-navy);
        padding: 2rem;
        border-radius: 4px;
        border: 1px solid #233554;

        h4 {
          color: var(--lightest-slate);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .institution {
          color: var(--slate);
          margin-bottom: 0.5rem;
        }

        .education-period {
          color: var(--green);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .education-note {
          color: var(--slate);
          font-style: italic;
          font-size: 0.9rem;
        }
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }

      .experience-container {
        padding: 80px 0;
      }

      .numbered-heading {
        font-size: 1.5rem;

        .line {
          display: none;
        }
      }

      .experience-content {
        flex-direction: column;
        gap: 1.5rem;
      }

      .experience-tabs {
        flex-direction: row;
        min-width: auto;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }

        .tab-button {
          min-width: 140px;
          border-left: none;
          border-bottom: 2px solid #233554;
          text-align: center;

          &:hover {
            background: rgba(100, 255, 218, 0.1);
          }

          &.active {
            border-left: none;
            border-bottom-color: var(--green);
          }
        }
      }

      .experience-details {
        min-height: auto;
      }

      .skills-section {
        .skills-categories {
          grid-template-columns: 1fr;
        }
      }
    }

    @media (max-width: 480px) {
      .experience-tabs {
        .tab-button {
          min-width: 120px;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }
      }

      .skills-section {
        .skill-category {
          padding: 1rem;

          h4 {
            font-size: 1rem;
          }
        }
      }

      .education-section {
        .education-item {
          padding: 1.5rem;

          h4 {
            font-size: 1.1rem;
          }
        }
      }
    }
  `]
})
export class AboutComponent {
  activeTab = 0;

  experience = [
    {
      title: 'Senior Software Developer',
      company: 'Bermwood Technologies',
      period: '07/2025 - 11/2025',
      responsibilities: [
        'Developed real estate platform using Next.js, MUI, and Google Maps API for property search and visualization.',
        'Implemented responsive design patterns and modern frontend architecture best practices.',
        'Integrated with backend APIs and third-party services for seamless data flow.',
        'Collaborated with cross-functional teams to deliver high-quality features on tight deadlines.'
      ]
    },
    {
      title: 'Independent Contractor',
      company: 'Flowroom Platform',
      period: '04/2025 - 07/2025',
      responsibilities: [
        'Built RAG (Retrieval-Augmented Generation) applications using OpenAI and Replicate APIs.',
        'Developed AI-powered features for content generation and knowledge retrieval.',
        'Implemented scalable backend services with Node.js and integrated with various AI models.',
        'Delivered innovative solutions for complex business requirements using cutting-edge AI technologies.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Malogica Solutions',
      period: '01/2023 - 03/2025',
      responsibilities: [
        'Led a frontend team of 2 developers for an HPC cloud platform, delivering high-quality components using Angular, TypeScript, Cypress, and Vue.',
        'Collaborated with an agile team (2 backend developers, 1 QA engineer, 1 solutions architect) to integrate frontend with backend APIs.',
        'Ensured quality standards through coordination with QA and alignment with project goals under the solutions architect.',
        'Implemented responsive design patterns and modern frontend architecture best practices.'
      ]
    },
    {
      title: 'Freelance Web and Mobile Developer',
      company: 'Upwork',
      period: '10/2024 - 01/2025',
      responsibilities: [
        'Delivered web and mobile solutions for multiple clients using modern tech stacks.',
        'Specialized in full-stack development with Angular, React, Node.js, and Firebase.',
        'Managed client communications, project timelines, and deliverables independently.',
        'Maintained high client satisfaction ratings through quality code and timely delivery.'
      ]
    },
    {
      title: 'Mobile Developer',
      company: 'Logmaster Australia',
      period: '06/2024 - 09/2024',
      responsibilities: [
        'Enhanced mobile app for transport compliance and electronic work diary system.',
        'Developed features using Ionic and Angular with Firebase backend.',
        'Implemented real-time data synchronization and offline functionality.',
        'Collaborated with stakeholders to ensure compliance with Australian transport regulations.'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Direct Sourcing Solutions',
      period: '02/2022 - 05/2024',
      responsibilities: [
        'Built a comprehensive SaaS platform using Angular, Node.js, PostgreSQL, and AWS microservices architecture.',
        'Focused on full-stack development and collaborated with international teams to deliver robust software solutions.',
        'Implemented scalable microservices patterns and maintained high code quality standards.',
        'Contributed to system architecture decisions and mentored junior developers.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Author-it Software',
      period: '02/2022 - 05/2024',
      responsibilities: [
        'Contributed to content authoring platform development using modern full-stack technologies.',
        'Worked with Angular, Node.js, and .NET for comprehensive feature implementation.',
        'Collaborated with product team to translate requirements into technical solutions.',
        'Maintained and enhanced existing codebase while ensuring backward compatibility.'
      ]
    },
    {
      title: 'Lead Developer',
      company: 'CodingChiefs',
      period: '01/2021 - 02/2022',
      responsibilities: [
        'Led web and mobile development projects using Angular, Ionic, and other modern frontend frameworks.',
        'Oversaw the delivery of high-quality software solutions for diverse clients across multiple industries.',
        'Managed project timelines, client communications, and team coordination.',
        'Established development workflows and best practices for the development team.'
      ]
    },
    {
      title: 'Freelance Software Developer',
      company: 'Freelance',
      period: '07/2016 - 12/2020',
      responsibilities: [
        'Delivered custom web and mobile solutions for startups and small businesses.',
        'Specialized in MEAN stack, Ionic, and Firebase for rapid application development.',
        'Built e-commerce platforms, content management systems, and mobile applications.',
        'Managed all aspects of projects from requirements gathering to deployment and maintenance.'
      ]
    },
    {
      title: 'Mobile & Frontend Developer',
      company: 'Droptek',
      period: '10/2017 - 07/2019',
      responsibilities: [
        'Built mobile and web applications using Ionic, Angular, React Native, and React.js.',
        'Focused on creating responsive and efficient frontend solutions with optimal user experience.',
        'Collaborated with design teams to implement pixel-perfect UI components.',
        'Maintained and optimized existing applications for performance and scalability.'
      ]
    }
  ];

  skillCategories = [
    {
      title: 'Frontend',
      skills: ['Next.js', 'Angular', 'TypeScript', 'React', 'Vue.js', 'MUI', 'Ionic', 'HTML5/CSS3', 'SCSS/SASS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase', '.NET', 'REST APIs', 'GraphQL']
    },
    {
      title: 'AI & Integration',
      skills: ['RAG Applications', 'OpenAI', 'Replicate', 'Google Maps API', 'AI/ML Integration']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Firebase', 'GCP', 'Docker', 'CI/CD', 'Microservices', 'Git']
    },
    {
      title: 'Testing & Tools',
      skills: ['Cypress', 'Jest', 'Angular Testing', 'Agile Methodologies', 'Scrum', 'Kanban']
    }
  ];

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}