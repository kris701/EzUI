import { Routes } from '@angular/router';
import { AppLayout } from './layout/app.layout';
import { Home } from './pages/home';

export const appRoutes: Routes = [
	{
		path: '',
		component: AppLayout,
		children: [
			{ path: '', component: Home},
			{
				path: 'input',
				loadChildren: () => import('./pages/input/input.routes')
			}
		]
	}
];
