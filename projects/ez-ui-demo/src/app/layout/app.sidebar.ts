import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiDropdown } from '@taiga-ui/core';
import { TuiAsideComponent, TuiAsideGroupComponent, TuiNavigation } from "@taiga-ui/layout";
import { LayoutService } from './services/layoutService';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterLink, TuiNavigation, TuiAsideGroupComponent, TuiAsideComponent, TuiDropdown],
    template: `
	    <aside
	        style="height:100%"
			tuitheme=""
	        [tuiNavigationAside]="layoutService.isMenuExpanded()"
	    >
			@for(item of menuItems(); track item){
				<tui-aside-group>
					<button
						[iconStart]="item.icon"
						tuiAsideItem
						tuiChevron
						type="button"
						[routerLinkActiveOptions]="{ exact:true }"
						[routerLink]="item.routerLink"
					>
						{{item.label}}
						<ng-template>
							@for(subitem of item.items; track subitem){
								<button
									tuiAsideItem
									[iconStart]="subitem.icon"
									type="button"
									[routerLinkActiveOptions]="{ exact:true }"
									[routerLink]="subitem.routerLink"
									[queryParams]="subitem.queryParams"
								>
									{{subitem.label}}
								</button>
							}
						</ng-template>
					</button>
				</tui-aside-group>
			}

			<hr />

			<footer>
				<a href="https://github.com/kris701/EzUI" pButton target="_blank" rel="noopener noreferrer">
					<button
						iconStart="github"
						tuiAsideItem
						type="button"
					>
						Repo
					</button>
				</a>
			</footer>
	    </aside>
    `
})
export class AppSideBar {
	menuItems = signal<MenuItem[]>([
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
	]
	)

    constructor(
          	public layoutService: LayoutService
	){
	}
}

interface MenuItem {
	label: string,
	icon: string | null,
	routerLink: string | null,
	items: SubMenuItem[] | null
}

interface SubMenuItem {
	label: string,
	icon: string | null,
	routerLink: string | null
	queryParams: {[id:string]:string}
}
