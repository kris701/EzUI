import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUISelect } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-select',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
	EzUISelect
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-select [options]="options" [(selected)]="selected"/>'
		[enableTypescript]="true"
		ts='options: string[] = ["value1","value2","value3","value4",];
selected = signal<string>("");'>
		<ng-template #preview>
			<ezui-select [options]="options" [(selected)]="selected"/>
			Selected: {{selected()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Label and Icon"
		html='<ezui-select label="Select options" icon="list" [options]="options2" [(selected)]="selected2"/>'
		[enableTypescript]="true"
		ts='options2: string[] = ["value1","value2","value3","value4",];
selected2 = signal<string>("");'>
		<ng-template #preview>
			<ezui-select label="Select options" icon="list" [options]="options2" [(selected)]="selected2"/>
			Selected: {{selected2()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Label/Value selector"
		html='<ezui-select [options]="options3" [(selected)]="selected3" optionLabel="value" optionValue="id"/>'
		[enableTypescript]="true"
		ts='options3: any[] = [{id:"a",value:"readable"},{id:"b",value:"works"},{id:"c",value:"last"}];
selected3 = signal<any>("");'>
		<ng-template #preview>
			<ezui-select [options]="options3" [(selected)]="selected3" optionLabel="value" optionValue="id"/>
			Selected: {{selected3()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Disabled"
		html='<ezui-select [options]="options4" [(selected)]="selected4" [disabled]="true"/>'
		[enableTypescript]="true"
		ts='options4: string[] = ["value1","value2","value3","value4",];
selected4 = signal<string>("");'>
		<ng-template #preview>
			<ezui-select [options]="options4" [(selected)]="selected4" [disabled]="true"/>
			Selected: {{selected4()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-select label="Small" [options]="options5" [(selected)]="selected5" size="s"/>
<ezui-select label="Medium" [options]="options5" [(selected)]="selected5" size="m"/>
<ezui-select label="Large" [options]="options5" [(selected)]="selected5" size="l"/>'
		[enableTypescript]="true"
		ts='options5: string[] = ["value1","value2","value3","value4",];
selected5 = signal<string>("");'>
		<ng-template #preview>
			<ezui-select label="Small" [options]="options5" [(selected)]="selected5" size="s"/>
			<ezui-select label="Medium" [options]="options5" [(selected)]="selected5" size="m"/>
			<ezui-select label="Large" [options]="options5" [(selected)]="selected5" size="l"/>
			Selected: {{selected5()}}
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class Select {
	options: string[] = ["value1","value2","value3","value4",];
	selected = signal<string>("");

	options2: string[] = ["value1","value2","value3","value4",];
	selected2 = signal<string>("");

	options3: any[] = [{id:"a",value:"readable"},{id:"b",value:"works"},{id:"c",value:"last"}];
	selected3 = signal<string>("");

	options4: string[] = ["value1","value2","value3","value4",];
	selected4 = signal<string>("");

	options5: string[] = ["value1","value2","value3","value4",];
	selected5 = signal<string>("");
}
