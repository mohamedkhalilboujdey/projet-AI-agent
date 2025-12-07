// main.ts
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { enableProdMode } from '@angular/core';

// Désactiver le mode debug pour éviter les problèmes d'injection
enableProdMode();

bootstrapApplication(App, {
  providers: []
});
