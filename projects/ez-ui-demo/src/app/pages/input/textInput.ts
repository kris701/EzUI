import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUITextInput } from 'EzUI';

@Component({
    selector: 'app-text-input',
    imports: [
    FormsModule,
    CommonModule,
	EzUITextInput
],
    template: `
	<span>Simple</span>
	<ezui-textinput />

	<span>Label</span>
	<ezui-textinput label="Simple Label" />

	<span>Label and Icon</span>
	<ezui-textinput label="Label with icon" icon="square-pen" />

	<span>Binding</span>
	<ezui-textinput [(value)]="binding" label="Binding" />
	<span>You wrote: {{binding()}}</span>

	<span>Sizes</span>
	<ezui-textinput label="Small" icon="square-pen" size="s"/>
	<ezui-textinput label="Medium" icon="square-pen" size="m"/>
	<ezui-textinput label="Large" icon="square-pen" size="l"/>

	<span>Disabled</span>
	<ezui-textinput label="Disabled" icon="square-pen" [disabled]="true"/>
    `,
    host: {
        class: 'base-view'
    }
})
export class TextInput {
	binding = signal<string>("");
}
