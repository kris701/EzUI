export interface EzUITableSortMethod {
	state : 'asc' | 'desc' | 'none';
	sort(a : any, b : any, column : string) : number;
}
