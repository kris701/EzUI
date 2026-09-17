import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIOrderList, EzUIDialog } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";
import { TuiButton } from '@taiga-ui/core';

@Component({
    selector: 'app-orderlist',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
    EzUIOrderList,
    EzUIDialog,
    TuiButton
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

	<app-samplecontainer
		label="In Dialog"
		html='<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog [showDialog]="showDialog">
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>'
		[enableTypescript]="true"
		ts='showDialog = signal<boolean>(false);'
	>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				The "EzUILayoutService" is required for the dialog to correctly format on mobile!
			</span>
			<button tuiButton (click)="showDialog.set(true)">
				Open
			</button>
			<ezui-dialog [showDialog]="showDialog">
				<ng-template #content>
					<div style="height:80vh;overflow:auto">
						<h1>Order List</h1>
						<ezui-orderlist [(values)]="values2">
							<ng-template #itemTemplate let-value let-index="index">
								<div style="display:flex;flex-direction:column">
									<h3>{{value.label}}</h3>
									<span>{{value.label}}</span>
									<span>{{index}}</span>
								</div>
							</ng-template>
						</ezui-orderlist>
					</div>
				</ng-template>
			</ezui-dialog>
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

	showDialog = signal<boolean>(false);
	values2 : any[] = [
		{ label: 'item1', icon: 'list' },
		{ label: 'item2', icon: 'list' },
		{ label: 'item3', icon: 'list' },
		{ label: 'item4', icon: 'list' },
		{ label: 'item5', icon: 'list' },
		{ label: 'item6', icon: 'list' },
		{ label: 'item7', icon: 'list' },
		{ label: 'item8', icon: 'list' },
		{ label: 'item9', icon: 'list' },
		{ label: 'item10', icon: 'list' },
		{ label: 'item11', icon: 'list' },
		{ label: 'item12', icon: 'list' },
		{ label: 'item13', icon: 'list' },
		{ label: 'item14', icon: 'list' },
		{ label: 'item15', icon: 'list' },
	]
}
