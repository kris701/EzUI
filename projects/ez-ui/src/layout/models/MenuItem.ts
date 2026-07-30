
export interface MenuItem {
	label: string,
	icon: string | null,
	routerLink: string | null,
	queryParams: {[id:string]:string}
	items: MenuItem[] | null
	command?() : Promise<any>;

	visible : boolean;
	expanded : boolean;
}
