import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiInput, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiChip, TuiSelect } from '@taiga-ui/kit';

@Component({
    selector: 'ezui-select',
    imports: [
    FormsModule,
    CommonModule,
    TuiSelect,
    TuiDataList,
    TuiTextfield,
    TuiDropdown,
    TuiChevron,
    TuiInput,
    TuiChip
],
    template: `
		<tui-textfield tuiChevron [content]="content" [tuiTextfieldSize]="size" [iconStart]="icon">
			@if(label != ''){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiSelect [(ngModel)]="selected" (ngModelChange)="selectedChange.emit(this.selected)" [disabled]="disabled"/>
			<tui-data-list *tuiDropdown >
				@for (item of options; track getOptionValue(item)) {
					@let value = getOptionValue(item);
					@let label = getOptionLabel(item);
					<button tuiOption [value]="value" >
						<span tuiChip size="xs" [appearance]="appearanceMap[value]">{{label}}</span>
					</button>
				}
			</tui-data-list>
		</tui-textfield>

		<ng-template #content>
			<span tuiChip [size]="label != '' ? 'xxs' : 'xs'" [appearance]="appearanceMap[selected]">{{stringify(selected)}}</span>
		</ng-template>
    `,
    styles: `
    `
})
export class EzUISelect implements OnChanges {
    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() optionLabel: string | undefined = undefined;
    @Input() optionValue: string | undefined = undefined;

    @Input() options: any[] = [];
    @Input() disabled: boolean = false;

    @Input() selected: any | null | undefined = undefined;
    @Output() selectedChange = new EventEmitter<any | null | undefined>();

	@Input() appearanceMap : {[value:string | number]:string} = {
	}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue) {
            this.selected = changes['selected'].currentValue;
        }
    }

	stringify = (value: string): string => this.getOptionLabel(this.options.find((item) => this.getOptionValue(item) === value));

    getOptionLabel(item: any) {
		if (!item)
			return "";
        if (this.optionLabel == undefined || this.optionLabel == '') return item;
        return item[this.optionLabel];
    }

    getOptionValue(item: any) {
		if (!item)
			return "";
        if (this.optionValue == undefined || this.optionValue == '') return item;
        return item[this.optionValue];
    }
}
