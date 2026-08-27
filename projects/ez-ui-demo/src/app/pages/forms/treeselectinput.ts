import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUITreeSelect, TreeSelectNode } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";
import { TuiChip } from "@taiga-ui/kit";

@Component({
    selector: 'app-treeselect',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
    EzUITreeSelect,
	TuiChip
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-treeselect [options]="options" [(selected)]="selected"/>'
		[enableTypescript]="true"
		ts='options: TreeSelectNode[] = [{
		label: "opt1"
	} as TreeSelectNode,
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
				] as TreeSelectNode[]
			} as TreeSelectNode
		] as TreeSelectNode[]
	} as TreeSelectNode
];
selected = signal<TreeSelectNode | null>(null);'>
		<ng-template #preview>
			<ezui-treeselect [options]="options" [(selected)]="selected"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Label and Icon"
		html='<ezui-treeselect label="Select options" icon="list-tree" [options]="options" [(selected)]="selected"/>'>
		<ng-template #preview>
			<ezui-treeselect label="Select option" icon="list-tree" [options]="options" [(selected)]="selected"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Disabled"
		html='<ezui-treeselect [options]="options" [(selected)]="selected" [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-treeselect [options]="options" [(selected)]="selected" [disabled]="true"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Search"
		html='<ezui-treeselect [options]="options" [(selected)]="selected" [enableSearch]="true"/>'>
		<ng-template #preview>
			<ezui-treeselect [options]="options" [(selected)]="selected" [enableSearch]="true"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Item Template"
		html='<ezui-treeselect [options]="options7" [(selected)]="selected7">
	<ng-template #itemTemplate let-item>
		<span tuiChip appearance="info">Lists: \{\{item\} \}</span>
	</ng-template>
	<ng-template #selectedTemplate let-item>
		<span tuiChip appearance="warning">Selected: \{\{item\} \}</span>
	</ng-template>
</ezui-treeselect>'>
		<ng-template #preview>
			<ezui-treeselect [options]="options" [(selected)]="selected">
				<ng-template #itemTemplate let-item>
					<span tuiChip appearance="info">Lists: {{item.label}}</span>
				</ng-template>
				<ng-template #selectedTemplate let-item>
					<span tuiChip appearance="warning">Selected: {{item.label}}</span>
				</ng-template>
			</ezui-treeselect>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-treeselect label="Small" [options]="options5" [(selected)]="selected5" size="s"/>
<ezui-treeselect label="Medium" [options]="options5" [(selected)]="selected5" size="m"/>
<ezui-treeselect label="Large" [options]="options5" [(selected)]="selected5" size="l"/>'>
		<ng-template #preview>
			<ezui-treeselect label="Small" [options]="options" [(selected)]="selected" size="s"/>
			<ezui-treeselect label="Medium" [options]="options" [(selected)]="selected" size="m"/>
			<ezui-treeselect label="Large" [options]="options" [(selected)]="selected" size="l"/>
			Selected: {{JSON.stringify(selected())}}
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class TreeSelect {
	JSON = JSON;

	options: TreeSelectNode[] = [{
			label: "opt1"
		} as TreeSelectNode,
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
					] as TreeSelectNode[]
				} as TreeSelectNode
			] as TreeSelectNode[]
		} as TreeSelectNode
	];
	selected = signal<TreeSelectNode | null>(null);
}
