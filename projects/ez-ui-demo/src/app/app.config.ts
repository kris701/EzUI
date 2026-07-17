import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTaiga, tuiScrollbarOptionsProvider } from '@taiga-ui/core';
import { EzUITableFilterService } from 'EzUI';
import { appRoutes } from './app.routes';
import { LayoutService } from './layout/services/layoutService';

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(appRoutes),
		provideTaiga(),
		tuiScrollbarOptionsProvider({mode: 'hover'}),
		LayoutService,
		EzUITableFilterService
	],
};
