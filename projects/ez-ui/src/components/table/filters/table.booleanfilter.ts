import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TuiButton, TuiCheckbox, TuiDropdown, TuiInput } from "@taiga-ui/core";
import { TuiBadgeNotification, TuiBadgedContent, TuiBlock, TuiDataListWrapper } from "@taiga-ui/kit";
import { EzUITableFilter } from "../models/table.filter";
import { EzUITable } from "../table";

@Component({
    selector: 'ezui-table-booleanfilter',
    imports: [CommonModule, FormsModule, TuiDropdown, TuiDataListWrapper, TuiButton, TuiBadgeNotification, TuiBadgedContent, TuiInput, TuiCheckbox, TuiBlock],
    template: `
		@if(column){
			<tui-badged-content>
				@if(filterApplied()){
					<tui-badge-notification
						size="s"
						tuiSlot="top"
					>
						1
					</tui-badge-notification>
				}
				<button
					tuiButton size="s"
					iconStart="funnel"
					appearance="flat-grayscale"
					style="opacity:0.72"
					[tuiDropdown]="filterPop"
					[(tuiDropdownOpen)]="filterVisible"
					(click)="filterVisible.set(true)"
				></button>
			</tui-badged-content>

			<ng-template #filterPop>
				<div class="filterPopContainer">
					<label tuiBlock="s" style="justify-content:center">
						True
						<input
							size="s"
							tuiCheckbox
							type="checkbox"
							[(ngModel)]="value"
						/>
					</label>
					<button
						tuiButton size="s"
						iconStart="funnel"
						tuiButton
						(click)="applyFilter()"
					>
						Apply
					</button>

					@if(filterApplied()){
						<button
							tuiButton size="s"
							iconStart="circle-x"
							appearance="secondary"
							tuiButton
							(click)="clearFilter()"
						>
							Clear
						</button>
					}
				</div>
			</ng-template>
		}
    `,
	styles: `
		.filterPopContainer {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 10px;
			min-width:20rem;
		}
	`
})
export class EzUITableBooleanFilter {
    @Input() column!: string;

	filterApplied = signal<boolean>(false);
	filterVisible = signal<boolean>(false);

	table : EzUITable;

	value : boolean = false;

	constructor(table : EzUITable){
		this.table = table;

		this.table.onPresetChange.subscribe(x => {
			if (!x)
			{
				this.value = false;
				this.filterApplied.set(false);
				return;
			}
			const filter = x.filters.find(x => x.column == this.column)
			console.log(filter)
			if (!filter || filter!.expression != "bol;true")
			{
				this.value = false;
				this.filterApplied.set(false);
				return;
			}

			this.value = filter.value;
			this.filterApplied.set(true);
		})
	}

	applyFilter(){
		this.table.setFilter({
			column: this.column,
			value: this.value,
			expression: "bol;true",
		} as EzUITableFilter);
		this.filterVisible.set(false);
		this.filterApplied.set(true);
	}

	clearFilter(){
		this.table.clearFilter(this.column);
		this.filterVisible.set(false);
		this.filterApplied.set(false);
	}
}
