import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiInput, TuiLabel, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiChip, TuiSelect } from '@taiga-ui/kit';
import {TuiAutoFocus} from '@taiga-ui/cdk';

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
    TuiChip,
	TuiAutoFocus
],
    template: `
		<tui-textfield tuiChevron [content]="content" [tuiTextfieldSize]="size" [iconStart]="icon">
			@if(label != '' && size != 's'){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiSelect [(ngModel)]="selected" [placeholder]="size == 's' ? label : ''" (ngModelChange)="selectedChange.emit(this.selected)" [disabled]="disabled"/>
			<tui-data-list *tuiDropdown >
				@if(enableSearch){
					<tui-textfield tuiTextfieldSize="s" iconStart="search">
						<input tuiInput tuiAutoFocus #field [(ngModel)]="searchValue" (click)="field.focus()"/>
					</tui-textfield>
				}
				@for (item of options; track getOptionValue(item)) {
					@let label = getOptionLabel(item);
					@if(!enableSearch || (searchValue == '' || label.includes(searchValue))) {

						@let value = getOptionValue(item);
						<button tuiOption [value]="value" >
						@if(itemTemplate){
							<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
						}
						@else {
							<span tuiChip size="xs" [appearance]="appearanceMap[value]">{{label}}</span>
						}
						</button>
					}
				}
			</tui-data-list>
		</tui-textfield>

		<ng-template #content>
			@if(selectedTemplate){
				<ng-container [ngTemplateOutlet]="selectedTemplate" [ngTemplateOutletContext]="{ $implicit: getSelectedItem(selected)  }"></ng-container>
			}
			@else {
				<span tuiChip [size]="label != '' ? 'xxs' : 'xs'" [appearance]="appearanceMap[selected]">{{stringify(selected)}}</span>
			}
		</ng-template>
    `,
    styles: `
    `
})
export class EzUISelect implements OnChanges {
	@ContentChild('selectedTemplate', { static: false }) selectedTemplate: TemplateRef<any> | undefined;
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;

    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() optionLabel: string | undefined = undefined;
    @Input() optionValue: string | undefined = undefined;

    @Input() options: any[] = [];
    @Input() disabled: boolean = false;

    @Input() selected: any | null | undefined = undefined;
    @Output() selectedChange = new EventEmitter<any | null | undefined>();

	@Input() appearanceMap : {[value:string | number]:string} = {}

	@Input() enableSearch: boolean = false;
	searchValue : string = "";

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue) {
            this.selected = changes['selected'].currentValue;
        }
    }

	getSelectedItem(value : string){
		return this.options.find((item) => this.getOptionValue(item) === value);
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
