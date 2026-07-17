import { Routes } from '@angular/router';
import { MarkdownEditor } from './markdowneditor';
import { Tables } from './tables';

export default [
	{ path: 'markdowneditor', component: MarkdownEditor },
	{ path: 'tables', component: Tables },
] as Routes;
