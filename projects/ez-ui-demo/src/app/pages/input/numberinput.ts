import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUINumberInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-password-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUINumberInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-numberinput />'>
		<ng-template #preview>
			<ezui-numberinput />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Simple Label" html='<ezui-numberinput label="Simple Label" />'>
		<ng-template #preview>
			<ezui-numberinput label="Simple Label" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-numberinput label="Label with icon" icon="hash" />'>
		<ng-template #preview>
			<ezui-numberinput label="Label with icon" icon="hash" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-numberinput label="Label with icon" icon="hash" />'>
		<ng-template #preview>
			<ezui-numberinput label="Label with icon" icon="hash" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-numberinput [(value)]="binding" label="Binding" />'
		[enableTypescript]="true"
		ts='binding = signal<string>("");'
	>
		<ng-template #preview>
			<ezui-numberinput [(value)]="binding" label="Binding" />
			<span>You wrote: {{binding()}}</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-numberinput label="Small" icon="hash" size="s"/>
<ezui-numberinput label="Medium" icon="hash" size="m"/>
<ezui-numberinput label="Large" icon="hash" size="l"/>'
	>
		<ng-template #preview>
			<ezui-numberinput label="Small" icon="hash" size="s"/>
			<ezui-numberinput label="Medium" icon="hash" size="m"/>
			<ezui-numberinput label="Large" icon="hash" size="l"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-numberinput label="Disabled" icon="hash" [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-numberinput label="Disabled" icon="hash" [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Min/max"
		html='<ezui-numberinput [(value)]="minmaxval" label="Min/max" [min]="min()" [max]="max()" />'
		[enableTypescript]="true"
		ts='min = signal<number>(10);
max = signal<number>(100);
minmaxval = signal<number>(16);'
	>
		<ng-template #preview>
			<ezui-numberinput [(value)]="minmaxval" label="Min/max" [min]="min()" [max]="max()" />
			<span>You wrote: {{minmaxval()}}</span>
			<span>Min is: {{min()}}</span>
			<span>Max is: {{max()}}</span>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class NumberInput {
	binding = signal<number>(10);

	min = signal<number>(10);
	max = signal<number>(100);
	minmaxval = signal<number>(16);
}
