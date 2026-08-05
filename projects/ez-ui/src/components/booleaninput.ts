import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';

@Component({
    selector: 'ezui-booleaninput',
    imports: [
		FormsModule,
		CommonModule,
		TuiBlock,
		TuiSwitch,
		TuiIcon
	],
    template: `
	    <label class="boolean-container" [tuiBlock]="size">
			@if(icon && icon != ''){
				<tui-icon [icon]="icon" />
			}
	        {{label}}
			<div style="flex-grow:1"></div>
	        <input
	            size="s"
	            tuiSwitch
	            type="checkbox"
				[disabled]="disabled"
				[(ngModel)]="value"
				(ngModelChange)="valueChange.emit(value)"
	        />
	    </label>
    `,
    styles: `
		.boolean-container {
			display:flex;
			flex-direction: row;
			gap:10px;
			width:100%;
			background-color: var(--tui-background-neutral-1);
		}
    `
})
export class EzUIBooleanInput implements OnChanges {
    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() disabled: boolean = false;

    @Input() value: boolean | null = false;
    @Output() valueChange = new EventEmitter<boolean | null>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && changes['value'].currentValue != changes['value'].previousValue) {
            this.value = changes['value'].currentValue;
        }
    }
}
