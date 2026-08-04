import {Y}from'./chunk-CYxY-ILl.js';import {E,P as Pn,_ as _n,M as h9,y,i as ie,a as _,I,v,t as te,j as g,l as En}from'./main-NIA4DYUS.js';function d(t,m){if(t&1&&te(0,"ezui-menubar",3),t&2){let e=g();I("items",e.items);}}function f(t,m){if(t&1&&te(0,"ezui-menubar",3),t&2){let e=g();I("items",e.items2);}}var a=class t{items=[{label:"Button 1",icon:"check",command:()=>alert("button 1 click")},{label:"Some longer value name here",icon:"x",command:()=>alert("button 2 click")},{label:"Button 3",icon:"plus",command:()=>alert("button 3 click")}];items2=[{label:"Button 1",icon:"check",items:[{label:"Opt 1",command:()=>alert("opt 1 click")},{label:"Opt 2",command:()=>alert("opt 2 click")}]},{label:"Button 2",icon:"x",items:[{label:"Opt 1",command:()=>alert("opt 1 click")},{label:"Opt 2",command:()=>alert("opt 2 click"),items:[{label:"Opt 3",command:()=>alert("opt 3 click")}]}]}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-menubar"]],hostAttrs:[1,"base-view"],decls:6,vars:2,consts:[["preview",""],["label","Simple","html",'<ezui-menubar [items]="items"/>',"ts",`items : MenuBarItem[] = [
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
]`,3,"enableTypescript"],["label","Hierarchical","html",'<ezui-menubar [items]="items"/>',"ts",`items2 : MenuBarItem[] = [
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
]`,3,"enableTypescript"],[3,"items"]],template:function(e,y$1){e&1&&(y(0,"app-samplecontainer",1),ie(1,d,1,1,"ng-template",null,0,En),_(),y(3,"app-samplecontainer",2),ie(4,f,1,1,"ng-template",null,0,En),_()),e&2&&(I("enableTypescript",true),v(3),I("enableTypescript",true));},dependencies:[Pn,_n,h9,Y],encapsulation:2})};var z=[{path:"menubar",component:a}];export{z as default};