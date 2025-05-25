import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, catchError, of } from 'rxjs';

export interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  location: string;
  blog: string;
  company: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
  created_at: string;
}

export interface GitHubStats {
  repos: number;
  contributions: number;
  stars: number;
  followers: number;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly username = 'gongalt';
  private readonly apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.apiUrl}/users/${this.username}`).pipe(
      catchError(error => {
        console.error('Error fetching GitHub user data:', error);
        return of({
          public_repos: 19,
          followers: 1,
          following: 2,
          name: 'Adrian Jenson',
          bio: '',
          location: 'Mandaue, Philippines',
          blog: '',
          company: ''
        } as GitHubUser);
      })
    );
  }

  getUserRepos(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`${this.apiUrl}/users/${this.username}/repos?sort=updated&per_page=100`).pipe(
      catchError(error => {
        console.error('Error fetching GitHub repos:', error);
        return of([]);
      })
    );
  }

  getGitHubStats(): Observable<GitHubStats> {
    return forkJoin({
      user: this.getUserData(),
      repos: this.getUserRepos()
    }).pipe(
      map(({ user, repos }) => {
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        // Estimate contributions (GitHub API doesn't provide this without authentication)
        // We'll use a rough estimate based on repos and activity
        const estimatedContributions = repos.length * 25; // Rough estimate

        return {
          repos: user.public_repos,
          contributions: estimatedContributions,
          stars: totalStars,
          followers: user.followers
        };
      }),
      catchError(error => {
        console.error('Error fetching GitHub stats:', error);
        // Return fallback data
        return of({
          repos: 19,
          contributions: 475,
          stars: 0,
          followers: 1
        });
      })
    );
  }
}