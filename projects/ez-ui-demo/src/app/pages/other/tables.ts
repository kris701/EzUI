import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIMarkdownEditor } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-tables',
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
    `,
    host: {
        class: 'base-view'
    }
})
export class Tables {
}
