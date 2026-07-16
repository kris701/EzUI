import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIMultiSelect } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-multiselect',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
	EzUIMultiSelect
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-multiselect [options]="options" [(selected)]="selected"/>'
		[enableTypescript]="true"
		ts='options: string[] = ["value1","value2","value3","value4",];
selected = signal<string[]>([]);'>
		<ng-template #preview>
			<ezui-multiselect [options]="options" [(selected)]="selected"/>
			Selected: {{selected()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Label and Icon"
		html='<ezui-multiselect label="Select options" icon="list" [options]="options2" [(selected)]="selected2"/>'
		[enableTypescript]="true"
		ts='options2: string[] = ["value1","value2","value3","value4",];
selected2 = signal<string[]>([]);'>
		<ng-template #preview>
			<ezui-multiselect label="Select options" icon="list" [options]="options2" [(selected)]="selected2"/>
			Selected: {{selected2()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Label/Value selector"
		html='<ezui-multiselect [options]="options3" [(selected)]="selected3" optionLabel="value" optionValue="id"/>'
		[enableTypescript]="true"
		ts='options3: any[] = [{id:"a",value:"readable"},{id:"b",value:"works"},{id:"c",value:"last"}];
selected3 = signal<any[]>([]);'>
		<ng-template #preview>
			<ezui-multiselect [options]="options3" [(selected)]="selected3" optionLabel="value" optionValue="id"/>
			Selected: {{selected3()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Disabled"
		html='<ezui-multiselect [options]="options4" [(selected)]="selected4" [disabled]="true"/>'
		[enableTypescript]="true"
		ts='options4: string[] = ["value1","value2","value3","value4",];
selected4 = signal<string[]>([]);'>
		<ng-template #preview>
			<ezui-multiselect [options]="options4" [(selected)]="selected4" [disabled]="true"/>
			Selected: {{selected4()}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-multiselect label="Small" [options]="options5" [(selected)]="selected5" size="s"/>
<ezui-multiselect label="Medium" [options]="options5" [(selected)]="selected5" size="m"/>
<ezui-multiselect label="Large" [options]="options5" [(selected)]="selected5" size="l"/>'
		[enableTypescript]="true"
		ts='options5: string[] = ["value1","value2","value3","value4",];
selected5 = signal<string[]>([]);'>
		<ng-template #preview>
			<ezui-multiselect label="Small" [options]="options5" [(selected)]="selected5" size="s"/>
			<ezui-multiselect label="Medium" [options]="options5" [(selected)]="selected5" size="m"/>
			<ezui-multiselect label="Large" [options]="options5" [(selected)]="selected5" size="l"/>
			Selected: {{selected5()}}
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class MultiSelect {
	options: string[] = ["value1","value2","value3","value4",];
	selected = signal<string[]>([]);

	options2: string[] = ["value1","value2","value3","value4",];
	selected2 = signal<string[]>([]);

	options3: any[] = [{id:"a",value:"readable"},{id:"b",value:"works"},{id:"c",value:"last"}];
	selected3 = signal<any[]>([]);

	options4: string[] = ["value1","value2","value3","value4",];
	selected4 = signal<string[]>([]);

	options5: string[] = ["value1","value2","value3","value4",];
	selected5 = signal<string[]>([]);
}
