import{K as g,U as an,c as Dn,dt as x,f as I,h as J9,m as J,mt as y,nt as re,ot as v,pt as xn,z as _}from"./main-SGEIHAKU.js";import{t as Y}from"./chunk-BiYViEGr.js";function d(t,m){if(t&1&&J(0,`ezui-menubar`,3),t&2)x(`items`,g().items)}function f(t,m){if(t&1&&J(0,`ezui-menubar`,3),t&2)x(`items`,g().items2)}var z=[{path:`menubar`,component:class t{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=I({type:t,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
	{
		label: 'Button 1',
		icon: 'check'
	} as MenuBarItem,
	{
		label: 'Some longer value name here',
		icon: 'x'
	} as MenuBarItem,
	{
		label: 'Button 3',
		icon: 'plus'
	} as MenuBarItem,
]`,3,`enableTypescript`],[`label`,`Hierarchical`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items2 : MenuBarItem[] = [
	{
		label: 'Button 1',
		icon: 'check',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click')
			} as MenuBarItem
		] as MenuBarItem[]
	} as MenuBarItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: () => alert('opt 3 click')
					} as MenuBarItem
				] as MenuBarItem[]
			} as MenuBarItem,
		] as MenuBarItem[]
	} as MenuBarItem,
]`,3,`enableTypescript`],[3,`items`]],template:function(e,y$1){e&1&&(y(0,`app-samplecontainer`,1),re(1,d,1,1,`ng-template`,null,0,Dn),_(),y(3,`app-samplecontainer`,2),re(4,f,1,1,`ng-template`,null,0,Dn),_()),e&2&&(x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[xn,an,J9,Y],encapsulation:2})}}];export{z as default};