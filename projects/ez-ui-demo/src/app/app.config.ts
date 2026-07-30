import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTaiga, tuiScrollbarOptionsProvider } from '@taiga-ui/core';
import { EzUITableFilterService, LayoutService } from 'EzUI';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(appRoutes),
		provideTaiga(),
		tuiScrollbarOptionsProvider({mode: 'hover'}),
		LayoutService,
		EzUITableFilterService
	],
};
