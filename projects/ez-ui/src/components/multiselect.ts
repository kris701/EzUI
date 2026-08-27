import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiInput, TuiSelectLike, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiChip, TuiInputChip, TuiMultiSelect } from '@taiga-ui/kit';
import {TuiAutoFocus} from '@taiga-ui/cdk';

@Component({
    selector: 'ezui-multiselect',
    imports: [
		FormsModule,
		CommonModule,
		TuiMultiSelect,
		TuiDataList,
		TuiTextfield,
		TuiInputChip,
		TuiSelectLike,
		TuiMultiSelect,
		TuiDropdown,
		TuiChevron,
		TuiChip,
		TuiAutoFocus,
		TuiInput
	],
    template: `
		<tui-textfield multi tuiChevron [stringify]="stringify" [tuiTextfieldSize]="size" [iconStart]="icon">
			@if(label != '' && size != 's'){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiInputChip tuiSelectLike [(ngModel)]="selected" [placeholder]="size == 's' ? label : ''" (ngModelChange)="selectedChange.emit(this.selected)" [disabled]="disabled"/>
			<tui-input-chip
				*tuiItem="let context"
				[appearance]="appearanceMap[context.item] ? appearanceMap[context.item] : 'neutral'"/>
			<tui-data-list *tuiDropdown tuiMultiSelectGroup >
				@if(enableSearch){
					<tui-textfield tuiTextfieldSize="s" iconStart="search">
						<input tuiInput tuiAutoFocus #field [(ngModel)]="searchValue" (click)="field.focus()"/>
					</tui-textfield>
				}
				@for (item of options; track getOptionValue(item)) {
					@let label = getOptionLabel(item);
					@if(!enableSearch || (searchValue == '' || label.includes(searchValue))){
						@let value = getOptionValue(item);
						<button tuiOption [value]="value" >
							@if(itemTemplate){
								<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
							}
							@else {
								<span tuiChip size="xs" [appearance]="appearanceMap[value] ? appearanceMap[value] : 'neutral'">{{label}}</span>
							}
						</button>
					}
				}
			</tui-data-list>
		</tui-textfield>
    `,
    styles: `
    `
})
export class EzUIMultiSelect implements OnChanges {
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;

    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() optionLabel: string | undefined = undefined;
    @Input() optionValue: string | undefined = undefined;

    @Input() options: any[] = [];
    @Input() disabled: boolean = false;

    @Input() selected: any[] | null | undefined = undefined;
    @Output() selectedChange = new EventEmitter<any[] | null | undefined>();

	@Input() appearanceMap : {[value:string | number]:string} = {}

	@Input() enableSearch: boolean = false;
	searchValue : string = "";

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
