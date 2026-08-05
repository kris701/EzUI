export class EzUIFilterHelpers {
	public static textFilter(values: any[], fn : (i : string) => boolean, column : string) : any[]{
		const filtered = []
		for(const value of values)
		{
			const asStr : string = value[column];
			if (fn(asStr))
				filtered.push(value);
		}
		return filtered;
	}

	public static dateFilter(values: any[], fn : (i : Date) => boolean, column : string) : any[]{
		const filtered = []
		for(const value of values)
		{
			const asDate : Date = new Date(value[column]);
			if (fn(asDate))
				filtered.push(value);
		}
		return filtered;
	}

	public static boolFilter(values: any[], fn : (i : boolean) => boolean, column : string) : any[]{
		const filtered = []
		for(const value of values)
		{
			const asBoolean : boolean = value[column];
			if (fn(asBoolean))
				filtered.push(value);
		}
		return filtered;
	}
}
