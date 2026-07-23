import { Routes } from '@angular/router';
import { IconSelector } from './iconselector';
import { MarkdownEditor } from './markdowneditor';
import { Tables } from './tables';

export default [
	{ path: 'markdowneditor', component: MarkdownEditor },
	{ path: 'tables', component: Tables },
	{ path: 'iconselector', component: IconSelector },
] as Routes;
