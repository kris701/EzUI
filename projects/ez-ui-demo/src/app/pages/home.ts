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
	<span>Welcome to EzUI!</span>
	<span>Explore the sections in the sidebar for the different components</span>
    `,
    host: {
        class: 'base-view'
    }
})
export class Home {
}
