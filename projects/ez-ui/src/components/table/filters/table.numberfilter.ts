import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TuiButton, TuiDropdown } from "@taiga-ui/core";
import { TuiBadgeNotification, TuiBadgedContent, TuiButtonSelect, TuiDataListWrapper, TuiInputNumber, TuiStringifyContentPipe } from "@taiga-ui/kit";
import { EzUITableFilter } from "../models/table.filter";
import { EzUITable } from "../table";

@Component({
    selector: 'ezui-table-numberfilter',
    imports: [CommonModule, FormsModule, TuiDropdown, TuiDataListWrapper, TuiButton, TuiButtonSelect, TuiStringifyContentPipe, TuiBadgeNotification, TuiBadgedContent, TuiInputNumber],
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
					<button
						appearance="outline-grayscale"
						size="s"
						tuiButton
						tuiButtonSelect
						[(ngModel)]="filterType"
					>
						{{ filterType.label }}
						<tui-data-list-wrapper
							*tuiDropdown
							[itemContent]="stringify | tuiStringifyContent"
							[items]="filterTypes"
						/>
					</button>

					<tui-textfield tuiTextfieldSize="s" (keydown.enter)="applyFilter(filterType.expression)">
						<input tuiInputNumber [(ngModel)]="value"/>
					</tui-textfield>
					<button
						tuiButton size="s"
						iconStart="funnel"
						tuiButton
						(click)="applyFilter(filterType.expression)"
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
export class EzUITableNumberFilter {
    @Input() column!: string;

	filterApplied = signal<boolean>(false);
	filterVisible = signal<boolean>(false);

	table : EzUITable;

	value : number = 0;
	filterType : any;
	filterTypes : any[];

	protected readonly stringify = (item: any): string => `${item.label}`;

	constructor(table : EzUITable){
		this.table = table;

		this.filterTypes = [
			{
				label: 'Less Than',
				expression: 'num;ls'
			},
			{
				label: 'Less Than or Equal',
				expression: 'num;lseq'
			},
			{
				label: 'Equal',
				expression: 'num;eq'
			},
			{
				label: 'Greater Than',
				expression: 'num;gr'
			},
			{
				label: 'Greater Than or Equal',
				expression: 'num;greq'
			}
		];
		this.filterType = this.filterTypes[0];

		this.table.onPresetChange.subscribe(x => {
			if (!x)
			{
				this.filterType = this.filterTypes[0];
				this.value = 0;
				this.filterApplied.set(false);
				return;
			}
			const filter = x.filters.find(x => x.column == this.column);
			if (!filter)
			{
				this.filterType = this.filterTypes[0];
				this.value = 0;
				this.filterApplied.set(false);
				return;
			}
			const type = this.filterTypes.find(x => x.expression == filter!.expression);
			if (!type)
			{
				this.filterType = this.filterTypes[0];
				this.value = 0;
				this.filterApplied.set(false);
				return;
			}

			this.filterType = type;
			this.value = filter.value;
			this.filterApplied.set(true);
		})
	}

	applyFilter(expression : string){
		this.table.setFilter({
			column: this.column,
			value: this.value,
			expression: expression,
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
