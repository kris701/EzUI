import{$ as k,C as O$1,K as gn,M as W,O as T,P as _,Q as jt,V as ee,W as g,_t as vRe,a as D,d as I,ft as tn,gt as v,it as mZ,lt as pt,n as A$1,nt as m,s as E,w as Q}from"./main-2YBV4W35.js";import{t as G}from"./chunk-B3UwWaTd.js";import{t as h}from"./chunk-EqC-JCs3.js";function C(e,i){e&1&&(v(0,`span`),O$1(1,`This is the content of the dialog`),_())}function z(e,i){if(e&1){let t=W();v(0,`span`,4),O$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),_(),v(2,`button`,5),D(`click`,function(){k(t);return A$1(g().showDialog.set(!0))}),O$1(3,` Open `),_(),v(4,`ezui-dialog`,6),ee(5,C,2,0,`ng-template`,null,1,gn),_()}if(e&2){let t=g();m(4),T(`showDialog`,t.showDialog)}}function O(e,i){e&1&&(v(0,`span`),O$1(1,`This is the content of the dialog`),_())}function V(e,i){if(e&1){let t=W();v(0,`span`,4),O$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),_(),v(2,`button`,5),D(`click`,function(){k(t);return A$1(g().showDialog2.set(!0))}),O$1(3,` Open `),_(),v(4,`ezui-dialog`,7),D(`onSaveItem`,function(){k(t);return A$1(g().showAlert(`saved!`))})(`onDeleteItem`,function(){k(t);return A$1(g().showAlert(`deleted!`))}),ee(5,O,2,0,`ng-template`,null,1,gn),_()}if(e&2){let t=g();m(4),T(`showDialog`,t.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}var w=class e{showDialog=E(!1);showDialog2=E(!1);showAlert(i){alert(i)}static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`content`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
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
}`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`]],template:function(t,u){t&1&&(v(0,`app-samplecontainer`,2),ee(1,z,7,1,`ng-template`,null,0,gn),_(),v(3,`app-samplecontainer`,3),ee(4,V,7,3,`ng-template`,null,0,gn),_()),t&2&&(T(`enableTypescript`,!0),m(3),T(`enableTypescript`,!0))},dependencies:[tn,jt,G,vRe,pt,h],encapsulation:2})};function A(e,i){if(e&1&&Q(0,`ezui-menubar`,3),e&2)T(`items`,g().items)}function R(e,i){if(e&1&&Q(0,`ezui-menubar`,3),e&2)T(`items`,g().items2)}var tt=[{path:`menubar`,component:class e{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
]`,3,`enableTypescript`],[3,`items`]],template:function(t,u){t&1&&(v(0,`app-samplecontainer`,1),ee(1,A,1,1,`ng-template`,null,0,gn),_(),v(3,`app-samplecontainer`,2),ee(4,R,1,1,`ng-template`,null,0,gn),_()),t&2&&(T(`enableTypescript`,!0),m(3),T(`enableTypescript`,!0))},dependencies:[tn,jt,mZ,G],encapsulation:2})}},{path:`dialog`,component:w}];export{tt as default};