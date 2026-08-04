import{$ as mr,D as Pk,E as P,F as Ut,H as Zke,I as Wke,J as ie$1,K as em,L as Wn,M as T,O as Qke,Q as kt,R as X$1,S as Mn,T as O,U as _,V as Z,W as bn,Y as j,_ as L,c as F,dt as x,f as I$1,ft as y,g as Kke,j as S,lt as wl,n as At,o as CC,p as J,q as g,r as B5,s as E,st as v,t as $ke,tt as qp,ut as wt,w as Nt,x as Mg,y as Ln,z as Xke}from"./main-PXZJX6FN.js";import{t as Y}from"./chunk-1rRy7DwZ.js";var ee=(()=>{class e{static{this.ɵfac=function(u){return new(u||e)}}static{this.ɵcmp=I$1({type:e,selectors:[[`ng-component`]],exportAs:[`tui-message-5.18.0`],decls:0,vars:0,template:function(u,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.18.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--%NS%tui-typography-ui-m);border-radius:var(--%NS%tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.18.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2})}}return e})();var X=(()=>{class e{constructor(){this.nothing=wt(ee)}static{this.ɵfac=function(u){return new(u||e)}}static{this.ɵdir=S({type:e,selectors:[[``,`tuiMessage`,``]],features:[O([{provide:Mg,useValue:{appearance:`neutral`}}]),j([mr])]})}}return e})();function te(e,l){e&1&&J(0,`ezui-iconselector`)}function ie(e,l){if(e&1){let t=Z();y(0,`ezui-iconselector`,5),At(`selectedChange`,function(y){P(t);let g$1=g();return kt(g$1.binding,y)||(g$1.binding=y),F(y)}),_(),y(1,`span`),L(2),_()}if(e&2){let t=g();Nt(`selected`,t.binding),v(2),X$1(`You have selected: "`,t.binding(),`"`)}}function ne(e,l){e&1&&J(0,`ezui-iconselector`,6),e&2&&x(`disabled`,!0)}function ae(e,l){e&1&&J(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var I=class e{binding=E(`circle`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I$1({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),ie$1(1,te,1,0,`ng-template`,null,0,Mn),_(),y(3,`app-samplecontainer`,2),ie$1(4,ie,3,2,`ng-template`,null,0,Mn),_(),y(6,`app-samplecontainer`,3),ie$1(7,ne,1,1,`ng-template`,null,0,Mn),_(),y(9,`app-samplecontainer`,4),ie$1(10,ae,3,0,`ng-template`,null,0,Mn),_()),t&2&&(v(3),x(`enableTypescript`,!0))},dependencies:[Ln,bn,$ke,Y],encapsulation:2})};function le(e,l){if(e&1){let t=Z();y(0,`ezui-markdowneditor`,3),At(`valueChange`,function(y){P(t);let g$2=g();return kt(g$2.binding,y)||(g$2.binding=y),F(y)}),_()}if(e&2)Nt(`value`,g().binding)}function pe(e,l){if(e&1&&J(0,`ezui-markdowneditor`,4),e&2)x(`value`,g().binding())(`disabled`,!0)}var M=class e{binding=E(`Text`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I$1({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:7,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),ie$1(1,le,1,1,`ng-template`,null,0,Mn),_(),y(3,`app-samplecontainer`,2),L(4,` > `),ie$1(5,pe,1,2,`ng-template`,null,0,Mn),_()),t&2&&(x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[Ln,bn,Wke,Y],encapsulation:2})};function me(e,l){e&1&&(y(0,`div`,11),J(1,`ezui-table`),_())}function re(e,l){e&1&&(y(0,`th`,13),L(1,`ID`),_(),y(2,`th`,13),L(3,`Value`),_(),y(4,`th`,13),L(5,`Description`),_())}function se(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14),L(3),_(),y(4,`td`,14),L(5),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(2),Ut(t.value),v(2),Ut(t.desc)}}function de(e,l){if(e&1&&(y(0,`ezui-table`,12),ie$1(1,re,6,0,`ng-template`,null,1,Mn)(3,se,6,3,`ng-template`,null,2,Mn),_()),e&2)x(`values`,g().data)}function oe(e,l){e&1&&(y(0,`th`,13),L(1,`ID`),_(),y(2,`th`,13),L(3,`Value`),_(),y(4,`th`,13),L(5,`Description`),_())}function ce(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14),L(3),_(),y(4,`td`,14),L(5),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(2),Ut(t.value),v(2),Ut(t.desc)}}function ue(e,l){if(e&1){let t=Z();y(0,`ezui-table`,15),T(`onRowClick`,function(y){P(t);return F(g().rowClicked(y))}),ie$1(1,oe,6,0,`ng-template`,null,1,Mn)(3,ce,6,3,`ng-template`,null,2,Mn),_()}if(e&2)x(`values`,g().data)(`clickable`,!0)}function ye(e,l){e&1&&(y(0,`th`,13),L(1,`ID`),_(),y(2,`th`,13),L(3,`Value`),_(),y(4,`th`,13),L(5,`Description`),_())}function we(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14),L(3),_(),y(4,`td`,14),L(5),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(2),Ut(t.value),v(2),Ut(t.desc)}}function ge(e,l){if(e&1&&(y(0,`ezui-table`,16),ie$1(1,ye,6,0,`ng-template`,null,1,Mn)(3,we,6,3,`ng-template`,null,2,Mn),_()),e&2){let t=g();x(`values`,t.longData)(`pageSize`,t.pageSize)}}function be(e,l){e&1&&(y(0,`th`,13),L(1,` ID `),J(2,`ezui-table-sortable`,19),_(),y(3,`th`,13),L(4,` Value `),J(5,`ezui-table-sortable`,20),_(),y(6,`th`,13),L(7,` Description `),J(8,`ezui-table-sortable`,21),_())}function Te(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14),L(3),_(),y(4,`td`,14),L(5),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(2),Ut(t.value),v(2),Ut(t.desc)}}function fe(e,l){if(e&1&&(y(0,`span`,17),L(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,18),ie$1(3,be,9,0,`ng-template`,null,1,Mn)(5,Te,6,3,`ng-template`,null,2,Mn),_()),e&2){let t=g();v(2),x(`values`,t.data)(`showClearFilters`,!0)}}function _e(e,l){if(e&1&&(y(0,`th`,13),L(1,` ID `),J(2,`ezui-table-textfilter`,19),_(),y(3,`th`,13),L(4,` Type `),J(5,`ezui-table-selectfilter`,22),_(),y(6,`th`,13),L(7,` Timestamp `),J(8,`ezui-table-datefilter`,23),_()),e&2){let t=g(2);v(5),x(`options`,t.filterOptions)}}function ve(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14)(3,`span`,24),L(4),_()(),y(5,`td`,14),L(6),Wn(7,`date`),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(3),X$1(` `,t.type,` `),v(2),Ut(em(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function xe(e,l){if(e&1&&(y(0,`span`,17),L(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,18),ie$1(3,_e,9,1,`ng-template`,null,1,Mn)(5,ve,8,6,`ng-template`,null,2,Mn),_()),e&2){let t=g();v(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function he(e,l){if(e&1&&(y(0,`th`,13),L(1,` ID `),J(2,`ezui-table-sortable`,19)(3,`ezui-table-textfilter`,19),_(),y(4,`th`,13),L(5,` Type `),J(6,`ezui-table-sortable`,25)(7,`ezui-table-selectfilter`,22),_(),y(8,`th`,13),L(9,` Timestamp `),J(10,`ezui-table-sortable`,23)(11,`ezui-table-datefilter`,23),_()),e&2){let t=g(2);v(7),x(`options`,t.filterOptions)}}function De(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14)(3,`span`,24),L(4),_()(),y(5,`td`,14),L(6),Wn(7,`date`),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(3),X$1(` `,t.type,` `),v(2),Ut(em(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function ze(e,l){if(e&1&&(y(0,`span`,17),L(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,18),ie$1(3,he,12,1,`ng-template`,null,1,Mn)(5,De,8,6,`ng-template`,null,2,Mn),_()),e&2){let t=g();v(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function Ee(e,l){if(e&1&&(y(0,`th`,13),L(1,` ID `),J(2,`ezui-table-sortable`,19)(3,`ezui-table-textfilter`,19),_(),y(4,`th`,13),L(5,` Type `),J(6,`ezui-table-sortable`,25)(7,`ezui-table-selectfilter`,22),_(),y(8,`th`,13),L(9,` Timestamp `),J(10,`ezui-table-sortable`,23)(11,`ezui-table-datefilter`,23),_()),e&2){let t=g(2);v(7),x(`options`,t.longFilterOptions)}}function ke(e,l){if(e&1&&(y(0,`td`,14),L(1),_(),y(2,`td`,14)(3,`span`,24),L(4),_()(),y(5,`td`,14),L(6),Wn(7,`date`),_()),e&2){let t=l.$implicit;v(),Ut(t.id),v(3),X$1(` `,t.type,` `),v(2),Ut(em(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Se(e,l){if(e&1&&(y(0,`span`,17),L(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,26),ie$1(3,Ee,12,1,`ng-template`,null,1,Mn)(5,ke,8,6,`ng-template`,null,2,Mn),_()),e&2){let t=g();v(2),x(`values`,t.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}var R=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=E(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(l){alert(`Clicked on row `+l.id)}static ɵfac=function(t){return new(t||e)};static ɵcmp=I$1({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:24,vars:7,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>{{ item.value } }</td>
		<td tuiTd>{{ item.desc } }</td>
	</ng-template>
</ezui-table>`,`ts`,`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,`enableTypescript`],[`label`,`Row Clickable`,`html`,`<ezui-table [values]="data" [clickable]="true" (onRowClick)="rowClicked($event)">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>{{ item.value } }</td>
		<td tuiTd>{{ item.desc } }</td>
	</ng-template>
</ezui-table>`,`ts`,`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]

rowClicked(item : any){
	alert("Clicked on row " + item.id);
}`,3,`enableTypescript`],[`label`,`Pagination`,`html`,`<ezui-table [values]="longData" [pageSize]="pageSize">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>{{ item.value } }</td>
		<td tuiTd>{{ item.desc } }</td>
	</ng-template>
</ezui-table>`,`ts`,`pageSize = signal<number>(10);
longData : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,`enableTypescript`],[`label`,`Sortable`,`html`,`<ezui-table [values]="data" [showClearFilters]="true">
	<ng-template #tableHeader>
		<th tuiTh>
			ID
			<ezui-table-sortable column="id"></ezui-table-sortable>
		</th>
		<th tuiTh>
			Value
			<ezui-table-sortable column="value"></ezui-table-sortable>
		</th>
		<th tuiTh>
			Description
			<ezui-table-sortable column="desc"></ezui-table-sortable>
		</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>{{ item.value } }</td>
		<td tuiTd>{{ item.desc } }</td>
	</ng-template>
</ezui-table>`,`ts`,`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,`enableTypescript`],[`label`,`Filtering`,`html`,`<ezui-table [values]="filterData" [showClearFilters]="true">
	<ng-template #tableHeader>
		<th tuiTh>
			ID
			<ezui-table-textfilter column="id"></ezui-table-textfilter>
		</th>
		<th tuiTh>
			Type
			<ezui-table-selectfilter column="type" [options]="filterOptions"></ezui-table-selectfilter>
		</th>
		<th tuiTh>
			Timestamp
			<ezui-table-datefilter column="timestamp"></ezui-table-datefilter>
		</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>
			<span size="xs" tuiChip>
				{{item.type} }
			</span>
		</td>
		<td tuiTd>{{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" } }</td>
	</ng-template>
</ezui-table>`,`ts`,`filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
]`,3,`enableTypescript`],[`label`,`Filtering And Sorting`,`html`,`<ezui-table [values]="filterData" [showClearFilters]="true">
	<ng-template #tableHeader>
		<th tuiTh>
			ID
			<ezui-table-sortable column="id"></ezui-table-sortable>
			<ezui-table-textfilter column="id"></ezui-table-textfilter>
		</th>
		<th tuiTh>
			Type
			<ezui-table-sortable column="type"></ezui-table-sortable>
			<ezui-table-selectfilter column="type" [options]="filterOptions"></ezui-table-selectfilter>
		</th>
		<th tuiTh>
			Timestamp
			<ezui-table-sortable column="timestamp"></ezui-table-sortable>
			<ezui-table-datefilter column="timestamp"></ezui-table-datefilter>
		</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>
			<span size="xs" tuiChip>
				{{item.type} }
			</span>
		</td>
		<td tuiTd>{{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" } }</td>
	</ng-template>
</ezui-table>`,`ts`,`filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
]`,3,`enableTypescript`],[`label`,`Presets`,`html`,`<ezui-table [values]="longFilterData" [showClearFilters]="true" storageKey="ezui-table" [allowPresets]="true">
	<ng-template #tableHeader>
		<th tuiTh>
			ID
			<ezui-table-sortable column="id"></ezui-table-sortable>
			<ezui-table-textfilter column="id"></ezui-table-textfilter>
		</th>
		<th tuiTh>
			Type
			<ezui-table-sortable column="type"></ezui-table-sortable>
			<ezui-table-selectfilter column="type" [options]="longFilterOptions"></ezui-table-selectfilter>
		</th>
		<th tuiTh>
			Timestamp
			<ezui-table-sortable column="timestamp"></ezui-table-sortable>
			<ezui-table-datefilter column="timestamp"></ezui-table-datefilter>
		</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>
			<span size="xs" tuiChip>
				{{item.type} }
			</span>
		</td>
		<td tuiTd>{{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" } }</td>
	</ng-template>
</ezui-table>`,`ts`,`longFilterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
longFilterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
]`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,3),ie$1(1,me,2,0,`ng-template`,null,0,Mn),_(),y(3,`app-samplecontainer`,4),ie$1(4,de,5,1,`ng-template`,null,0,Mn),_(),y(6,`app-samplecontainer`,5),ie$1(7,ue,5,2,`ng-template`,null,0,Mn),_(),y(9,`app-samplecontainer`,6),ie$1(10,ge,5,2,`ng-template`,null,0,Mn),_(),y(12,`app-samplecontainer`,7),ie$1(13,fe,7,2,`ng-template`,null,0,Mn),_(),y(15,`app-samplecontainer`,8),ie$1(16,xe,7,2,`ng-template`,null,0,Mn),_(),y(18,`app-samplecontainer`,9),ie$1(19,ze,7,2,`ng-template`,null,0,Mn),_(),y(21,`app-samplecontainer`,10),ie$1(22,Se,7,3,`ng-template`,null,0,Mn),_()),t&2&&(v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[Ln,bn,qp,Y,Pk,CC,Xke,X,Zke,Kke,Qke,wl,B5],encapsulation:2})};var mt=[{path:`markdowneditor`,component:M},{path:`tables`,component:R},{path:`iconselector`,component:I}];export{mt as default};