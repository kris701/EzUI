import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUITreeMultiSelect, TreeMultiSelectNode } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";
import { TuiChip } from '@taiga-ui/kit';

@Component({
    selector: 'app-treemultiselect',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
    EzUITreeMultiSelect,
	TuiChip
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-treemultiselect [options]="options" [(selected)]="selected"/>'
		[enableTypescript]="true"
		ts='options: TreeMultiSelectNode[] = [{
		label: "opt1"
	} as TreeMultiSelectNode,
	{
		label: "opt2",
		selectable: false,
		children: [
			{
				label: "sub1",
				children: [
					{
						label: "sub1sub1"
					},
					{
						label: "sub1sub2",
						selectable: false,
					}
				] as TreeMultiSelectNode[]
			} as TreeMultiSelectNode
		] as TreeMultiSelectNode[]
	} as TreeMultiSelectNode
];
selected = signal<TreeMultiSelectNode>([]);'>
		<ng-template #preview>
			<ezui-treemultiselect [options]="options" [(selected)]="selected"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Label and Icon"
		html='<ezui-treemultiselect label="Select options" icon="list-tree" [options]="options" [(selected)]="selected"/>'>
		<ng-template #preview>
			<ezui-treemultiselect label="Select option" icon="list-tree" [options]="options" [(selected)]="selected"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Search"
		html='<ezui-treemultiselect [options]="options" [(selected)]="selected" [enableSearch]="true"/>'>
		<ng-template #preview>
			<ezui-treemultiselect [options]="options" [(selected)]="selected" [enableSearch]="true"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Item Template"
		html='<ezui-treemultiselect [options]="options7" [(selected)]="selected7">
	<ng-template #itemTemplate let-item>
		<span tuiChip appearance="info">Lists: \{\{item\} \}</span>
	</ng-template>
	<ng-template #selectedTemplate let-item>
		<span tuiChip appearance="warning">Selected: \{\{item\} \}</span>
	</ng-template>
</ezui-treemultiselect>'>
		<ng-template #preview>
			<ezui-treemultiselect [options]="options" [(selected)]="selected">
				<ng-template #itemTemplate let-item>
					<span tuiChip appearance="info">Lists: {{item.label}}</span>
				</ng-template>
			</ezui-treemultiselect>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-treemultiselect label="Small" [options]="options5" [(selected)]="selected5" size="s"/>
<ezui-treemultiselect label="Medium" [options]="options5" [(selected)]="selected5" size="m"/>
<ezui-treemultiselect label="Large" [options]="options5" [(selected)]="selected5" size="l"/>'>
		<ng-template #preview>
			<ezui-treemultiselect label="Small" [options]="options" [(selected)]="selected" size="s"/>
			<ezui-treemultiselect label="Medium" [options]="options" [(selected)]="selected" size="m"/>
			<ezui-treemultiselect label="Large" [options]="options" [(selected)]="selected" size="l"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class TreeMultiSelect {
	JSON = JSON;

	options: TreeMultiSelectNode[] = [{
			label: "opt1"
		} as TreeMultiSelectNode,
		{
			label: "opt2",
			selectable: false,
			children: [
				{
					label: "sub1",
					children: [
						{
							label: "sub1sub1"
						},
						{
							label: "sub1sub2",
							selectable: false,
						}
					] as TreeMultiSelectNode[]
				} as TreeMultiSelectNode
			] as TreeMultiSelectNode[]
		} as TreeMultiSelectNode
	];
	selected = signal<TreeMultiSelectNode[]>([]);
}
