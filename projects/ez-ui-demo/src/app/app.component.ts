import { Component, signal } from '@angular/core';
import { EzUILayout, MenuItem } from 'EzUI';

@Component({
    selector: 'app-root',
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
export class AppComponent {
	sidebarItems = signal<MenuItem[]>([])

	sidebarFooterItems = signal<MenuItem[]>([])

	constructor(){
		this.sidebarItems.set([
			{
				label: 'Home',
				icon: 'home',
				routerLink: '/',
				visible: true
			} as MenuItem,
			{
				label: 'Forms',
				icon: 'form',
				visible : true,
				items: [
					{
						label: 'Text',
						icon: 'square-pen',
						routerLink: '/forms/text',
						visible: true
					} as MenuItem,
					{
						label: 'Password',
						icon: 'rectangle-ellipsis',
						routerLink: '/forms/password',
						visible: true
					} as MenuItem,
					{
						label: 'Number',
						icon: 'hash',
						routerLink: '/forms/number',
						visible: true
					} as MenuItem,
					{
						label: 'Boolean',
						icon: 'toggle-right',
						routerLink: '/forms/boolean',
						visible: true
					} as MenuItem,
					{
						label: 'Date',
						icon: 'calendar',
						routerLink: '/forms/date',
						visible: true
					} as MenuItem,
					{
						label: 'Date Time',
						icon: 'calendar-clock',
						routerLink: '/forms/datetime',
						visible: true
					} as MenuItem,
					{
						label: 'Select',
						icon: 'list',
						routerLink: '/forms/select',
						visible: true
					} as MenuItem,
					{
						label: 'Tree Select',
						icon: 'list-tree',
						routerLink: '/forms/treeselect',
						visible: true
					} as MenuItem,
					{
						label: 'Multi Select',
						icon: 'list',
						routerLink: '/forms/multiselect',
						visible: true
					} as MenuItem,
					{
						label: 'Files',
						icon: 'file',
						routerLink: '/forms/files',
						visible: true
					} as MenuItem,
				]
			} as MenuItem,
			{
				label: 'Layout',
				icon: 'layout-panel-left',
				visible : true,
				items: [
					{
						label: 'Menubar',
						icon: 'rectangle-ellipsis',
						routerLink: '/layout/menubar',
						visible : true
					} as MenuItem,
					{
						label: 'Dialog',
						icon: 'captions',
						routerLink: '/layout/dialog',
						visible : true
					} as MenuItem,
				]
			} as MenuItem,
			{
				label: 'Other',
				icon: 'circle-alert',
				visible : true,
				items: [
					{
						label: 'Markdown Editor',
						icon: 'file-pen-line',
						routerLink: '/other/markdowneditor',
						visible : true
					} as MenuItem,
					{
						label: 'Tables',
						icon: 'table',
						routerLink: '/other/tables',
						visible : true
					} as MenuItem,
					{
						label: 'Icon Selector',
						icon: 'circle',
						routerLink: '/other/iconselector',
						visible : true
					} as MenuItem,
					{
						label: 'Show More Text',
						icon: 'text',
						routerLink: '/other/showmoretext',
						visible : true
					} as MenuItem,
				]
			} as MenuItem,
		])

		this.sidebarFooterItems.set([
			{
				label: 'Repo',
				icon: 'github',
				command: async () => {
					open('https://github.com/kris701/EzUI');
				},
				visible : true
			} as MenuItem
		])
	}
}
