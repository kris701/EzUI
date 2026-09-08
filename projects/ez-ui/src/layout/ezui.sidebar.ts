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
		@if(layoutService.isDesktop()){
			<aside style="height:100%" tuitheme="" [tuiNavigationAside]="layoutService.isMenuExpanded()">
				@for(item of sidebarItems(); track item){
					<ezui-sidebar-item [item]="item" (onItemClick)="saveState()"/>
				}

				<footer>
					@for(item of sidebarFooterItems(); track item){
						<ezui-sidebar-item [item]="item" (onItemClick)="saveState()"/>
					}
				</footer>
			</aside>
		}
		@else {
			<aside style="height:100%" tuitheme="" [tuiNavigationAside]="true" [style.display]="layoutService.isMenuExpanded() ? '' : 'none'">
				@for(item of sidebarItems(); track item){
					<ezui-sidebar-item [item]="item" (onItemClick)="layoutService.isMenuExpanded.set(false);saveState()"/>
				}

				<footer>
					@for(item of sidebarFooterItems(); track item){
						<ezui-sidebar-item [item]="item" (onItemClick)="layoutService.isMenuExpanded.set(false);saveState()"/>
					}
				</footer>
			</aside>
		}
    `,
	styles: `
		::ng-deep tui-aside-group tui-expand tui-aside-group tui-expand [tuiAsideItem] {
			padding-inline-start: 4rem !important;
		}

		::ng-deep tui-aside-group tui-expand tui-aside-group tui-expand tui-aside-group tui-expand [tuiAsideItem] {
			padding-inline-start: 6rem !important;
		}
	`
})
export class EzUISideBar {
	@Input() sidebarItems = signal<MenuItem[]>([]);
	@Input() sidebarFooterItems = signal<MenuItem[]>([]);
	haveMoved = signal<boolean>(false);

	@Input() baseRoute = signal<string>("/");

	openStateKey = "ezui-sidebar-state";

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
		let sidebarItems = [...this.sidebarItems()]
		let sidebarFooterItems = [...this.sidebarFooterItems()]
        this.hideEmptySections(sidebarItems);
        this.hideEmptySections(sidebarFooterItems);

        if (!this.haveMoved() && this.router.routerState.snapshot.url == this.baseRoute()) this.gotoFirstPage(sidebarItems);

        this.setActiveRoute(sidebarItems);
        this.setActiveRoute(sidebarFooterItems);

		let stateStr = localStorage.getItem(this.openStateKey)
		if (stateStr){
			let state = JSON.parse(stateStr)
			this.setOpenStates(sidebarItems, state.sidebar);
			this.setOpenStates(sidebarFooterItems, state.footer);
		}

		this.sidebarItems.set(sidebarItems)
		this.sidebarFooterItems.set(sidebarFooterItems)
	}

	saveState(){
		let state = {
			sidebar: this.getOpenStates(this.sidebarItems()),
			footer: this.getOpenStates(this.sidebarFooterItems())
		}

		localStorage.setItem(this.openStateKey, JSON.stringify(state))
	}

	getOpenStates(from : MenuItem[]) : string[]{
		let open : string[] = []
		let index = 0;
		for(let item of from) {
			let subOpen = this.getOpenStatesRec(item)
			for(let value of subOpen)
			{
				if (value == "")
					open.push(index + "");
				else
					open.push(index + ";" + value);
			}

			index++;
		}
		return open;
	}

	getOpenStatesRec(from : MenuItem) : string[]{
		let open : string[] = []
		if(from.items){
			if (from.expanded)
				open.push("");

			let index = 0;

			for(let item of from.items){
				let subOpen = this.getOpenStatesRec(item)
				for(let value of subOpen){
					if (value == "")
						open.push(index + "");
					else
						open.push(index + ";" + value);
				}

				index++;
			}
		}
		return open;
	}

	setOpenStates(from : MenuItem[], state : string[]) {
		let index = 0;
		for(let item of from) {
			this.setOpenStatesRec(item, index + "", state);
			index++;
		}
	}

	setOpenStatesRec(from : MenuItem, fromIndex : string, state : string[]) {
		if(from.items){
			if (state.includes(fromIndex))
				from.expanded = true;

			let index = 0;
			for(let item of from.items){
				this.setOpenStatesRec(item, fromIndex + ";" + index, state);
				index++;
			}
		}
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
        let first = menu.find((x) => x.visible == true);
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
