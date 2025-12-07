import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; background: #e8f5e8; border: 2px solid #4caf50; margin: 20px;">
      <h2>✅ Test Component Loaded Successfully!</h2>
      <p>Si vous voyez ce message, Angular fonctionne correctement.</p>
      <p>Date: {{ currentDate }}</p>
    </div>
  `,
  styles: []
})
export class TestComponent {
  currentDate = new Date().toLocaleString();
} 