import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GitHubService, GitHubStats } from '../../services/github.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-content">
        <p class="intro-text">Hi, my name is</p>
        <h1>Adrian Jenson.</h1>
        <h2 class="subtitle">I build things for the web & AI.</h2>
        <p class="summary">
          A passionate Full Stack Developer seeking to leverage extensive experience in web and mobile development, team leadership, and cutting-edge technologies to create impactful software solutions and contribute to innovative projects.
        </p>
        <div class="hero-cta">
          <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
          <button (click)="downloadResume()" class="btn btn-secondary">Download Resume</button>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="about-preview" id="about">
      <div class="container">
        <h2 class="numbered-heading">
          <span class="number">01.</span>
          <span class="title">About Me</span>
          <span class="line"></span>
        </h2>
        <div class="about-grid">
          <div class="about-text">
            <p>
              Hello! I'm Adrian, a software engineer based in Mandaue, Philippines. I develop exceptional websites
              and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
            </p>
            <p>
              My journey in software development spans over 9 years, during which I've worked with diverse teams
              and technologies to deliver robust solutions for clients ranging from startups to established enterprises.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul class="tech-list">
              <li><span>▹</span>Next.js</li>
              <li><span>▹</span>Angular</li>
              <li><span>▹</span>TypeScript</li>
              <li><span>▹</span>Node.js</li>
              <li><span>▹</span>MUI</li>
              <li><span>▹</span>Google Maps API</li>
              <li><span>▹</span>RAG Applications</li>
              <li><span>▹</span>OpenAI/Replicate</li>
            </ul>
          </div>
          <div class="about-image">
            <div class="image-wrapper">
              <img src="https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2Fpictureist.jpg?alt=media&token=b7e77db7-ee87-4135-9424-e6112e385d67"
                   alt="Adrian Jenson" class="profile-pic">
              <div class="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Overview -->
    <section class="skills-overview">
      <div class="container">
        <h2 class="numbered-heading">
          <span class="number">02.</span>
          <span class="title">Core Technologies</span>
          <span class="line"></span>
        </h2>
        <div class="skills-grid">
          <div class="skill-card" *ngFor="let skill of topSkills">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-years">{{ skill.years }}+ years</span>
            </div>
            <div class="skill-progress">
              <div class="progress-bar" [style.width.%]="skill.level"></div>
            </div>
            <div class="skill-projects">{{ skill.projects }}+ projects</div>
          </div>
        </div>
      </div>
    </section>

    <!-- GitHub Stats -->
    <section class="github-stats">
      <div class="container">
        <h2 class="numbered-heading">
          <span class="number">03.</span>
          <span class="title">GitHub Activity</span>
          <span class="line"></span>
        </h2>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-value" [class.loading]="isLoadingGitHubStats">
              {{ isLoadingGitHubStats ? '...' : githubStats.repos }}
            </span>
            <span class="stat-label">Repositories</span>
          </div>
          <div class="stat-card">
            <span class="stat-value" [class.loading]="isLoadingGitHubStats">
              {{ isLoadingGitHubStats ? '...' : githubStats.contributions }}
            </span>
            <span class="stat-label">Contributions</span>
          </div>
          <div class="stat-card">
            <span class="stat-value" [class.loading]="isLoadingGitHubStats">
              {{ isLoadingGitHubStats ? '...' : githubStats.stars }}
            </span>
            <span class="stat-label">Stars</span>
          </div>
          <div class="stat-card">
            <span class="stat-value" [class.loading]="isLoadingGitHubStats">
              {{ isLoadingGitHubStats ? '...' : githubStats.followers }}
            </span>
            <span class="stat-label">Followers</span>
          </div>
        </div>
        <div class="github-link">
          <a href="https://github.com/gongalt" target="_blank" class="btn btn-primary">
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>

    <!-- Get In Touch Section -->
    <section class="contact-section">
      <div class="container">
        <p class="contact-overline">04. What's Next?</p>
        <h2 class="contact-title">Get In Touch</h2>
        <p class="contact-description">
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:jensonadrian@gmail.com" class="btn btn-primary contact-btn">
          Say Hello
        </a>
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

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      background: var(--navy);
      color: var(--white);
    }

    .hero-content {
      max-width: 1000px;
      width: 100%;

      .intro-text {
        color: var(--green);
        font-family: 'Courier New', monospace;
        font-size: 1rem;
        margin-bottom: 1rem;
      }

      h1 {
        font-size: clamp(40px, 8vw, 80px);
        font-weight: 600;
        color: var(--lightest-slate);
        margin-bottom: 1rem;
        line-height: 1.1;
      }

      .subtitle {
        font-size: clamp(40px, 8vw, 80px);
        font-weight: 600;
        color: var(--slate);
        margin-bottom: 2rem;
        line-height: 1.1;
      }

      .summary {
        max-width: 540px;
        color: var(--slate);
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 3rem;
      }

      .hero-cta {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }

    .btn {
      display: inline-block;
      padding: 1.25rem 1.75rem;
      border-radius: 4px;
      font-size: 0.9rem;
      text-decoration: none;
      font-family: 'Courier New', monospace;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: transparent;
      color: var(--green);
      border: 1px solid var(--green);

      &:hover {
        background: rgba(100, 255, 218, 0.1);
      }
    }

    .btn-secondary {
      background: var(--green);
      color: var(--navy);
      border: 1px solid var(--green);

      &:hover {
        background: #52d3c1;
        border-color: #52d3c1;
      }
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .about-preview, .skills-overview, .github-stats {
      padding: 100px 0;
      background: var(--navy);
      color: var(--white);
    }

    .skills-overview {
      background: var(--light-navy);
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

    .about-grid {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 50px;
      align-items: start;
    }

    .about-text {
      color: var(--slate);
      font-size: 1.1rem;
      line-height: 1.6;

      p {
        margin-bottom: 1.5rem;
      }

      .tech-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        padding: 0;
        margin: 1.5rem 0 0 0;
        list-style: none;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;

        li {
          display: flex;
          align-items: center;

          span {
            color: var(--green);
            margin-right: 0.5rem;
          }
        }
      }
    }

    .about-image {
      position: relative;

      .image-wrapper {
        position: relative;
        max-width: 300px;
        margin: 0 auto;

        &:hover {
          .profile-pic {
            filter: none;
          }

          .image-border {
            transform: translate(10px, 10px);
          }
        }
      }

      .profile-pic {
        width: 100%;
        height: auto;
        border-radius: 4px;
        filter: grayscale(100%) contrast(1) brightness(90%);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        position: relative;
        z-index: 2;
      }

      .image-border {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        height: 100%;
        border: 2px solid var(--green);
        border-radius: 4px;
        transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        z-index: 1;
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      background: var(--navy);
      padding: 2rem;
      border-radius: 4px;
      border: 1px solid #233554;
      transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      &:hover {
        transform: translateY(-5px);
      }

      .skill-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .skill-name {
          color: var(--lightest-slate);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .skill-years {
          color: var(--green);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
        }
      }

      .skill-progress {
        width: 100%;
        height: 4px;
        background: var(--light-navy);
        border-radius: 2px;
        margin-bottom: 1rem;
        overflow: hidden;

        .progress-bar {
          height: 100%;
          background: var(--green);
          transition: width 1s ease-in-out;
        }
      }

      .skill-projects {
        color: var(--slate);
        font-size: 0.9rem;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .stat-card {
      background: var(--light-navy);
      padding: 2rem;
      border-radius: 4px;
      border: 1px solid #233554;
      text-align: center;
      transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      &:hover {
        transform: translateY(-5px);
      }

      .stat-value {
        display: block;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--green);
        margin-bottom: 0.5rem;
        font-family: 'Courier New', monospace;

        &.loading {
          opacity: 0.6;
          animation: pulse 1.5s ease-in-out infinite;
        }
      }

      .stat-label {
        color: var(--slate);
        font-size: 1rem;
      }
    }

    .github-link {
      text-align: center;
    }

    .contact-section {
      padding: 100px 0;
      background: var(--navy);
      color: var(--white);
      text-align: center;

      .contact-overline {
        color: var(--green);
        font-family: 'Courier New', monospace;
        font-size: 1rem;
        margin-bottom: 1rem;
      }

      .contact-title {
        font-size: clamp(40px, 5vw, 60px);
        font-weight: 600;
        color: var(--lightest-slate);
        margin-bottom: 2rem;
      }

      .contact-description {
        max-width: 600px;
        margin: 0 auto 3rem;
        color: var(--slate);
        font-size: 1.2rem;
        line-height: 1.6;
      }

      .contact-btn {
        font-size: 1.1rem;
        padding: 1.5rem 2rem;
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 0 1rem;
        text-align: center;
      }

      .hero-content {
        .summary {
          font-size: 1.1rem;
        }

        .hero-cta {
          justify-content: center;
        }
      }

      .container {
        padding: 0 1rem;
      }

      .about-preview, .skills-overview, .github-stats {
        padding: 80px 0;
      }

      .contact-section {
        padding: 80px 0 40px;
      }

      .numbered-heading {
        font-size: 1.5rem;

        .line {
          display: none;
        }
      }

      .about-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .about-text .tech-list {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .hero-content .hero-cta {
        flex-direction: column;
        align-items: center;

        .btn {
          width: 100%;
          max-width: 280px;
          text-align: center;
        }
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .about-text .tech-list {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  githubStats: GitHubStats = {
    repos: 19,
    contributions: 475,
    stars: 0,
    followers: 1
  };

  isLoadingGitHubStats = true;

  resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2FAdrian_Resume_2025_Updated.pdf?alt=media&token=89fbfab4-0993-44dc-a4cf-a0bbba5b5c59';

  topSkills = [
    { name: 'Angular', years: 8, level: 95, projects: 15 },
    { name: 'TypeScript', years: 8, level: 95, projects: 15 },
    { name: 'Node.js', years: 6, level: 90, projects: 12 },
    { name: 'React', years: 4, level: 80, projects: 8 },
    { name: 'AI Integration', years: 1, level: 85, projects: 5 },
    { name: 'Firebase', years: 6, level: 85, projects: 10 }
  ];

  constructor(private githubService: GitHubService) {}

  ngOnInit() {
    this.loadGitHubStats();
  }

  loadGitHubStats() {
    this.isLoadingGitHubStats = true;
    this.githubService.getGitHubStats().subscribe({
      next: (stats) => {
        this.githubStats = stats;
        this.isLoadingGitHubStats = false;
      },
      error: (error) => {
        console.error('Failed to load GitHub stats:', error);
        this.isLoadingGitHubStats = false;
      }
    });
  }

  downloadResume() {
    window.open(this.resumeUrl, '_blank');
  }
}