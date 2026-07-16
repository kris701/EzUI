import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUITextInput } from 'ez-ui';

@Component({
    selector: 'app-text-input',
    imports: [
    FormsModule,
    CommonModule,
	EzUITextInput
],
    template: `
	<span>text</span>
	<ezui-textinput/>
    `,
    host: {
        class: 'base-view'
    }
})
export class TextInput {
}
