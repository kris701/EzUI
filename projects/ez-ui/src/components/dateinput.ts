import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk/date-time';
import { TuiInput } from '@taiga-ui/core';
import { TuiInputDate } from '@taiga-ui/kit';

@Component({
    selector: 'ezui-dateinput',
    imports: [
		FormsModule,
		TuiInput,
		TuiInputDate
	],
    template: `
		<tui-textfield [tuiTextfieldSize]="size" [iconStart]="icon">
			@if(label){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiInputDate [(ngModel)]="internalValue" (ngModelChange)="updateValue()" [disabled]="disabled" [min]="toTuiDate(min)" [max]="toTuiDate(max)"/>
			<tui-calendar *tuiDropdown />
		</tui-textfield>
    `,
    styles: `
    `
})
export class EzUIDateInput implements OnChanges {
    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() disabled: boolean = false;

	@Input() min : Date | null = null;
	@Input() max : Date | null = null;

	TuiDay = TuiDay;

    @Input() value: Date | null = new Date;
    @Output() valueChange = new EventEmitter<Date | null>();

	internalValue = signal<TuiDay | null>(null);

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && changes['value'].currentValue != changes['value'].previousValue) {
            this.value = changes['value'].currentValue;
			this.internalValue.set(this.toTuiDate(this.value));
        }
    }

	updateValue(){
		if (this.internalValue){
			this.value = this.fromTuiDate(this.internalValue());
			this.valueChange.emit(this.value);
		}
	}

	toTuiDate(date : Date | null) : TuiDay | null {
		if (date)
			return TuiDay.fromUtcNativeDate(date);
		return null;
	}

	fromTuiDate(date : TuiDay | null) : Date | null{
		if(date){
			return date.toUtcNativeDate();
		}
		return null;
	}
}
