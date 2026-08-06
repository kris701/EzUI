import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TuiButton, TuiDataList, TuiDropdown, TuiInput } from "@taiga-ui/core";
import { TuiBadgeNotification, TuiBadgedContent, TuiButtonSelect, TuiDataListWrapper, TuiMultiSelect, TuiStringifyContentPipe } from "@taiga-ui/kit";
import { EzUITableFilter } from "../models/table.filter";
import { EzUITable } from "../table";

@Component({
    selector: 'ezui-table-selectfilter',
    imports: [CommonModule, FormsModule, TuiDropdown, TuiDataListWrapper, TuiButton, TuiButtonSelect, TuiStringifyContentPipe, TuiBadgeNotification, TuiBadgedContent, TuiInput, TuiMultiSelect, TuiDataList],
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
							[itemContent]="stringifyOption | tuiStringifyContent"
							[items]="filterTypes"
						/>
					</button>

					<button
						appearance="secondary-grayscale"
						size="s"
						tuiButton
						tuiButtonSelect
						[(ngModel)]="selected"
					>
						{{selected.length === 1 ? stringifyValue(selected[0]) : 'Selected ' + selected.length}}

						<tui-data-list *tuiDropdown>
							<tui-opt-group
								label="Options"
								tuiMultiSelectGroup
							>
								@for (option of options; track getOptionValue(option)) {
									<button
										tuiOption
										type="button"
										[value]="getOptionValue(option)"
									>
										{{ getOptionLabel(option) }}
									</button>
								}
							</tui-opt-group>
						</tui-data-list>
					</button>

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
export class EzUITableSelectFilter {
    @Input() column!: string;

	filterApplied = signal<boolean>(false);
	filterVisible = signal<boolean>(false);

	table : EzUITable;

	@Input() optionLabel: string | undefined = undefined;
    @Input() optionValue: string | undefined = undefined;

	@Input() options : any[] = [];
	selected : string[] = [];
	filterType : any;
	filterTypes : any[];

	protected readonly stringifyOption = (item: any): string => `${item.label}`;
	stringifyValue = (value: string): string => this.getOptionLabel(this.options.find((item) => this.getOptionValue(item) === value));

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

	constructor(table : EzUITable){
		this.table = table;

		this.filterTypes = [
			{
				label: 'Contains',
				expression: 'sel;con'
			},
			{
				label: 'Not Contains',
				expression: 'sel;ncon'
			}
		];
		this.filterType = this.filterTypes[0];

		this.table.onPresetChange.subscribe(x => {
			if (!x)
			{
				this.filterType = this.filterTypes[0];
				this.selected = [];
				this.filterApplied.set(false);
				return;
			}
			const filter = x.filters.find(x => x.column == this.column);
			if (!filter)
			{
				this.filterType = this.filterTypes[0];
				this.selected = [];
				this.filterApplied.set(false);
				return;
			}
			const type = this.filterTypes.find(x => x.expression == filter!.expression);
			if (!type)
			{
				this.filterType = this.filterTypes[0];
				this.selected = [];
				this.filterApplied.set(false);
				return;
			}

			this.filterType = type;
			this.selected = filter.value;
			this.filterApplied.set(true);
		})
	}

	applyFilter(expression : string){
		this.table.setFilter({
			column: this.column,
			value: this.selected,
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
