import{C as Q,G as h,J as k,M as Xe,S as Ot,St as z$1,Z as m,_t as v,b as O$1,k as Rt,lt as sLe,n as A$1,o as C,ot as q,p as JFe,rt as pK,s as D,st as qt,v as M,xt as y$1,y as N$1}from"./main-VIUT5VA2.js";import{t as h$1}from"./chunk-BvEnnmOj.js";import{t as G}from"./chunk-m5Ym3XHC.js";function z(e,a){e&1&&(v(0,`span`),A$1(1,`This is the content of the dialog`),y$1())}function O(e,a){if(e&1){let t=z$1();v(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),y$1(),v(2,`button`,5),D(`click`,function(){N$1(t);return k(h().showDialog.set(!0))}),A$1(3,` Open `),y$1(),v(4,`ezui-dialog`,6),Q(5,z,2,0,`ng-template`,null,1,Ot),y$1()}if(e&2){let t=h();m(4),C(`showDialog`,t.showDialog)}}function R(e,a){e&1&&(v(0,`span`),A$1(1,`This is the content of the dialog`),y$1())}function V(e,a){if(e&1){let t=z$1();v(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),y$1(),v(2,`button`,5),D(`click`,function(){N$1(t);return k(h().showDialog2.set(!0))}),A$1(3,` Open `),y$1(),v(4,`ezui-dialog`,7),D(`onSaveItem`,function(){N$1(t);return k(h().showAlert(`saved!`))})(`onDeleteItem`,function(){N$1(t);return k(h().showAlert(`deleted!`))}),Q(5,R,2,0,`ng-template`,null,1,Ot),y$1()}if(e&2){let t=h();m(4),C(`showDialog`,t.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}var x=class e{showDialog=O$1(!1);showDialog2=O$1(!1);showAlert(a){alert(a)}static ɵfac=function(t){return new(t||e)};static ɵcmp=M({type:e,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`content`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog [showDialog]="showDialog">
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>`,`ts`,`showDialog = signal<boolean>(false);`,3,`enableTypescript`],[`label`,`Simple 2`,`html`,`<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog
	[showDialog]="showDialog"
	title="Some Title"
	[showDelete]="true"
	[showSave]="true"
	(onSaveItem)="showAlert("saved!")"
	(onDeleteItem)="showAlert("deleted!")"
>
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>`,`ts`,`showDialog2 = signal<boolean>(false);
showAlert(text : string){
	alert(text)
}`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`]],template:function(t,c){t&1&&(v(0,`app-samplecontainer`,2),Q(1,O,7,1,`ng-template`,null,0,Ot),y$1(),v(3,`app-samplecontainer`,3),Q(4,V,7,3,`ng-template`,null,0,Ot),y$1()),t&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[qt,Rt,G,JFe,Xe,h$1],encapsulation:2})};function A(e,a){if(e&1&&q(0,`ezui-menubar`,3),e&2)C(`items`,h().items)}function N(e,a){if(e&1&&q(0,`ezui-menubar`,3),e&2)C(`items`,h().items2)}var y=class e{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=M({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
]`,3,`enableTypescript`],[3,`items`]],template:function(t,c){t&1&&(v(0,`app-samplecontainer`,1),Q(1,A,1,1,`ng-template`,null,0,Ot),y$1(),v(3,`app-samplecontainer`,2),Q(4,N,1,1,`ng-template`,null,0,Ot),y$1()),t&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[qt,Rt,pK,G],encapsulation:2})};function F(e,a){if(e&1&&q(0,`ezui-popoutmenu`,3),e&2)C(`items`,h().items)}function U(e,a){if(e&1&&q(0,`ezui-popoutmenu`,3),e&2)C(`items`,h().items2)}var B=class e{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=M({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-popoutmenu [items]="items" label="Click Me"/>`,`ts`,`items : PopoutMenuItem[] = [
	{
		label: 'Button 1',
		icon: 'check'
	} as PopoutMenuItem,
	{
		label: 'Some longer value name here',
		icon: 'x'
	} as PopoutMenuItem,
	{
		label: 'Button 3',
		icon: 'plus'
	} as PopoutMenuItem,
]`,3,`enableTypescript`],[`label`,`Hierarchical`,`html`,`<ezui-popoutmenu [items]="items" label="Click Me"/>`,`ts`,`items2 : PopoutMenuItem[] = [
	{
		label: 'Button 1',
		icon: 'check',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as PopoutMenuItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click')
			} as PopoutMenuItem
		] as PopoutMenuItem[]
	} as PopoutMenuItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as PopoutMenuItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: () => alert('opt 3 click')
					} as PopoutMenuItem
				] as PopoutMenuItem[]
			} as PopoutMenuItem,
		] as PopoutMenuItem[]
	} as PopoutMenuItem,
]`,3,`enableTypescript`],[`label`,`Click Me`,3,`items`]],template:function(t,c){t&1&&(v(0,`app-samplecontainer`,1),Q(1,F,1,1,`ng-template`,null,0,Ot),y$1(),v(3,`app-samplecontainer`,2),Q(4,U,1,1,`ng-template`,null,0,Ot),y$1()),t&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[qt,Rt,G,sLe],encapsulation:2})};var ut=[{path:`menubar`,component:y},{path:`dialog`,component:x},{path:`popoutmenu`,component:B}];export{ut as default};