import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDropdownSheet } from '@taiga-ui/addon-mobile';
import { TuiDay, TuiTime } from '@taiga-ui/cdk/date-time';
import { TuiButton, TuiInput } from '@taiga-ui/core';
import { TuiInputDateTime } from '@taiga-ui/kit';

@Component({
    selector: 'ezui-datetimeinput',
    imports: [
		FormsModule,
		TuiInput,
		TuiInputDateTime,
		TuiButton,
		TuiDropdownSheet
	],
    template: `
		<tui-textfield [tuiTextfieldSize]="size" [iconStart]="icon" tuiDropdownSheet [tuiTextfieldCleaner]="showClear">
			@if(label){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiInputDateTime [(ngModel)]="internalValue" (ngModelChange)="updateValue()" [disabled]="disabled" [min]="toTuiDateTime(toDateOrNull(min))" [max]="toTuiDateTime(toDateOrNull(max))"/>
			<section *tuiDropdown class="datetime-dropdown">
				@let internal = internalValue();
				@if(showDate()){
					@if(internal && internal[1]){
						<button tuiButton iconStart="clock" (click)="showDate.set(false)" size="s">Set Time</button>
					}

					<tui-calendar/>
				}
				@else {
					<button tuiButton iconStart="calendar" (click)="showDate.set(true)" size="s">Set Date</button>

					@if(internal && internal[1]){
						@let time = internal[1];
						<div class="timeselector">
							<div class="selector">
								<button tuiButton (click)="setHours(time.hours + 1)" iconStart="plus" size="l"></button>
								<span>{{time.hours}}</span>
								<button tuiButton (click)="setHours(time.hours - 1)" iconStart="minus" size="l"></button>
							</div>
							<div class="selector">
								<button tuiButton (click)="setMinutes(time.minutes + 1)" iconStart="plus" size="l"></button>
								<span>{{time.minutes}}</span>
								<button tuiButton (click)="setMinutes(time.minutes - 1)" iconStart="minus" size="l"></button>
							</div>
						</div>
					}
				}
			</section>
		</tui-textfield>
    `,
    styles: `
		.datetime-dropdown {
			display:flex;
			flex-direction: column;

			.timeselector {
				inline-size: 12rem;
				display:flex;
				gap:10px;
				margin-top:10px;
				align-self:center;

				.selector {
					display:flex;
					flex-direction:column;
					align-self:center;
					width: 100%;

					span {
						text-align:center;
						font-size:40px;
					}
				}
			}
		}
    `
})
export class EzUIDateTimeInput implements OnChanges {
    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() disabled: boolean = false;

	@Input() min : Date | string | null = null;
	@Input() max : Date | string | null = null;

	TuiDay = TuiDay;
	TuiTime = TuiTime;

	showDate = signal<boolean>(true);

    @Input() value: Date | string | null = new Date();
    @Output() valueChange = new EventEmitter<Date | string | null>();

	internalValue = signal<[TuiDay, TuiTime] | null>(null);

	@Input() showClear: boolean = true;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && changes['value'].currentValue != changes['value'].previousValue) {
            this.value = changes['value'].currentValue;
			this.internalValue.set(this.toTuiDateTime(this.toDateOrNull(this.value)));
			const internal = this.internalValue();
			if (!internal || !internal[1])
				this.showDate.set(true);
        }
    }

	updateValue(){
		if (this.internalValue){
			let internal : [TuiDay, TuiTime] | null = this.internalValue()
			if (internal){
				if (!internal[1])
				{
					internal[1] = new TuiTime(0,0);
					this.internalValue.set(internal);
				}
				this.value = this.fromTuiDateTime(this.internalValue());
			}
			else {
				this.value = null;
			}
			this.valueChange.emit(this.value);
		}
	}

	toTuiDateTime(date : Date | null) : [TuiDay, TuiTime] | null {
		if (date)
			return [TuiDay.fromUtcNativeDate(date), TuiTime.fromLocalNativeDate(date)];
		return null;
	}

	fromTuiDateTime(date : [TuiDay, TuiTime] | null) : Date | null{
		if(date){
			let value = date[0].toUtcNativeDate();
			const {hours = 0, minutes = 0} = date?.[1] ?? {};
			value.setHours(hours, minutes);
			return value;
		}
		return null;
	}

	setHours(value : number){
		let internal = this.internalValue();
		if(internal && internal[1]){
			if (value > 23)
				value = 0;
			if (value < 0)
				value = 23;
			internal[1] = new TuiTime(value, internal[1].minutes)
			this.internalValue.set(internal)
			this.updateValue();
		}
	}

	setMinutes(value : number){
		let internal = this.internalValue();
		if(internal && internal[1]){
			if (value > 59)
				value = 0;
			if (value < 0)
				value = 59;
			internal[1] = new TuiTime(internal[1].hours, value)
			this.internalValue.set(internal)
			this.updateValue();
		}
	}

	toDateOrNull(value : Date | string | null) : Date | null {
		if (value) return new Date(value);
		return null;
	}
}
