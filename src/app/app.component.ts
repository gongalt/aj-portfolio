import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <a routerLink="/">AJ</a>
      </div>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <span class="nav-number">01.</span>About
        </a>
        <a routerLink="/projects" routerLinkActive="active">
          <span class="nav-number">02.</span>Work
        </a>
        <a routerLink="/about" routerLinkActive="active">
          <span class="nav-number">03.</span>Experience
        </a>
        <a routerLink="/contact" routerLinkActive="active">
          <span class="nav-number">04.</span>Contact
        </a>
        <a href="https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/resume%2FAdrian%20Resume%202025%20latest.pdf?alt=media&token=e2eb54f1-84e7-4350-9547-7db33264690a" target="_blank" class="resume-btn">Resume</a>
      </div>
    </nav>
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
      --lightest-slate: #ccd6f6;
    }

    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      background: rgba(10, 25, 47, 0.85);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--light-navy);
      z-index: 1000;

      .nav-brand {
        a {
          color: var(--green);
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
          font-family: 'Courier New', monospace;
        }
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 2rem;

        a {
          color: var(--slate);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.25s;
          font-family: 'Courier New', monospace;

          &:hover {
            color: var(--green);
          }

          &.active {
            color: var(--green);
          }

          .nav-number {
            color: var(--green);
            margin-right: 0.25rem;
            font-size: 0.8rem;
          }
        }

        .resume-btn {
          padding: 0.5rem 1rem;
          border: 1px solid var(--green);
          border-radius: 4px;
          color: var(--green) !important;
          transition: all 0.25s;

          &:hover {
            background: rgba(100, 255, 218, 0.1);
          }
        }
      }
    }

    main {
      margin-top: 70px;
      background: var(--navy);
      min-height: calc(100vh - 70px);
    }

    @media (max-width: 768px) {
      main {
        margin-top: 60px;
        min-height: calc(100vh - 60px);
      }

      .navbar {
        padding: 0 1rem;
        height: 60px;

        .nav-brand a {
          font-size: 1.3rem;
        }

        .nav-links {
          gap: 0.8rem;
          font-size: 0.8rem;

          .nav-number {
            display: none;
          }

          .resume-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      }
    }

    @media (max-width: 480px) {
      .navbar {
        padding: 0 0.5rem;

        .nav-links {
          gap: 0.5rem;

          a:not(.resume-btn) {
            font-size: 0.7rem;
            padding: 0.3rem 0.5rem;
          }

          .resume-btn {
            padding: 0.3rem 0.6rem;
            font-size: 0.7rem;
          }
        }
      }
    }

    @media (max-width: 360px) {
      .navbar .nav-links {
        gap: 0.3rem;

        a:not(.resume-btn) span:not(.nav-number) {
          display: none;
        }

        a[routerLink="/"]::after { content: "About"; }
        a[routerLink="/projects"]::after { content: "Work"; }
        a[routerLink="/about"]::after { content: "Exp"; }
        a[routerLink="/contact"]::after { content: "Contact"; }
      }
    }
  `]
})
export class AppComponent {
  title = 'Adrian Jenson - Full Stack Developer';
}