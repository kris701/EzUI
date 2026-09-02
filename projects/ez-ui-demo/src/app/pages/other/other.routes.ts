import { Routes } from '@angular/router';
import { IconSelector } from './iconselector';
import { MarkdownEditor } from './markdowneditor';
import { ShowMoreText } from './showmoretext';
import { Tables } from './tables';
import { OrderList } from './orderlist';

export default [
	{ path: 'markdowneditor', component: MarkdownEditor },
	{ path: 'tables', component: Tables },
	{ path: 'iconselector', component: IconSelector },
	{ path: 'showmoretext', component: ShowMoreText },
	{ path: 'orderlist', component: OrderList },
] as Routes;
