import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIFileInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-file-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUIFileInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-fileinput />'>
		<ng-template #preview>
			<ezui-fileinput />
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class FileInput {

}
