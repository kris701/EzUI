import{A as V$1,D as T,K as et,P as Xt,Q as k,R as aK,St as y,Y as h,_ as M,a as D,ct as q,k as Ut,lt as qFe,m as K,n as A$1,nt as m,u as Gt,v as N,vt as v,y as O$1}from"./main-4LT7FVHS.js";import{t as h$1}from"./chunk-B4e6Pzl7.js";import{t as G}from"./chunk-CSXSqf7I.js";function C(e,i){e&1&&(v(0,`span`),A$1(1,`This is the content of the dialog`),y())}function z(e,i){if(e&1){let t=V$1();v(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),y(),v(2,`button`,5),D(`click`,function(){N(t);return k(h().showDialog.set(!0))}),A$1(3,` Open `),y(),v(4,`ezui-dialog`,6),K(5,C,2,0,`ng-template`,null,1,Gt),y()}if(e&2){let t=h();m(4),T(`showDialog`,t.showDialog)}}function O(e,i){e&1&&(v(0,`span`),A$1(1,`This is the content of the dialog`),y())}function V(e,i){if(e&1){let t=V$1();v(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),y(),v(2,`button`,5),D(`click`,function(){N(t);return k(h().showDialog2.set(!0))}),A$1(3,` Open `),y(),v(4,`ezui-dialog`,7),D(`onSaveItem`,function(){N(t);return k(h().showAlert(`saved!`))})(`onDeleteItem`,function(){N(t);return k(h().showAlert(`deleted!`))}),K(5,O,2,0,`ng-template`,null,1,Gt),y()}if(e&2){let t=h();m(4),T(`showDialog`,t.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}var w=class e{showDialog=O$1(!1);showDialog2=O$1(!1);showAlert(i){alert(i)}static ɵfac=function(t){return new(t||e)};static ɵcmp=M({type:e,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`content`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
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
}`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`]],template:function(t,u){t&1&&(v(0,`app-samplecontainer`,2),K(1,z,7,1,`ng-template`,null,0,Gt),y(),v(3,`app-samplecontainer`,3),K(4,V,7,3,`ng-template`,null,0,Gt),y()),t&2&&(T(`enableTypescript`,!0),m(3),T(`enableTypescript`,!0))},dependencies:[Xt,Ut,G,qFe,et,h$1],encapsulation:2})};function A(e,i){if(e&1&&q(0,`ezui-menubar`,3),e&2)T(`items`,h().items)}function R(e,i){if(e&1&&q(0,`ezui-menubar`,3),e&2)T(`items`,h().items2)}var tt=[{path:`menubar`,component:class e{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=M({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
]`,3,`enableTypescript`],[3,`items`]],template:function(t,u){t&1&&(v(0,`app-samplecontainer`,1),K(1,A,1,1,`ng-template`,null,0,Gt),y(),v(3,`app-samplecontainer`,2),K(4,R,1,1,`ng-template`,null,0,Gt),y()),t&2&&(T(`enableTypescript`,!0),m(3),T(`enableTypescript`,!0))},dependencies:[Xt,Ut,aK,G],encapsulation:2})}},{path:`dialog`,component:w}];export{tt as default};