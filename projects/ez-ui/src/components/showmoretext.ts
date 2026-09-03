import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiLink } from '@taiga-ui/core';
import { TuiElasticContainer } from '@taiga-ui/layout';

@Component({
    selector: 'ezui-showmoretext',
    imports: [
		FormsModule,
		CommonModule,
		TuiElasticContainer,
		TuiLink
	],
    template: `
		<tui-elastic-container>
			<div [innerHTML]="current()"></div>
			@if(value.length > maxCharacters){
				<button
					tuiLink
					type="button"
					(click)="toggle()"
				>
					Show {{ current() === value ? 'less' : 'more' }}
				</button>
			}
		</tui-elastic-container>
    `,
    styles: `
    `
})
export class EzUIShowMoreText implements OnChanges {
    @Input() value: string = "";
    valueSmall: string = "";

	@Input() maxCharacters: number = 256;

	current = signal<string>(this.valueSmall);

	protected toggle(): void {
		this.current.set(this.current() === this.valueSmall ? this.value : this.valueSmall);
	}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && changes['value'].currentValue != changes['value'].previousValue) {
            this.value = changes['value'].currentValue;
			this.valueSmall = this.value.substring(0,this.maxCharacters) + "...";
			this.current.set(this.valueSmall);
        }
    }
}
