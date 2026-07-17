export interface EzUITableFilterMethod {
	key : string;
	action : string;
	filter(values : any[], column : string, value : any) : any[];
}
