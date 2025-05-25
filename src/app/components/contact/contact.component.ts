import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-container">
      <div class="contact-content">
        <h1>Get In Touch</h1>
        <p class="contact-intro">
          I'm currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div class="contact-info">
          <div class="info-grid">
            <a href="mailto:{{ contactInfo.email }}" class="info-item email">
              <span class="icon">✉</span>
              <div class="info-details">
                <h3>Email</h3>
                <span>{{ contactInfo.email }}</span>
              </div>
            </a>

            <a href="https://{{ contactInfo.linkedin }}" target="_blank" class="info-item linkedin">
              <span class="icon">🔗</span>
              <div class="info-details">
                <h3>LinkedIn</h3>
                <span>{{ contactInfo.linkedin }}</span>
              </div>
            </a>

            <a href="https://{{ contactInfo.github }}" target="_blank" class="info-item github">
              <span class="icon">💻</span>
              <div class="info-details">
                <h3>GitHub</h3>
                <span>{{ contactInfo.github }}</span>
              </div>
            </a>

            <div class="info-item location">
              <span class="icon">📍</span>
              <div class="info-details">
                <h3>Location</h3>
                <span>{{ contactInfo.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <a href="mailto:{{ contactInfo.email }}" class="contact-btn">Say Hello</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a192f;
      color: #e6f1ff;
      padding: 2rem;
    }

    .contact-content {
      max-width: 600px;
      text-align: center;

      h1 {
        color: #64ffda;
        font-size: clamp(2rem, 5vw, 3rem);
        margin-bottom: 1rem;
        position: relative;

        &::before {
          content: "04.";
          color: #64ffda;
          font-family: 'Courier New', monospace;
          font-size: 1.2rem;
          margin-right: 0.5rem;
        }
      }

      .contact-intro {
        color: #8892b0;
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 3rem;
      }
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      padding: 1.5rem;
      background: #112240;
      border: 1px solid #233554;
      border-radius: 4px;
      text-decoration: none;
      color: inherit;
      transition: all 0.25s;

      &:hover {
        transform: translateY(-2px);
        border-color: #64ffda;
      }

      &.email:hover { border-color: #ff6b6b; }
      &.linkedin:hover { border-color: #0077b5; }
      &.github:hover { border-color: #333; }

      .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        width: 30px;
        text-align: center;
      }

      .info-details {
        text-align: left;

        h3 {
          color: #ccd6f6;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        span {
          color: #8892b0;
          font-size: 0.9rem;
        }
      }
    }

    .cta-section {
      .contact-btn {
        display: inline-block;
        padding: 1rem 2rem;
        border: 1px solid #64ffda;
        background: transparent;
        color: #64ffda;
        text-decoration: none;
        font-size: 1.1rem;
        font-family: 'Courier New', monospace;
        border-radius: 4px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          background: rgba(100, 255, 218, 0.1);
          transform: translate(-4px, -4px);
          box-shadow: 4px 4px 0 #64ffda;
        }
      }
    }

    @media (max-width: 768px) {
      .contact-container {
        padding: 1rem;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }

      .info-item {
        padding: 1rem;
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