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
            <span class="nav-number">01.</span> About
          </a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link">
            <span class="nav-number">02.</span> Work
          </a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">
            <span class="nav-number">03.</span> Experience
          </a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">
            <span class="nav-number">04.</span> Contact
          </a>
          <a href="https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2FAdrian%20Resume%202025%20latest.pdf?alt=media&token=e2eb54f1-84e7-4350-9547-7db33264690a"
             target="_blank" class="resume-btn">Resume</a>
        </nav>
      </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
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
    }

    @media (max-width: 480px) {
      .nav-content {
        padding: 0 0.5rem;
      }

      .nav-links {
        gap: 0.5rem;
      }

      .nav-link {
        font-size: 0.7rem;
      }

      .resume-btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.7rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'Adrian Jenson - Full Stack Developer';
}