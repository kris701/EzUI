import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIBooleanInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-boolean-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUIBooleanInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-booleaninput />'>
		<ng-template #preview>
			<ezui-booleaninput />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label" html='<ezui-booleaninput label="Toggle Value"/>'>
		<ng-template #preview>
			<ezui-booleaninput label="Toggle Value"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-booleaninput label="Toggle Value" icon="circle-power"/>'>
		<ng-template #preview>
			<ezui-booleaninput label="Toggle Value" icon="circle-power"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-booleaninput label="Toggle Value" icon="circle-power" [(value)]="binding"/>'
		[enableTypescript]="true"
		ts='binding = signal<boolean>(false);'>
		<ng-template #preview>
			<ezui-booleaninput label="Toggle Value" icon="circle-power" [(value)]="binding"/>
			<span>Value is {{binding()}}</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-booleaninput [disabled]="true" />'>
		<ng-template #preview>
			<ezui-booleaninput [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class BooleanInput {
	binding = signal<boolean>(false);
}
