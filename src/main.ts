import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import amplifyconfig from "./aws-exports.js";
Amplify.configure(amplifyconfig);
const client = generateClient();

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
});
