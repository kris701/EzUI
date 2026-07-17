import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, signal, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTabs, TuiTextarea } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
    selector: 'app-samplecontainer',
    imports: [
    FormsModule,
    CommonModule,
    TuiCardLarge,
    TuiHeader,
    TuiTabs,
    TuiTextarea
],
    template: `
	    <div appearance="floating" tuiCardLarge style="gap:0px">
	        <header tuiHeader>
	            <h3 tuiTitle>{{label}}</h3>
	        </header>

			<section>
				<tui-tabs [(activeItemIndex)]="index" style="margin-bottom:10px;">
					<button
						iconStart="eye"
						tuiTab
						type="button"
						(click)="index.set(0)"
					>
						Preview
					</button>
					<button
						iconStart="code"
						tuiTab
						type="button"
						(click)="index.set(1)"
					>
						HTML
					</button>
					<button
						iconStart="code"
						tuiTab
						type="button"
						[disabled]="!enableStyle"
						(click)="index.set(2)"
					>
						CSS
					</button>
					<button
						iconStart="code"
						tuiTab
						type="button"
						[disabled]="!enableTypescript"
						(click)="index.set(3)"
					>
						TS
					</button>
				</tui-tabs>

				@switch (index()) {
					@case (0) {
						<div class="flex flex-col gap-2">
							<ng-container #previewContent [ngTemplateOutlet]="preview"></ng-container>
						</div>
					}
					@case (1) {
						<tui-textfield>
							<textarea tuiTextarea [readOnly]="true" [value]="html"></textarea>
						</tui-textfield>
					}
					@case (2) {
						<tui-textfield>
							<textarea tuiTextarea [readOnly]="true" [value]="css"></textarea>
						</tui-textfield>
					}
					@case (3) {
						<tui-textfield>
							<textarea tuiTextarea [readOnly]="true" [value]="ts"></textarea>
						</tui-textfield>
					}
				}
			</section>
	    </div>
    `,
	styles: `
		tui-textfield {
			::ng-deep tui-textarea-content {
				max-height:100% !important;
			}
		}
	`
})
export class SampleContainer {
    @Input() label: string = '';

	index = signal<number>(0);

	@Input() html : string = "";
	@Input() css : string = "";
	@Input() ts : string = "";

	@Input() enableStyle : boolean = false;
	@Input() enableTypescript : boolean = false;

	@ContentChild('preview', { static: false }) preview: TemplateRef<any> | undefined;
}
