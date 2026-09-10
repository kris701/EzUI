import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiInput, TuiSelectLike, TuiTextfield, TuiIcon, TuiButton, TuiLabel, TuiCheckbox } from '@taiga-ui/core';
import { TuiChevron, TuiChip, TuiInputChip, TuiMultiSelect, TuiTree } from '@taiga-ui/kit';
import {TuiAutoFocus, TuiHandler, TuiMapperPipe} from '@taiga-ui/cdk';

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
	TuiTree,
	TuiLabel,
	TuiCheckbox,
	TuiMapperPipe
],
    template: `
		<tui-textfield multi tuiChevron [stringify]="stringify" [tuiTextfieldSize]="size" [iconStart]="icon" [tuiTextfieldCleaner]="showClear">
			@if(label != '' && size != 's'){
				<label tuiLabel>{{label}}</label>
			}
			<input
				tuiInputChip
				tuiSelectLike
				[(ngModel)]="selected"
				[placeholder]="size == 's' ? label : ''"
				(ngModelChange)="selectedChange.emit(this.selected)"
				[disabled]="disabled"
			/>
			<tui-input-chip *tuiItem/>
			<div
				*tuiDropdown
				tuiMultiSelectGroup
				style="padding:.25rem;"
			>
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
						[map]="visMap"
					/>
				}
			</div>
		</tui-textfield>

		<ng-template #treeContent let-item>
			@let isDisabled = item.selectable === false && (!item.children || item.children.length == 0);
			<label
				tuiLabel
				[class]="{'wrapper':true, 'wrapperActive':!isDisabled}"
				[style.opacity]="!enableSearch || (searchValue() == '' || item.label.toLowerCase().includes(searchValue().toLowerCase())) ? (isDisabled ? 0.8 : 1) : 0.2"
			>
				<input
					size="s"
					tuiCheckbox
					type="checkbox"
					[disabled]="isDisabled"
					[ngModel]="item | tuiMapper: getValue : map"
					(ngModelChange)="onChecked(item, $event)"
				/>
				@if(itemTemplate){
					<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item  }"></ng-container>
				}
				@else {
					@if (item.icon) {
						<tui-icon class="t-icon" [icon]="item.icon"/>
					}
					<small>{{ item.label }}</small>
				}
			</label>
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
			flex-direction: row;
			align-items: center;
			width: 100% !important;
			margin:3px;
			padding:2px;
			border-radius: var(--tui-radius-s);

			input {
				line-height:100% !important;
			}
		}

		.wrapperActive {
			cursor:pointer;
		}
		.wrapperActive:hover {
			background: var(--tui-background-neutral-1);
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

	protected map = new Map<string, boolean>();
	protected visMap = new Map<TreeMultiSelectNode, boolean>();

    ngOnChanges(changes: SimpleChanges) {
		if(changes['options'] && changes['options'].currentValue != changes['options'].previousValue){
			let index = 0;
			for(let option of this.options)
				this.setIDs(option, "" + index++);
		}
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue) {
            this.selected = changes['selected'].currentValue;
			let newMap = new Map<string, boolean>();
			if(this.selected)
				for(let item of this.selected)
					newMap.set(item.id, true);
			this.map = newMap;
        }
    }

	setIDs(parent : TreeMultiSelectNode, prefix : string){
		if (!parent.id || parent.id == '')
			parent.id = prefix
		if(parent.children)
		{
			let subIndex = 0;
			for(let child of parent.children)
				this.setIDs(child, prefix + ";" + subIndex++);
		}
	}

	stringify = (value: TreeMultiSelectNode): string => value.label;

	expandAll(){
		for(let option of this.options)
			this.expandAllRec(option);
	}

	expandAllRec(from : TreeMultiSelectNode){
		this.visMap.set(from, true);
		if (from.children && from.children.length > 0)
			for(let child of from.children)
				this.expandAllRec(child);
	}

	collapseAll(){
		for(let option of this.options)
			this.collapseAllRec(option);
	}

	collapseAllRec(from : TreeMultiSelectNode){
		this.visMap.set(from, false);
		if (from.children && from.children.length > 0)
			for(let child of from.children)
				this.collapseAllRec(child);
	}

	searchChange(){
		let newMap = new Map<TreeMultiSelectNode, boolean>();

		for(let option of this.options)
			this.expandSearchRec(option, newMap);

		this.visMap = newMap;
	}

	expandSearchRec(from : TreeMultiSelectNode, newMap : Map<TreeMultiSelectNode, boolean>) : boolean{
		let expanded = false;
		if (from.label.toLowerCase().includes(this.searchValue().toLowerCase()))
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

	onChecked(node: TreeMultiSelectNode, value: boolean): void {
		flatten(node).filter(x => x.selectable != false).forEach((item) => {
			this.map.set(item.id, value)
		});
		this.map = new Map(this.map.entries());
		let newSelected : TreeMultiSelectNode[] = []
		for(let node of this.options)
		{
			let nodes = flatten(node);
			for(let sub of nodes)
				if (this.map.get(sub.id) == true && !newSelected.find(x => x.id == sub.id))
					newSelected.push(sub)
		}
		this.selected = newSelected;
		this.selectedChange.emit(this.selected);
	}

	readonly getValue = (
	        item: TreeMultiSelectNode,
	        map: Map<string, boolean>,
	): boolean | null => {
		let result: boolean | null = null;
		const flat = flatten(item);
		const key = flat[0]!;

		if (key) {
			result = !!map.get(key.id);
		}

		for (const item of flat) {
			if (result !== !!map.get(item.id)) {
				return null;
			}
		}

		return result;
	};
}

function flatten(item: TreeMultiSelectNode): readonly TreeMultiSelectNode[] {
	return item.children
		? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
		: [item];
}

export interface TreeMultiSelectNode {
	id : string;
	icon? : string;
	label : string;
	children : TreeMultiSelectNode[];

	checked : boolean;
	selectable : boolean;

	data? : any;
}

