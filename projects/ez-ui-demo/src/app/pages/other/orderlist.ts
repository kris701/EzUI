import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIOrderList } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-orderlist',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
	EzUIOrderList
],
    template: `
	<app-samplecontainer label="Simple" html=''>
		<ng-template #preview>
			<ezui-orderlist [(values)]="values" optionLabel="label">
			</ezui-orderlist>
			{{values | json}}
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Empty" html=''>
		<ng-template #preview>
			<ezui-orderlist/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html=''>
		<ng-template #preview>
			<ezui-orderlist [(values)]="values" optionLabel="label" [disabled]="true">
			</ezui-orderlist>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Buttons" html=''>
		<ng-template #preview>
			<ezui-orderlist [(values)]="values" optionLabel="label" [showButtons]="true">
			</ezui-orderlist>
			{{values | json}}
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class OrderList {
	values : any[] = [
		{ label: 'item1', icon: 'list' },
		{ label: 'item2', icon: 'list' },
		{ label: 'item3', icon: 'list' },
		{ label: 'item4', icon: 'list' }
	]
}
