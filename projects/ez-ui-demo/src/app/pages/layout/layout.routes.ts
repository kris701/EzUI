import { Routes } from '@angular/router';
import { Dialog } from './dialog';
import { MenuBar } from './menubar';
import { PopoutMenu } from './popoutmenu';

export default [
	{ path: 'menubar', component: MenuBar },
	{ path: 'dialog', component: Dialog },
	{ path: 'popoutmenu', component: PopoutMenu },
] as Routes;
