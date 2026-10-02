import{A as Ot,F as S,H as X,J as b,L as T,M as R$1,O,Ot as z,R as TPe,W as _,_ as Gt,c as C,d as D$1,et as co,ft as oe,gt as st,h as F$1,nt as gPe,o as B$1,ot as j9,pt as oi,r as A$1,vt as te}from"./main-A5K24ZQN.js";import{t as y}from"./chunk-HT3zlFcH.js";import{t as G$1}from"./chunk-BiS-Kzbk.js";function R(e,n){e&1&&(C(0,`span`),z(1,`This is the content of the dialog`),T())}function V(e,n){if(e&1){let t=B$1();C(0,`span`,7),z(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),T(),C(2,`button`,8),D$1(`click`,function(){O(t);let u=b();return A$1(u.showDialog.set(!0))}),z(3,` Open `),T(),C(4,`ezui-dialog`,9),te(5,R,2,0,`ng-template`,null,1,Gt),T()}if(e&2){let t=b();_(4),S(`showDialog`,t.showDialog)}}function A(e,n){e&1&&(C(0,`span`),z(1,`This is the content of the dialog`),T())}function N(e,n){if(e&1){let t=B$1();C(0,`span`,7),z(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),T(),C(2,`button`,8),D$1(`click`,function(){O(t);let u=b();return A$1(u.showDialog2.set(!0))}),z(3,` Open `),T(),C(4,`ezui-dialog`,10),D$1(`onSaveItem`,function(){O(t);let u=b();return A$1(u.showAlert(`saved!`))})(`onDeleteItem`,function(){O(t);let u=b();return A$1(u.showAlert(`deleted!`))}),te(5,A,2,0,`ng-template`,null,1,Gt),T()}if(e&2){let t=b();_(4),S(`showDialog`,t.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}function F(e,n){e&1&&(C(0,`span`,12),z(1,`Special Header`),T())}function U(e,n){e&1&&(C(0,`span`),z(1,`This is the content of the dialog`),T())}function H(e,n){e&1&&(C(0,`span`,12),z(1,`Additional footer items`),T())}function j(e,n){if(e&1){let t=B$1();C(0,`span`,7),z(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),T(),C(2,`button`,8),D$1(`click`,function(){O(t);let u=b();return A$1(u.showDialog.set(!0))}),z(3,` Open `),T(),C(4,`ezui-dialog`,11),te(5,F,2,0,`ng-template`,null,2,Gt)(7,U,2,0,`ng-template`,null,1,Gt)(9,H,2,0,`ng-template`,null,3,Gt),T()}if(e&2){let t=b();_(4),S(`showDialog`,t.showDialog)(`showDelete`,!0)(`showSave`,!0)}}var w=class e{showDialog=F$1(!1);showDialog2=F$1(!1);showAlert(n){alert(n)}static ɵfac=function(t){return new(t||e)};static ɵcmp=R$1({type:e,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:9,vars:3,consts:[[`preview`,``],[`content`,``],[`header`,``],[`footer`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
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
}`,3,`enableTypescript`],[`label`,`Templates`,`html`,`<ezui-dialog [showDialog]="showDialog" [showDelete]="true" [showSave]="true">
	<ng-template #header>
		<span tuiChip appearance="info">Special Header</span>
	</ng-template>
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
	<ng-template #footer>
		<span tuiChip appearance="info">Additional footer items</span>
	</ng-template>
</ezui-dialog>`,`ts`,`showDialog = signal<boolean>(false);`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`],[3,`showDialog`,`showDelete`,`showSave`],[`tuiChip`,``,`appearance`,`info`]],template:function(t,c){t&1&&(C(0,`app-samplecontainer`,4),te(1,V,7,1,`ng-template`,null,0,Gt),T(),C(3,`app-samplecontainer`,5),te(4,N,7,3,`ng-template`,null,0,Gt),T(),C(6,`app-samplecontainer`,6),te(7,j,11,3,`ng-template`,null,0,Gt),T()),t&2&&(S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0))},dependencies:[oi,Ot,G$1,gPe,st,y,co],encapsulation:2})};function q(e,n){if(e&1&&X(0,`ezui-menubar`,3),e&2){let t=b();S(`items`,t.items)}}function L(e,n){if(e&1&&X(0,`ezui-menubar`,3),e&2){let t=b();S(`items`,t.items2)}}var D=class e{items=[{label:`Button 1`,icon:`check`,command:(n,t)=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:(n,t)=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:(n,t)=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:(n,t)=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=R$1({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
]`,3,`enableTypescript`],[3,`items`]],template:function(t,c){t&1&&(C(0,`app-samplecontainer`,1),te(1,q,1,1,`ng-template`,null,0,Gt),T(),C(3,`app-samplecontainer`,2),te(4,L,1,1,`ng-template`,null,0,Gt),T()),t&2&&(S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0))},dependencies:[oi,Ot,j9,G$1],encapsulation:2})};function $(e,n){if(e&1&&X(0,`ezui-popoutmenu`,5),e&2){let t=b();S(`items`,t.items)}}function G(e,n){if(e&1&&X(0,`ezui-popoutmenu`,5),e&2){let t=b();S(`items`,t.items2)}}function J(e,n){if(e&1&&(C(0,`span`,6),z(1),T()),e&2){let t=n.$implicit;_(),oe(`Special text: `,t.label)}}function K(e,n){if(e&1&&(C(0,`ezui-popoutmenu`,5),te(1,J,2,1,`ng-template`,null,1,Gt),T()),e&2){let t=b();S(`items`,t.items)}}var B=class e{items=[{label:`Button 1`,icon:`check`,command:(n,t)=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:(n,t)=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:(n,t)=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:(n,t)=>alert(`opt 1 click`)},{label:`Opt 2`,command:(n,t)=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:(n,t)=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=R$1({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:9,vars:3,consts:[[`preview`,``],[`itemTemplate`,``],[`label`,`Simple`,`html`,`<ezui-popoutmenu [items]="items" label="Click Me"/>`,`ts`,`items : PopoutMenuItem[] = [
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
]`,3,`enableTypescript`],[`label`,`Click Me`,3,`items`],[`tuiChip`,``,`appearance`,`info`]],template:function(t,c){t&1&&(C(0,`app-samplecontainer`,2),te(1,$,1,1,`ng-template`,null,0,Gt),T(),C(3,`app-samplecontainer`,3),te(4,G,1,1,`ng-template`,null,0,Gt),T(),C(6,`app-samplecontainer`,4),te(7,K,3,1,`ng-template`,null,0,Gt),T()),t&2&&(S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0))},dependencies:[oi,Ot,G$1,TPe,co],encapsulation:2})};var Mt=[{path:`menubar`,component:D},{path:`dialog`,component:w},{path:`popoutmenu`,component:B}];export{Mt as default};