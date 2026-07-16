import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIMarkdownEditor } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-markdowneditor',
    imports: [
    FormsModule,
    CommonModule,
	EzUIMarkdownEditor,
    SampleContainer
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-markdowneditor [(value)]="binding" />'
		[enableTypescript]="true"
		ts='binding = signal<string>("Text");'>
		<ng-template #preview>
			<ezui-markdowneditor [(value)]="binding" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Disabled"
		html='<ezui-markdowneditor [value]="binding()" [disabled]="true" />'
		[enableTypescript]="true"
		ts='binding = signal<string>("Text");'>
		>
		<ng-template #preview>
			<ezui-markdowneditor [value]="binding()" [disabled]="true" />
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class MarkdownEditor {
	binding = signal<string>("Text");
}
