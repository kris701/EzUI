import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUITextInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-text-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUITextInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-textinput />'>
		<ng-template #preview>
			<ezui-textinput />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Simple Label" html='<ezui-textinput label="Simple Label" />'>
		<ng-template #preview>
			<ezui-textinput label="Simple Label" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-textinput label="Label with icon" icon="square-pen" />'>
		<ng-template #preview>
			<ezui-textinput label="Label with icon" icon="square-pen" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-textinput [(value)]="binding" label="Binding" />'
		[enableTypescript]="true"
		ts='binding = signal<string>("");'
	>
		<ng-template #preview>
			<ezui-textinput [(value)]="binding" label="Binding" />
			<span>You wrote: {{binding()}}</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-textinput label="Small" icon="square-pen" size="s"/>
<ezui-textinput label="Medium" icon="square-pen" size="m"/>
<ezui-textinput label="Large" icon="square-pen" size="l"/>
		'
	>
		<ng-template #preview>
			<ezui-textinput label="Small" icon="square-pen" size="s"/>
			<ezui-textinput label="Medium" icon="square-pen" size="m"/>
			<ezui-textinput label="Large" icon="square-pen" size="l"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-textinput label="Disabled" icon="square-pen" [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-textinput label="Disabled" icon="square-pen" [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class TextInput {
	binding = signal<string>("");
}
