import { Routes } from '@angular/router';
import { Dialog } from './dialog';
import { MenuBar } from './menubar';

export default [
	{ path: 'menubar', component: MenuBar },
	{ path: 'dialog', component: Dialog },
] as Routes;
