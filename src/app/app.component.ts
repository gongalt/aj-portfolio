import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="navbar">
      <div class="nav-content">
        <a routerLink="/" class="nav-brand">AJ</a>
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">
            <span class="nav-number">01.</span> Home
          </a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">
            <span class="nav-number">02.</span> About
          </a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link">
            <span class="nav-number">03.</span> Projects
          </a>
          <a routerLink="/ai-projects" routerLinkActive="active" class="nav-link">
            <span class="nav-number">04.</span> AI Projects
          </a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">
            <span class="nav-number">05.</span> Contact
          </a>
          <a href="https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2FAdrian_Resume_2025_Updated.pdf?alt=media&token=89fbfab4-0993-44dc-a4cf-a0bbba5b5c59"
             target="_blank" class="resume-btn">Resume</a>
        </nav>
      </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <p>Designed & Built by Adrian Jenson</p>
        <div class="social-links">
          <a href="https://github.com/gongalt" target="_blank" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/adrianjenson" target="_blank" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:adrian.jenson@email.com" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
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
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(10, 25, 47, 0.85);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--light-navy);
      height: 100px;
      display: flex;
      align-items: center;
    }

    .nav-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand {
      color: var(--green);
      text-decoration: none;
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Courier New', monospace;
      transition: color 0.3s ease;

      &:hover {
        color: var(--green);
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-link {
      color: var(--lightest-slate);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
      font-family: 'Courier New', monospace;

      &:hover,
      &.active {
        color: var(--green);
      }

      .nav-number {
        color: var(--green);
        margin-right: 0.5rem;
        font-size: 0.8rem;
      }
    }

    .resume-btn {
      padding: 0.75rem 1.5rem;
      border: 1px solid var(--green);
      border-radius: 4px;
      background: transparent;
      color: var(--green);
      text-decoration: none;
      font-size: 0.9rem;
      font-family: 'Courier New', monospace;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(100, 255, 218, 0.1);
      }
    }

    main {
      margin-top: 100px;
      background: var(--navy);
      flex: 1;
    }

    .footer {
      background: var(--navy);
      border-top: 1px solid var(--light-navy);
      padding: 2rem 0;
      text-align: center;

      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;

        p {
          color: var(--slate);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;

          a {
            color: var(--slate);
            transition: all 0.3s ease;

            &:hover {
              color: var(--green);
              transform: translateY(-3px);
            }

            svg {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .navbar {
        height: 70px;
      }

      .nav-content {
        padding: 0 1rem;
      }

      .nav-brand {
        font-size: 1.5rem;
      }

      .nav-links {
        gap: 1rem;
        font-size: 0.8rem;
      }

      .nav-link .nav-number {
        display: none;
      }

      .resume-btn {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }

      main {
        margin-top: 70px;
      }

      .footer {
        padding: 1.5rem 0;

        .footer-content {
          padding: 0 1rem;

          p {
            font-size: 0.8rem;
          }

          .social-links {
            gap: 1rem;
          }
        }
      }
    }

    @media (max-width: 480px) {
      .nav-content {
        padding: 0 0.5rem;
      }

      .nav-links {
        gap: 0.3rem;
        font-size: 0.65rem;
      }

      .nav-link {
        font-size: 0.65rem;
        padding: 0.2rem;
      }

      .resume-btn {
        padding: 0.3rem 0.6rem;
        font-size: 0.65rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'Adrian Jenson - Full Stack Developer';
}