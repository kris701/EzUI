import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIDateInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-date-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUIDateInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-dateinput />'>
		<ng-template #preview>
			<ezui-dateinput />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Simple Label" html='<ezui-dateinput label="Simple Label" />'>
		<ng-template #preview>
			<ezui-dateinput label="Simple Label" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-dateinput label="Label with icon" icon="calendar" />'>
		<ng-template #preview>
			<ezui-dateinput label="Label with icon" icon="calendar" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-dateinput [(value)]="binding" label="Binding" />'
		[enableTypescript]="true"
		ts='binding = signal<Date>(new Date());'
	>
		<ng-template #preview>
			<ezui-dateinput [(value)]="binding" label="Binding" />
			<span>You wrote: {{binding()}}</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-dateinput label="Small" icon="calendar" size="s"/>
<ezui-dateinput label="Medium" icon="calendar" size="m"/>
<ezui-dateinput label="Large" icon="calendar" size="l"/>'
	>
		<ng-template #preview>
			<ezui-dateinput label="Small" icon="calendar" size="s"/>
			<ezui-dateinput label="Medium" icon="calendar" size="m"/>
			<ezui-dateinput label="Large" icon="calendar" size="l"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-dateinput label="Disabled" icon="calendar" [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-dateinput label="Disabled" icon="calendar" [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Min/max"
		html='<ezui-dateinput [(value)]="minmaxval" label="Min/max" [min]="min()" [max]="max()" />'
		[enableTypescript]="true"
		ts='min = signal<Date>(new Date((new Date()).getFullYear(), 0, 1));
max = signal<Date>(new Date());
minmaxval = signal<Date>(new Date());'
	>
		<ng-template #preview>
			<ezui-dateinput [(value)]="minmaxval" label="Min/max" [min]="min()" [max]="max()" />
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
export class DateInput {
	binding = signal<Date>(new Date());

	min = signal<Date>(new Date((new Date()).getFullYear(), 0, 1));
	max = signal<Date>(new Date());
	minmaxval = signal<Date>(new Date());
}
