import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { TuiMessage } from '@taiga-ui/kit';
import { EzUIDialog } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-dialog',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
	EzUIDialog,
	TuiButton,
	TuiMessage
],
    template: `
	<app-samplecontainer
		label="Simple"
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
					<span>This is the content of the dialog</span>
				</ng-template>
			</ezui-dialog>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Simple 2"
		html='<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog
	[showDialog]="showDialog"
	title="Some Title"
	[showDelete]="true"
	[showSave]="true"
	(onSaveItem)="showAlert("saved!")"
	(onDeleteItem)="showAlert("deleted!")"
>
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>'
		[enableTypescript]="true"
		ts='showDialog2 = signal<boolean>(false);
showAlert(text : string){
	alert(text)
}'
	>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				The "EzUILayoutService" is required for the dialog to correctly format on mobile!
			</span>
			<button tuiButton (click)="showDialog2.set(true)">
				Open
			</button>
			<ezui-dialog
				[showDialog]="showDialog2"
				title="Some Title"
				[showDelete]="true"
				[showSave]="true"
				(onSaveItem)="showAlert('saved!')"
				(onDeleteItem)="showAlert('deleted!')"
			>
				<ng-template #content>
					<span>This is the content of the dialog</span>
				</ng-template>
			</ezui-dialog>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class Dialog {
	showDialog = signal<boolean>(false);

	showDialog2 = signal<boolean>(false);
	showAlert(text : string){
		alert(text)
	}
}
