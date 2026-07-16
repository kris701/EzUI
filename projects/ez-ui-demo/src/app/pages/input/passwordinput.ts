import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIPasswordInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-password-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUIPasswordInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-passwordinput />'>
		<ng-template #preview>
			<ezui-passwordinput />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Simple Label" html='<ezui-passwordinput label="Simple Label" />'>
		<ng-template #preview>
			<ezui-passwordinput label="Simple Label" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-passwordinput label="Label with icon" icon="rectangle-ellipsis" />'>
		<ng-template #preview>
			<ezui-passwordinput label="Label with icon" icon="rectangle-ellipsis" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-passwordinput [(value)]="binding" label="Binding" />'
		[enableTypescript]="true"
		ts='binding = signal<string>("");'
	>
		<ng-template #preview>
			<ezui-passwordinput [(value)]="binding" label="Binding" />
			<span>You wrote: {{binding()}}</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-passwordinput label="Small" icon="rectangle-ellipsis" size="s"/>
<ezui-passwordinput label="Medium" icon="rectangle-ellipsis" size="m"/>
<ezui-passwordinput label="Large" icon="rectangle-ellipsis" size="l"/>'
	>
		<ng-template #preview>
			<ezui-passwordinput label="Small" icon="rectangle-ellipsis" size="s"/>
			<ezui-passwordinput label="Medium" icon="rectangle-ellipsis" size="m"/>
			<ezui-passwordinput label="Large" icon="rectangle-ellipsis" size="l"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-passwordinput label="Disabled" icon="rectangle-ellipsis" [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-passwordinput label="Disabled" icon="rectangle-ellipsis" [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class PasswordInput {
	binding = signal<string>("");
}
