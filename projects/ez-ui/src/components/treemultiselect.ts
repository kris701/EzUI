import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiInput, TuiSelectLike, TuiTextfield, TuiIcon, TuiButton } from '@taiga-ui/core';
import { TuiChevron, TuiChip, TuiInputChip, TuiMultiSelect, TuiTree } from '@taiga-ui/kit';
import {TuiAutoFocus, TuiHandler} from '@taiga-ui/cdk';

@Component({
    selector: 'ezui-treemultiselect',
    imports: [
    FormsModule,
    CommonModule,
    TuiMultiSelect,
    TuiDataList,
    TuiTextfield,
    TuiInputChip,
    TuiSelectLike,
    TuiMultiSelect,
    TuiDropdown,
    TuiChevron,
    TuiChip,
    TuiAutoFocus,
    TuiInput,
    TuiIcon,
	TuiButton,
	TuiTree
],
    template: `
		<tui-textfield multi tuiChevron [stringify]="stringify" [tuiTextfieldSize]="size" [iconStart]="icon" [tuiTextfieldCleaner]="showClear">
			@if(label != '' && size != 's'){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiInputChip tuiSelectLike [(ngModel)]="selected" [placeholder]="size == 's' ? label : ''" (ngModelChange)="selectedChange.emit(this.selected)" [disabled]="disabled"/>
			<tui-input-chip *tuiItem/>
			<tui-data-list *tuiDropdown tuiMultiSelectGroup >
				@if(enableSearch){
					<tui-textfield tuiTextfieldSize="s" iconStart="search" style="margin-bottom:5px">
						<input tuiInput tuiAutoFocus #field [(ngModel)]="searchValue" (click)="field.focus()" (ngModelChange)="searchChange()"/>
					</tui-textfield>
				}

				<div class="toolbar">
					<button tuiButton size="xs" appearance="flat" (click)="expandAll()">Expand All</button>
					<button tuiButton size="xs" appearance="flat" (click)="collapseAll()">Collapse All</button>
				</div>

				@for(root of options; track root){
					<tui-tree
						[childrenHandler]="handler"
						[content]="treeContent"
						[tuiTreeController]="false"
						[value]="root"
						[map]="map"
					/>
				}
			</tui-data-list>
		</tui-textfield>

		<ng-template #treeContent let-node="node" let-value>
			<div class="wrapper">
				<button
					tuiOption
					[value]="value"
					[disabled]="value.selectable === false"
					[style.opacity]="!enableSearch || (searchValue() == '' || value.label.includes(searchValue())) ? (value.selectable === false ? 0.5 : 1) : 0.2"
				>
					@if(itemTemplate){
						<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: value  }"></ng-container>
					}
					@else {
						@if (value.icon) {
							<tui-icon class="t-icon" [icon]="value.icon"/>
						}
						{{ value.label }}
					}
				</button>
			</div>
		</ng-template>
    `,
    styles: `
		.toolbar {
			display: flex;
			flex-direction: row;
			gap:5px;
		}

		.wrapper {
			display: flex;
			align-items: center;
			width: 100%;

			button {
				width:100%;
			}
		}

		.t-icon::before {
			font-size: 1rem;
		}
    `
})
export class EzUITreeMultiSelect implements OnChanges {
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;

	protected readonly handler: TuiHandler<TreeMultiSelectNode, readonly TreeMultiSelectNode[]> = (item) => item.children || [];

    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() options: TreeMultiSelectNode[] = [];
    @Input() disabled: boolean = false;

    @Input() selected: TreeMultiSelectNode[] | null | undefined = undefined;
    @Output() selectedChange = new EventEmitter<TreeMultiSelectNode[] | null | undefined>();

	@Input() enableSearch: boolean = false;
	searchValue = signal<string>("");

	@Input() showClear: boolean = true;

	protected map = new Map<TreeMultiSelectNode, boolean>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue) {
            this.selected = changes['selected'].currentValue;
        }
    }

	stringify = (value: TreeMultiSelectNode): string => value.label;

	expandAll(){
		for(let option of this.options)
			this.expandAllRec(option);
	}

	expandAllRec(from : TreeMultiSelectNode){
		this.map.set(from, true);
		if (from.children && from.children.length > 0)
			for(let child of from.children)
				this.expandAllRec(child);
	}

	collapseAll(){
		for(let option of this.options)
			this.collapseAllRec(option);
	}

	collapseAllRec(from : TreeMultiSelectNode){
		this.map.set(from, false);
		if (from.children && from.children.length > 0)
			for(let child of from.children)
				this.collapseAllRec(child);
	}

	searchChange(){
		let newMap = new Map<TreeMultiSelectNode, boolean>();

		for(let option of this.options)
			this.expandSearchRec(option, newMap);

		this.map = newMap;
	}

	expandSearchRec(from : TreeMultiSelectNode, newMap : Map<TreeMultiSelectNode, boolean>) : boolean{
		let expanded = false;
		if (from.label.includes(this.searchValue()))
		{
			newMap.set(from, true);
			expanded = true;
		}
		if(from.children && from.children.length > 0)
		{
			for(let child of from.children){
				if (this.expandSearchRec(child, newMap))
					expanded = true;
			}
			if (expanded)
				newMap.set(from, true);
		}
		return expanded;
	}
}

export interface TreeMultiSelectNode {
	icon? : string;
	label : string;
	children : TreeMultiSelectNode[];

	checked : boolean;
	selectable : boolean;

	data? : any;
}
