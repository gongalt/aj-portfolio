import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Full Stack Developer';
  summary = `Refining my career aspirations, I'm driven to deepen my understanding of software engineering, leveraging my eight years of experience with Angular and software development. My goal now is to not only build software but to craft solutions that resonate with people's needs, making meaningful contributions to our community.`;

  contact = {
    email: 'your.email@example.com',
    phone: '123-456-7890',
    location: 'Your City',
    github: 'github.com/yourusername',
    linkedin: 'linkedin.com/in/yourprofile'
  };

  skills = [
    { name: 'Angular', years: 8, level: 90, projects: 8 },
    { name: 'TypeScript', years: 8, level: 90, projects: 8 },
    { name: 'Firebase', years: 8, level: 85, projects: 6 },
    { name: 'Node.js', years: 4, level: 80, projects: 6 },
    { name: 'AWS', years: 3, level: 75, projects: 4 },
    { name: 'React', years: 3, level: 70, projects: 3 }
  ];

  softSkills = [
    'Critical Thinking',
    'Time Management',
    'Verbal and written communication',
    'Team work',
    'Goal Oriented',
    'Flexibility',
    'Self-Motivation',
    'Responsibility'
  ];

  interests = [
    'Camping',
    'Free Diving',
    'Marathon',
    'Traveling',
    'New Technologies',
    'New Languages',
    'Anime',
    'Information Technology',
    'Engineering',
    'Hackathon'
  ];

  testimonials = [
    {
      name: 'Project Lead at Docuvera',
      quote: 'Adrian demonstrated exceptional skill in developing complex Angular applications and managing AWS infrastructure.',
      project: 'Docuvera Platform'
    },
    {
      name: 'Tech Lead at Logmaster',
      quote: 'His expertise in mobile development using Ionic significantly improved our app performance and user experience.',
      project: 'Logmaster Mobile App'
    }
  ];

  githubStats = {
    repos: 16,
    contributions: 11,
    stars: 0,
    followers: 1
  };
}
