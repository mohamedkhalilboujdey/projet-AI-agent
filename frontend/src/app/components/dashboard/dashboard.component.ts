import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  activities = [
    {
      date: 'Today',
      items: [
        {
          type: 'cv-uploaded',
          time: '5:12 pm',
          format: 'pdf',
          filename: 'khalil_cv',
          color: 'blue'
        },
        {
          type: 'keywords-extracted',
          keywords: ['Python', 'Machine Learning', 'NestJS'],
          category: 'Tech Skills',
          color: 'purple'
        },
        {
          type: 'job-suggestions',
          example: 'Example: Data Scientist @ Talan',
          count: 3,
          color: 'orange'
        }
      ]
    },
    {
      date: 'Monday, 23 March 2020',
      items: [
        {
          type: 'cv-uploaded',
          time: '5:12 pm',
          format: 'pdf',
          filename: 'user_cv',
          color: 'red'
        },
        {
          type: 'keywords-extracted',
          keywords: ['Python', 'AI', 'Docker'],
          category: 'Tech Skills',
          color: 'green'
        }
      ]
    }
  ];

  keywordBreakdown = [
    { category: 'Tech Skills', percentage: 21, color: '#10B981' },
    { category: 'Soft Skills', percentage: 41, color: '#10B981' },
    { category: 'Languages', percentage: 28, color: '#10B981' },
    { category: 'Others', percentage: 10, color: '#10B981' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  getActivityTypeText(type: string): string {
    switch(type) {
      case 'cv-uploaded':
        return 'CV Uploaded';
      case 'keywords-extracted':
        return 'Keywords Extracted';
      case 'job-suggestions':
        return 'Job Suggestions';
      default:
        return type;
    }
  }

  logout() {
    this.authService.logout();
  }
} 