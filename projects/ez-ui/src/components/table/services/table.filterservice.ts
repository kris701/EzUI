import { EzUIFilterHelpers } from "../helpers/table.filterhelpers";
import { EzUITableFilter } from "../models/table.filter";
import { EzUITableFilterMethod } from "../models/table.filterMethod";
import { EzUITableSort } from "../models/table.sort";
import { EzUITableSortMethod } from "../models/table.sortMethod";

export class EzUITableFilterService {
	public sortMethods : EzUITableSortMethod[] = [
		{
			state: 'asc',
			sort: (a: any, b: any, column : string) => {
				if (a[column] < b[column])
					return 1;
				if (a[column] > b[column])
					return -1;
				return 0;
			}
		} as EzUITableSortMethod,
		{
			state: 'desc',
			sort: (a: any, b: any, column : string) => {
				if (a[column] < b[column])
					return -1;
				if (a[column] > b[column])
					return 1;
				return 0;
			}
		} as EzUITableSortMethod
	]

	public filterMethods : EzUITableFilterMethod[] = [
		// Text filters
		{
			key: 'str',
			action: 'con',
			filter: (values : any[], column : string, value : any) => EzUIFilterHelpers.textFilter(values, (i : string) => i.includes(value), column)
		},
		{
			key: 'str',
			action: 'ncon',
			filter: (values : any[], column : string, value : any) => EzUIFilterHelpers.textFilter(values, (i : string) => !i.includes(value), column)
		},
		{
			key: 'str',
			action: 'sta',
			filter: (values : any[], column : string, value : any) => EzUIFilterHelpers.textFilter(values, (i : string) => i.startsWith(value), column)
		},
		{
			key: 'str',
			action: 'end',
			filter: (values : any[], column : string, value : any) => EzUIFilterHelpers.textFilter(values, (i : string) => i.endsWith(value), column)
		},

		// Select filters
		{
			key: 'sel',
			action: 'con',
			filter: (values : any[], column : string, value : any) => EzUIFilterHelpers.textFilter(values, (i : string) => value.includes(i), column)
		},
		{
			key: 'sel',
			action: 'ncon',
			filter: (values : any[], column : string, value : any) => EzUIFilterHelpers.textFilter(values, (i : string) => !value.includes(i), column)
		},

		// Date filters
		{
			key: 'dat',
			action: 'bef',
			filter: (values : any[], column : string, value : any) =>
				EzUIFilterHelpers.dateFilter(
					values,
					(i : Date) => {
						var normal = value[0].toLocalNativeDate()
						normal.setMilliseconds(value[1].toAbsoluteMilliseconds());
						return i.getTime() < normal.getTime()
					},
					column)
		},
		{
			key: 'dat',
			action: 'aft',
			filter: (values : any[], column : string, value : any) =>
				EzUIFilterHelpers.dateFilter(
					values,
					(i : Date) => {
						var normal = value[0].toLocalNativeDate()
						normal.setMilliseconds(value[1].toAbsoluteMilliseconds());
						return i.getTime() > normal.getTime()
					},
					column)
		},
	]

	public sort(values : any[], sort : EzUITableSort) : any[]{
		var target = this.sortMethods.find(x => x.state == sort.state);
		if (target)
			return values.sort((a : any, b: any) => target!.sort(a,b,sort.column));
		return values;
	}

	public filter(values : any[], filter : EzUITableFilter) : any[]{
		var split = filter.expression.split(';');
		var target = this.filterMethods.find(x => split[0] == x.key && split[1] == x.action);
		if (target)
			return target!.filter(values, filter.column, filter.value);
		return values;
	}
}

