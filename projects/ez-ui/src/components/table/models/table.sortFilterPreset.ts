import { EzUITableFilter } from "./table.filter";
import { EzUITableSort } from "./table.sort";

export interface EzUITableSortFilterPreset {
	id : string;
	name : string;
	sorts : EzUITableSort[];
	filters : EzUITableFilter[];
	edit: boolean;
}
