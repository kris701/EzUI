import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable, TuiTablePagination } from '@taiga-ui/addon-table';
import { TuiButton, TuiDropdown, TuiHint, TuiIcon, TuiInput, TuiLoader, TuiScrollbar } from "@taiga-ui/core";
import { TuiChevron, TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiBlockStatus } from '@taiga-ui/layout';
import { EzUITableFilter } from './models/table.filter';
import { EzUITableSort } from './models/table.sort';
import { EzUITableSortFilterPreset } from './models/table.sortFilterPreset';
import { EzUITableFilterService } from './services/table.filterservice';
import { EzUITablePresets } from './table.presets';

@Component({
    selector: 'ezui-table',
    imports: [FormsModule, CommonModule, TuiTable, TuiScrollbar, TuiButton, TuiChevron, TuiDropdown, TuiDataListWrapper, TuiTablePagination, TuiLoader, TuiBlockStatus, TuiIcon, TuiInput, EzUITablePresets, TuiHint],
    template: `
		<div class="ezui-table">
			<tui-loader [inheritColor]="true" [overlay]="true" size="xxl" [loading]="isLoading()">
				@if(values.length == 0){
					<tui-block-status>
						<tui-icon tuiSlot="top" icon="grid-2x2-x" />

						<h3>No Data</h3>

						No data to display.
					</tui-block-status>
				}
				@else {
					@if(showAdd || showRefresh || showClearFilters){
						<div class="ezui-table-header">
							@if(showRefresh){
								<button tuiButton iconStart="rotate-cw" size="s" appearance="info" (click)="onLoadItems.emit()" tuiHint="Refresh the table"></button>
							}
							@if(showAdd){
								<button tuiButton iconStart="plus" size="s" appearance="info" (click)="onAddItem.emit()" tuiHint="Add new item"></button>
							}
							@if(showClearFilters){
								<button tuiButton iconStart="funnel-x" size="s" appearance="info" (click)="clearFilters()" tuiHint="Clear filters"></button>
							}
						</div>
					}
					@if(allowPresets){
						<ezui-table-presets #presetHeader [storageKey]="storageKey" (onPresetChange)="onPresetChange.emit($event)">
						</ezui-table-presets>
					}
					<tui-scrollbar class="forcefullsize">
						<table tuiTable class="forcefullsize">
							<thead>
								<tr>
									@if(expandable){
										<th tuiTh></th>
									}
									<ng-container [ngTemplateOutlet]="tableHeader"></ng-container>
								</tr>
							</thead>
							@for (item of displayValues(); track page() * pageSize() + i; let i = $index){
								@let fullIndex = page() * pageSize() + i;
								<tbody tuiTbody>
									<tr>
										@if(expandable){
											<td tuiTd class="ezui-table-expander">
												<button
													appearance="flat-grayscale"
													size="xs"
													tuiIconButton
													type="button"
													[tuiChevron]="state[fullIndex] ?? false"
													(click)="state[fullIndex] = !state[fullIndex];onRowExpanded.emit(item)"
												>
													Toggle
												</button>
											</td>
										}
										<ng-container [ngTemplateOutlet]="tableRows" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
									</tr>
								</tbody>

								<tbody tuiTableExpand [expanded]="state[fullIndex] ?? false">
									@if(state[fullIndex] ?? false){
										<tr>
											<ng-container [ngTemplateOutlet]="tableExpandedrow" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
										</tr>
									}
								</tbody>
							}
						</table>
					</tui-scrollbar>
					@if(internalValues.length > pageSize() || pageSize() != 25){
						<div class="ezui-table-footer">
							<tui-table-pagination
								[(size)]="pageSize"
								[(page)]="page"
								[total]="internalValues.length"
								[items]="pageSizes"
								(pageChange)="processPage()"
								(sizeChange)="processPage()"
							/>
						</div>
					}
				}
			</tui-loader>
		</div>
    `,
    host: {
		class:'w-full h-full'
    },
    styles: `
		.ezui-table {
			border: 2px solid var(--tui-border-normal);
			border-radius: var(--tui-radius-l);
			display:flex;
			height:100%;
			width:100%;
			overflow:hidden;

			::ng-deep tui-loader {
				display:flex;
				height:100%;
				width:100%;
				flex-direction: column;

				> .t-content {
					display:flex;
					height:100%;
					width:100%;
					flex-direction: column;
					gap:0.5rem;
					overflow-x:auto;
				}

				> .t-loader {
					position:absolute;
					width:100%;
					height:100%;
				}
			}

			::ng-deep tui-scrollbar {
				> .t-content {
					display:flex;
					gap:10px;
					width:0px;
				}
			}

			.ezui-table-header {
				display:flex;
				flex-direction: row;
				gap:10px;
				padding-top:5px;
				padding-left:5px;
				padding-right:5px;
				padding-bottom:0px;
			}

			.ezui-table-footer {
				display:flex;
				margin-bottom:0.5rem;
				padding-left:2rem;
				padding-right:2rem;

				tui-table-pagination {
					flex: 1
				}
			}

			::ng-deep table {
				border-radius: var(--tui-radius-l);
			}

			::ng-deep th {
				background-color: var(--tui-background-base-alt) !important;
			}

			::ng-deep .ezui-table-expander {
				padding:0px;

				button {
					width:100%;
					height:100%;
					border-radius: 0px;
				}
			}

			th[tuiTh] {
				align-items:center;
			}

			.forcefullsize {
				width: 100% !important;
			}

			tui-block-status {
				padding-top:20px;
				padding-bottom:20px;
			}
		}
    `
})
export class EzUITable implements OnChanges {
    @ContentChild('tableHeader', { static: false }) tableHeader: TemplateRef<any> | undefined;
    @ContentChild('tableRows', { static: false }) tableRows: TemplateRef<any> | undefined;
    @ContentChild('tableExpandedrow', { static: false }) tableExpandedrow: TemplateRef<any> | undefined;

