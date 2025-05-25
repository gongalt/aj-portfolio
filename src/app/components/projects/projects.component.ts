import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-container">
      <h1>Some Things I've Built</h1>

      <div class="featured-projects">
        <div class="project-card featured" *ngFor="let project of featuredProjects; let i = index">
          <div class="project-content" [class.reverse]="i % 2 !== 0">
            <div class="project-info">
              <p class="project-overline">Featured Project</p>
              <h3 class="project-title">{{ project.company }}</h3>
              <div class="project-description">
                <p>{{ project.description }}</p>
              </div>
              <div class="project-tech-list">
                <span *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a [href]="project.link" target="_blank" class="external-link">
                  Visit Site
                </a>
              </div>
            </div>
            <div class="project-image">
              <div class="project-placeholder">
                <span>{{ project.company.charAt(0) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="other-projects">
        <h2>Other Noteworthy Projects</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of otherProjects">
            <div class="project-inner">
              <header>
                <div class="project-top">
                  <span class="folder-icon">📁</span>
                  <div class="project-links">
                    <a [href]="project.link" target="_blank">🔗</a>
                  </div>
                </div>
                <h3 class="project-title">{{ project.company }}</h3>
                <div class="project-description">
                  <p>{{ project.description }}</p>
                </div>
              </header>
              <footer>
                <div class="project-tech-list">
                  <span *ngFor="let tech of project.technologies.slice(0, 4)">{{ tech }}</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 4rem 2rem;
      background: #0a192f;
      color: #e6f1ff;
      min-height: 100vh;
    }

    h1 {
      color: #ccd6f6;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      position: relative;

      &::before {
        content: "02.";
        color: #64ffda;
        font-family: 'Courier New', monospace;
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }

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

    .featured-projects {
      margin-bottom: 6rem;

      .project-card.featured {
        position: relative;
        margin-bottom: 6rem;

        .project-content {
          position: relative;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1rem;
          align-items: center;

          &.reverse {
            .project-info { grid-column: 7 / -1; text-align: right; }
            .project-image { grid-column: 1 / 8; }
            .project-tech-list { justify-content: flex-end; }
            .project-links { justify-content: flex-end; }
          }

          .project-info {
            grid-column: 1 / 7;
            position: relative;
            z-index: 2;

            .project-overline {
              color: #64ffda;
              font-family: 'Courier New', monospace;
              font-size: 0.9rem;
              margin-bottom: 0.5rem;
            }

            .project-title {
              color: #ccd6f6;
              font-size: 1.8rem;
              margin-bottom: 1rem;
            }

            .project-description {
              position: relative;
              z-index: 2;
              padding: 1.5rem;
              background: #112240;
              border-radius: 4px;
              box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
              margin-bottom: 1rem;

              p {
                color: #8892b0;
                line-height: 1.6;
                margin: 0;
              }
            }

            .project-tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              margin-bottom: 1rem;
              list-style: none;

              span {
                color: #8892b0;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
              }
            }

            .project-links {
              display: flex;
              gap: 1rem;

              a {
                color: #ccd6f6;
                text-decoration: none;
                padding: 0.5rem 1rem;
                border: 1px solid #64ffda;
                border-radius: 4px;
                font-size: 0.9rem;
                transition: all 0.25s;

                &:hover {
                  background: rgba(100, 255, 218, 0.1);
                  color: #64ffda;
                }
              }
            }
          }

          .project-image {
            grid-column: 6 / -1;
            position: relative;
            z-index: 1;

            .project-placeholder {
              width: 100%;
              height: 300px;
              background: linear-gradient(135deg, #112240, #233554);
              border-radius: 4px;
              display: none;
              align-items: center;
              justify-content: center;
              border: 1px solid #233554;

              span {
                font-size: 4rem;
                color: #64ffda;
                font-weight: bold;
              }
            }
          }
        }
      }
    }

    .other-projects {
      h2 {
        color: #ccd6f6;
        text-align: center;
        margin-bottom: 3rem;
        font-size: 2rem;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        align-items: start;
        justify-content: center;
        max-width: 1200px;
        margin: 0 auto;
      }

      .project-card {
        position: relative;
        height: auto;
        min-height: 320px;
        transition: transform 0.25s;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;

        &:hover {
          transform: translateY(-7px);
        }

        .project-inner {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 320px;
          padding: 2rem 1.75rem;
          background: #112240;
          border-radius: 4px;
          border: 1px solid #233554;
          transition: all 0.25s;
          box-sizing: border-box;

          &:hover {
            border-color: #64ffda;
          }

          header {
            flex-grow: 1;
            
            .project-top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1.5rem;

              .folder-icon {
                font-size: 2rem;
              }

              .project-links a {
                color: #ccd6f6;
                text-decoration: none;
                font-size: 1.2rem;
                transition: color 0.25s;

                &:hover {
                  color: #64ffda;
                }
              }
            }

            .project-title {
              color: #ccd6f6;
              font-size: 1.3rem;
              margin-bottom: 1rem;
              line-height: 1.3;
            }

            .project-description {
              margin-bottom: 1.5rem;
              
              p {
                color: #8892b0;
                line-height: 1.6;
                margin: 0;
                font-size: 0.95rem;
              }
            }
          }

          footer {
            margin-top: auto;
            
            .project-tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.75rem;

              span {
                color: #8892b0;
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .projects-container {
        padding: 2rem 1rem;
      }

      h1::after {
        display: none;
      }

      .featured-projects .project-card.featured .project-content {
        display: block;

        .project-info {
          text-align: left !important;
        }

        .project-image {
          margin-top: 2rem;
        }

        &.reverse .project-info {
          text-align: left !important;
        }

        &.reverse .project-tech-list,
        &.reverse .project-links {
          justify-content: flex-start !important;
        }
      }

      .other-projects {
        .projects-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 100%;
        }

        .project-card {
          max-width: 100%;
          min-height: 280px;

          .project-inner {
            min-height: 280px;
            padding: 1.5rem;

            header {
              .project-top {
                margin-bottom: 1rem;
              }

              .project-title {
                font-size: 1.2rem;
              }

              .project-description {
                margin-bottom: 1rem;

                p {
                  font-size: 0.9rem;
                }
              }
            }

            footer {
              .project-tech-list {
                gap: 0.5rem;

                span {
                  font-size: 0.75rem;
                }
              }
            }
          }
        }
      }
    }

    @media (max-width: 480px) {
      .projects-container {
        padding: 1.5rem 0.75rem;
      }

      .other-projects {
        .projects-grid {
          gap: 1rem;
        }

        .project-card {
          min-height: 260px;

          .project-inner {
            min-height: 260px;
            padding: 1.25rem;
          }
        }
      }
    }
  `]
})
export class ProjectsComponent {
  featuredProjects = [
    {
      company: 'Malogica Solutions HPC Platform',
      role: 'Senior Frontend Developer',
      period: '01/2023 - 03/2025',
      description: 'Led frontend development for a high-performance computing cloud platform. Built scalable components using Angular and TypeScript, integrated with backend APIs, and ensured quality through comprehensive testing with Cypress.',
      technologies: ['Angular', 'TypeScript', 'Cypress', 'REST APIs'],
      link: 'https://www.malogica.com/',
      image: 'assets/malogica.png'
    },
    {
      company: 'Docuvera Content Platform',
      role: 'Software Engineer',
      period: '02/2022 - 05/2024',
      description: 'Contributed to a comprehensive SaaS content authoring platform using modern full-stack technologies. Implemented microservices architecture and worked closely with international teams.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
      link: 'https://docuvera.com/',
      image: 'assets/docuvera.png'
    }
  ];

  otherProjects = [
    {
      company: 'Logmaster Mobile App',
      role: 'Mobile Developer',
      period: 'Jun 2024 - Sep 2024',
      description: 'Enhanced mobile app for transport compliance and electronic work diary system using Ionic and Angular.',
      technologies: ['Ionic', 'Angular', 'Firebase', 'GCP'],
      link: 'https://logmaster.com.au/',
      image: 'assets/logmaster.png'
    },
    {
      company: 'Upwork Projects',
      role: 'Freelance Developer',
      period: '10/2024 - 01/2025',
      description: 'Delivered multiple web and mobile solutions for startups focusing on scalable architecture.',
      technologies: ['MEAN Stack', 'React', 'Ionic', 'Firebase'],
      link: 'https://www.upwork.com/',
      image: 'assets/upwork.png'
    },
    {
      company: 'Daisycon Platform',
      role: 'Lead Frontend Engineer',
      period: '01/2021 - 02/2022',
      description: 'Led frontend development for affiliate marketing platform, implementing new features and maintaining performance.',
      technologies: ['Angular', 'TypeScript', 'PHP', 'Laravel'],
      link: 'https://www.daisycon.com/en/',
      image: 'assets/daisycon.png'
    },
    {
      company: 'Droptek Solutions',
      role: 'Frontend & Mobile Developer',
      period: '10/2017 - 07/2019',
      description: 'Developed responsive web applications and cross-platform mobile solutions for various cloud-based projects.',
      technologies: ['Angular', 'React Native', 'AWS', 'Node.js'],
      link: 'https://www.droptek.com/',
      image: 'assets/droptek.png'
    }
  ];
}