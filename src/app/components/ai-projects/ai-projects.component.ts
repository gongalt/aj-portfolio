import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AIProject {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  link: string;
  image: string;
  category: string;
  status: 'live' | 'beta' | 'development';
}

@Component({
  selector: 'app-ai-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-projects.component.html',
  styleUrls: ['./ai-projects.component.scss']
})
export class AiProjectsComponent {
  aiProjects: AIProject[] = [
    {
      title: 'Contract Crafter',
      description: 'AI-powered legal contract generator that instantly drafts precise, customized contracts.',
      longDescription: 'Accelerate contract workflows with AI precision. Generate precise, customized contracts in seconds. AI-powered drafting that speeds up your legal process.',
      technologies: ['OpenAI', 'TypeScript', 'React', 'Firebase', 'Flowroom'],
      link: '#',
      image: 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/ai-thumbnails%2Fcontract-crafter.png?alt=media&token=0d0ea08b-5447-4c1f-aae9-f56eb38f7680',
      category: 'Legal Tech',
      status: 'live'
    },
    {
      title: 'DreamTales',
      description: 'Create magical, personalized bedtime stories in seconds with AI.',
      longDescription: 'Enchanting tales crafted by AI, made uniquely for your child. Transform bedtime into an adventure with personalized stories featuring your child as the hero.',
      technologies: ['OpenAI', 'React', 'TypeScript', 'Firebase', 'Flowroom'],
      link: '#',
      image: 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/ai-thumbnails%2Fdreamtales.png?alt=media&token=67c92aa8-386d-4cd8-aa9c-a06c36d4a66a',
      category: 'Education',
      status: 'live'
    },
    {
      title: 'Memefy',
      description: 'Turn your ideas or photos into viral memes instantly with AI.',
      longDescription: 'AI-powered meme generator that transforms your photos and ideas into hilarious, shareable content. Perfect for social media creators and meme enthusiasts.',
      technologies: ['Replicate', 'OpenAI', 'React', 'TypeScript', 'Firebase'],
      link: '#',
      image: 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/ai-thumbnails%2Fmemefy-thumbnail-1920x1080%20(1).png?alt=media&token=4fbf6946-be5a-4011-8f66-61d0b5b330c9',
      category: 'Entertainment',
      status: 'beta'
    },
    {
      title: 'SnapSuit',
      description: 'Studio-quality professional headshots powered by AI.',
      longDescription: 'Transform casual photos into professional headshots in minutes. Perfect for LinkedIn profiles, company websites, and professional portfolios.',
      technologies: ['Replicate', 'React', 'TypeScript', 'Firebase', 'Flowroom'],
      link: '#',
      image: 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/ai-thumbnails%2Fsnapsuit%20thumbnail.png?alt=media&token=afcc45b0-718e-4f08-bc1d-c3967b38c87f',
      category: 'Photography',
      status: 'live'
    },
    {
      title: 'TimeStampIt',
      description: 'AI-powered video search that lets you jump directly to what matters.',
      longDescription: 'Revolutionary video search technology that understands content and context. Find exact moments in videos using natural language queries.',
      technologies: ['OpenAI', 'React', 'TypeScript', 'Firebase', 'Flowroom'],
      link: '#',
      image: 'https://firebasestorage.googleapis.com/v0/b/ajenson.firebasestorage.app/o/ai-thumbnails%2Fyt-timestamp.webp?alt=media&token=91ed7ce1-0a71-49e8-a1b5-c3e5fbc117d7',
      category: 'Productivity',
      status: 'development'
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'live':
        return 'status-live';
      case 'beta':
        return 'status-beta';
      case 'development':
        return 'status-dev';
      default:
        return '';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'live':
        return 'Live';
      case 'beta':
        return 'Beta';
      case 'development':
        return 'In Development';
      default:
        return status;
    }
  }
}