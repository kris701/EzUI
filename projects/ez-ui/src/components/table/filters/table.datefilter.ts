import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TuiDay, TuiDayRange, TuiTime } from "@taiga-ui/cdk/date-time";
import { TuiButton, TuiDropdown, TuiInput } from "@taiga-ui/core";
import { TuiBadgeNotification, TuiBadgedContent, TuiButtonSelect, TuiDataListWrapper, TuiInputDateTime, TuiStringifyContentPipe, TuiInputDateDirective, tuiCreateDefaultDayRangePeriods, TuiCalendarRange } from "@taiga-ui/kit";
import { EzUITableFilter } from "../models/table.filter";
import { EzUITable } from "../table";

@Component({
    selector: 'ezui-table-datefilter',
    imports: [CommonModule, FormsModule, TuiDropdown, TuiDataListWrapper, TuiButton, TuiButtonSelect, TuiStringifyContentPipe, TuiBadgeNotification, TuiBadgedContent, TuiInput, TuiInputDateTime, TuiInputDateDirective, TuiCalendarRange],
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
					[tuiDropdownMaxHeight]="500"
					(click)="filterVisible.set(true)"
				></button>
			</tui-badged-content>

			<ng-template #filterPop>
				<div class="filterPopContainer">
					@let filter = filterType();
					<button
						appearance="outline-grayscale"
						size="s"
						tuiButton
						tuiButtonSelect
						[(ngModel)]="filterType"
					>
						{{ filter.label }}
						<tui-data-list-wrapper
							*tuiDropdown
							[itemContent]="stringify | tuiStringifyContent"
							[items]="filterTypes"
						/>
					</button>

					@if(filter.expression == 'dat;wit'){
						<tui-calendar-range [items]="rangeItems" [(value)]="value" />
					}
					@else {
						<tui-textfield (keydown.enter)="applyFilter(filter.expression)">
							<label tuiLabel>Choose a date</label>
							<input
								tuiInputDate
								[(ngModel)]="value"
							/>
							<tui-calendar *tuiDropdown />
						</tui-textfield>
					}

					<button
						tuiButton size="s"
						iconStart="funnel"
						tuiButton
						(click)="applyFilter(filter.expression)"
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
export class EzUITableDateFilter {
    @Input() column!: string;

	filterApplied = signal<boolean>(false);
	filterVisible = signal<boolean>(false);

	table : EzUITable;

	value : any = TuiDay.currentLocal();
	filterType = signal<any>({});
	filterTypes : any[];

	rangeItems = tuiCreateDefaultDayRangePeriods();

	protected readonly stringify = (item: any): string => `${item.label}`;

	constructor(table : EzUITable){
		this.table = table;

		this.filterTypes = [
			{
				label: 'After',
				expression: 'dat;aft'
			},
			{
				label: 'Before',
				expression: 'dat;bef'
			},
			{
				label: 'Within',
				expression: 'dat;wit'
			}
		];
		this.filterType.set(this.filterTypes[0]);

		this.table.onPresetChange.subscribe(x => {
			if (!x)
			{
				this.filterType.set(this.filterTypes[0]);
				this.value = TuiDay.currentLocal();
				this.filterApplied.set(false);
				return;
			}
			const filter = x.filters.find(x => x.column == this.column);
			if (!filter)
			{
				this.filterType.set(this.filterTypes[0]);
				this.value = TuiDay.currentLocal();
				this.filterApplied.set(false);
				return;
			}
			const type = this.filterTypes.find(x => x.expression == filter!.expression);
			if (!type)
			{
				this.filterType.set(this.filterTypes[0]);
				this.value = TuiDay.currentLocal();
				this.filterApplied.set(false);
				return;
			}

			this.filterType.set(type);
			let forceReapply = false;
			if (type.expression == "dat;wit"){
				if(typeof filter.value.from == 'string'){
					this.value = new TuiDayRange(TuiDay.jsonParse(filter.value.from), TuiDay.jsonParse(filter.value.to));
					forceReapply = true;
				}
				else
					this.value = filter.value;
			}
			else {
				if (typeof filter.value == 'string'){
					this.value = TuiDay.jsonParse(filter.value);
					forceReapply = true;
				}
				else
					this.value = filter.value;
			}
			this.filterApplied.set(true);

			if (forceReapply){
				// Force reapply filter, to fix local storage parsing issue
				this.applyFilter(type.expression);
			}
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
