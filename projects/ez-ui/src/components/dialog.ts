import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, signal, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiDialog, TuiLoader, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { EzUILayoutService } from '../../public-api';

@Component({
    selector: 'ezui-dialog',
    imports: [
		FormsModule,
		CommonModule,
		TuiHeader,
		TuiTitle,
		TuiLoader,
		TuiDialog,
		TuiButton
	],
    template: `
		<ng-template let-id="id" [tuiDialogOptions]="{size: size, appearance: layoutService.isDesktop() ? 'taiga compact' : 'fullscreen'}" [(tuiDialog)]="showDialog">
			<header tuiHeader>
				<hgroup tuiTitle>
					<h2 [id]="id">{{title}}</h2>
				</hgroup>
			</header>

			<tui-loader [overlay]="true" [loading]="isLoading()">
				<ng-container [ngTemplateOutlet]="content"></ng-container>
			</tui-loader>

			@if(!isLoading() && (showSave || showDelete)){
				<footer class="dialog-footer">
					@if(showSave){
						<button tuiButton iconStart="save" size="s" (click)="onSaveItem.emit()">Save</button>
					}
					@if(showDelete){
						<button tuiButton iconStart="x" size="s" appearance="negative" (click)="onDeleteItem.emit()">Delete</button>
					}
				</footer>
			}
		</ng-template>
    `,
    styles: `
		.dialog-footer {
			display:flex !important;
			flex-direction: row !important;
			gap: 5px !important;
			margin-top:auto !important;
			margin-block-start: auto !important;
		}
    `
})
export class EzUIDialog {
	@ContentChild('content', { static: false }) public content: TemplateRef<any> | undefined;

	@Input() size: "l" | "m" | "s" = 'm';

	@Input() title: string = '';

	@Input() isLoading = signal<boolean>(false);
	@Input() showDialog = signal<boolean>(false);

	@Input() showSave : boolean = false;
	@Input() showDelete : boolean = false;

	@Output() onSaveItem: EventEmitter<any> = new EventEmitter();
	@Output() onDeleteItem: EventEmitter<any> = new EventEmitter();

	constructor(public layoutService : EzUILayoutService,){

	}
}
