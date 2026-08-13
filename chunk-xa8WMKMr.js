import{$ as ne,E as X,H as ht,J as lOe,M as cOe,N as cm,O as Y5,P as dOe,Q as nOe,R as ft,S as Uk,V as hn,X as m,Z as mt,_ as O,_t as x,a as Gt,at as pt,b as R$1,bt as xn,c as I,ct as qn,dt as tOe,ht as un,i as Ge,it as pOe,j as aOe,k as _,l as J,n as D,o as H,ot as q,pt as uOe,q as k,r as E,s as Ht,st as qe$1,t as Bi,v as P,vt as xC,w as Vg,x as S,xt as y,y as Pu,yt as xl,z as g}from"./main-ND4RVPHQ.js";import{t as Y}from"./chunk-rYP9LHfJ.js";var re=(()=>{class e{static{this.ɵfac=function(c){return new(c||e)}}static{this.ɵcmp=I({type:e,selectors:[[`ng-component`]],exportAs:[`tui-message-5.18.0`],decls:0,vars:0,template:function(c,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.18.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--%NS%tui-typography-ui-m);border-radius:var(--%NS%tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.18.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2})}}return e})();var le=(()=>{class e{constructor(){this.nothing=mt(re)}static{this.ɵfac=function(c){return new(c||e)}}static{this.ɵdir=S({type:e,selectors:[[``,`tuiMessage`,``]],features:[k([{provide:Vg,useValue:{appearance:`neutral`}}]),H([Bi])]})}}return e})();function me(e,r){e&1&&J(0,`ezui-iconselector`)}function pe(e,r){if(e&1){let a=q();y(0,`ezui-iconselector`,5),ht(`selectedChange`,function(y){R$1(a);let x=g();return ft(x.binding,y)||(x.binding=y),P(y)}),_(),y(1,`span`),O(2),_()}if(e&2){let a=g();pt(`selected`,a.binding),m(2),X(`You have selected: "`,a.binding(),`"`)}}function se(e,r){e&1&&J(0,`ezui-iconselector`,6),e&2&&x(`disabled`,!0)}function oe(e,r){e&1&&J(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var M=class e{binding=E(`circle`);static ɵfac=function(a){return new(a||e)};static ɵcmp=I({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(a,c){a&1&&(y(0,`app-samplecontainer`,1),ne(1,me,1,0,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,2),ne(4,pe,3,2,`ng-template`,null,0,xn),_(),y(6,`app-samplecontainer`,3),ne(7,se,1,1,`ng-template`,null,0,xn),_(),y(9,`app-samplecontainer`,4),ne(10,oe,3,0,`ng-template`,null,0,xn),_()),a&2&&(m(3),x(`enableTypescript`,!0))},dependencies:[hn,Gt,tOe,Y],encapsulation:2})};function de(e,r){if(e&1){let a=q();y(0,`ezui-markdowneditor`,3),ht(`valueChange`,function(y){R$1(a);let x=g();return ft(x.binding,y)||(x.binding=y),P(y)}),_()}if(e&2)pt(`value`,g().binding)}function ue(e,r){if(e&1&&J(0,`ezui-markdowneditor`,4),e&2)x(`value`,g().binding())(`disabled`,!0)}var R=class e{binding=E(`Text`);static ɵfac=function(a){return new(a||e)};static ɵcmp=I({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:7,vars:2,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`]],template:function(a,c){a&1&&(y(0,`app-samplecontainer`,1),ne(1,de,1,1,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,2),O(4,` > `),ne(5,ue,1,2,`ng-template`,null,0,xn),_()),a&2&&(x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0))},dependencies:[hn,Gt,nOe,Y],encapsulation:2})};function ce(e,r){e&1&&J(0,`ezui-showmoretext`,2)}var F=class e{binding=E(`circle`);static ɵfac=function(a){return new(a||e)};static ɵcmp=I({type:e,selectors:[[`app-showmoretext`]],hostAttrs:[1,`base-view`],decls:3,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-showmoretext value="Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum."/>`],[`value`,`Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.`]],template:function(a,c){a&1&&(y(0,`app-samplecontainer`,1),ne(1,ce,1,0,`ng-template`,null,0,xn),_())},dependencies:[hn,Gt,aOe,Y],encapsulation:2})};function ye(e,r){e&1&&(y(0,`div`,15),J(1,`ezui-table`),_())}function we(e,r){e&1&&(y(0,`th`,17),O(1,`ID`),_(),y(2,`th`,17),O(3,`Value`),_(),y(4,`th`,17),O(5,`Description`),_())}function ge(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),O(3),_(),y(4,`td`,18),O(5),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),Ht(a.value),m(2),Ht(a.desc)}}function be(e,r){if(e&1&&(y(0,`ezui-table`,16),ne(1,we,6,0,`ng-template`,null,1,xn)(3,ge,6,3,`ng-template`,null,2,xn),_()),e&2)x(`values`,g().data)}function ve(e,r){e&1&&(y(0,`th`,17),O(1,`ID`),_(),y(2,`th`,17),O(3,`Value`),_(),y(4,`th`,17),O(5,`Description`),_())}function fe(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),O(3),_(),y(4,`td`,18),O(5),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),Ht(a.value),m(2),Ht(a.desc)}}function Te(e,r){if(e&1){let a=q();y(0,`ezui-table`,19),D(`onRowClick`,function(y){R$1(a);return P(g().rowClicked(y))}),ne(1,ve,6,0,`ng-template`,null,1,xn)(3,fe,6,3,`ng-template`,null,2,xn),_()}if(e&2)x(`values`,g().data)(`clickable`,!0)}function xe(e,r){e&1&&(y(0,`th`,17),O(1,`ID`),_(),y(2,`th`,17),O(3,`Value`),_(),y(4,`th`,17),O(5,`Description`),_())}function _e(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),O(3),_(),y(4,`td`,18),O(5),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),Ht(a.value),m(2),Ht(a.desc)}}function he(e,r){if(e&1&&(y(0,`td`,21)(1,`span`,22),O(2),_()()),e&2){let a=r.$implicit;m(2),X(`You expanded the row `,a.id,`!`)}}function ke(e,r){if(e&1&&(y(0,`ezui-table`,20),ne(1,xe,6,0,`ng-template`,null,1,xn)(3,_e,6,3,`ng-template`,null,2,xn)(5,he,3,1,`ng-template`,null,3,xn),_()),e&2)x(`values`,g().data)(`expandable`,!0)}function Ee(e,r){e&1&&(y(0,`th`,17),O(1,`ID`),_(),y(2,`th`,17),O(3,`Value`),_(),y(4,`th`,17),O(5,`Description`),_())}function De(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),O(3),_(),y(4,`td`,18),O(5),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),Ht(a.value),m(2),Ht(a.desc)}}function Se(e,r){if(e&1&&(y(0,`ezui-table`,23),ne(1,Ee,6,0,`ng-template`,null,1,xn)(3,De,6,3,`ng-template`,null,2,xn),_()),e&2){let a=g();x(`values`,a.longData)(`pageSize`,a.pageSize)}}function ze(e,r){e&1&&(y(0,`th`,17),O(1,` ID `),J(2,`ezui-table-sortable`,26),_(),y(3,`th`,17),O(4,` Value `),J(5,`ezui-table-sortable`,27),_(),y(6,`th`,17),O(7,` Description `),J(8,`ezui-table-sortable`,28),_())}function Ie(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),O(3),_(),y(4,`td`,18),O(5),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),Ht(a.value),m(2),Ht(a.desc)}}function Ce(e,r){if(e&1&&(y(0,`span`,24),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,25),ne(3,ze,9,0,`ng-template`,null,1,xn)(5,Ie,6,3,`ng-template`,null,2,xn),_()),e&2){let a=g();m(2),x(`values`,a.data)(`showClearFilters`,!0)}}function Me(e,r){if(e&1&&(y(0,`th`,17),O(1,` ID `),J(2,`ezui-table-textfilter`,26),_(),y(3,`th`,17),O(4,` Type `),J(5,`ezui-table-selectfilter`,29),_(),y(6,`th`,17),O(7,` Timestamp `),J(8,`ezui-table-datefilter`,30),_(),y(9,`th`,17),O(10,` Is Active `),J(11,`ezui-table-booleanfilter`,31),_()),e&2){let a=g(2);m(5),x(`options`,a.filterOptions)}}function Re(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18)(3,`span`,32),O(4),_()(),y(5,`td`,18),O(6),qn(7,`date`),_(),y(8,`td`,18),O(9),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(3),X(` `,a.type,` `),m(2),Ht(cm(7,4,a.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),Ht(a.active)}}function Fe(e,r){if(e&1&&(y(0,`span`,24),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,25),ne(3,Me,12,1,`ng-template`,null,1,xn)(5,Re,10,7,`ng-template`,null,2,xn),_()),e&2){let a=g();m(2),x(`values`,a.filterData)(`showClearFilters`,!0)}}function Ve(e,r){if(e&1&&(y(0,`th`,17),O(1,` ID `),J(2,`ezui-table-sortable`,26)(3,`ezui-table-textfilter`,26),_(),y(4,`th`,17),O(5,` Type `),J(6,`ezui-table-sortable`,33)(7,`ezui-table-selectfilter`,29),_(),y(8,`th`,17),O(9,` Timestamp `),J(10,`ezui-table-sortable`,30)(11,`ezui-table-datefilter`,30),_()),e&2){let a=g(2);m(7),x(`options`,a.filterOptions)}}function He(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18)(3,`span`,32),O(4),_()(),y(5,`td`,18),O(6),qn(7,`date`),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(3),X(` `,a.type,` `),m(2),Ht(cm(7,3,a.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Pe(e,r){if(e&1&&(y(0,`span`,24),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,25),ne(3,Ve,12,1,`ng-template`,null,1,xn)(5,He,8,6,`ng-template`,null,2,xn),_()),e&2){let a=g();m(2),x(`values`,a.filterData)(`showClearFilters`,!0)}}function Ae(e,r){if(e&1&&(y(0,`th`,17),O(1,` ID `),J(2,`ezui-table-sortable`,26)(3,`ezui-table-textfilter`,26),_(),y(4,`th`,17),O(5,` Type `),J(6,`ezui-table-sortable`,33)(7,`ezui-table-selectfilter`,29),_(),y(8,`th`,17),O(9,` Timestamp `),J(10,`ezui-table-sortable`,30)(11,`ezui-table-datefilter`,30),_()),e&2){let a=g(2);m(7),x(`options`,a.longFilterOptions)}}function Ue(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18)(3,`span`,32),O(4),_()(),y(5,`td`,18),O(6),qn(7,`date`),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(3),X(` `,a.type,` `),m(2),Ht(cm(7,3,a.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Oe(e,r){if(e&1&&(y(0,`span`,24),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,34),ne(3,Ae,12,1,`ng-template`,null,1,xn)(5,Ue,8,6,`ng-template`,null,2,xn),_()),e&2){let a=g();m(2),x(`values`,a.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function Ne(e,r){if(e&1&&(y(0,`th`,17),O(1,` ID `),J(2,`ezui-table-textfilter`,26),_(),y(3,`th`,17),O(4,` Type `),J(5,`ezui-table-selectfilter`,35),_(),y(6,`th`,17),O(7,` Timestamp `),J(8,`ezui-table-datefilter`,30),_(),y(9,`th`,17),O(10,` Is Active `),J(11,`ezui-table-booleanfilter`,31),_()),e&2){let a=g(2);m(5),x(`options`,a.filterOptions2)}}function qe(e,r){if(e&1&&(y(0,`span`,36),O(1),_()),e&2){let a=r.$implicit;m(),X(` `,a,` `)}}function Be(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),Ge(3,qe,2,1,`span`,36,un),_(),y(5,`td`,18),O(6),qn(7,`date`),_(),y(8,`td`,18),O(9),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),qe$1(a.types),m(3),Ht(cm(7,3,a.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),Ht(a.active)}}function We(e,r){if(e&1&&(y(0,`span`,24),O(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),y(2,`ezui-table`,25),ne(3,Ne,12,1,`ng-template`,null,1,xn)(5,Be,10,6,`ng-template`,null,2,xn),_()),e&2){let a=g();m(2),x(`values`,a.filterData2)(`showClearFilters`,!0)}}function $e(e,r){e&1&&(y(0,`th`,17),O(1,`ID`),_(),y(2,`th`,17),O(3,`Value 1`),_(),y(4,`th`,17),O(5,`Value 2`),_(),y(6,`th`,17),O(7,`Value 3`),_(),y(8,`th`,17),O(9,`Value 4`),_(),y(10,`th`,17),O(11,`Value 5`),_(),y(12,`th`,17),O(13,`Value 6`),_(),y(14,`th`,17),O(15,`Value 7`),_(),y(16,`th`,17),O(17,`Value 8`),_())}function Le(e,r){if(e&1&&(y(0,`td`,18),O(1),_(),y(2,`td`,18),O(3),_(),y(4,`td`,18),O(5),_(),y(6,`td`,18),O(7),_(),y(8,`td`,18),O(9),_(),y(10,`td`,18),O(11),_(),y(12,`td`,18),O(13),_(),y(14,`td`,18),O(15),_(),y(16,`td`,18),O(17),_()),e&2){let a=r.$implicit;m(),Ht(a.id),m(2),Ht(a.value1),m(2),Ht(a.value2),m(2),Ht(a.value3),m(2),Ht(a.value4),m(2),Ht(a.value5),m(2),Ht(a.value6),m(2),Ht(a.value7),m(2),Ht(a.value8)}}function je(e,r){if(e&1&&(y(0,`ezui-table`,16),ne(1,$e,18,0,`ng-template`,null,1,xn)(3,Le,18,9,`ng-template`,null,2,xn),_()),e&2)x(`values`,g().scrollData)}var V=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=E(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(r){alert(`Clicked on row `+r.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:new Date,active:!1}];scrollData=[{id:`abc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`1213`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`s`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`aa`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a22bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works with some very wide value like this one is`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5sbc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a56bc`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a51bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works with some very wide value like this one is`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`}];static ɵfac=function(a){return new(a||e)};static ɵcmp=I({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:33,vars:10,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`tableExpandedrow`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
}`,3,`enableTypescript`],[`label`,`Scroll`,`html`,`<ezui-table [values]="data">
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
]`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`expandable`],[`colSpan`,`4`],[2,`margin`,`10px`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`]],template:function(a,c){a&1&&(y(0,`app-samplecontainer`,4),ne(1,ye,2,0,`ng-template`,null,0,xn),_(),y(3,`app-samplecontainer`,5),ne(4,be,5,1,`ng-template`,null,0,xn),_(),y(6,`app-samplecontainer`,6),ne(7,Te,5,2,`ng-template`,null,0,xn),_(),y(9,`app-samplecontainer`,7),ne(10,ke,7,2,`ng-template`,null,0,xn),_(),y(12,`app-samplecontainer`,8),ne(13,Se,5,2,`ng-template`,null,0,xn),_(),y(15,`app-samplecontainer`,9),ne(16,Ce,7,2,`ng-template`,null,0,xn),_(),y(18,`app-samplecontainer`,10),ne(19,Fe,7,2,`ng-template`,null,0,xn),_(),y(21,`app-samplecontainer`,11),ne(22,Pe,7,2,`ng-template`,null,0,xn),_(),y(24,`app-samplecontainer`,12),ne(25,Oe,7,3,`ng-template`,null,0,xn),_(),y(27,`app-samplecontainer`,13),ne(28,We,7,2,`ng-template`,null,0,xn),_(),y(30,`app-samplecontainer`,14),ne(31,je,5,1,`ng-template`,null,0,xn),_()),a&2&&(m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0),m(3),x(`enableTypescript`,!0))},dependencies:[hn,Gt,Pu,Y,Uk,xC,pOe,le,cOe,dOe,uOe,xl,lOe,Y5],encapsulation:2})};var Ft=[{path:`markdowneditor`,component:R},{path:`tables`,component:V},{path:`iconselector`,component:M},{path:`showmoretext`,component:F}];export{Ft as default};