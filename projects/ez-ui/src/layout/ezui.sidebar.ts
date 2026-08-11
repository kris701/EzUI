import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TuiNavigation } from "@taiga-ui/layout";
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
			@for(item of sidebarItems(); track item){
				<ezui-sidebar-item [item]="item"/>
			}

			<footer>
				@for(item of sidebarFooterItems(); track item){
					<ezui-sidebar-item [item]="item"/>
				}
			</footer>
	    </aside>
    `
})
export class EzUISideBar {
	@Input() sidebarItems = signal<MenuItem[]>([]);
	@Input() sidebarFooterItems = signal<MenuItem[]>([]);
	haveMoved = signal<boolean>(false);

	@Input() baseRoute = signal<string>("/");

    constructor(
          	public layoutService: EzUILayoutService,
			private router: Router
	){
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd)
                this.initialize()
        });
	}

	ngOnInit(){
		this.initialize();
	}

	public initialize(){
		var sidebarItems = [...this.sidebarItems()]
		var sidebarFooterItems = [...this.sidebarFooterItems()]
        this.hideEmptySections(sidebarItems);
        this.hideEmptySections(sidebarFooterItems);

        if (!this.haveMoved() && this.router.routerState.snapshot.url == this.baseRoute()) this.gotoFirstPage(sidebarItems);

        this.setActiveRoute(sidebarItems);
        this.setActiveRoute(sidebarFooterItems);

		this.sidebarItems.set(sidebarItems)
		this.sidebarFooterItems.set(sidebarFooterItems)
	}

    hideEmptySections(menu: MenuItem[]) {
		for(let item of menu) {
			if (item.items) {
                this.hideEmptySections(item.items);
                if (item.items.every((x) => x.visible == false)) {
                    item.visible = false;
                }
            }
		}
    }

    setActiveRoute(menu: MenuItem[], parent: MenuItem | null = null) {
        for(let item of menu) {
            if (item.routerLink) {
                if (item.routerLink == this.router.routerState.snapshot.url) {
                    item.expanded = true;
                    if (parent) parent.expanded = true;
                }
            }
            if (item.items) this.setActiveRoute(item.items, item);
        }
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
