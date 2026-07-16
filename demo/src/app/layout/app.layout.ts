import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiScrollbar } from "@taiga-ui/core";
import { TuiNavigation } from '@taiga-ui/layout';
import { AppSideBar } from "./app.sidebar";
import { AppTopBar } from "./app.topbar";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, AppTopBar, AppSideBar, TuiNavigation, TuiScrollbar],
    template: `
    <div class="layout-wrapper">
		<div class="flex flex-col w-full h-full">
			<app-topbar></app-topbar>
			<div class="flex flex-row w-full h-full" style="overflow:hidden;max-width:100vw">
				<app-sidebar></app-sidebar>
				<div class="layout-main-container">
					<tui-scrollbar class="layout-main">
						<router-outlet></router-outlet>
					</tui-scrollbar>
				</div>
			</div>
		</div>
    </div>
    `,
	styles: `
		.layout-wrapper {
			display: flex;
			flex-direction: column;
			height:100vh;
			min-height: 100vh;
			max-height: 100vh;
		}

		.layout-main-container {
			display: flex;
			flex-direction: column;
			min-height: inherit;
			max-height: inherit;
			width:100%;
			justify-content: space-between;
		}

		.layout-main {
			flex: 1 1 auto;
			display: flex;
		}

		::ng-deep .layout-main > .t-content {
			padding:1rem;
			display:flex;
			block-size:auto !important;
		}
	`
})
export class AppLayout {
}
