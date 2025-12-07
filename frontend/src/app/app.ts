import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div style="padding: 20px; background: #f0f0f0;">
      <h1>Test - Application Angular</h1>
      <p>Si vous voyez ce message, l'application se charge correctement.</p>
      <p>✅ Application fonctionne sans erreur NG0203!</p>
    </div>
  `
})
export class App {
  title = 'frontend';
}
