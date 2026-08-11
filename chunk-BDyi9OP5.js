import{$ as ne,A as Sl,D as R$1,E as Qt,F as WAe,G as ht,I as We,J as jAe,M as UAe,N as Uk,Q as mt,R as _,S as P,U as ft,V as ee,X as lm,Y as k,Z as m,_ as LAe,_t as y,a as E,b as O,bt as zi,c as GAe,dt as v,ft as vn,gt as xn,ht as xC,i as Bt,it as qn,j as T,k as S,l as Ge,m as J,mt as x,nt as q,o as FAe,p as I,rt as q5,t as $Ae,tt as pt,u as H,ut as un,w as Pu,yt as zg}from"./main-G3L3DB6V.js";import{t as Y}from"./chunk-BfgmaGi2.js";var ae=(()=>{class e{static{this.ɵfac=function(u){return new(u||e)}}static{this.ɵcmp=I({type:e,selectors:[[`ng-component`]],exportAs:[`tui-message-5.18.0`],decls:0,vars:0,template:function(u,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.18.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--%NS%tui-typography-ui-m);border-radius:var(--%NS%tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.18.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2})}}return e})();var ie=(()=>{class e{constructor(){this.nothing=mt(ae)}static{this.ɵfac=function(u){return new(u||e)}}static{this.ɵdir=S({type:e,selectors:[[``,`tuiMessage`,``]],features:[k([{provide:zg,useValue:{appearance:`neutral`}}]),H([zi])]})}}return e})();function le(e,p){e&1&&ee(0,`ezui-iconselector`)}function pe(e,p){if(e&1){let t=q();y(0,`ezui-iconselector`,5),ht(`selectedChange`,function(y){R$1(t);let g=m();return ft(g.binding,y)||(g.binding=y),P(y)}),_(),y(1,`span`),O(2),_()}if(e&2){let t=m();pt(`selected`,t.binding),v(2),J(`You have selected: "`,t.binding(),`"`)}}function me(e,p){e&1&&ee(0,`ezui-iconselector`,6),e&2&&x(`disabled`,!0)}function re(e,p){e&1&&ee(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var C=class e{binding=E(`circle`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),ne(1,le,1,0,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,2),ne(4,pe,3,2,`ng-template`,null,0,xn),_(),y(6,`app-samplecontainer`,3),ne(7,me,1,1,`ng-template`,null,0,xn),_(),y(9,`app-samplecontainer`,4),ne(10,re,3,0,`ng-template`,null,0,xn),_()),t&2&&(v(3),x(`enableTypescript`,!0))},dependencies:[vn,Qt,FAe,Y],encapsulation:2})};function se(e,p){if(e&1){let t=q();y(0,`ezui-markdowneditor`,3),ht(`valueChange`,function(y){R$1(t);let g=m();return ft(g.binding,y)||(g.binding=y),P(y)}),_()}if(e&2)pt(`value`,m().binding)}function de(e,p){if(e&1&&ee(0,`ezui-markdowneditor`,4),e&2)x(`value`,m().binding())(`disabled`,!0)}var M=class e{binding=E(`Text`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:7,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),ne(1,se,1,1,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,2),O(4,` > `),ne(5,de,1,2,`ng-template`,null,0,xn),_()),t&2&&(x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[vn,Qt,LAe,Y],encapsulation:2})};function oe(e,p){e&1&&(y(0,`div`,12),ee(1,`ezui-table`),_())}function ce(e,p){e&1&&(y(0,`th`,14),O(1,`ID`),_(),y(2,`th`,14),O(3,`Value`),_(),y(4,`th`,14),O(5,`Description`),_())}function ue(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15),O(3),_(),y(4,`td`,15),O(5),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(2),Bt(t.value),v(2),Bt(t.desc)}}function ye(e,p){if(e&1&&(y(0,`ezui-table`,13),ne(1,ce,6,0,`ng-template`,null,1,xn)(3,ue,6,3,`ng-template`,null,2,xn),_()),e&2)x(`values`,m().data)}function we(e,p){e&1&&(y(0,`th`,14),O(1,`ID`),_(),y(2,`th`,14),O(3,`Value`),_(),y(4,`th`,14),O(5,`Description`),_())}function ge(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15),O(3),_(),y(4,`td`,15),O(5),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(2),Bt(t.value),v(2),Bt(t.desc)}}function be(e,p){if(e&1){let t=q();y(0,`ezui-table`,16),T(`onRowClick`,function(y){R$1(t);return P(m().rowClicked(y))}),ne(1,we,6,0,`ng-template`,null,1,xn)(3,ge,6,3,`ng-template`,null,2,xn),_()}if(e&2)x(`values`,m().data)(`clickable`,!0)}function fe(e,p){e&1&&(y(0,`th`,14),O(1,`ID`),_(),y(2,`th`,14),O(3,`Value`),_(),y(4,`th`,14),O(5,`Description`),_())}function Te(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15),O(3),_(),y(4,`td`,15),O(5),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(2),Bt(t.value),v(2),Bt(t.desc)}}function ve(e,p){if(e&1&&(y(0,`ezui-table`,17),ne(1,fe,6,0,`ng-template`,null,1,xn)(3,Te,6,3,`ng-template`,null,2,xn),_()),e&2){let t=m();x(`values`,t.longData)(`pageSize`,t.pageSize)}}function _e(e,p){e&1&&(y(0,`th`,14),O(1,` ID `),ee(2,`ezui-table-sortable`,20),_(),y(3,`th`,14),O(4,` Value `),ee(5,`ezui-table-sortable`,21),_(),y(6,`th`,14),O(7,` Description `),ee(8,`ezui-table-sortable`,22),_())}function xe(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15),O(3),_(),y(4,`td`,15),O(5),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(2),Bt(t.value),v(2),Bt(t.desc)}}function he(e,p){if(e&1&&(y(0,`span`,18),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,19),ne(3,_e,9,0,`ng-template`,null,1,xn)(5,xe,6,3,`ng-template`,null,2,xn),_()),e&2){let t=m();v(2),x(`values`,t.data)(`showClearFilters`,!0)}}function De(e,p){if(e&1&&(y(0,`th`,14),O(1,` ID `),ee(2,`ezui-table-textfilter`,20),_(),y(3,`th`,14),O(4,` Type `),ee(5,`ezui-table-selectfilter`,23),_(),y(6,`th`,14),O(7,` Timestamp `),ee(8,`ezui-table-datefilter`,24),_(),y(9,`th`,14),O(10,` Is Active `),ee(11,`ezui-table-booleanfilter`,25),_()),e&2){let t=m(2);v(5),x(`options`,t.filterOptions)}}function ze(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15)(3,`span`,26),O(4),_()(),y(5,`td`,15),O(6),qn(7,`date`),_(),y(8,`td`,15),O(9),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(3),J(` `,t.type,` `),v(2),Bt(lm(7,4,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),v(3),Bt(t.active)}}function Ee(e,p){if(e&1&&(y(0,`span`,18),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,19),ne(3,De,12,1,`ng-template`,null,1,xn)(5,ze,10,7,`ng-template`,null,2,xn),_()),e&2){let t=m();v(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function Se(e,p){if(e&1&&(y(0,`th`,14),O(1,` ID `),ee(2,`ezui-table-sortable`,20)(3,`ezui-table-textfilter`,20),_(),y(4,`th`,14),O(5,` Type `),ee(6,`ezui-table-sortable`,27)(7,`ezui-table-selectfilter`,23),_(),y(8,`th`,14),O(9,` Timestamp `),ee(10,`ezui-table-sortable`,24)(11,`ezui-table-datefilter`,24),_()),e&2){let t=m(2);v(7),x(`options`,t.filterOptions)}}function ke(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15)(3,`span`,26),O(4),_()(),y(5,`td`,15),O(6),qn(7,`date`),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(3),J(` `,t.type,` `),v(2),Bt(lm(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ie(e,p){if(e&1&&(y(0,`span`,18),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,19),ne(3,Se,12,1,`ng-template`,null,1,xn)(5,ke,8,6,`ng-template`,null,2,xn),_()),e&2){let t=m();v(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function Ce(e,p){if(e&1&&(y(0,`th`,14),O(1,` ID `),ee(2,`ezui-table-sortable`,20)(3,`ezui-table-textfilter`,20),_(),y(4,`th`,14),O(5,` Type `),ee(6,`ezui-table-sortable`,27)(7,`ezui-table-selectfilter`,23),_(),y(8,`th`,14),O(9,` Timestamp `),ee(10,`ezui-table-sortable`,24)(11,`ezui-table-datefilter`,24),_()),e&2){let t=m(2);v(7),x(`options`,t.longFilterOptions)}}function Me(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15)(3,`span`,26),O(4),_()(),y(5,`td`,15),O(6),qn(7,`date`),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(3),J(` `,t.type,` `),v(2),Bt(lm(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Re(e,p){if(e&1&&(y(0,`span`,18),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,28),ne(3,Ce,12,1,`ng-template`,null,1,xn)(5,Me,8,6,`ng-template`,null,2,xn),_()),e&2){let t=m();v(2),x(`values`,t.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function Fe(e,p){if(e&1&&(y(0,`th`,14),O(1,` ID `),ee(2,`ezui-table-textfilter`,20),_(),y(3,`th`,14),O(4,` Type `),ee(5,`ezui-table-selectfilter`,29),_(),y(6,`th`,14),O(7,` Timestamp `),ee(8,`ezui-table-datefilter`,24),_(),y(9,`th`,14),O(10,` Is Active `),ee(11,`ezui-table-booleanfilter`,25),_()),e&2){let t=m(2);v(5),x(`options`,t.filterOptions2)}}function He(e,p){if(e&1&&(y(0,`span`,30),O(1),_()),e&2){let t=p.$implicit;v(),J(` `,t,` `)}}function Ve(e,p){if(e&1&&(y(0,`td`,15),O(1),_(),y(2,`td`,15),We(3,He,2,1,`span`,30,un),_(),y(5,`td`,15),O(6),qn(7,`date`),_(),y(8,`td`,15),O(9),_()),e&2){let t=p.$implicit;v(),Bt(t.id),v(2),Ge(t.types),v(3),Bt(lm(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),v(3),Bt(t.active)}}function Pe(e,p){if(e&1&&(y(0,`span`,18),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,19),ne(3,Fe,12,1,`ng-template`,null,1,xn)(5,Ve,10,6,`ng-template`,null,2,xn),_()),e&2){let t=m();v(2),x(`values`,t.filterData2)(`showClearFilters`,!0)}}var R=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=E(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(p){alert(`Clicked on row `+p.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:new Date,active:!1}];static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:27,vars:8,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
		<th tuiTh>
			Is Active
			<ezui-table-booleanfilter column="active"></ezui-table-booleanfilter>
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
		<td tuiTd>{{ item.active } }</td>
	</ng-template>
</ezui-table>`,`ts`,`filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date(), active:true },
	{ id:"123", type: "Type 1", timestamp: new Date(), active:false },
	{ id:"55g", type: "Type 2", timestamp: new Date(), active:true },
	{ id:"dfg", type: "Type 3", timestamp: new Date(), active:false },
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
]`,3,`enableTypescript`],[`label`,`Filtering (advanced arrays)`,`html`,`<ezui-table [values]="filterData2" [showClearFilters]="true">
	<ng-template #tableHeader>
		<th tuiTh>
			ID
			<ezui-table-textfilter column="id"></ezui-table-textfilter>
		</th>
		<th tuiTh>
			Type
			<ezui-table-selectfilter column="types" [options]="filterOptions2" optionLabel="value" optionValue="id"></ezui-table-selectfilter>
		</th>
		<th tuiTh>
			Timestamp
			<ezui-table-datefilter column="timestamp"></ezui-table-datefilter>
		</th>
		<th tuiTh>
			Is Active
			<ezui-table-booleanfilter column="active"></ezui-table-booleanfilter>
		</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>
			@for(type of item.types;track type){
				<span size="xs" tuiChip style="margin-right:5px">
					{{type} }
				</span>
			}
		</td>
		<td tuiTd>{{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" } }</td>
		<td tuiTd>{{ item.active } }</td>
	</ng-template>
</ezui-table>`,`ts`,`filterOptions2 : Example[] = [{id: "tp1", value: "Type 1"}, {id: "tp2", value: "Type 2"}, {id: "tp3", value: "Type 3"}];
filterData2 : any = [
	{ id:"abc", types: ["tp1", "tp2"], timestamp: new Date(), active:true },
	{ id:"123", types: ["tp3", "tp2"], timestamp: new Date(), active:false },
	{ id:"55g", types: ["tp1"], timestamp: new Date(), active:true },
	{ id:"dfg", types: ["tp3", "tp1"], timestamp: new Date(), active:false },
]

interface Example {
	id: string;
	value : string;
}`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,3),ne(1,oe,2,0,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,4),ne(4,ye,5,1,`ng-template`,null,0,xn),_(),y(6,`app-samplecontainer`,5),ne(7,be,5,2,`ng-template`,null,0,xn),_(),y(9,`app-samplecontainer`,6),ne(10,ve,5,2,`ng-template`,null,0,xn),_(),y(12,`app-samplecontainer`,7),ne(13,he,7,2,`ng-template`,null,0,xn),_(),y(15,`app-samplecontainer`,8),ne(16,Ee,7,2,`ng-template`,null,0,xn),_(),y(18,`app-samplecontainer`,9),ne(19,Ie,7,2,`ng-template`,null,0,xn),_(),y(21,`app-samplecontainer`,10),ne(22,Re,7,3,`ng-template`,null,0,xn),_(),y(24,`app-samplecontainer`,11),ne(25,Pe,7,2,`ng-template`,null,0,xn),_()),t&2&&(v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[vn,Qt,Pu,Y,Uk,xC,GAe,ie,jAe,WAe,$Ae,Sl,UAe,q5],encapsulation:2})};var wt=[{path:`markdowneditor`,component:M},{path:`tables`,component:R},{path:`iconselector`,component:C}];export{wt as default};