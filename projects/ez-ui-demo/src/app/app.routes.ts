import { Component, signal } from '@angular/core';
import { Routes } from '@angular/router';
import { EzUILayout, MenuItem, SubMenuItem } from 'EzUI';
import { Home } from './pages/home';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [EzUILayout],
    template: `
		<ezui-layout [sidebarItems]="sidebarItems" [sidebarFooterItems]="sidebarFooterItems">
			<ng-template #topbarlogo>
				<img src="logo.png" [style]="{ height: '45px' }" />
				<span>EzUI Demo</span>
			</ng-template>
		</ezui-layout>
    `
})
export class AppLayout {
	sidebarItems = signal<MenuItem[]>([
		{
			label: 'Home',
			icon: 'home',
			routerLink: '/'
		} as MenuItem,
		{
			label: 'Forms',
			icon: 'form',
			items: [
				{
					label: 'Text',
					icon: 'square-pen',
					routerLink: '/forms/text'
				} as SubMenuItem,
				{
					label: 'Password',
					icon: 'rectangle-ellipsis',
					routerLink: '/forms/password'
				} as SubMenuItem,
				{
					label: 'Number',
					icon: 'hash',
					routerLink: '/forms/number'
				} as SubMenuItem,
				{
					label: 'Date',
					icon: 'calendar',
					routerLink: '/forms/date'
				} as SubMenuItem,
				{
					label: 'Date Time',
					icon: 'calendar-clock',
					routerLink: '/forms/datetime'
				} as SubMenuItem,
				{
					label: 'Multi Select',
					icon: 'list',
					routerLink: '/forms/multiselect'
				} as SubMenuItem,
				{
					label: 'Files',
					icon: 'file',
					routerLink: '/forms/files'
				} as SubMenuItem,
			]
		} as MenuItem,
		{
			label: 'Layout',
			icon: 'layout-panel-left',
			items: [
				{
					label: 'Menubar',
					icon: 'rectangle-ellipsis',
					routerLink: '/layout/menubar'
				} as SubMenuItem,
			]
		} as MenuItem,
		{
			label: 'Other',
			icon: 'circle-alert',
			items: [
				{
					label: 'Markdown Editor',
					icon: 'file-pen-line',
					routerLink: '/other/markdowneditor'
				} as SubMenuItem,
				{
					label: 'Tables',
					icon: 'table',
					routerLink: '/other/tables'
				} as SubMenuItem,
				{
					label: 'Icon Selector',
					icon: 'circle',
					routerLink: '/other/iconselector'
				} as SubMenuItem,
			]
		} as MenuItem,
	])

	sidebarFooterItems = signal<MenuItem[]>([
		{
			label: 'Repo',
			icon: 'github',
			command: async () => {
				open('https://github.com/kris701/EzUI');
			}
		} as MenuItem
	])
}

export const appRoutes: Routes = [
	{
		path: '',
		component: AppLayout,
		children: [
			{ path: '', component: Home},
			{
				path: 'forms',
				loadChildren: () => import('./pages/forms/forms.routes')
			},
			{
				path: 'other',
				loadChildren: () => import('./pages/other/other.routes')
			},
			{
				path: 'layout',
				loadChildren: () => import('./pages/layout/layout.routes')
			}
		]
	}
];
