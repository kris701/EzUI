import{B as X,Ct as w,D as O$1,Dt as ze$1,E as N,F as UVe,G as Yt,L as Ve$1,N as T,Ot as zt,Q as bo,R as Vt,St as v,T as M,U as Y,V as XVe,Z as bO,_ as JVe,_t as rg,a as BVe,at as hH,d as Fe$1,dt as m,ft as mH,ht as qVe,i as A,it as gt,j as QVe,k as Pe$1,l as FS,lt as k,mt as q,ot as hc,pt as n5e,q as _,r as $t,rt as f,s as Ct,tt as e5e,vt as rr,w as Le$1,x as L,y as KVe,yt as t5e}from"./main-GM3VVRUN.js";import{t as h}from"./chunk-B8BRwDdv.js";import{t as G}from"./chunk-B3AjTU0O.js";function le(e,l){e&1&&q(0,`ezui-iconselector`)}function re(e,l){if(e&1){let t=L();v(0,`ezui-iconselector`,5),Ve$1(`selectedChange`,function(c){M(t);let y=f();return ze$1(y.binding,c)||(y.binding=c),N(c)}),_(),v(1,`span`),A(2),_()}if(e&2){let t=f();Le$1(`selected`,t.binding),m(2),Y(`You have selected: "`,t.binding(),`"`)}}function me(e,l){e&1&&q(0,`ezui-iconselector`,6),e&2&&w(`disabled`,!0)}function pe(e,l){e&1&&q(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var C=class e{binding=O$1(`circle`);static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(t,g){t&1&&(v(0,`app-samplecontainer`,1),X(1,le,1,0,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,2),X(4,re,3,2,`ng-template`,null,0,Vt),_(),v(6,`app-samplecontainer`,3),X(7,me,1,1,`ng-template`,null,0,Vt),_(),v(9,`app-samplecontainer`,4),X(10,pe,3,0,`ng-template`,null,0,Vt),_()),t&2&&(m(3),w(`enableTypescript`,!0))},dependencies:[Yt,Ct,BVe,G],encapsulation:2})};function se(e,l){if(e&1){let t=L();v(0,`ezui-markdowneditor`,5),Ve$1(`valueChange`,function(c){M(t);let y=f();return ze$1(y.binding,c)||(y.binding=c),N(c)}),_()}if(e&2)Le$1(`value`,f().binding)}function oe(e,l){if(e&1&&q(0,`ezui-markdowneditor`,6),e&2)w(`value`,f().binding())(`disabled`,!0)}function de(e,l){if(e&1&&q(0,`ezui-markdowneditor`,7),e&2)w(`value`,f().binding())(`disabled`,!0)(`slim`,!0)}function ue(e,l){if(e&1&&q(0,`ezui-markdowneditor`,8),e&2){let t=f();w(`value`,t.binding())(`additionalMenuBarItems`,t.additionals)}}var F=class e{binding=O$1(`Text`);additionals=[{label:`Stuff a`,command:l=>{alert(`stuff a`)}},{label:`Stuff b`,command:l=>{alert(`stuff b`)}}];static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:15,vars:4,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Slim`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Additional Menu Items`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`],[3,`value`,`disabled`,`slim`],[3,`value`,`additionalMenuBarItems`]],template:function(t,g){t&1&&(v(0,`app-samplecontainer`,1),X(1,se,1,1,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,2),A(4,` > `),X(5,oe,1,2,`ng-template`,null,0,Vt),_(),v(7,`app-samplecontainer`,3),A(8,` > `),X(9,de,1,3,`ng-template`,null,0,Vt),_(),v(11,`app-samplecontainer`,4),A(12,` > `),X(13,ue,1,2,`ng-template`,null,0,Vt),_()),t&2&&(w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(4),w(`enableTypescript`,!0),m(4),w(`enableTypescript`,!0))},dependencies:[Yt,Ct,UVe,G],encapsulation:2})};function ce(e,l){e&1&&q(0,`ezui-showmoretext`,2)}var V=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-showmoretext`]],hostAttrs:[1,`base-view`],decls:3,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-showmoretext value="Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum."/>`],[`value`,`Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.`]],template:function(t,g){t&1&&(v(0,`app-samplecontainer`,1),X(1,ce,1,0,`ng-template`,null,0,Vt),_())},dependencies:[Yt,Ct,QVe,G],encapsulation:2})};function we(e,l){e&1&&(v(0,`div`,15),q(1,`ezui-table`),_())}function ge(e,l){e&1&&(v(0,`th`,17),A(1,`ID`),_(),v(2,`th`,17),A(3,`Value`),_(),v(4,`th`,17),A(5,`Description`),_())}function be(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),A(3),_(),v(4,`td`,18),A(5),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),gt(t.value),m(2),gt(t.desc)}}function ve(e,l){if(e&1&&(v(0,`ezui-table`,16),X(1,ge,6,0,`ng-template`,null,1,Vt)(3,be,6,3,`ng-template`,null,2,Vt),_()),e&2)w(`values`,f().data)}function fe(e,l){e&1&&(v(0,`th`,17),A(1,`ID`),_(),v(2,`th`,17),A(3,`Value`),_(),v(4,`th`,17),A(5,`Description`),_())}function xe(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),A(3),_(),v(4,`td`,18),A(5),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),gt(t.value),m(2),gt(t.desc)}}function Te(e,l){if(e&1){let t=L();v(0,`ezui-table`,19),T(`onRowClick`,function(c){M(t);return N(f().rowClicked(c))}),X(1,fe,6,0,`ng-template`,null,1,Vt)(3,xe,6,3,`ng-template`,null,2,Vt),_()}if(e&2)w(`values`,f().data)(`clickable`,!0)}function _e(e,l){e&1&&(v(0,`th`,17),A(1,`ID`),_(),v(2,`th`,17),A(3,`Value`),_(),v(4,`th`,17),A(5,`Description`),_())}function he(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),A(3),_(),v(4,`td`,18),A(5),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),gt(t.value),m(2),gt(t.desc)}}function ke(e,l){if(e&1&&(v(0,`td`,21)(1,`span`,22),A(2),_()()),e&2){let t=l.$implicit;m(2),Y(`You expanded the row `,t.id,`!`)}}function Ee(e,l){if(e&1&&(v(0,`ezui-table`,20),X(1,_e,6,0,`ng-template`,null,1,Vt)(3,he,6,3,`ng-template`,null,2,Vt)(5,ke,3,1,`ng-template`,null,3,Vt),_()),e&2)w(`values`,f().data)(`expandable`,!0)}function Se(e,l){e&1&&(v(0,`th`,17),A(1,`ID`),_(),v(2,`th`,17),A(3,`Value`),_(),v(4,`th`,17),A(5,`Description`),_())}function ze(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),A(3),_(),v(4,`td`,18),A(5),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),gt(t.value),m(2),gt(t.desc)}}function De(e,l){if(e&1&&(v(0,`ezui-table`,23),X(1,Se,6,0,`ng-template`,null,1,Vt)(3,ze,6,3,`ng-template`,null,2,Vt),_()),e&2){let t=f();w(`values`,t.longData)(`pageSize`,t.pageSize)}}function Ie(e,l){e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-sortable`,26),_(),v(3,`th`,17),A(4,` Value `),q(5,`ezui-table-sortable`,27),_(),v(6,`th`,17),A(7,` Description `),q(8,`ezui-table-sortable`,28),_())}function Ce(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),A(3),_(),v(4,`td`,18),A(5),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),gt(t.value),m(2),gt(t.desc)}}function Me(e,l){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),v(2,`ezui-table`,25),X(3,Ie,9,0,`ng-template`,null,1,Vt)(5,Ce,6,3,`ng-template`,null,2,Vt),_()),e&2){let t=f();m(2),w(`values`,t.data)(`showClearFilters`,!0)}}function Re(e,l){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-textfilter`,26),_(),v(3,`th`,17),A(4,` Type `),q(5,`ezui-table-selectfilter`,29),_(),v(6,`th`,17),A(7,` Timestamp `),q(8,`ezui-table-datetimefilter`,30),_(),v(9,`th`,17),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,31),_()),e&2){let t=f(2);m(5),w(`options`,t.filterOptions)}}function Fe(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18)(3,`span`,32),A(4),_()(),v(5,`td`,18),A(6),zt(7,`date`),_(),v(8,`td`,18),A(9),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(3),Y(` `,t.type,` `),m(2),gt(rg(7,4,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),gt(t.active)}}function Ve(e,l){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),v(2,`ezui-table`,25),X(3,Re,12,1,`ng-template`,null,1,Vt)(5,Fe,10,7,`ng-template`,null,2,Vt),_()),e&2){let t=f();m(2),w(`values`,t.filterData)(`showClearFilters`,!0)}}function Pe(e,l){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-sortable`,26)(3,`ezui-table-textfilter`,26),_(),v(4,`th`,17),A(5,` Type `),q(6,`ezui-table-sortable`,33)(7,`ezui-table-selectfilter`,29),_(),v(8,`th`,17),A(9,` Timestamp `),q(10,`ezui-table-sortable`,30)(11,`ezui-table-datefilter`,30),_()),e&2){let t=f(2);m(7),w(`options`,t.filterOptions)}}function Oe(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18)(3,`span`,32),A(4),_()(),v(5,`td`,18),A(6),zt(7,`date`),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(3),Y(` `,t.type,` `),m(2),gt(rg(7,3,t.timestamp,`dd/MM/yyyy`))}}function Le(e,l){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),v(2,`ezui-table`,25),X(3,Pe,12,1,`ng-template`,null,1,Vt)(5,Oe,8,6,`ng-template`,null,2,Vt),_()),e&2){let t=f();m(2),w(`values`,t.filterData)(`showClearFilters`,!0)}}function Be(e,l){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-sortable`,26)(3,`ezui-table-textfilter`,26),_(),v(4,`th`,17),A(5,` Type `),q(6,`ezui-table-sortable`,33)(7,`ezui-table-selectfilter`,29),_(),v(8,`th`,17),A(9,` Timestamp `),q(10,`ezui-table-sortable`,30)(11,`ezui-table-datefilter`,30),_()),e&2){let t=f(2);m(7),w(`options`,t.longFilterOptions)}}function He(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18)(3,`span`,32),A(4),_()(),v(5,`td`,18),A(6),zt(7,`date`),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(3),Y(` `,t.type,` `),m(2),gt(rg(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ue(e,l){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),v(2,`ezui-table`,34),X(3,Be,12,1,`ng-template`,null,1,Vt)(5,He,8,6,`ng-template`,null,2,Vt),_()),e&2){let t=f();m(2),w(`values`,t.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function Ae(e,l){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-textfilter`,26),_(),v(3,`th`,17),A(4,` Type `),q(5,`ezui-table-selectfilter`,35),_(),v(6,`th`,17),A(7,` Timestamp `),q(8,`ezui-table-datefilter`,30),_(),v(9,`th`,17),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,31),_()),e&2){let t=f(2);m(5),w(`options`,t.filterOptions2)}}function We(e,l){if(e&1&&(v(0,`span`,36),A(1),_()),e&2){let t=l.$implicit;m(),Y(` `,t,` `)}}function qe(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),Pe$1(3,We,2,1,`span`,36,$t),_(),v(5,`td`,18),A(6),zt(7,`date`),_(),v(8,`td`,18),A(9),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),Fe$1(t.types),m(3),gt(rg(7,3,t.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),gt(t.active)}}function Ne(e,l){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),_(),v(2,`ezui-table`,25),X(3,Ae,12,1,`ng-template`,null,1,Vt)(5,qe,10,6,`ng-template`,null,2,Vt),_()),e&2){let t=f();m(2),w(`values`,t.filterData2)(`showClearFilters`,!0)}}function je(e,l){e&1&&(v(0,`th`,17),A(1,`ID`),_(),v(2,`th`,17),A(3,`Value 1`),_(),v(4,`th`,17),A(5,`Value 2`),_(),v(6,`th`,17),A(7,`Value 3`),_(),v(8,`th`,17),A(9,`Value 4`),_(),v(10,`th`,17),A(11,`Value 5`),_(),v(12,`th`,17),A(13,`Value 6`),_(),v(14,`th`,17),A(15,`Value 7`),_(),v(16,`th`,17),A(17,`Value 8`),_())}function Ye(e,l){if(e&1&&(v(0,`td`,18),A(1),_(),v(2,`td`,18),A(3),_(),v(4,`td`,18),A(5),_(),v(6,`td`,18),A(7),_(),v(8,`td`,18),A(9),_(),v(10,`td`,18),A(11),_(),v(12,`td`,18),A(13),_(),v(14,`td`,18),A(15),_(),v(16,`td`,18),A(17),_()),e&2){let t=l.$implicit;m(),gt(t.id),m(2),gt(t.value1),m(2),gt(t.value2),m(2),gt(t.value3),m(2),gt(t.value4),m(2),gt(t.value5),m(2),gt(t.value6),m(2),gt(t.value7),m(2),gt(t.value8)}}function $e(e,l){if(e&1&&(v(0,`ezui-table`,16),X(1,je,18,0,`ng-template`,null,1,Vt)(3,Ye,18,9,`ng-template`,null,2,Vt),_()),e&2)w(`values`,f().scrollData)}var P=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=O$1(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(l){alert(`Clicked on row `+l.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:new Date,active:!1}];scrollData=[{id:`abc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`1213`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`s`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`aa`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a22bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works with some very wide value like this one is`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5sbc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a56bc`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a51bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works with some very wide value like this one is`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`}];static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:33,vars:10,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`tableExpandedrow`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
			<ezui-table-datetimefilter column="timestamp"></ezui-table-datetimefilter>
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
		<td tuiTd>{{ item.timestamp | date: "dd/MM/yyyy" } }</td>
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
]`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`expandable`],[`colSpan`,`4`],[2,`margin`,`10px`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`]],template:function(t,g){t&1&&(v(0,`app-samplecontainer`,4),X(1,we,2,0,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,5),X(4,ve,5,1,`ng-template`,null,0,Vt),_(),v(6,`app-samplecontainer`,6),X(7,Te,5,2,`ng-template`,null,0,Vt),_(),v(9,`app-samplecontainer`,7),X(10,Ee,7,2,`ng-template`,null,0,Vt),_(),v(12,`app-samplecontainer`,8),X(13,De,5,2,`ng-template`,null,0,Vt),_(),v(15,`app-samplecontainer`,9),X(16,Me,7,2,`ng-template`,null,0,Vt),_(),v(18,`app-samplecontainer`,10),X(19,Ve,7,2,`ng-template`,null,0,Vt),_(),v(21,`app-samplecontainer`,11),X(22,Le,7,2,`ng-template`,null,0,Vt),_(),v(24,`app-samplecontainer`,12),X(25,Ue,7,3,`ng-template`,null,0,Vt),_(),v(27,`app-samplecontainer`,13),X(28,Ne,7,2,`ng-template`,null,0,Vt),_(),v(30,`app-samplecontainer`,14),X(31,$e,5,1,`ng-template`,null,0,Vt),_()),t&2&&(m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0),m(3),w(`enableTypescript`,!0))},dependencies:[Yt,Ct,hc,G,bO,FS,n5e,h,XVe,t5e,e5e,bo,KVe,JVe,hH],encapsulation:2})};function Ke(e,l){if(e&1){let t=L();v(0,`ezui-orderlist`,5),Ve$1(`valuesChange`,function(c){M(t);let y=f();return ze$1(y.values,c)||(y.values=c),N(c)}),_(),A(1),zt(2,`json`)}if(e&2){let t=f();Le$1(`values`,t.values),m(),Y(` `,rr(2,2,t.values),` `)}}function Je(e,l){e&1&&q(0,`ezui-orderlist`)}function Ge(e,l){if(e&1){let t=L();v(0,`ezui-orderlist`,6),Ve$1(`valuesChange`,function(c){M(t);let y=f();return ze$1(y.values,c)||(y.values=c),N(c)}),_()}if(e&2)Le$1(`values`,f().values),w(`disabled`,!0)}function Qe(e,l){if(e&1){let t=L();v(0,`ezui-orderlist`,7),Ve$1(`valuesChange`,function(c){M(t);let y=f();return ze$1(y.values,c)||(y.values=c),N(c)}),_(),A(1),zt(2,`json`)}if(e&2){let t=f();Le$1(`values`,t.values),w(`showButtons`,!0),m(),Y(` `,rr(2,3,t.values),` `)}}var O=class e{values=[{label:`item1`,icon:`list`},{label:`item2`,icon:`list`},{label:`item3`,icon:`list`},{label:`item4`,icon:`list`}];static ɵfac=function(t){return new(t||e)};static ɵcmp=k({type:e,selectors:[[`app-orderlist`]],hostAttrs:[1,`base-view`],decls:12,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,``],[`label`,`Empty`,`html`,``],[`label`,`Disabled`,`html`,``],[`label`,`Buttons`,`html`,``],[`optionLabel`,`label`,3,`valuesChange`,`values`],[`optionLabel`,`label`,3,`valuesChange`,`values`,`disabled`],[`optionLabel`,`label`,3,`valuesChange`,`values`,`showButtons`]],template:function(t,g){t&1&&(v(0,`app-samplecontainer`,1),X(1,Ke,3,4,`ng-template`,null,0,Vt),_(),v(3,`app-samplecontainer`,2),X(4,Je,1,0,`ng-template`,null,0,Vt),_(),v(6,`app-samplecontainer`,3),X(7,Ge,1,2,`ng-template`,null,0,Vt),_(),v(9,`app-samplecontainer`,4),X(10,Qe,3,5,`ng-template`,null,0,Vt),_())},dependencies:[Yt,Ct,G,qVe,mH],encapsulation:2})};var Lt=[{path:`markdowneditor`,component:F},{path:`tables`,component:P},{path:`iconselector`,component:C},{path:`showmoretext`,component:V},{path:`orderlist`,component:O}];export{Lt as default};