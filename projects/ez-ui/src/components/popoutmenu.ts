import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiDataList, TuiDropdown, TuiOption } from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';

export interface PopoutMenuItem {
	label: string | null;
	icon: string | null;
	items : PopoutMenuItem[];
	disabled: boolean;
	expanded: boolean;
	command() : Promise<any>;
	style : string;
}

@Component({
    selector: 'tui-data-list[popsubdatalist]',
    standalone: true,
    imports: [
        TuiDropdown,
		TuiOption,
        TuiChevron
    ],
    template: `
		@for(item of popsubdatalist; track $index){
			@if(item.items){
				<button
					class="subdatalistitem"
					tuiOption
					tuiChevron
					[iconStart]="item.icon"
					[disabled]="item.disabled"
					[tuiDropdown]="dropdownContent"
					[(tuiDropdownOpen)]="item.expanded"
					tuiDropdownLimitWidth="fixed"
					tuiDropdownSided="true"
					[style]="item.style"
				>
				{{item.label}}
				</button>

				<ng-template #dropdownContent>
					<div class="popdropdown">
						<tui-data-list
							class="popsubdatalist"
							[popsubdatalist]="item.items">
						</tui-data-list>
					</div>
				</ng-template>
			}
			@else {
				<button
					class="subdatalistitem"
					tuiOption
					[iconStart]="item.icon"
					[disabled]="item.disabled"
					(click)="item.command()"
					[style]="item.style"
				>
					{{item.label}}
				</button>
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
    @Input() popsubdatalist: PopoutMenuItem[] = [];
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
			[(tuiDropdownOpen)]="dropdownOpen"
		>
			{{label}}
			<ng-template #dropdownContent>
				<div class="popdropdown">
					<tui-data-list
						class="popsubdatalist"
						[popsubdatalist]="items">
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
    @Input() items: PopoutMenuItem[] = [];

	dropdownOpen = signal<boolean>(false);

	@Input() icon: string = 'plus';
    @Input() label: string = '';
	@Input() size: "l" | "m" | "s" = 'm';
	@Input() appearance: string = 'flat';

	ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && changes['items'].currentValue != changes['items'].previousValue) {
            this.items = changes['items'].currentValue;
        }
    }
}
