import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, signal, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRoot, TuiScrollbar } from "@taiga-ui/core";
import { TuiNavigation } from '@taiga-ui/layout';
import { EzUISideBar } from "./ezui.sidebar";
import { EzUITopBar } from "./ezui.topbar";
import { MenuItem } from './models/MenuItem';

@Component({
    selector: 'ezui-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, EzUITopBar, EzUISideBar, TuiNavigation, TuiScrollbar, TuiRoot],
    template: `
	<tui-root class="rootContainer">
		<div class="layout-wrapper">
			<ezui-topbar></ezui-topbar>
			<div class="layout-wrapper-split">
				<ezui-sidebar #sidebar></ezui-sidebar>
				<div class="layout-main-container">
					<tui-scrollbar class="layout-main">
						<router-outlet></router-outlet>
					</tui-scrollbar>
				</div>
			</div>
		</div>
	</tui-root>
    `,
	styles: `
		::ng-deep .rootContainer .t-root-content {
			display:flex;
			height:100vh;
			width:100vw;
		}

		.layout-wrapper {
			display: flex;
			flex-direction: column;
			height:100vh;
			min-height: 100vh;
			max-height: 100vh;
		}

		.layout-wrapper-split {
			display: flex;
			flex-direction: row;
			width: 100%;
			height:100%;
			overflow:hidden;
			max-width:100vw;
		}

		.layout-main-container {
			display: flex;
			flex-direction: column;
			min-height: inherit;
			max-height: inherit;
			width:100%;
			justify-content: space-between;
			overflow:hidden;
		}

		.layout-main {
			flex: 1 1 auto;
			display: flex;
		}

		::ng-deep .layout-main > .t-content {
			padding:1rem;
			display:flex;
			block-size:auto !important;
			box-sizing: border-box;
		}
	`
})
export class EzUILayout {
	@Input() sidebarItems = signal<MenuItem[]>([]);
	@Input() sidebarFooterItems = signal<MenuItem[]>([]);

	@ContentChild('topbarright', { static: false }) public topbarright: TemplateRef<any> | undefined;
	@ContentChild('topbarlogo', { static: false }) public topbarlogo: TemplateRef<any> | undefined;
	@ContentChild('sidebar', { static: false }) public sidebar: EzUISideBar | undefined;

	public forceLoadSidebar(){
		if (this.sidebar)
			this.sidebar.initialize();
	}
}