    @ViewChild('presetHeader', { static: false }) presetHeader: EzUITablePresets | undefined;

    @Input() disabled: boolean = false;
    @Input() isLoading = signal<boolean>(false);

    @Input() showAdd: boolean = false;
    @Input() showRefresh: boolean = false;
    @Input() showClearFilters: boolean = false;

	@Input() expandable: boolean = false;

    @Input() values: any[] = [];
	internalValues: any[] = [];
    displayValues = signal<any[]>([]);

	sorts = signal<EzUITableSort[]>([]);
	filters = signal<EzUITableFilter[]>([]);

	@Input() storageKey: string | null = null;
	@Input() allowPresets: boolean = false;

	constructor(private filterService : EzUITableFilterService){

	}

	async ngOnChanges(changes: SimpleChanges) {
		if (changes['values'] && changes['values'].previousValue != changes['values'].currentValue) {
			this.values = changes['values'].currentValue;
			this.applyFilter();
		}
	}

    @Output() onAddItem: EventEmitter<any> = new EventEmitter();
    @Output() onLoadItems: EventEmitter<any> = new EventEmitter();
    @Output() onRowExpanded: EventEmitter<any> = new EventEmitter();
	@Output() onPresetChange: EventEmitter<EzUITableSortFilterPreset | null> = new EventEmitter<EzUITableSortFilterPreset | null>();

    @Input() pageSize = signal<number>(25);
	page = signal<number>(0);
	pages = signal<number>(0);
	readonly pageSizes = [10, 25, 50, 100, 1000];
	processPage(){
		var fromIndex = this.pageSize() * this.page();
		var toIndex = fromIndex + this.pageSize();
		this.displayValues.set(this.internalValues.slice(fromIndex, toIndex));
	}

	applySorts(){
		var sorted = [...this.internalValues]
		for(var sort of this.sorts())
			sorted = this.filterService.sort(sorted, sort);
		this.internalValues = sorted;
	}

	applyFilter(){
		var filtered = [...this.values]
		for(var filter of this.filters())
			filtered = this.filterService.filter(filtered, filter);
		this.internalValues = filtered;
		this.applySorts();
		this.state = [];
		this.page.set(0);
		this.pages.set(Math.floor(this.internalValues.length / this.pageSize()) + 1)
		this.processPage();

		this.presetHeader?.saveCurrentPreset();
	}

	state: Record<number, boolean> = {};

	setSort(sort : EzUITableSort){
		var sorts = this.sorts();
		var target = sorts.findIndex(x => x.column == sort.column);
		if (target != -1)
			sorts[target] = sort;
		else
			sorts.push(sort);
		this.sorts.set(sorts);

		this.applyFilter();
	}

	clearSort(column : string){
		var sorts = this.sorts();
		var target = sorts.findIndex(x => x.column == column);
		if (target != -1)
			sorts.splice(target, 1)
		this.sorts.set(sorts);

		this.applyFilter();
	}

	setFilter(filter : EzUITableFilter){
		var filters = this.filters();
		var target = filters.findIndex(x => x.column == filter.column);
		if (target != -1){
			filters[target] = filter;
		}
		else
			filters.push(filter);
		this.filters.set(filters);

		this.applyFilter();
	}

	clearFilter(column : string){
		var filters = this.filters();
		var target = filters.findIndex(x => x.column == column);
		if (target != -1)
			filters.splice(target, 1)
		this.filters.set(filters);

		this.applyFilter();
	}

	clearFilters(){
		this.presetHeader?.currentPreset.set(null);
		this.onPresetChange.emit(null);
		this.sorts.set([])
		this.filters.set([])
		this.presetHeader?.savePresets();
		this.applyFilter();
	}
}

