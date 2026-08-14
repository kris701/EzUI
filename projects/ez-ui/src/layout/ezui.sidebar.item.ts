import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiChevron } from '@taiga-ui/kit';
import { TuiAsideGroupComponent, TuiNavigation } from "@taiga-ui/layout";
import { MenuItem } from './models/MenuItem';

@Component({
    selector: 'ezui-sidebar-item',
    standalone: true,
    imports: [CommonModule, RouterLink, TuiNavigation, TuiAsideGroupComponent, TuiChevron],
    template: `
		@if(item && item.visible){
			@if(item.items && item.items.length > 0){
				<tui-aside-group [(open)]="item.expanded">
					<button
						[iconStart]="item.icon"
						tuiAsideItem
						tuiChevron
						type="button"
					>
						{{item.label}}

						<ng-template>
							@for(subitem of item.items; track subitem){
								<ezui-sidebar-item [item]="subitem" (onItemClick)="onItemClick.emit()"/>
							}
						</ng-template>
					</button>
				</tui-aside-group>
			}
			@else {
				<button
					[iconStart]="item.icon"
					tuiAsideItem
					type="button"
					[routerLinkActiveOptions]="{ exact:true }"
					[routerLink]="item.routerLink"
					[queryParams]="item.queryParams"
					(click)="item.command && item.command();onItemClick.emit()"
				>
					{{item.label}}
				</button>
			}
		}
    `
})
export class EzUISideBarItem {
    @Input() item: MenuItem | undefined;

	@Output() onItemClick = new EventEmitter();
}
