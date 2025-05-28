import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-container">
      <div class="contact-content">
        <p class="contact-overline">04. What's Next?</p>
        <h1 class="contact-title">Get In Touch</h1>
        <p class="contact-description">
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:{{ contactInfo.email }}" class="contact-btn">Say Hello</a>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">Designed & Built by Adrian Jenson</p>
        <div class="social-links">
          <a href="https://{{ contactInfo.github }}" target="_blank" rel="noopener noreferrer"
             class="social-link" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://{{ contactInfo.linkedin }}" target="_blank" rel="noopener noreferrer"
             class="social-link" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
            </svg>
          </a>
          <a href="mailto:{{ contactInfo.email }}" class="social-link" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L10.89 13.26c.64.4 1.47.4 2.11 0L21 8M5 19h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    }

    .contact-container {
      background: var(--navy);
      color: var(--white);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px 2rem;
      text-align: center;
    }

    .contact-content {
      max-width: 600px;
      width: 100%;

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
        margin-bottom: 1.5rem;
        line-height: 1.1;
      }

      .contact-description {
        color: var(--slate);
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 3rem;
        max-width: 540px;
        margin-left: auto;
        margin-right: auto;
      }

      .contact-btn {
        display: inline-block;
        padding: 1.25rem 1.75rem;
        border: 1px solid var(--green);
        border-radius: 4px;
        background: transparent;
        color: var(--green);
        text-decoration: none;
        font-size: 1rem;
        font-family: 'Courier New', monospace;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          background: rgba(100, 255, 218, 0.1);
          transform: translate(-4px, -4px);
          box-shadow: 4px 4px 0 var(--green);
        }
      }
    }

    .footer {
      background: var(--navy);
      color: var(--slate);
      padding: 2rem 0;
      border-top: 1px solid var(--light-navy);
    }

    .footer-content {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 2rem;
      text-align: center;

      .footer-text {
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;

        .social-link {
          color: var(--slate);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          padding: 0.5rem;
          border-radius: 4px;

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

    @media (max-width: 768px) {
      .contact-container {
        padding: 80px 1rem;
      }

      .contact-content {
        .contact-title {
          font-size: clamp(30px, 8vw, 50px);
        }

        .contact-description {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .contact-btn {
          padding: 1rem 1.5rem;
          font-size: 0.9rem;
        }
      }

      .footer-content {
        padding: 0 1rem;

        .social-links {
          gap: 1rem;
        }
      }
    }

    @media (max-width: 480px) {
      .contact-container {
        padding: 60px 1rem;
      }

      .contact-content {
        .contact-description {
          font-size: 1rem;
        }

        .contact-btn {
          width: 100%;
          max-width: 280px;
        }
      }

      .footer-content {
        .footer-text {
          font-size: 0.8rem;
        }

        .social-links {
          .social-link svg {
            width: 18px;
            height: 18px;
          }
        }
      }
    }

    @media (max-width: 360px) {
      .contact-content {
        .contact-btn {
          padding: 0.875rem 1.25rem;
          font-size: 0.85rem;
        }
      }
    }
  `]
})
export class ContactComponent {
  contactInfo = {
    email: 'jensonadrian@gmail.com',
    linkedin: 'linkedin.com/in/adrianjenson',
    github: 'github.com/gongalt',
    location: 'Mandaue, Philippines'
  };
}