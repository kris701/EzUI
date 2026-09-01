import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiInput, TuiLabel, TuiTextfield, TuiIcon, TuiButton } from '@taiga-ui/core';
import { TuiChevron, TuiChip, TuiSelect, TuiTree } from '@taiga-ui/kit';
import {TuiAutoFocus, TuiHandler} from '@taiga-ui/cdk';

@Component({
    selector: 'ezui-treeselect',
    imports: [
    FormsModule,
    CommonModule,
    TuiSelect,
    TuiDataList,
    TuiTextfield,
    TuiDropdown,
    TuiChevron,
    TuiInput,
    TuiChip,
    TuiAutoFocus,
    TuiTree,
    TuiIcon,
	TuiButton
],
    template: `
		<tui-textfield tuiChevron [content]="content" [tuiTextfieldSize]="size" [iconStart]="icon" [tuiTextfieldCleaner]="showClear">
			@if(label != '' && size != 's'){
				<label tuiLabel>{{label}}</label>
			}
			<input tuiSelect [(ngModel)]="selected" [placeholder]="size == 's' ? label : ''" (ngModelChange)="selectedChange.emit(this.selected)" [disabled]="disabled"/>
			<tui-data-list *tuiDropdown >
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

		<ng-template #content>
			@if(selectedTemplate){
				<ng-container [ngTemplateOutlet]="selectedTemplate" [ngTemplateOutletContext]="{ $implicit: selected  }"></ng-container>
			}
			@else if(selected){
				<span tuiChip [size]="label != '' ? 'xxs' : 'xs'">{{selected.label}}</span>
			}
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
export class EzUITreeSelect implements OnChanges {
	@ContentChild('selectedTemplate', { static: false }) selectedTemplate: TemplateRef<any> | undefined;
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;

	protected readonly handler: TuiHandler<TreeSelectNode, readonly TreeSelectNode[]> = (item) => item.children || [];

    @Input() icon: string = '';
    @Input() label: string = '';

	@Input() size: "l" | "m" | "s" = 'm';

    @Input() options: TreeSelectNode[] = [];
    @Input() disabled: boolean = false;

    @Input() selected: TreeSelectNode | null | undefined = undefined;
    @Output() selectedChange = new EventEmitter<TreeSelectNode | null | undefined>();

	@Input() enableSearch: boolean = false;
	searchValue = signal<string>("");

	@Input() showClear: boolean = true;

	protected map = new Map<TreeSelectNode, boolean>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue)
            this.selected = changes['selected'].currentValue;
    }

	expandAll(){
		for(let option of this.options)
			this.expandAllRec(option);
	}

	expandAllRec(from : TreeSelectNode){
		this.map.set(from, true);
		if (from.children && from.children.length > 0)
			for(let child of from.children)
				this.expandAllRec(child);
	}

	collapseAll(){
		for(let option of this.options)
			this.collapseAllRec(option);
	}

	collapseAllRec(from : TreeSelectNode){
		this.map.set(from, false);
		if (from.children && from.children.length > 0)
			for(let child of from.children)
				this.collapseAllRec(child);
	}

	searchChange(){
		let newMap = new Map<TreeSelectNode, boolean>();

		for(let option of this.options)
			this.expandSearchRec(option, newMap);

		this.map = newMap;
	}

	expandSearchRec(from : TreeSelectNode, newMap : Map<TreeSelectNode, boolean>) : boolean{
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

export interface TreeSelectNode {
	icon? : string;
	label : string;
	children : TreeSelectNode[];

	selectable : boolean;

	data? : any;
}
