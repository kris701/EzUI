import{A as Y5,B as ft,C as Uk,D as X,F as cOe,I as cm,L as dOe,N as aOe,Q as mt,R as eOe,S,T as Vg,U as hn,V as g,W as ht,X as lOe,Y as k,Z as m,_ as O,_t as x,a as Gt,at as q,bt as xn,c as I,dt as tOe,et as ne,ht as un,i as Ge,it as pt,j as _,l as J,n as D,o as H$1,ot as qe$1,pt as uOe,r as E,s as Ht,st as qn,t as Bi,ut as sOe,v as P,vt as xC,x as R$1,xt as y,y as Pu,yt as xl}from"./main-J4YTJW3O.js";import{t as Y}from"./chunk-BWEjkX03.js";var pe=(()=>{class e{static{this.ɵfac=function(c){return new(c||e)}}static{this.ɵcmp=I({type:e,selectors:[[`ng-component`]],exportAs:[`tui-message-5.18.0`],decls:0,vars:0,template:function(c,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.18.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--%NS%tui-typography-ui-m);border-radius:var(--%NS%tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.18.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2})}}return e})();var le=(()=>{class e{constructor(){this.nothing=mt(pe)}static{this.ɵfac=function(c){return new(c||e)}}static{this.ɵdir=S({type:e,selectors:[[``,`tuiMessage`,``]],features:[k([{provide:Vg,useValue:{appearance:`neutral`}}]),H$1([Bi])]})}}return e})();function me(e,l){e&1&&J(0,`ezui-iconselector`)}function re(e,l){if(e&1){let t=q();y(0,`ezui-iconselector`,5),ht(`selectedChange`,function(y){R$1(t);let x=m();return ft(x.binding,y)||(x.binding=y),P(y)}),_(),y(1,`span`),O(2),_()}if(e&2){let t=m();pt(`selected`,t.binding),g(2),X(`You have selected: "`,t.binding(),`"`)}}function se(e,l){e&1&&J(0,`ezui-iconselector`,6),e&2&&x(`disabled`,!0)}function oe(e,l){e&1&&J(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var M=class e{binding=E(`circle`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(t,c){t&1&&(y(0,`app-samplecontainer`,1),ne(1,me,1,0,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,2),ne(4,re,3,2,`ng-template`,null,0,xn),_(),y(6,`app-samplecontainer`,3),ne(7,se,1,1,`ng-template`,null,0,xn),_(),y(9,`app-samplecontainer`,4),ne(10,oe,3,0,`ng-template`,null,0,xn),_()),t&2&&(g(3),x(`enableTypescript`,!0))},dependencies:[hn,Gt,eOe,Y],encapsulation:2})};function de(e,l){if(e&1){let t=q();y(0,`ezui-markdowneditor`,3),ht(`valueChange`,function(y){R$1(t);let x=m();return ft(x.binding,y)||(x.binding=y),P(y)}),_()}if(e&2)pt(`value`,m().binding)}function ue(e,l){if(e&1&&J(0,`ezui-markdowneditor`,4),e&2)x(`value`,m().binding())(`disabled`,!0)}var R=class e{binding=E(`Text`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:7,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`]],template:function(t,c){t&1&&(y(0,`app-samplecontainer`,1),ne(1,de,1,1,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,2),O(4,` > `),ne(5,ue,1,2,`ng-template`,null,0,xn),_()),t&2&&(x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0))},dependencies:[hn,Gt,tOe,Y],encapsulation:2})};function ce(e,l){e&1&&J(0,`ezui-showmoretext`,2)}var F=class e{binding=E(`circle`);static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-showmoretext`]],hostAttrs:[1,`base-view`],decls:3,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-showmoretext value="Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum."/>`],[`value`,`Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.`]],template:function(t,c){t&1&&(y(0,`app-samplecontainer`,1),ne(1,ce,1,0,`ng-template`,null,0,xn),_())},dependencies:[hn,Gt,sOe,Y],encapsulation:2})};function ye(e,l){e&1&&(y(0,`div`,14),J(1,`ezui-table`),_())}function ge(e,l){e&1&&(y(0,`th`,16),O(1,`ID`),_(),y(2,`th`,16),O(3,`Value`),_(),y(4,`th`,16),O(5,`Description`),_())}function we(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17),O(3),_(),y(4,`td`,17),O(5),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(2),Ht(t.value),g(2),Ht(t.desc)}}function be(e,l){if(e&1&&(y(0,`ezui-table`,15),ne(1,ge,6,0,`ng-template`,null,1,xn)(3,we,6,3,`ng-template`,null,2,xn),_()),e&2)x(`values`,m().data)}function fe(e,l){e&1&&(y(0,`th`,16),O(1,`ID`),_(),y(2,`th`,16),O(3,`Value`),_(),y(4,`th`,16),O(5,`Description`),_())}function Te(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17),O(3),_(),y(4,`td`,17),O(5),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(2),Ht(t.value),g(2),Ht(t.desc)}}function ve(e,l){if(e&1){let t=q();y(0,`ezui-table`,18),D(`onRowClick`,function(y){R$1(t);return P(m().rowClicked(y))}),ne(1,fe,6,0,`ng-template`,null,1,xn)(3,Te,6,3,`ng-template`,null,2,xn),_()}if(e&2)x(`values`,m().data)(`clickable`,!0)}function xe(e,l){e&1&&(y(0,`th`,16),O(1,`ID`),_(),y(2,`th`,16),O(3,`Value`),_(),y(4,`th`,16),O(5,`Description`),_())}function _e(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17),O(3),_(),y(4,`td`,17),O(5),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(2),Ht(t.value),g(2),Ht(t.desc)}}function he(e,l){if(e&1&&(y(0,`td`,20)(1,`span`,21),O(2),_()()),e&2){let t=l.$implicit;g(2),X(`You expanded the row `,t.id,`!`)}}function De(e,l){if(e&1&&(y(0,`ezui-table`,19),ne(1,xe,6,0,`ng-template`,null,1,xn)(3,_e,6,3,`ng-template`,null,2,xn)(5,he,3,1,`ng-template`,null,3,xn),_()),e&2)x(`values`,m().data)(`expandable`,!0)}function ze(e,l){e&1&&(y(0,`th`,16),O(1,`ID`),_(),y(2,`th`,16),O(3,`Value`),_(),y(4,`th`,16),O(5,`Description`),_())}function Ee(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17),O(3),_(),y(4,`td`,17),O(5),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(2),Ht(t.value),g(2),Ht(t.desc)}}function Se(e,l){if(e&1&&(y(0,`ezui-table`,22),ne(1,ze,6,0,`ng-template`,null,1,xn)(3,Ee,6,3,`ng-template`,null,2,xn),_()),e&2){let t=m();x(`values`,t.longData)(`pageSize`,t.pageSize)}}function ke(e,l){e&1&&(y(0,`th`,16),O(1,` ID `),J(2,`ezui-table-sortable`,25),_(),y(3,`th`,16),O(4,` Value `),J(5,`ezui-table-sortable`,26),_(),y(6,`th`,16),O(7,` Description `),J(8,`ezui-table-sortable`,27),_())}function Ie(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17),O(3),_(),y(4,`td`,17),O(5),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(2),Ht(t.value),g(2),Ht(t.desc)}}function Ce(e,l){if(e&1&&(y(0,`span`,23),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,24),ne(3,ke,9,0,`ng-template`,null,1,xn)(5,Ie,6,3,`ng-template`,null,2,xn),_()),e&2){let t=m();g(2),x(`values`,t.data)(`showClearFilters`,!0)}}function Me(e,l){if(e&1&&(y(0,`th`,16),O(1,` ID `),J(2,`ezui-table-textfilter`,25),_(),y(3,`th`,16),O(4,` Type `),J(5,`ezui-table-selectfilter`,28),_(),y(6,`th`,16),O(7,` Timestamp `),J(8,`ezui-table-datefilter`,29),_(),y(9,`th`,16),O(10,` Is Active `),J(11,`ezui-table-booleanfilter`,30),_()),e&2){let t=m(2);g(5),x(`options`,t.filterOptions)}}function Re(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17)(3,`span`,31),O(4),_()(),y(5,`td`,17),O(6),qn(7,`date`),_(),y(8,`td`,17),O(9),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(3),X(` `,t.type,` `),g(2),Ht(cm(7,4,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),g(3),Ht(t.active)}}function Fe(e,l){if(e&1&&(y(0,`span`,23),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,24),ne(3,Me,12,1,`ng-template`,null,1,xn)(5,Re,10,7,`ng-template`,null,2,xn),_()),e&2){let t=m();g(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function He(e,l){if(e&1&&(y(0,`th`,16),O(1,` ID `),J(2,`ezui-table-sortable`,25)(3,`ezui-table-textfilter`,25),_(),y(4,`th`,16),O(5,` Type `),J(6,`ezui-table-sortable`,32)(7,`ezui-table-selectfilter`,28),_(),y(8,`th`,16),O(9,` Timestamp `),J(10,`ezui-table-sortable`,29)(11,`ezui-table-datefilter`,29),_()),e&2){let t=m(2);g(7),x(`options`,t.filterOptions)}}function Pe(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17)(3,`span`,31),O(4),_()(),y(5,`td`,17),O(6),qn(7,`date`),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(3),X(` `,t.type,` `),g(2),Ht(cm(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ve(e,l){if(e&1&&(y(0,`span`,23),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,24),ne(3,He,12,1,`ng-template`,null,1,xn)(5,Pe,8,6,`ng-template`,null,2,xn),_()),e&2){let t=m();g(2),x(`values`,t.filterData)(`showClearFilters`,!0)}}function Ae(e,l){if(e&1&&(y(0,`th`,16),O(1,` ID `),J(2,`ezui-table-sortable`,25)(3,`ezui-table-textfilter`,25),_(),y(4,`th`,16),O(5,` Type `),J(6,`ezui-table-sortable`,32)(7,`ezui-table-selectfilter`,28),_(),y(8,`th`,16),O(9,` Timestamp `),J(10,`ezui-table-sortable`,29)(11,`ezui-table-datefilter`,29),_()),e&2){let t=m(2);g(7),x(`options`,t.longFilterOptions)}}function Ue(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17)(3,`span`,31),O(4),_()(),y(5,`td`,17),O(6),qn(7,`date`),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(3),X(` `,t.type,` `),g(2),Ht(cm(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Oe(e,l){if(e&1&&(y(0,`span`,23),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,33),ne(3,Ae,12,1,`ng-template`,null,1,xn)(5,Ue,8,6,`ng-template`,null,2,xn),_()),e&2){let t=m();g(2),x(`values`,t.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function Ne(e,l){if(e&1&&(y(0,`th`,16),O(1,` ID `),J(2,`ezui-table-textfilter`,25),_(),y(3,`th`,16),O(4,` Type `),J(5,`ezui-table-selectfilter`,34),_(),y(6,`th`,16),O(7,` Timestamp `),J(8,`ezui-table-datefilter`,29),_(),y(9,`th`,16),O(10,` Is Active `),J(11,`ezui-table-booleanfilter`,30),_()),e&2){let t=m(2);g(5),x(`options`,t.filterOptions2)}}function qe(e,l){if(e&1&&(y(0,`span`,35),O(1),_()),e&2){let t=l.$implicit;g(),X(` `,t,` `)}}function Be(e,l){if(e&1&&(y(0,`td`,17),O(1),_(),y(2,`td`,17),Ge(3,qe,2,1,`span`,35,un),_(),y(5,`td`,17),O(6),qn(7,`date`),_(),y(8,`td`,17),O(9),_()),e&2){let t=l.$implicit;g(),Ht(t.id),g(2),qe$1(t.types),g(3),Ht(cm(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),g(3),Ht(t.active)}}function We(e,l){if(e&1&&(y(0,`span`,23),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,24),ne(3,Ne,12,1,`ng-template`,null,1,xn)(5,Be,10,6,`ng-template`,null,2,xn),_()),e&2){let t=m();g(2),x(`values`,t.filterData2)(`showClearFilters`,!0)}}var H=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=E(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(l){alert(`Clicked on row `+l.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:new Date,active:!1}];static ɵfac=function(t){return new(t||e)};static ɵcmp=I({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:30,vars:9,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`tableExpandedrow`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
}`,3,`enableTypescript`],[`label`,`Expandable`,`html`,`<ezui-table [values]="data" [expandable]="true">
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
	<ng-template #tableExpandedrow let-item>
		<td colSpan="4">
			<span style="margin:10px">You expanded the row {{item.id} }!</span>
		</td>
	</ng-template>
</ezui-table>`,`ts`,`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,`enableTypescript`],[`label`,`Pagination`,`html`,`<ezui-table [values]="longData" [pageSize]="pageSize">
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
}`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`expandable`],[`colSpan`,`4`],[2,`margin`,`10px`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`]],template:function(t,c){t&1&&(y(0,`app-samplecontainer`,4),ne(1,ye,2,0,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,5),ne(4,be,5,1,`ng-template`,null,0,xn),_(),y(6,`app-samplecontainer`,6),ne(7,ve,5,2,`ng-template`,null,0,xn),_(),y(9,`app-samplecontainer`,7),ne(10,De,7,2,`ng-template`,null,0,xn),_(),y(12,`app-samplecontainer`,8),ne(13,Se,5,2,`ng-template`,null,0,xn),_(),y(15,`app-samplecontainer`,9),ne(16,Ce,7,2,`ng-template`,null,0,xn),_(),y(18,`app-samplecontainer`,10),ne(19,Fe,7,2,`ng-template`,null,0,xn),_(),y(21,`app-samplecontainer`,11),ne(22,Ve,7,2,`ng-template`,null,0,xn),_(),y(24,`app-samplecontainer`,12),ne(25,Oe,7,3,`ng-template`,null,0,xn),_(),y(27,`app-samplecontainer`,13),ne(28,We,7,2,`ng-template`,null,0,xn),_()),t&2&&(g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0),g(3),x(`enableTypescript`,!0))},dependencies:[hn,Gt,Pu,Y,Uk,xC,dOe,le,lOe,uOe,cOe,xl,aOe,Y5],encapsulation:2})};var Ct=[{path:`markdowneditor`,component:R},{path:`tables`,component:H},{path:`iconselector`,component:M},{path:`showmoretext`,component:F}];export{Ct as default};