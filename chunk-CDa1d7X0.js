import{B as Tn,G as _,W as Zt,Z as gn,_ as I,_t as x,at as nY,bt as y,mt as v,ot as ne,q as ee,rt as m}from"./main-VQHBJ4XS.js";import{t as Y}from"./chunk-T89M9JwK.js";function d(t,m$1){if(t&1&&ee(0,`ezui-menubar`,3),t&2)x(`items`,m().items)}function f(t,m$2){if(t&1&&ee(0,`ezui-menubar`,3),t&2)x(`items`,m().items2)}var z=[{path:`menubar`,component:class t{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=I({type:t,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
]`,3,`enableTypescript`],[3,`items`]],template:function(e,y$1){e&1&&(y(0,`app-samplecontainer`,1),ne(1,d,1,1,`ng-template`,null,0,Tn),_(),y(3,`app-samplecontainer`,2),ne(4,f,1,1,`ng-template`,null,0,Tn),_()),e&2&&(x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[gn,Zt,nY,Y],encapsulation:2})}}];export{z as default};