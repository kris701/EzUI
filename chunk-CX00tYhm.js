import{B as X,Ct as w,D as O,E as N$1,Et as zVe,G as Yt,N as T,Q as bo,R as Vt,St as v,T as M,U as Y,b as Ke,dt as m,i as A$1,lt as k,mt as q$1,q as _,rt as f,s as Ct,x as L$1,xt as uJ,z as WVe}from"./main-GM3VVRUN.js";import{t as h}from"./chunk-B8BRwDdv.js";import{t as G}from"./chunk-B3AjTU0O.js";function R(t,n){t&1&&(v(0,`span`),A$1(1,`This is the content of the dialog`),_())}function V(t,n){if(t&1){let e=L$1();v(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),_(),v(2,`button`,5),T(`click`,function(){M(e);return N$1(f().showDialog.set(!0))}),A$1(3,` Open `),_(),v(4,`ezui-dialog`,6),X(5,R,2,0,`ng-template`,null,1,Vt),_()}if(t&2){let e=f();m(4),w(`showDialog`,e.showDialog)}}function A(t,n){t&1&&(v(0,`span`),A$1(1,`This is the content of the dialog`),_())}function N(t,n){if(t&1){let e=L$1();v(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),_(),v(2,`button`,5),T(`click`,function(){M(e);return N$1(f().showDialog2.set(!0))}),A$1(3,` Open `),_(),v(4,`ezui-dialog`,7),T(`onSaveItem`,function(){M(e);return N$1(f().showAlert(`saved!`))})(`onDeleteItem`,function(){M(e);return N$1(f().showAlert(`deleted!`))}),X(5,A,2,0,`ng-template`,null,1,Vt),_()}if(t&2){let e=f();m(4),w(`showDialog`,e.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}var x=class t{showDialog=O(!1);showDialog2=O(!1);showAlert(n){alert(n)}static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`content`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
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
}`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`]],template:function(e,c){e&1&&(v(0,`app-samplecontainer`,2),X(1,V,7,1,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,3),X(4,N,7,3,`ng-template`,null,0,Vt),_()),e&2&&(w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0))},dependencies:[Yt,Ct,G,zVe,Ke,h],encapsulation:2})};function F(t,n){if(t&1&&q$1(0,`ezui-menubar`,3),t&2)w(`items`,f().items)}function U(t,n){if(t&1&&q$1(0,`ezui-menubar`,3),t&2)w(`items`,f().items2)}var y=class t{items=[{label:`Button 1`,icon:`check`,command:n=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:n=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:n=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:n=>alert(`opt 1 click`)},{label:`Opt 2`,command:n=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:n=>alert(`opt 1 click`)},{label:`Opt 2`,command:n=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:n=>alert(`opt 3 click`)}]}]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
				command: (e) => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: (e) => alert('opt 2 click')
			} as MenuBarItem
		] as MenuBarItem[]
	} as MenuBarItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: (e) => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: (e) => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: (e) => alert('opt 3 click')
					} as MenuBarItem
				] as MenuBarItem[]
			} as MenuBarItem,
		] as MenuBarItem[]
	} as MenuBarItem,
]`,3,`enableTypescript`],[3,`items`]],template:function(e,c){e&1&&(v(0,`app-samplecontainer`,1),X(1,F,1,1,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,2),X(4,U,1,1,`ng-template`,null,0,Vt),_()),e&2&&(w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0))},dependencies:[Yt,Ct,uJ,G],encapsulation:2})};function j(t,n){if(t&1&&q$1(0,`ezui-popoutmenu`,5),t&2)w(`items`,f().items)}function q(t,n){if(t&1&&q$1(0,`ezui-popoutmenu`,5),t&2)w(`items`,f().items2)}function H(t,n){if(t&1&&(v(0,`span`,6),A$1(1),_()),t&2){let e=n.$implicit;m(),Y(`Special text: `,e.label)}}function L(t,n){if(t&1&&(v(0,`ezui-popoutmenu`,5),X(1,H,2,1,`ng-template`,null,1,Vt),_()),t&2)w(`items`,f().items)}var B=class t{items=[{label:`Button 1`,icon:`check`,command:n=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:n=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:n=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:n=>alert(`opt 1 click`)},{label:`Opt 2`,command:n=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:n=>alert(`opt 1 click`)},{label:`Opt 2`,command:n=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:n=>alert(`opt 3 click`)}]}]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:9,vars:3,consts:[[`preview`,``],[`itemTemplate`,``],[`label`,`Simple`,`html`,`<ezui-popoutmenu [items]="items" label="Click Me"/>`,`ts`,`items : PopoutMenuItem[] = [
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
]`,3,`enableTypescript`],[`label`,`Click Me`,3,`items`],[`tuiChip`,``,`appearance`,`info`]],template:function(e,c){e&1&&(v(0,`app-samplecontainer`,2),X(1,j,1,1,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,3),X(4,q,1,1,`ng-template`,null,0,Vt),_(),v(6,`app-samplecontainer`,4),X(7,L,3,1,`ng-template`,null,0,Vt),_()),e&2&&(w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0))},dependencies:[Yt,Ct,G,WVe,bo],encapsulation:2})};var Mt=[{path:`menubar`,component:y},{path:`dialog`,component:x},{path:`popoutmenu`,component:B}];export{Mt as default};