import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiAsideComponent, TuiAsideGroupComponent, TuiNavigation } from "@taiga-ui/layout";
import { EzUILayout } from './ezui.layout';
import { LayoutService } from './services/layoutService';

@Component({
    selector: 'ezui-sidebar',
    standalone: true,
    imports: [CommonModule, RouterLink, TuiNavigation, TuiAsideGroupComponent, TuiAsideComponent],
    template: `
	    <aside
	        style="height:100%"
			tuitheme=""
	        [tuiNavigationAside]="layoutService.isMenuExpanded()"
	    >
			@for(item of layout.sidebarItems(); track item){
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

			<footer>
				@for(item of layout.sidebarFooterItems(); track item){
					<button
						[iconStart]="item.icon"
						tuiAsideItem
						tuiChevron
						type="button"
						[routerLinkActiveOptions]="{ exact:true }"
						[routerLink]="item.routerLink"
						(click)="item.command()">
						{{item.label}}
					</button>
				}
			</footer>
	    </aside>
    `
})
export class EzUISideBar {
    constructor(
          	public layoutService: LayoutService,
			public layout : EzUILayout
	){
	}
}
