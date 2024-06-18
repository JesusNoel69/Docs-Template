import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';//para animaciones pero con el async es sufciente
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';//para animaciones

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(withFetch()), provideAnimationsAsync(),
  provideAnimations()]
};
