import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-input',
    imports: [
    FormsModule,
    CommonModule
],
    template: `
	<span>text</span>
    `,
    host: {
        class: 'base-view'
    }
})
export class TextInput {
}
