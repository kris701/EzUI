import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [
    FormsModule,
    CommonModule
],
    template: `
	<span>Hello</span>
    `,
    host: {
        class: 'base-view'
    }
})
export class Home {
}
