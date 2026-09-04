import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiDataList, TuiDropdown, TuiOption } from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';

export interface PopoutMenuItem {
	label: string | null;
	icon: string | null;
	items : PopoutMenuItem[];
	disabled: boolean;
	expanded: boolean;
	hidden: boolean;
	command(sender : PopoutMenuItem) : Promise<any>;
	style : string;

	data : any;
}

@Component({
    selector: 'tui-data-list[popsubdatalist]',
    standalone: true,
    imports: [
		CommonModule,
        TuiDropdown,
		TuiOption,
        TuiChevron
    ],
    template: `
		@for(item of popsubdatalist; track $index){
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
						@if(itemTemplate){
							<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
						}
						@else {
							{{item.label}}
						}
					</button>

					<ng-template #dropdownContent>
						<div class="popdropdown">
							<tui-data-list
								class="popsubdatalist"
								[popsubdatalist]="item.items"
								[itemTemplate]="itemTemplate"
								(onItemClick)="onItemClick.emit()">
							</tui-data-list>
						</div>
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
						(click)="item.command(item);onItemClick.emit()"
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
    `,
	styles: `
		.popdropdown {
			margin:10px;
		}

		.popsubdatalist {
			display:flex;
			flex-direction: column;
		}

		.subdatalistitem {
			padding: 0px 10px 0px 10px !important;
		}
	`
})
export class EzUIPopoutMenuSubDataList {
	@Input() itemTemplate: TemplateRef<any> | undefined;

    @Input() popsubdatalist: PopoutMenuItem[] = [];

	@Output() onItemClick = new EventEmitter();
}

@Component({
    selector: 'ezui-popoutmenu',
	standalone: true,
    imports: [
		FormsModule,
		CommonModule,
		TuiButton,
		TuiDropdown,
		EzUIPopoutMenuSubDataList,
	],
    template: `
		<button
			[iconStart]="icon"
			tuiButton
			type="button"
			[size]="size"
			[appearance]="appearance"
			[tuiAppearanceState]="dropdownOpen() ? 'active' : null"
			[tuiDropdown]="dropdownContent"
			tuiDropdownLimitWidth="auto"
			[(tuiDropdownOpen)]="dropdownOpen"
			(click)="onMenuOpen.emit(dropdownOpen())"
		>
			{{label}}
			<ng-template #dropdownContent>
				<div class="popdropdown">
					<tui-data-list
						class="popsubdatalist"
						[popsubdatalist]="items"
						[itemTemplate]="itemTemplate"
						(onItemClick)="dropdownOpen.set(false)">
					</tui-data-list>
				</div>
			</ng-template>
		</button>
    `,
    styles: `
		.popdropdown {
			margin:10px;
		}

		.popsubdatalist {
			display:flex;
			flex-direction: column;
		}
    `
})
export class EzUIPopoutMenu implements OnChanges {
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;

    @Input() items: PopoutMenuItem[] = [];

	dropdownOpen = signal<boolean>(false);

	@Input() icon: string = 'plus';
    @Input() label: string = '';
	@Input() size: "l" | "m" | "s" = 'm';
	@Input() appearance: string = 'flat';

	@Output() onMenuOpen = new EventEmitter<boolean>();

	ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && changes['items'].currentValue != changes['items'].previousValue) {
            this.items = changes['items'].currentValue;
        }
    }
}
