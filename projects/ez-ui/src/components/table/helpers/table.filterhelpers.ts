export class EzUIFilterHelpers {
	public static genericFilter<T>(values: any[], fn : (i : T) => boolean, column : string) : any[]{
		const filtered = []
		for(const value of values)
		{
			const base = this.getColumn(value,column);
			console.log(column)
			console.log(base)
			if (Array.isArray(base)){
				for(let item of base){
					const asGeneric : T = item;
					if (fn(asGeneric))
					{
						filtered.push(value);
						break;
					}
				}
			}
			else {
				const asGeneric : T = base;
				if (fn(asGeneric))
					filtered.push(value);
			}
		}
		return filtered;
	}

	public static dateFilter(values: any[], fn : (i : Date) => boolean, column : string) : any[]{
		const filtered = []
		for(const value of values)
		{
			const base = this.getColumn(value,column);
			if (Array.isArray(base)){
				for(let item of base){
					const asDate : Date = new Date(item);
					if (fn(asDate))
					{
						filtered.push(value);
						break;
					}
				}
			}
			else {
				const asDate : Date = new Date(base);
				if (fn(asDate))
					filtered.push(value);
			}
		}
		return filtered;
	}

	private static getColumn(value : any, column : string) : any {
		let split = column.split('.')
		if (split.length == 1)
			return value[column];
		return this.getColumn(value[split[0]], split.slice(1).join("."));
	}
}
