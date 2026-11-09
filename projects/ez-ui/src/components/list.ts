import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnChanges, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTablePagination } from '@taiga-ui/addon-table';
import { TuiLoader, TuiScrollbar } from '@taiga-ui/core';
import { TuiBlockStatus } from '@taiga-ui/layout';

@Component({
	selector: 'ezui-list',
	imports: [
		FormsModule,
		CommonModule,
		TuiTablePagination,
		TuiBlockStatus,
		TuiLoader,
		TuiScrollbar,
	],
	template: `
	<div class="ezui-list">
		<tui-scrollbar class="full-height-loader">
			<tui-loader class="full-height-loader" [inheritColor]="true" [overlay]="true" size="xxl" [loading]="isLoading()">
				@if(values.length == 0){
					@if(!isLoading()){
						<tui-block-status>
							<tui-icon tuiSlot="top" icon="grid-2x2-x" />

							<h3>No Data</h3>

							No data to display.
						</tui-block-status>
					}
				}
				@else {
					<div class="ezui-list-rowcontainer">
						@for (item of displayValues(); track page() * pageSize() + i; let i = $index){
							<ng-container [ngTemplateOutlet]="listRows" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
						}
					</div>
					<div style="flex-grow:1"></div>
					@if(values.length > pageSize() || pageSize() != 25){
						<div class="ezui-list-footer">
							<tui-table-pagination
								[(size)]="pageSize"
								[(page)]="page"
								[total]="values.length"
								[items]="pageSizes"
								(pageChange)="processPage()"
								(sizeChange)="processPage()"
							/>
						</div>
					}
				}
			</tui-loader>
		</tui-scrollbar>
	</div>
    `,
	host: {
		style: 'height:100%;overflow:auto;border: 2px solid var(--tui-border-normal);border-radius: var(--tui-radius-l);'
	},
	styles: `
		.full-height-loader {
			height:100%;
			width:100%;

			::ng-deep > .t-content {
				height:100%;
				display:flex;
				flex-direction: column;
			}
		}

		.ezui-list {
			display:flex;
			height:100%;

			.ezui-list-rowcontainer {
				display:flex;
				flex-direction:column;
				margin:5px;
			}

			.ezui-list-footer {
				border-bottom-left-radius: var(--tui-radius-l);
				border-bottom-right-radius: var(--tui-radius-l);

				background-color: var(--tui-background-base-alt);
				display:flex;
				padding-top:0.5rem;
				padding-bottom:0.5rem;
				padding-left:2rem;
				padding-right:2rem;

				tui-table-pagination {
					flex: 1
				}
			}
		}
    `
})
export class EzUIList implements OnChanges {
	@ContentChild('listRows', { static: false }) listRows: TemplateRef<any> | undefined;

	@Input() values: any[] = [];

	@Input() pageSize = signal<number>(25);
	page = signal<number>(0);
	pages = signal<number>(0);
	readonly pageSizes = [10, 25, 50, 100, 1000];

	displayValues = signal<any[]>([]);

	@Input() isLoading = signal<boolean>(false);

	ngOnChanges(changes: SimpleChanges) {
		if (changes['values'] && changes['values'].currentValue != changes['values'].previousValue) {
			this.values = changes['values'].currentValue;
			this.processPage();
		}
	}

	processPage() {
		const fromIndex = this.pageSize() * this.page();
		const toIndex = fromIndex + this.pageSize();
		this.displayValues.set(this.values.slice(fromIndex, toIndex));
	}
}
