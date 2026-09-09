import{F as Z,J as f,M as X,N as Xe,P as Y,Tt as wt,X as g,bt as u5e,dt as qr,et as i5e,f as IJ,g as L$1,h as Kt,i as C,it as m,n as A$1,nt as k,s as E,v as M,wt as w,x as Pt,xt as v,y as O}from"./main-QPH64MWY.js";import{t as h}from"./chunk-C3uVuQxk.js";import{t as G}from"./chunk-Dbh8kZPU.js";function R(e,n){e&1&&(g(0,`span`),A$1(1,`This is the content of the dialog`),v())}function V(e,n){if(e&1){let t=L$1();g(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),v(),g(2,`button`,5),w(`click`,function(){E(t);return M(f().showDialog.set(!0))}),A$1(3,` Open `),v(),g(4,`ezui-dialog`,6),Z(5,R,2,0,`ng-template`,null,1,Pt),v()}if(e&2){let t=f();m(4),C(`showDialog`,t.showDialog)}}function A(e,n){e&1&&(g(0,`span`),A$1(1,`This is the content of the dialog`),v())}function N(e,n){if(e&1){let t=L$1();g(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),v(),g(2,`button`,5),w(`click`,function(){E(t);return M(f().showDialog2.set(!0))}),A$1(3,` Open `),v(),g(4,`ezui-dialog`,7),w(`onSaveItem`,function(){E(t);return M(f().showAlert(`saved!`))})(`onDeleteItem`,function(){E(t);return M(f().showAlert(`deleted!`))}),Z(5,A,2,0,`ng-template`,null,1,Pt),v()}if(e&2){let t=f();m(4),C(`showDialog`,t.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}var x=class e{showDialog=O(!1);showDialog2=O(!1);showAlert(n){alert(n)}static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`content`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
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
}`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`]],template:function(t,c){t&1&&(g(0,`app-samplecontainer`,2),Z(1,V,7,1,`ng-template`,null,0,Pt),v(),g(3,`app-samplecontainer`,3),Z(4,N,7,3,`ng-template`,null,0,Pt),v()),t&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[Kt,wt,G,i5e,Xe,h],encapsulation:2})};function F(e,n){if(e&1&&Y(0,`ezui-menubar`,3),e&2)C(`items`,f().items)}function U(e,n){if(e&1&&Y(0,`ezui-menubar`,3),e&2)C(`items`,f().items2)}var y=class e{items=[{label:`Button 1`,icon:`check`,command:(n,t)=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:(n,t)=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:(n,t)=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:(n,t)=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
				command: (s,i) => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: (s,i) => alert('opt 2 click')
			} as MenuBarItem
		] as MenuBarItem[]
	} as MenuBarItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: (s,i) => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: (s,i) => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: (s,i) => alert('opt 3 click')
					} as MenuBarItem
				] as MenuBarItem[]
			} as MenuBarItem,
		] as MenuBarItem[]
	} as MenuBarItem,
]`,3,`enableTypescript`],[3,`items`]],template:function(t,c){t&1&&(g(0,`app-samplecontainer`,1),Z(1,F,1,1,`ng-template`,null,0,Pt),v(),g(3,`app-samplecontainer`,2),Z(4,U,1,1,`ng-template`,null,0,Pt),v()),t&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[Kt,wt,IJ,G],encapsulation:2})};function j(e,n){if(e&1&&Y(0,`ezui-popoutmenu`,5),e&2)C(`items`,f().items)}function q(e,n){if(e&1&&Y(0,`ezui-popoutmenu`,5),e&2)C(`items`,f().items2)}function H(e,n){if(e&1&&(g(0,`span`,6),A$1(1),v()),e&2){let t=n.$implicit;m(),X(`Special text: `,t.label)}}function L(e,n){if(e&1&&(g(0,`ezui-popoutmenu`,5),Z(1,H,2,1,`ng-template`,null,1,Pt),v()),e&2)C(`items`,f().items)}var B=class e{items=[{label:`Button 1`,icon:`check`,command:(n,t)=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:(n,t)=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:(n,t)=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:(n,t)=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:9,vars:3,consts:[[`preview`,``],[`itemTemplate`,``],[`label`,`Simple`,`html`,`<ezui-popoutmenu [items]="items" label="Click Me"/>`,`ts`,`items : PopoutMenuItem[] = [
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
				command: (e) => alert('opt 1 click')
			} as PopoutMenuItem,
			{
				label: 'Opt 2',
				command: (e) => alert('opt 2 click')
			} as PopoutMenuItem
		] as PopoutMenuItem[]
	} as PopoutMenuItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: (e) => alert('opt 1 click')
			} as PopoutMenuItem,
			{
				label: 'Opt 2',
				command: (e) => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: (e) => alert('opt 3 click')
					} as PopoutMenuItem
				] as PopoutMenuItem[]
			} as PopoutMenuItem,
		] as PopoutMenuItem[]
	} as PopoutMenuItem,
]`,3,`enableTypescript`],[`label`,`Templating`,`html`,`<ezui-popoutmenu [items]="items" label="Click Me"/>`,`ts`,`items : PopoutMenuItem[] = [
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
]`,3,`enableTypescript`],[`label`,`Click Me`,3,`items`],[`tuiChip`,``,`appearance`,`info`]],template:function(t,c){t&1&&(g(0,`app-samplecontainer`,2),Z(1,j,1,1,`ng-template`,null,0,Pt),v(),g(3,`app-samplecontainer`,3),Z(4,q,1,1,`ng-template`,null,0,Pt),v(),g(6,`app-samplecontainer`,4),Z(7,L,3,1,`ng-template`,null,0,Pt),v()),t&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[Kt,wt,G,u5e,qr],encapsulation:2})};var Mt=[{path:`menubar`,component:y},{path:`dialog`,component:x},{path:`popoutmenu`,component:B}];export{Mt as default};