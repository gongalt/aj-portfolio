import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-container">
      <div class="container">
        <h2 class="numbered-heading">
          <span class="number">04.</span>
          <span class="title">Some Things I've Built</span>
          <span class="line"></span>
        </h2>

        <!-- Featured Projects -->
        <div class="featured-projects">
          <div class="project-card featured" *ngFor="let project of featuredProjects; let i = index">
            <div class="project-content" [class.reverse]="i % 2 !== 0">
              <div class="project-info">
                <p class="project-overline">Featured Project</p>
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-description">
                  <p>{{ project.description }}</p>
                </div>
                <ul class="project-tech-list">
                  <li *ngFor="let tech of project.technologies">{{ tech }}</li>
                </ul>
                <div class="project-links">
                  <a [href]="project.link" target="_blank" class="external-link" title="External Link">
                    <i class="link-icon">🔗</i>
                  </a>
                </div>
              </div>
              <div class="project-image">
                <a [href]="project.link" target="_blank">
                  <div class="image-placeholder">
                    <span>{{ project.title.charAt(0) }}</span>
                  </div>
                  <div class="image-overlay"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Projects -->
        <div class="other-projects">
          <h3 class="section-title">Other Noteworthy Projects</h3>
          <div class="projects-grid">
            <div class="project-card small" *ngFor="let project of otherProjects">
              <div class="project-inner">
                <header>
                  <div class="project-top">
                    <div class="folder-icon">📁</div>
                    <div class="project-links">
                      <a [href]="project.link" target="_blank" title="External Link">
                        <i class="link-icon">🔗</i>
                      </a>
                    </div>
                  </div>
                  <h3 class="project-title">{{ project.title }}</h3>
                  <div class="project-description">
                    <p>{{ project.description }}</p>
                  </div>
                </header>
                <footer>
                  <ul class="project-tech-list">
                    <li *ngFor="let tech of project.technologies">{{ tech }}</li>
                  </ul>
                </footer>
              </div>
            </div>
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

    .projects-container {
      background: var(--navy);
      color: var(--white);
      padding: 100px 0;
      min-height: 100vh;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .numbered-heading {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--lightest-slate);
      margin-bottom: 4rem;

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

    .featured-projects {
      margin-bottom: 6rem;
    }

    .project-card.featured {
      position: relative;
      margin-bottom: 6rem;

      &:last-child {
        margin-bottom: 0;
      }

      .project-content {
        position: relative;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2rem;
        align-items: center;

        &.reverse {
          .project-info {
            grid-column: 7 / -1;
            text-align: right;
          }

          .project-image {
            grid-column: 1 / 8;
          }

          .project-tech-list {
            justify-content: flex-end;
          }

          .project-links {
            justify-content: flex-end;
          }
        }
      }

      .project-info {
        grid-column: 1 / 7;
        position: relative;
        z-index: 2;

        .project-overline {
          color: var(--green);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .project-title {
          color: var(--lightest-slate);
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

          &:hover {
            color: var(--green);
          }
        }

        .project-description {
          position: relative;
          z-index: 2;
          padding: 1.5rem;
          background: var(--light-navy);
          border-radius: 4px;
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
          margin-bottom: 1.5rem;

          p {
            color: var(--light-slate);
            margin: 0;
            line-height: 1.6;
          }
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 1.5rem 0;
          padding: 0;
          list-style: none;

          li {
            color: var(--light-slate);
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
          }
        }

        .project-links {
          display: flex;
          gap: 1rem;

          .external-link {
            color: var(--light-slate);
            transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

            &:hover {
              color: var(--green);
            }

            .link-icon {
              font-size: 1.2rem;
            }
          }
        }
      }

      .project-image {
        grid-column: 6 / -1;
        position: relative;
        z-index: 1;

        a {
          position: relative;
          display: block;
        }

        .image-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, var(--light-navy), #233554);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #233554;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

          span {
            font-size: 3rem;
            color: var(--green);
            font-weight: bold;
          }
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(100, 255, 218, 0.2);
          border-radius: 4px;
          transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        &:hover .image-overlay {
          opacity: 0;
        }
      }
    }

    .other-projects {
      .section-title {
        text-align: center;
        color: var(--lightest-slate);
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 3rem;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
      }

      .project-card.small {
        position: relative;
        transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

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
          background: var(--light-navy);
          border-radius: 4px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
          }

          header {
            flex-grow: 1;

            .project-top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 2rem;

              .folder-icon {
                font-size: 2rem;
                color: var(--green);
              }

              .project-links {
                .link-icon {
                  color: var(--light-slate);
                  font-size: 1.2rem;
                  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

                  &:hover {
                    color: var(--green);
                  }
                }
              }
            }

            .project-title {
              color: var(--lightest-slate);
              font-size: 1.3rem;
              font-weight: 600;
              margin-bottom: 1rem;
              transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

              &:hover {
                color: var(--green);
              }
            }

            .project-description {
              p {
                color: var(--light-slate);
                line-height: 1.6;
                margin: 0;
              }
            }
          }

          footer {
            .project-tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.75rem;
              padding: 0;
              margin: 0;
              list-style: none;

              li {
                color: var(--light-slate);
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }

      .projects-container {
        padding: 80px 0;
      }

      .numbered-heading {
        font-size: 1.5rem;

        .line {
          display: none;
        }
      }

      .featured-projects .project-card.featured {
        .project-content {
          display: block;

          &.reverse .project-info {
            text-align: left;
          }

          &.reverse .project-tech-list,
          &.reverse .project-links {
            justify-content: flex-start;
          }
        }

        .project-info {
          margin-bottom: 2rem;

          .project-description {
            padding: 1rem;
          }
        }
      }

      .other-projects {
        .projects-grid {
          grid-template-columns: 1fr;
        }

        .project-card.small .project-inner {
          min-height: 280px;
          padding: 1.5rem;
        }
      }
    }

    @media (max-width: 480px) {
      .featured-projects .project-card.featured {
        .project-info {
          .project-title {
            font-size: 1.5rem;
          }

          .project-description {
            padding: 1rem;
          }

          .project-tech-list {
            gap: 0.5rem;

            li {
              font-size: 0.8rem;
            }
          }
        }
      }

      .other-projects {
        .project-card.small .project-inner {
          min-height: 260px;
          padding: 1.25rem;

          header {
            .project-top {
              margin-bottom: 1.5rem;
            }

            .project-title {
              font-size: 1.2rem;
            }
          }

          footer {
            .project-tech-list {
              gap: 0.5rem;

              li {
                font-size: 0.75rem;
              }
            }
          }
        }
      }
    }
  `]
})
export class ProjectsComponent {
  featuredProjects = [
    {
      title: 'HPC Cloud Platform',
      description: 'Led frontend development for a high-performance computing cloud platform. Built scalable components using Angular and TypeScript, integrated with backend APIs, and ensured quality through comprehensive testing with Cypress. Collaborated with an agile team to deliver robust solutions.',
      technologies: ['Angular', 'TypeScript', 'Cypress', 'Vue.js', 'REST APIs'],
      link: 'https://www.malogica.com/',
      image: 'assets/malogica.png'
    },
    {
      title: 'SaaS Content Platform',
      description: 'Contributed to a comprehensive content authoring platform using modern full-stack technologies. Implemented microservices architecture with Angular, Node.js, PostgreSQL, and AWS. Worked closely with international teams to deliver scalable solutions.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
      link: 'https://docuvera.com/',
      image: 'assets/docuvera.png'
    }
  ];

  otherProjects = [
    {
      title: 'Transport Compliance App',
      description: 'Enhanced mobile app for transport compliance and electronic work diary system using Ionic and Angular with Firebase backend.',
      technologies: ['Ionic', 'Angular', 'Firebase', 'GCP'],
      link: 'https://logmaster.com.au/'
    },
    {
      title: 'Freelance Projects',
      description: 'Delivered multiple web and mobile solutions for startups focusing on scalable architecture and modern tech stacks.',
      technologies: ['MEAN Stack', 'React', 'Ionic', 'Firebase'],
      link: 'https://www.upwork.com/'
    },
    {
      title: 'Affiliate Marketing Platform',
      description: 'Led frontend development for affiliate marketing platform, implementing new features and maintaining performance.',
      technologies: ['Angular', 'TypeScript', 'PHP', 'Laravel'],
      link: 'https://www.daisycon.com/en/'
    },
    {
      title: 'Cloud Solutions',
      description: 'Developed responsive web applications and cross-platform mobile solutions for various cloud-based projects.',
      technologies: ['Angular', 'React Native', 'AWS', 'Node.js'],
      link: 'https://www.droptek.com/'
    }
  ];
}