import { EzUITableSortFilterPreset } from "./table.sortFilterPreset";

export interface EzUITableSortFilterPresetSave {
	current : string | null;
	presets : EzUITableSortFilterPreset[];
}
