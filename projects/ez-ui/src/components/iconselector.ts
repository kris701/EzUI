import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { lucideicons } from '../constants/lucideicons';
import { EzUITextInput } from "./textinput";

@Component({
    selector: 'ezui-iconselector',
    imports: [
    FormsModule,
    CommonModule,
    TuiButton,
    TuiDropdown,
    EzUITextInput
],
    template: `
		<button
			tuiButton
			[iconStart]="selected"
			[size]="size"
			[tuiAppearanceState]="open() ? 'active' : null"
			[tuiDropdown]="dropdown"
			[(tuiDropdownOpen)]="open"
			[disabled]="disabled"
		></button>

		<ng-template #dropdown let-close>
			<div class="dropdown-container">
				<ezui-textinput #sch icon="search" label="Search" size="s" (valueChange)="doSearch(sch.value)"/>
				@if (currentOptions.length > 0) {
					<div class="icon-container">
						@for (icon of currentOptions.slice(0,100); track icon) {
							<button tuiButton [iconStart]="icon" size="s" appearance="flat" [tuiAppearanceFocus]='selected == icon ? true : null' (click)="setIcon(icon); close();currentOptions = [...lucideicons]"></button>
						}
						@if(currentOptions.length > 100){
							<p style="opacity:0.5;margin:0px;text-align:center;align-self:center">{{currentOptions.length - 100}} more icons...</p>
						}
					</div>
				} @else {
					<p>No icons match your search!</p>
				}
			</div>
		</ng-template>
    `,
    styles: `
		.dropdown-container {
			display: flex;
			flex-direction: column;
			padding: 10px;
			min-width: 10rem;
			gap:5px;

			.icon-container {
				display: flex;
				flex-wrap: wrap;
				gap:5px;
				max-width:30vw;
				max-height:30vh;
			}
		}
    `
})
export class EzUIIconSelector implements OnChanges {
	currentOptions : string[] = []
    @Input() disabled: boolean = false;

	@Input() size: "l" | "m" | "s" = 'm';

	open = signal<boolean>(false);

    @Input() selected: string = 'circle';
    @Output() selectedChange = new EventEmitter<string>();

	lucideicons = lucideicons;

	constructor() {
        this.currentOptions = [...lucideicons];
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue) {
            this.selected = changes['selected'].currentValue;
        }
    }

	doSearch(text: string | null | undefined){
        if (text) this.currentOptions = [...lucideicons.filter((x) => x.indexOf(text) != -1)];
        else this.currentOptions = [...lucideicons];
	}

	setIcon(value: string) {
        this.selected = value;
        this.selectedChange.emit(this.selected);
    }
}
