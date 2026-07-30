import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TuiNavigation } from "@taiga-ui/layout";
import { EzUILayout } from './ezui.layout';
import { EzUISideBarItem } from "./ezui.sidebar.item";
import { MenuItem } from './models/MenuItem';
import { EzUILayoutService } from './services/ezui.layout.service';

@Component({
    selector: 'ezui-sidebar',
    standalone: true,
    imports: [CommonModule, TuiNavigation, EzUISideBarItem],
    template: `
	    <aside
	        style="height:100%"
			tuitheme=""
	        [tuiNavigationAside]="layoutService.isMenuExpanded()"
	    >
			@for(item of layout.sidebarItems(); track item){
				<ezui-sidebar-item [item]="item"/>
			}

			<footer>
				@for(item of layout.sidebarFooterItems(); track item){
					<ezui-sidebar-item [item]="item"/>
				}
			</footer>
	    </aside>
    `
})
export class EzUISideBar {
	haveMoved = signal<boolean>(false);

    constructor(
          	public layoutService: EzUILayoutService,
			public layout : EzUILayout,
			private router: Router
	){
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd)
                this.initialize();
        });
	}

	initialize(){
        this.hideEmptySections(this.layout.sidebarItems());
        this.hideEmptySections(this.layout.sidebarFooterItems());

        if (!this.haveMoved() && this.router.routerState.snapshot.url == '/') this.gotoFirstPage(this.layout.sidebarItems());

        this.setActiveRoute(this.layout.sidebarItems());
        this.setActiveRoute(this.layout.sidebarFooterItems());
	}

    hideEmptySections(menu: MenuItem[]) {
        menu.forEach((x) => {
            if (x.items) {
                this.hideEmptySections(x.items);
                if (x.items.every((x) => x.visible == false)) {
                    x.visible = false;
                };
            }
        });
    }

    setActiveRoute(menu: MenuItem[], parent: MenuItem | null = null) {
        menu.forEach((x) => {
            if (x.routerLink) {
                if (x.routerLink == this.router.routerState.snapshot.url) {
                    x.expanded = true;
                    if (parent) parent.expanded = true;
                }
            }
            if (x.items) this.setActiveRoute(x.items, x);
        });
    }

    gotoFirstPage(menu: MenuItem[]) {
        var first = menu.find((x) => x.visible == true);
        if (first) {
            if (first.items) {
                this.gotoFirstPage(first.items);
            } else {
                this.haveMoved.set(true);
                this.router.navigate([first.routerLink]);
            }
        }
    }
}
