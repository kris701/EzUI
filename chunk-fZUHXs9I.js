import{D as O,E as NAe,F as T,G as ee,H as am,J as jt,K as g,L as TC,M as R$1,N as S,O as Ou,P as SAe,R as Wn,S as Li,U as an,V as _t,Y as kAe,c as Dn,d as G5,dt as x,et as pt,f as H,h as J,ht as yt,k as P,l as E,mt as y,n as AAe,nt as re$1,o as Cl,ot as v,p as I,pt as xn,r as Bk,s as DAe,st as vt,t as A,tt as q,u as EAe,w as MAe,x as Lg,z as _}from"./main-Q5USWITM.js";import{t as Y}from"./chunk-DUQLRpob.js";var te=(()=>{class e{static{this.ɵfac=function(u){return new(u||e)}}static{this.ɵcmp=I({type:e,selectors:[[`ng-component`]],exportAs:[`tui-message-5.18.0`],decls:0,vars:0,template:function(u,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.18.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--%NS%tui-typography-ui-m);border-radius:var(--%NS%tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.18.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2})}}return e})();var Z=(()=>{class e{constructor(){this.nothing=pt(te)}static{this.ɵfac=function(u){return new(u||e)}}static{this.ɵdir=S({type:e,selectors:[[``,`tuiMessage`,``]],features:[A([{provide:Lg,useValue:{appearance:`neutral`}}]),H([Li])]})}}return e})();function ie(e,l){e&1&&J(0,`ezui-iconselector`)}function ne(e,l){if(e&1){let t=q();y(0,`ezui-iconselector`,5),_t(`selectedChange`,function(y){O(t);let g$1=g();return yt(g$1.binding,y)||(g$1.binding=y),R$1(y)}),_(),y(1,`span`),P(2),_()}if(e&2){let t=g();vt(`selected`,t.binding),v(2),ee(`You have selected: "`,t.binding(),`"`)}}function ae(e,l){e&1&&J(0,`ezui-iconselector`,6),e&2&&x(`disabled`,!0)}function le(e,l){e&1&&J(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var C=class e{binding=E(`circle`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),re$1(1,ie,1,0,`ng-template`,null,0,Dn),_(),y(3,`app-samplecontainer`,2),re$1(4,ne,3,2,`ng-template`,null,0,Dn),_(),y(6,`app-samplecontainer`,3),re$1(7,ae,1,1,`ng-template`,null,0,Dn),_(),y(9,`app-samplecontainer`,4),re$1(10,le,3,0,`ng-template`,null,0,Dn),_()),t&2&&(v(3),x(`enableTypescript`,!0))},dependencies:[xn,an,SAe,Y],encapsulation:2})};function pe(e,l){if(e&1){let t=q();y(0,`ezui-markdowneditor`,3),_t(`valueChange`,function(y){O(t);let g$2=g();return yt(g$2.binding,y)||(g$2.binding=y),R$1(y)}),_()}if(e&2)vt(`value`,g().binding)}function me(e,l){if(e&1&&J(0,`ezui-markdowneditor`,4),e&2)x(`value`,g().binding())(`disabled`,!0)}var M=class e{binding=E(`Text`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:7,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,1),re$1(1,pe,1,1,`ng-template`,null,0,Dn),_(),y(3,`app-samplecontainer`,2),P(4,` > `),re$1(5,me,1,2,`ng-template`,null,0,Dn),_()),t&2&&(x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[xn,an,DAe,Y],encapsulation:2})};function re(e,l){e&1&&(y(0,`div`,11),J(1,`ezui-table`),_())}function se(e,l){e&1&&(y(0,`th`,13),P(1,`ID`),_(),y(2,`th`,13),P(3,`Value`),_(),y(4,`th`,13),P(5,`Description`),_())}function de(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14),P(3),_(),y(4,`td`,14),P(5),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(2),jt(t.value),v(2),jt(t.desc)}}function oe(e,l){if(e&1&&(y(0,`ezui-table`,12),re$1(1,se,6,0,`ng-template`,null,1,Dn)(3,de,6,3,`ng-template`,null,2,Dn),_()),e&2)x(`values`,g().data)}function ce(e,l){e&1&&(y(0,`th`,13),P(1,`ID`),_(),y(2,`th`,13),P(3,`Value`),_(),y(4,`th`,13),P(5,`Description`),_())}function ue(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14),P(3),_(),y(4,`td`,14),P(5),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(2),jt(t.value),v(2),jt(t.desc)}}function ye(e,l){if(e&1){let t=q();y(0,`ezui-table`,15),T(`onRowClick`,function(y){O(t);return R$1(g().rowClicked(y))}),re$1(1,ce,6,0,`ng-template`,null,1,Dn)(3,ue,6,3,`ng-template`,null,2,Dn),_()}if(e&2)x(`values`,g().data)(`clickable`,!0)}function we(e,l){e&1&&(y(0,`th`,13),P(1,`ID`),_(),y(2,`th`,13),P(3,`Value`),_(),y(4,`th`,13),P(5,`Description`),_())}function ge(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14),P(3),_(),y(4,`td`,14),P(5),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(2),jt(t.value),v(2),jt(t.desc)}}function be(e,l){if(e&1&&(y(0,`ezui-table`,16),re$1(1,we,6,0,`ng-template`,null,1,Dn)(3,ge,6,3,`ng-template`,null,2,Dn),_()),e&2){let t=g();x(`values`,t.longData)(`pageSize`,t.pageSize)}}function Te(e,l){e&1&&(y(0,`th`,13),P(1,` ID `),J(2,`ezui-table-sortable`,19),_(),y(3,`th`,13),P(4,` Value `),J(5,`ezui-table-sortable`,20),_(),y(6,`th`,13),P(7,` Description `),J(8,`ezui-table-sortable`,21),_())}function fe(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14),P(3),_(),y(4,`td`,14),P(5),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(2),jt(t.value),v(2),jt(t.desc)}}function ve(e,l){if(e&1&&(y(0,`span`,17),P(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,18),re$1(3,Te,9,0,`ng-template`,null,1,Dn)(5,fe,6,3,`ng-template`,null,2,Dn),_()),e&2){let t=g();v(2),x(`values`,t.data)(`showClearFilters`,!0)}}function _e(e,l){if(e&1&&(y(0,`th`,13),P(1,` ID `),J(2,`ezui-table-textfilter`,19),_(),y(3,`th`,13),P(4,` Type `),J(5,`ezui-table-selectfilter`,22),_(),y(6,`th`,13),P(7,` Timestamp `),J(8,`ezui-table-datefilter`,23),_(),y(9,`th`,13),P(10,` Is Active `),J(11,`ezui-table-booleanfilter`,24),_()),e&2){let t=g(2);v(5),x(`options`,t.filterOptions)}}function xe(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14)(3,`span`,25),P(4),_()(),y(5,`td`,14),P(6),Wn(7,`date`),_(),y(8,`td`,14),P(9),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(3),ee(` `,t.type,` `),v(2),jt(am(7,4,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),v(3),jt(t.active)}}function he(e,l){if(e&1&&(y(0,`span`,17),P(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,18),re$1(3,_e,12,1,`ng-template`,null,1,Dn)(5,xe,10,7,`ng-template`,null,2,Dn),_()),e&2){let t=g();v(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function De(e,l){if(e&1&&(y(0,`th`,13),P(1,` ID `),J(2,`ezui-table-sortable`,19)(3,`ezui-table-textfilter`,19),_(),y(4,`th`,13),P(5,` Type `),J(6,`ezui-table-sortable`,26)(7,`ezui-table-selectfilter`,22),_(),y(8,`th`,13),P(9,` Timestamp `),J(10,`ezui-table-sortable`,23)(11,`ezui-table-datefilter`,23),_()),e&2){let t=g(2);v(7),x(`options`,t.filterOptions)}}function ze(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14)(3,`span`,25),P(4),_()(),y(5,`td`,14),P(6),Wn(7,`date`),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(3),ee(` `,t.type,` `),v(2),jt(am(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ee(e,l){if(e&1&&(y(0,`span`,17),P(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,18),re$1(3,De,12,1,`ng-template`,null,1,Dn)(5,ze,8,6,`ng-template`,null,2,Dn),_()),e&2){let t=g();v(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function ke(e,l){if(e&1&&(y(0,`th`,13),P(1,` ID `),J(2,`ezui-table-sortable`,19)(3,`ezui-table-textfilter`,19),_(),y(4,`th`,13),P(5,` Type `),J(6,`ezui-table-sortable`,26)(7,`ezui-table-selectfilter`,22),_(),y(8,`th`,13),P(9,` Timestamp `),J(10,`ezui-table-sortable`,23)(11,`ezui-table-datefilter`,23),_()),e&2){let t=g(2);v(7),x(`options`,t.longFilterOptions)}}function Se(e,l){if(e&1&&(y(0,`td`,14),P(1),_(),y(2,`td`,14)(3,`span`,25),P(4),_()(),y(5,`td`,14),P(6),Wn(7,`date`),_()),e&2){let t=l.$implicit;v(),jt(t.id),v(3),ee(` `,t.type,` `),v(2),jt(am(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ie(e,l){if(e&1&&(y(0,`span`,17),P(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,27),re$1(3,ke,12,1,`ng-template`,null,1,Dn)(5,Se,8,6,`ng-template`,null,2,Dn),_()),e&2){let t=g();v(2),x(`values`,t.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}var R=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=E(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(l){alert(`Clicked on row `+l.id)}static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:24,vars:7,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
]`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`]],template:function(t,u){t&1&&(y(0,`app-samplecontainer`,3),re$1(1,re,2,0,`ng-template`,null,0,Dn),_(),y(3,`app-samplecontainer`,4),re$1(4,oe,5,1,`ng-template`,null,0,Dn),_(),y(6,`app-samplecontainer`,5),re$1(7,ye,5,2,`ng-template`,null,0,Dn),_(),y(9,`app-samplecontainer`,6),re$1(10,be,5,2,`ng-template`,null,0,Dn),_(),y(12,`app-samplecontainer`,7),re$1(13,ve,7,2,`ng-template`,null,0,Dn),_(),y(15,`app-samplecontainer`,8),re$1(16,he,7,2,`ng-template`,null,0,Dn),_(),y(18,`app-samplecontainer`,9),re$1(19,Ee,7,2,`ng-template`,null,0,Dn),_(),y(21,`app-samplecontainer`,10),re$1(22,Ie,7,3,`ng-template`,null,0,Dn),_()),t&2&&(v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0),v(3),x(`enableTypescript`,!0))},dependencies:[xn,an,Ou,Y,Bk,TC,AAe,Z,MAe,kAe,NAe,Cl,EAe,G5],encapsulation:2})};var rt=[{path:`markdowneditor`,component:M},{path:`tables`,component:R},{path:`iconselector`,component:C}];export{rt as default};