import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { TuiButton } from "@taiga-ui/core";
import { EzUITableSort } from "../models/table.sort";
import { EzUITable } from "../table";

@Component({
    selector: 'ezui-table-sortable',
    imports: [CommonModule, TuiButton],
    template: `
		@if(column){
			<button tuiButton style="opacity:0.72" [iconStart]="icon()" size="s" appearance="flat-grayscale" (click)="sort()"></button>
		}
    `
})
export class EzUITTableSortableColumn {
    @Input() column!: string;

	table : EzUITable;
	state : 'asc' | 'desc' | 'none' = 'none';
	icon = signal<string | null | undefined>("text-align-justify");

	constructor(table : EzUITable){
		this.table = table;

		this.table.onPresetChange.subscribe(x => {
			if (!x)
			{
				this.state = 'none'
				this.icon.set('text-align-justify');
				return;
			}
			var sort = x.sorts.find(x => x.column == this.column);
			if (!sort)
			{
				this.state = 'none'
				this.icon.set('text-align-justify');
				return;
			}
			this.state = sort.state;

			switch(sort.state){
				case 'none':
					this.icon.set('text-align-justify');
					break;
				case 'asc':
					this.icon.set('arrow-up-wide-narrow');
					break;
				case 'desc':
					this.icon.set('arrow-down-wide-narrow');
					break;
			}
		})
	}

	sort(){
		switch(this.state){
			case 'none':
				this.state = 'asc';
				this.table.setSort({ column: this.column, state: this.state } as EzUITableSort)
				this.icon.set('arrow-up-wide-narrow');
				break;
			case 'asc':
				this.state = 'desc';
				this.table.setSort({ column: this.column, state: this.state } as EzUITableSort)
				this.icon.set('arrow-down-wide-narrow');
				break;
			case 'desc':
				this.state = 'none';
				this.table.clearSort(this.column);
				this.icon.set('text-align-justify');
				break;
		}
	}
}
