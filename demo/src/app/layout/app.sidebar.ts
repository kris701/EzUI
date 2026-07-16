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
	menuItems = signal<MenuItem[]>([{
		label: 'Input',
		icon: 'square-pen',
		items: [
			{
				label: 'Text Input',
				routerLink: '/input/text'
			} as SubMenuItem
		]
	} as MenuItem])

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
