import { TuiBlockStatus } from '@taiga-ui/layout';
import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'ezui-orderlist',
    imports: [
    FormsModule,
    CommonModule,
    TuiBlockStatus,
    TuiIcon,
	CdkDropList,
	CdkDrag,
	CdkDragHandle,
	TuiButton
],
    template: `
		<div class="orderlist-container">
			@if(values.length == 0){
				<tui-block-status>
					<tui-icon tuiSlot="top" icon="list" />

					<h3>No Data</h3>

					No data to display.
				</tui-block-status>
			}
			@else {
				<div cdkDropList (cdkDropListDropped)="drop($event)">
					@for (value of values; track $index) {
						<div
							cdkDrag
							cdkDragBoundary=".orderlist-container"
 							cdkDragLockAxis="y"
							class="tile"
							cdkDragPreviewContainer="parent"
							[cdkDragDisabled]="disabled"
						>
							<tui-icon
								cdkDragHandle
								class="handle"
								icon="@tui.grip-vertical"
							/>
							@if(showButtons){
								<div class="button-container">
									<button tuiButton appearance="flat" size="s" iconStart="chevron-up" (click)="moveUp($index)" [disabled]="$index == 0"></button>
									<button tuiButton appearance="flat" size="s" iconStart="chevron-down" (click)="moveDown($index)" [disabled]="$index == values.length - 1"></button>
								</div>
							}
							@if(itemTemplate){
								<ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: value  }"></ng-container>
							}
							@else {
								<div class="content">{{ getOptionLabel(value) }}</div>
							}
						</div>
					}
				</div>
			}
		</div>
    `,
    styles: `
		@import '@taiga-ui/styles/utils.less';

		.orderlist-container {
			background-color: var(--tui-background-base-alt);
			border: 2px solid var(--tui-border-normal);
			border-radius: var(--tui-radius-l);
			padding:5px;
		}

		.tile {
			background: var(--tui-background-base);
			border-radius: var(--tui-radius-l);
			border: 1px solid var(--tui-border-normal);

			display:flex;
			flex-direction: row;
			gap: 5px;
			padding:5px;

			.handle {
				align-self: center;
				cursor: grab;
			}

			.content {
				align-self: center;
			}

			.button-container {
				align-self: center;
			}
		}

		.cdk-drag-disabled {
			opacity: 0.7;
			user-select: none;

			.handle {
				align-self: center;
				cursor: not-allowed;
			}
		}

		.cdk-drag-preview {
			display:flex;

			background: var(--tui-background-base);
			border-radius: var(--tui-radius-l);
			border: 1px solid var(--tui-border-normal);
		}

		.cdk-drag-placeholder {
			opacity: 0;
		}

		.cdk-drag-animating {
			transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
		}
    `
})
export class EzUIOrderList {
	@ContentChild('itemTemplate', { static: false }) itemTemplate: TemplateRef<any> | undefined;

    @Input() disabled: boolean = false;

    @Input() values: any[] = [];
    @Output() valuesChange = new EventEmitter<any[]>();

	@Input() optionLabel: string = "";

	@Input() showButtons: boolean = false;

	getOptionLabel(item: any) {
		if (!item)
			return "";
        if (this.optionLabel == undefined || this.optionLabel == '') return item;
        return item[this.optionLabel];
    }

	moveUp(index : number){
		moveItemInArray(this.values, this.clampIndex(index), this.clampIndex(index - 1));
		this.valuesChange.emit(this.values);
	}

	moveDown(index : number){
		moveItemInArray(this.values, this.clampIndex(index), this.clampIndex(index + 1));
		this.valuesChange.emit(this.values);
	}

	drop(event: CdkDragDrop<any[]>) {
		moveItemInArray(this.values, event.previousIndex, event.currentIndex);
		this.valuesChange.emit(this.values);
	}

	clampIndex(index : number) : number {
		if (index < 0)
			index = 0;
		if (index >= this.values.length)
			index = this.values.length - 1;
		return index;
	}
}
