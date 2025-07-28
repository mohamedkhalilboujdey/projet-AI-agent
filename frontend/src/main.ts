import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // ✅ Corrige le chemin si nécessaire
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // ✅ ou adapte le chemin selon ton projet

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});
