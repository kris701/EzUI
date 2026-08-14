import{A as _,C as X,H as g,S as Wt,Y as m,a as I,dt as tn,g as R$1,gt as x,i as E,it as q,lt as tPe,p as O$1,r as D,rt as pt,t as A$1,ut as te,vt as y,yt as yn,z as eZ}from"./main-CC6GOMAL.js";import{t as h}from"./chunk-D6mp3YR1.js";import{t as G}from"./chunk-35MzyJmv.js";function C(e,i){e&1&&(y(0,`span`),A$1(1,`This is the content of the dialog`),_())}function z(e,i){if(e&1){let t=q();y(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),_(),y(2,`button`,5),D(`click`,function(){O$1(t);return R$1(g().showDialog.set(!0))}),A$1(3,` Open `),_(),y(4,`ezui-dialog`,6),te(5,C,2,0,`ng-template`,null,1,yn),_()}if(e&2){let t=g();m(4),x(`showDialog`,t.showDialog)}}function O(e,i){e&1&&(y(0,`span`),A$1(1,`This is the content of the dialog`),_())}function V(e,i){if(e&1){let t=q();y(0,`span`,4),A$1(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),_(),y(2,`button`,5),D(`click`,function(){O$1(t);return R$1(g().showDialog2.set(!0))}),A$1(3,` Open `),_(),y(4,`ezui-dialog`,7),D(`onSaveItem`,function(){O$1(t);return R$1(g().showAlert(`saved!`))})(`onDeleteItem`,function(){O$1(t);return R$1(g().showAlert(`deleted!`))}),te(5,O,2,0,`ng-template`,null,1,yn),_()}if(e&2){let t=g();m(4),x(`showDialog`,t.showDialog2)(`showDelete`,!0)(`showSave`,!0)}}var w=class e{showDialog=E(!1);showDialog2=E(!1);showAlert(i){alert(i)}static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-dialog`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`content`,``],[`label`,`Simple`,`html`,`<button tuiButton (click)="showDialog.set(true)">
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
}`,3,`enableTypescript`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[`title`,`Some Title`,3,`onSaveItem`,`onDeleteItem`,`showDialog`,`showDelete`,`showSave`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,2),te(1,z,7,1,`ng-template`,null,0,yn),_(),y(3,`app-samplecontainer`,3),te(4,V,7,3,`ng-template`,null,0,yn),_()),t&2&&(x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0))},dependencies:[tn,Wt,G,tPe,pt,h],encapsulation:2})};function A(e,i){if(e&1&&X(0,`ezui-menubar`,3),e&2)x(`items`,g().items)}function R(e,i){if(e&1&&X(0,`ezui-menubar`,3),e&2)x(`items`,g().items2)}var tt=[{path:`menubar`,component:class e{items=[{label:`Button 1`,icon:`check`,command:()=>alert(`button 1 click`)},{label:`Some longer value name here`,icon:`x`,command:()=>alert(`button 2 click`)},{label:`Button 3`,icon:`plus`,command:()=>alert(`button 3 click`)}];items2=[{label:`Button 1`,icon:`check`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`)}]},{label:`Button 2`,icon:`x`,items:[{label:`Opt 1`,command:()=>alert(`opt 1 click`)},{label:`Opt 2`,command:()=>alert(`opt 2 click`),items:[{label:`Opt 3`,command:()=>alert(`opt 3 click`)}]}]}];static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-menubar`]],hostAttrs:[1,`base-view`],decls:6,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-menubar [items]="items"/>`,`ts`,`items : MenuBarItem[] = [
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
]`,3,`enableTypescript`],[3,`items`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),te(1,A,1,1,`ng-template`,null,0,yn),_(),y(3,`app-samplecontainer`,2),te(4,R,1,1,`ng-template`,null,0,yn),_()),t&2&&(x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0))},dependencies:[tn,Wt,eZ,G],encapsulation:2})}},{path:`dialog`,component:w}];export{tt as default};