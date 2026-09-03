import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiDropdown, TuiGroup, TuiOption } from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';

export interface MenuBarItem {
	label: string | null;
	icon: string | null;
	items : MenuBarItem[];
	disabled: boolean;
	expanded: boolean;
	hidden: boolean;
	command(sender : MenuBarItem) : Promise<any>;
	style : string;

	data : any;
}

@Component({
    selector: 'tui-data-list[subdatalist]',
    standalone: true,
    imports: [
		CommonModule,
        TuiDropdown,
		TuiOption,
        TuiChevron
    ],
    template: `
		@for(item of subdatalist; track $index){
			@if(item.items){
				@if(!item.hidden){
					<button
						class="subdatalistitem"
						tuiOption
						tuiChevron
						[iconStart]="item.icon"
						[disabled]="item.disabled"
						[tuiDropdown]="dropdownContent"
						[(tuiDropdownOpen)]="item.expanded"
						tuiDropdownLimitWidth="auto"
						tuiDropdownSided="true"
						[style]="item.style"
					>
						@if(menuItemTemplate){
							<ng-container [ngTemplateOutlet]="menuItemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
						}
						@else {
							{{item.label}}
						}
					</button>

					<ng-template #dropdownContent>
						<tui-data-list
							class="subdatalist"
							[subdatalist]="item.items">
						</tui-data-list>
					</ng-template>
				}
			}
			@else {
				@if(!item.hidden){
					<button
						class="subdatalistitem"
						tuiOption
						[iconStart]="item.icon"
						[disabled]="item.disabled"
						(click)="item.command(item)"
						[style]="item.style"
					>
						@if(menuItemTemplate){
							<ng-container [ngTemplateOutlet]="menuItemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
						}
						@else {
							{{item.label}}
						}
					</button>
				}
			}
		}
    `,
	styles: `
		.subdatalist {
			display:flex;
			flex-direction: column;
			padding:10px;
		}

		.subdatalistitem {
			padding: 0px 10px 0px 10px !important;
		}
	`
})
export class EzUIMenuBarSubDataList {
	@Input() menuItemTemplate: TemplateRef<any> | undefined;

    @Input() subdatalist: MenuBarItem[] = [];
}

@Component({
    selector: 'ezui-menubar',
	standalone: true,
    imports: [
		FormsModule,
		CommonModule,
		TuiGroup,
		TuiButton,
		TuiDropdown,
		TuiChevron,
		EzUIMenuBarSubDataList
	],
    template: `
		<div tuiGroup class="group" [collapsed]="true">
			@for(item of items; track $index){
				@if(item.items){
					@if(!item.hidden){
						<button
							tuiButton
							tuiChevron
							size="s"
							appearance="outline"
							type="button"
							[iconStart]="item.icon"
							[disabled]="item.disabled"
							[tuiDropdown]="dropdownContent"
							[(tuiDropdownOpen)]="item.expanded"
							tuiDropdownLimitWidth="auto"
							[style]="item.style"
						>
							@if(itemTemplate){
								<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
							}
							@else {
								{{item.label}}
							}
						</button>

						<ng-template #dropdownContent>
							<tui-data-list
								class="subdatalist"
								[subdatalist]="item.items"
								[menuItemTemplate]="menuItemTemplate">
							</tui-data-list>
						</ng-template>
					}
				}
				@else {
					@if(!item.hidden){
						<button
							appearance="outline"
							size="s"
							tuiButton
							type="button"
							[iconStart]="item.icon"
							[disabled]="item.disabled"
							(click)="item.command(item)"
							[style]="item.style"
						>
							@if(itemTemplate){
								<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
							}
							@else {
								{{item.label}}
							}
						</button>
					}
				}
			}
		</div>
    `,
    styles: `
		.group {
			width:100%;
			white-space: nowrap;
		}

		.subdatalist {
			display:flex;
			flex-direction: column;
			padding:10px;
		}
    `
})
export class EzUIMenuBar implements OnChanges {
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;
	@ContentChild('menuItemTemplate', { static: false }) menuItemTemplate: TemplateRef<any> | undefined;

    @Input() items: MenuBarItem[] = [];

	ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && changes['items'].currentValue != changes['items'].previousValue) {
            this.items = changes['items'].currentValue;
        }
    }
}
