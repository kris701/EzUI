import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIDateTimeInput } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-datetime-input',
    imports: [
    FormsModule,
    CommonModule,
    EzUIDateTimeInput,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-datetimeinput />'>
		<ng-template #preview>
			<ezui-datetimeinput />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Simple Label" html='<ezui-datetimeinput label="Simple Label" />'>
		<ng-template #preview>
			<ezui-datetimeinput label="Simple Label" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Label and Icon" html='<ezui-datetimeinput label="Label with icon" icon="calendar" />'>
		<ng-template #preview>
			<ezui-datetimeinput label="Label with icon" icon="calendar" />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-datetimeinput [(value)]="binding" label="Binding" />'
		[enableTypescript]="true"
		ts='binding = signal<Date>(new Date());'
	>
		<ng-template #preview>
			<ezui-datetimeinput [(value)]="binding" label="Binding" />
			<span>You wrote: {{binding()}}</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sizes"
		html='<ezui-datetimeinput label="Small" icon="calendar" size="s"/>
<ezui-datetimeinput label="Medium" icon="calendar" size="m"/>
<ezui-datetimeinput label="Large" icon="calendar" size="l"/>'
	>
		<ng-template #preview>
			<ezui-datetimeinput label="Small" icon="calendar" size="s"/>
			<ezui-datetimeinput label="Medium" icon="calendar" size="m"/>
			<ezui-datetimeinput label="Large" icon="calendar" size="l"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-datetimeinput label="Disabled" icon="calendar" [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-datetimeinput label="Disabled" icon="calendar" [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Min/max"
		html='<ezui-datetimeinput [(value)]="minmaxval" label="Min/max" [min]="min()" [max]="max()" />'
		[enableTypescript]="true"
		ts='min = signal<Date>(new Date((new Date()).getFullYear(), 0, 1));
max = signal<Date>(new Date());
minmaxval = signal<Date>(new Date());'
	>
		<ng-template #preview>
			<ezui-datetimeinput [(value)]="minmaxval" label="Min/max" [min]="min()" [max]="max()" />
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
export class DateTimeInput {
	binding = signal<Date>(new Date());

	min = signal<Date>(new Date((new Date()).getFullYear(), 0, 1));
	max = signal<Date>(new Date());
	minmaxval = signal<Date>(new Date());
}
