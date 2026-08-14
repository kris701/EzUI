import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { EzUILayout } from './ezui.layout';
import { EzUILayoutService } from './services/ezui.layout.service';

@Component({
    selector: 'ezui-topbar',
    standalone: true,
    imports: [CommonModule, TuiNavigation, TuiButton],
    template: `
	<header tuiNavigationHeader tuitheme="">
		<button
			type="button"
			tuiIconButton
			[iconStart]="layoutService.isMenuExpanded() ? '@tui.chevron-left' : '@tui.chevron-right'"
			(click)="layoutService.ToggleMenu()"
		>
		</button>
		<span tuiNavigationLogo>
			<ng-container [ngTemplateOutlet]="layout.topbarlogo"></ng-container>
		</span>
		<hr style="min-inline-size:0px"/>
		<button
			[iconStart]="layoutService.isDarkMode() ? 'moon' : 'sun'"
			tuiIconButton
			type="button"
			(click)="layoutService.ToggleDarkMode()"
		>
		</button>

		<ng-container [ngTemplateOutlet]="layout.topbarright"></ng-container>
	</header>
    `
})
export class EzUITopBar {
	constructor(
		public layoutService: EzUILayoutService,
		public layout : EzUILayout
	){}
}
