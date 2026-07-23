import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIIconSelector } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-icon-selector',
    imports: [
    FormsModule,
    CommonModule,
    EzUIIconSelector,
    SampleContainer
],
    template: `
	<app-samplecontainer label="Simple" html='<ezui-EzUIIconSelector />'>
		<ng-template #preview>
			<ezui-iconselector />
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Binding"
		html='<ezui-EzUIIconSelector [(selected)]="binding"/>'
		[enableTypescript]="true"
		ts='binding = signal<string>("circle");'>
		<ng-template #preview>
			<ezui-iconselector [(selected)]="binding"/>
			<span>You have selected: "{{binding()}}"</span>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Disabled" html='<ezui-EzUIIconSelector [disabled]="true"/>'>
		<ng-template #preview>
			<ezui-iconselector [disabled]="true"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer label="Sizes" html='<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>'>
		<ng-template #preview>
			<ezui-iconselector size="s"/>
			<ezui-iconselector size="m"/>
			<ezui-iconselector size="l"/>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class IconSelector {
	binding = signal<string>("circle");
}
