import{A as Pe$1,B as St,D as O,Dt as ze$1,Et as zVe,G as X,H as Ve$1,I as RVe,K as Xe$1,O as OVe,Ot as zt,Q as bVe,R as SVe,S as Le$1,St as wVe,T as MVe,U as Vt,W as WS,Y as _c,_ as Kt,c as EU,d as Fe$1,dt as q,ft as qr,ht as sg,i as C,k as PVe,lt as m,m as IU,mt as rr,n as AO,nt as f,ot as jt,q as Z,r as AVe,rt as g,s as E,st as k,t as A,tt as ct,u as FVe,v as L$1,vt as v,w as M,x as LVe,xt as w}from"./main-PEMYALZD.js";import{t as h}from"./chunk-CReHwvnH.js";import{t as G}from"./chunk-CTABr6Mb.js";function se(t,l){t&1&&q(0,`ezui-iconselector`)}function oe(t,l){if(t&1){let e=L$1();g(0,`ezui-iconselector`,5),Ve$1(`selectedChange`,function(c){E(e);let v=f();return ze$1(v.binding,c)||(v.binding=c),M(c)}),v(),g(1,`span`),A(2),v()}if(t&2){let e=f();Le$1(`selected`,e.binding),m(2),X(`You have selected: "`,e.binding(),`"`)}}function me(t,l){t&1&&q(0,`ezui-iconselector`,6),t&2&&C(`disabled`,!0)}function pe(t,l){t&1&&q(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var V=class t{binding=O(`circle`);static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(e,w){e&1&&(g(0,`app-samplecontainer`,1),Z(1,se,1,0,`ng-template`,null,0,Vt),v(),g(3,`app-samplecontainer`,2),Z(4,oe,3,2,`ng-template`,null,0,Vt),v(),g(6,`app-samplecontainer`,3),Z(7,me,1,1,`ng-template`,null,0,Vt),v(),g(9,`app-samplecontainer`,4),Z(10,pe,3,0,`ng-template`,null,0,Vt),v()),e&2&&(m(3),C(`enableTypescript`,!0))},dependencies:[Kt,St,wVe,G],encapsulation:2})};function ue(t,l){if(t&1){let e=L$1();g(0,`ezui-markdowneditor`,5),Ve$1(`valueChange`,function(c){E(e);let v=f();return ze$1(v.binding,c)||(v.binding=c),M(c)}),v()}if(t&2)Le$1(`value`,f().binding)}function de(t,l){if(t&1&&q(0,`ezui-markdowneditor`,6),t&2)C(`value`,f().binding())(`disabled`,!0)}function ce(t,l){if(t&1&&q(0,`ezui-markdowneditor`,7),t&2)C(`value`,f().binding())(`disabled`,!0)(`slim`,!0)}function we(t,l){if(t&1&&q(0,`ezui-markdowneditor`,8),t&2){let e=f();C(`value`,e.binding())(`additionalMenuBarItems`,e.additionals)}}var P=class t{binding=O(`Text`);additionals=[{label:`Stuff a`,command:(l,e)=>{alert(`stuff a`)}},{label:`Stuff b`,command:(l,e)=>{alert(`stuff b`)}}];static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:15,vars:4,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Slim`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Additional Menu Items`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`],[3,`value`,`disabled`,`slim`],[3,`value`,`additionalMenuBarItems`]],template:function(e,w){e&1&&(g(0,`app-samplecontainer`,1),Z(1,ue,1,1,`ng-template`,null,0,Vt),v(),g(3,`app-samplecontainer`,2),A(4,` > `),Z(5,de,1,2,`ng-template`,null,0,Vt),v(),g(7,`app-samplecontainer`,3),A(8,` > `),Z(9,ce,1,3,`ng-template`,null,0,Vt),v(),g(11,`app-samplecontainer`,4),A(12,` > `),Z(13,we,1,2,`ng-template`,null,0,Vt),v()),e&2&&(C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(4),C(`enableTypescript`,!0),m(4),C(`enableTypescript`,!0))},dependencies:[Kt,St,SVe,G],encapsulation:2})};function ve(t,l){t&1&&q(0,`ezui-showmoretext`,2)}var L=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-showmoretext`]],hostAttrs:[1,`base-view`],decls:3,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-showmoretext value="Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum."/>`],[`value`,`Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.`]],template:function(e,w){e&1&&(g(0,`app-samplecontainer`,1),Z(1,ve,1,0,`ng-template`,null,0,Vt),v())},dependencies:[Kt,St,AVe,G],encapsulation:2})};function be(t,l){t&1&&(g(0,`div`,18),q(1,`ezui-table`),v())}function ge(t,l){t&1&&(g(0,`th`,20),A(1,`ID`),v(),g(2,`th`,20),A(3,`Value`),v(),g(4,`th`,20),A(5,`Description`),v())}function fe(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value),m(2),ct(e.desc)}}function _e(t,l){if(t&1&&(g(0,`ezui-table`,19),Z(1,ge,6,0,`ng-template`,null,1,Vt)(3,fe,6,3,`ng-template`,null,2,Vt),v()),t&2)C(`values`,f().data)}function xe(t,l){t&1&&(g(0,`th`,20),A(1,`ID`),v(),g(2,`th`,20),A(3,`Value`),v(),g(4,`th`,20),A(5,`Description`),v())}function ke(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value),m(2),ct(e.desc)}}function Te(t,l){if(t&1){let e=L$1();g(0,`ezui-table`,22),w(`onRowClick`,function(c){E(e);return M(f().rowClicked(c))}),Z(1,xe,6,0,`ng-template`,null,1,Vt)(3,ke,6,3,`ng-template`,null,2,Vt),v()}if(t&2)C(`values`,f().data)(`clickable`,!0)}function he(t,l){t&1&&(g(0,`th`,20),A(1,`ID`),v(),g(2,`th`,20),A(3,`Value`),v(),g(4,`th`,20),A(5,`Description`),v())}function Ee(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value),m(2),ct(e.desc)}}function Se(t,l){if(t&1){let e=L$1();g(0,`ezui-table`,23),w(`onRowClick`,function(c){E(e);return M(f().rowClicked(c))}),Z(1,he,6,0,`ng-template`,null,1,Vt)(3,Ee,6,3,`ng-template`,null,2,Vt),v()}if(t&2){let e=f();C(`values`,e.data)(`clickable`,!0)(`showContextMenu`,!0)(`contextMenuItems`,e.contextMenu)}}function De(t,l){t&1&&(g(0,`th`,20),A(1,`ID`),v(),g(2,`th`,20),A(3,`Value`),v(),g(4,`th`,20),A(5,`Description`),v())}function ze(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value),m(2),ct(e.desc)}}function Ie(t,l){if(t&1&&(g(0,`td`,25)(1,`span`,26),A(2),v()()),t&2){let e=l.$implicit;m(2),X(`You expanded the row `,e.id,`!`)}}function Ce(t,l){if(t&1&&(g(0,`ezui-table`,24),Z(1,De,6,0,`ng-template`,null,1,Vt)(3,ze,6,3,`ng-template`,null,2,Vt)(5,Ie,3,1,`ng-template`,null,3,Vt),v()),t&2)C(`values`,f().data)(`expandable`,!0)}function Me(t,l){t&1&&(g(0,`th`,20),A(1,`ID`),v(),g(2,`th`,20),A(3,`Value`),v(),g(4,`th`,20),A(5,`Description`),v())}function Re(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value),m(2),ct(e.desc)}}function Ve(t,l){if(t&1&&(g(0,`ezui-table`,27),Z(1,Me,6,0,`ng-template`,null,1,Vt)(3,Re,6,3,`ng-template`,null,2,Vt),v()),t&2){let e=f();C(`values`,e.longData)(`pageSize`,e.pageSize)}}function Fe(t,l){t&1&&(g(0,`th`,20),A(1,` ID `),q(2,`ezui-table-sortable`,30),v(),g(3,`th`,20),A(4,` Value `),q(5,`ezui-table-sortable`,31),v(),g(6,`th`,20),A(7,` Description `),q(8,`ezui-table-sortable`,32),v())}function Oe(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value),m(2),ct(e.desc)}}function Pe(t,l){if(t&1&&(g(0,`span`,28),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),v(),g(2,`ezui-table`,29),Z(3,Fe,9,0,`ng-template`,null,1,Vt)(5,Oe,6,3,`ng-template`,null,2,Vt),v()),t&2){let e=f();m(2),C(`values`,e.data)(`showClearFilters`,!0)}}function Le(t,l){if(t&1&&(g(0,`th`,20),A(1,` ID `),q(2,`ezui-table-textfilter`,30),v(),g(3,`th`,20),A(4,` Type `),q(5,`ezui-table-selectfilter`,33),v(),g(6,`th`,20),A(7,` Timestamp `),q(8,`ezui-table-datetimefilter`,34),v(),g(9,`th`,20),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,35),v()),t&2){let e=f(2);m(5),C(`options`,e.filterOptions)}}function Be(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21)(3,`span`,36),A(4),v()(),g(5,`td`,21),A(6),zt(7,`date`),v(),g(8,`td`,21),A(9),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(3),X(` `,e.type,` `),m(2),ct(sg(7,4,e.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),ct(e.active)}}function He(t,l){if(t&1&&(g(0,`span`,28),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),v(),g(2,`ezui-table`,29),Z(3,Le,12,1,`ng-template`,null,1,Vt)(5,Be,10,7,`ng-template`,null,2,Vt),v()),t&2){let e=f();m(2),C(`values`,e.filterData)(`showClearFilters`,!0)}}function Ue(t,l){if(t&1&&(g(0,`th`,20),A(1,` ID `),q(2,`ezui-table-textfilter`,30),v(),g(3,`th`,20),A(4,` Type `),q(5,`ezui-table-selectfilter`,37),v(),g(6,`th`,20),A(7,` Timestamp `),q(8,`ezui-table-datetimefilter`,34),v(),g(9,`th`,20),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,35),v()),t&2){let e=f(2);m(5),C(`options`,e.filterOptions)(`appearanceMap`,e.appearanceMap)}}function Ae(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21)(3,`span`,38),A(4),v()(),g(5,`td`,21),A(6),zt(7,`date`),v(),g(8,`td`,21),A(9),v()),t&2){let e=l.$implicit;m(),ct(e.id);let w=f(2).appearanceMap.get(e.type);m(2),C(`appearance`,w||``),m(),X(` `,e.type,` `),m(2),ct(sg(7,5,e.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),ct(e.active)}}function We(t,l){if(t&1&&(g(0,`span`,28),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),v(),g(2,`ezui-table`,29),Z(3,Ue,12,2,`ng-template`,null,1,Vt)(5,Ae,10,8,`ng-template`,null,2,Vt),v()),t&2){let e=f();m(2),C(`values`,e.filterData)(`showClearFilters`,!0)}}function qe(t,l){if(t&1&&(g(0,`th`,20),A(1,` ID `),q(2,`ezui-table-sortable`,30)(3,`ezui-table-textfilter`,30),v(),g(4,`th`,20),A(5,` Type `),q(6,`ezui-table-sortable`,39)(7,`ezui-table-selectfilter`,33),v(),g(8,`th`,20),A(9,` Timestamp `),q(10,`ezui-table-sortable`,34)(11,`ezui-table-datefilter`,34),v()),t&2){let e=f(2);m(7),C(`options`,e.filterOptions)}}function Ne(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21)(3,`span`,36),A(4),v()(),g(5,`td`,21),A(6),zt(7,`date`),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(3),X(` `,e.type,` `),m(2),ct(sg(7,3,e.timestamp,`dd/MM/yyyy`))}}function je(t,l){if(t&1&&(g(0,`span`,28),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),v(),g(2,`ezui-table`,29),Z(3,qe,12,1,`ng-template`,null,1,Vt)(5,Ne,8,6,`ng-template`,null,2,Vt),v()),t&2){let e=f();m(2),C(`values`,e.filterData)(`showClearFilters`,!0)}}function $e(t,l){if(t&1&&(g(0,`th`,20),A(1,` ID `),q(2,`ezui-table-sortable`,30)(3,`ezui-table-textfilter`,30),v(),g(4,`th`,20),A(5,` Type `),q(6,`ezui-table-sortable`,39)(7,`ezui-table-selectfilter`,33),v(),g(8,`th`,20),A(9,` Timestamp `),q(10,`ezui-table-sortable`,34)(11,`ezui-table-datefilter`,34),v()),t&2){let e=f(2);m(7),C(`options`,e.longFilterOptions)}}function Ye(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21)(3,`span`,36),A(4),v()(),g(5,`td`,21),A(6),zt(7,`date`),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(3),X(` `,e.type,` `),m(2),ct(sg(7,3,e.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ke(t,l){if(t&1&&(g(0,`span`,28),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),v(),g(2,`ezui-table`,40),Z(3,$e,12,1,`ng-template`,null,1,Vt)(5,Ye,8,6,`ng-template`,null,2,Vt),v()),t&2){let e=f();m(2),C(`values`,e.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function Je(t,l){if(t&1&&(g(0,`th`,20),A(1,` ID `),q(2,`ezui-table-textfilter`,30),v(),g(3,`th`,20),A(4,` Type `),q(5,`ezui-table-selectfilter`,41),v(),g(6,`th`,20),A(7,` Timestamp `),q(8,`ezui-table-datefilter`,34),v(),g(9,`th`,20),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,35),v()),t&2){let e=f(2);m(5),C(`options`,e.filterOptions2)(`appearanceMap`,e.appearanceMap2)}}function Ge(t,l){if(t&1&&(g(0,`span`,42),A(1),v()),t&2){let e=l.$implicit;C(`appearance`,f(3).appearanceMap2.get(e)||``),m(),X(` `,e,` `)}}function Qe(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),Pe$1(3,Ge,2,2,`span`,42,jt),v(),g(5,`td`,21),A(6),zt(7,`date`),v(),g(8,`td`,21),A(9),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),Fe$1(e.types),m(3),ct(sg(7,3,e.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),ct(e.active)}}function Xe(t,l){if(t&1&&(g(0,`span`,28),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),v(),g(2,`ezui-table`,29),Z(3,Je,12,2,`ng-template`,null,1,Vt)(5,Qe,10,6,`ng-template`,null,2,Vt),v()),t&2){let e=f();m(2),C(`values`,e.filterData2)(`showClearFilters`,!0)}}function Ze(t,l){t&1&&(g(0,`th`,20),A(1,`ID`),v(),g(2,`th`,20),A(3,`Value 1`),v(),g(4,`th`,20),A(5,`Value 2`),v(),g(6,`th`,20),A(7,`Value 3`),v(),g(8,`th`,20),A(9,`Value 4`),v(),g(10,`th`,20),A(11,`Value 5`),v(),g(12,`th`,20),A(13,`Value 6`),v(),g(14,`th`,20),A(15,`Value 7`),v(),g(16,`th`,20),A(17,`Value 8`),v())}function et(t,l){if(t&1&&(g(0,`td`,21),A(1),v(),g(2,`td`,21),A(3),v(),g(4,`td`,21),A(5),v(),g(6,`td`,21),A(7),v(),g(8,`td`,21),A(9),v(),g(10,`td`,21),A(11),v(),g(12,`td`,21),A(13),v(),g(14,`td`,21),A(15),v(),g(16,`td`,21),A(17),v()),t&2){let e=l.$implicit;m(),ct(e.id),m(2),ct(e.value1),m(2),ct(e.value2),m(2),ct(e.value3),m(2),ct(e.value4),m(2),ct(e.value5),m(2),ct(e.value6),m(2),ct(e.value7),m(2),ct(e.value8)}}function tt(t,l){if(t&1&&(g(0,`div`,45)(1,`h1`),A(2,`Table`),v(),g(3,`span`),A(4,`Sub title`),v(),g(5,`ezui-table`,46),Z(6,Ze,18,0,`ng-template`,null,1,Vt)(8,et,18,9,`ng-template`,null,2,Vt),v(),g(10,`span`),A(11,`Sub sub title`),v()()),t&2){let e=f(2);m(5),C(`values`,e.scrollData)(`pageSize`,e.pageSize)(`showRefresh`,!0)}}function at(t,l){if(t&1){let e=L$1();g(0,`span`,28),A(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),v(),g(2,`button`,43),w(`click`,function(){E(e);return M(f().showDialog.set(!0))}),A(3,` Open `),v(),g(4,`ezui-dialog`,44),Z(5,tt,12,3,`ng-template`,null,4,Vt),v()}if(t&2){let e=f();m(4),C(`showDialog`,e.showDialog)}}var B=class t{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];contextMenu=[{label:`opt 1`,command:(l,e)=>alert(l.id+` opt 1`)},{label:`opt 2`,command:(l,e)=>alert(l.id+` opt 2`)},{label:`opt 3`,command:(l,e)=>alert(l.id+` opt 3`)}];pageSize=O(20);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(l){alert(`Clicked on row `+l.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:new Date,active:!1}];appearanceMap2=new Map([[`tp1`,`positive`],[`tp2`,`negative`],[`tp3`,`info`]]);scrollData=[{id:`abc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`1213`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`s`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`aa`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a22bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works with some very wide value like this one is`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5sbc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a56bc`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a51bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works with some very wide value like this one is`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`}];appearanceMap=new Map([[`Type 1`,`positive`],[`Type 2`,`negative`],[`Type 3`,`info`]]);showDialog=O(!1);static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:39,vars:12,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`tableExpandedrow`,``],[`content`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
}`,3,`enableTypescript`],[`label`,`Context Menu`,`html`,`<ezui-table [values]="data" [clickable]="true" (onRowClick)="rowClicked($event)" [showContextMenu]="true" [contextMenuItems]="contextMenu">
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

contextMenu : PopoutMenuItem[] = [
	{ label: "opt 1", command: (s,i) => alert(s.id + " opt 1")} as PopoutMenuItem,
	{ label: "opt 2", command: (s,i) => alert(s.id + " opt 2")} as PopoutMenuItem,
	{ label: "opt 3", command: (s,i) => alert(s.id + " opt 3")} as PopoutMenuItem,
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
]`,3,`enableTypescript`],[`label`,`Filtering (Appearance Map)`,`html`,`<ezui-table [values]="filterData" [showClearFilters]="true">
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
}`,3,`enableTypescript`],[`label`,`In Dialog`,`html`,`<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog [showDialog]="showDialog">
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>`,`ts`,`showDialog = signal<boolean>(false);`,3,`enableTypescript`],[2,`height`,`300px`,`display`,`flex`,`flex-direction`,`column`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`onRowClick`,`values`,`clickable`,`showContextMenu`,`contextMenuItems`],[3,`values`,`expandable`],[`colSpan`,`4`],[2,`margin`,`10px`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`,3,`options`,`appearanceMap`],[`size`,`xs`,`tuiChip`,``,3,`appearance`],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`,`appearanceMap`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`,3,`appearance`],[`tuiButton`,``,3,`click`],[`size`,`l`,3,`showDialog`],[2,`display`,`flex`,`flex-direction`,`column`,`margin`,`5px`,`height`,`80vh`],[3,`values`,`pageSize`,`showRefresh`]],template:function(e,w){e&1&&(g(0,`app-samplecontainer`,5),Z(1,be,2,0,`ng-template`,null,0,Vt),v(),g(3,`app-samplecontainer`,6),Z(4,_e,5,1,`ng-template`,null,0,Vt),v(),g(6,`app-samplecontainer`,7),Z(7,Te,5,2,`ng-template`,null,0,Vt),v(),g(9,`app-samplecontainer`,8),Z(10,Se,5,4,`ng-template`,null,0,Vt),v(),g(12,`app-samplecontainer`,9),Z(13,Ce,7,2,`ng-template`,null,0,Vt),v(),g(15,`app-samplecontainer`,10),Z(16,Ve,5,2,`ng-template`,null,0,Vt),v(),g(18,`app-samplecontainer`,11),Z(19,Pe,7,2,`ng-template`,null,0,Vt),v(),g(21,`app-samplecontainer`,12),Z(22,He,7,2,`ng-template`,null,0,Vt),v(),g(24,`app-samplecontainer`,13),Z(25,We,7,2,`ng-template`,null,0,Vt),v(),g(27,`app-samplecontainer`,14),Z(28,je,7,2,`ng-template`,null,0,Vt),v(),g(30,`app-samplecontainer`,15),Z(31,Ke,7,3,`ng-template`,null,0,Vt),v(),g(33,`app-samplecontainer`,16),Z(34,Xe,7,2,`ng-template`,null,0,Vt),v(),g(36,`app-samplecontainer`,17),Z(37,at,7,1,`ng-template`,null,0,Vt),v()),e&2&&(m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0),m(3),C(`enableTypescript`,!0))},dependencies:[Kt,St,_c,G,AO,WS,zVe,h,RVe,LVe,FVe,qr,OVe,PVe,bVe,Xe$1,IU],encapsulation:2})};function it(t,l){if(t&1){let e=L$1();g(0,`ezui-orderlist`,8),Ve$1(`valuesChange`,function(c){E(e);let v=f();return ze$1(v.values,c)||(v.values=c),M(c)}),v(),A(1),zt(2,`json`)}if(t&2){let e=f();Le$1(`values`,e.values),m(),X(` `,rr(2,2,e.values),` `)}}function nt(t,l){t&1&&q(0,`ezui-orderlist`)}function lt(t,l){if(t&1){let e=L$1();g(0,`ezui-orderlist`,9),Ve$1(`valuesChange`,function(c){E(e);let v=f();return ze$1(v.values,c)||(v.values=c),M(c)}),v()}if(t&2)Le$1(`values`,f().values),C(`disabled`,!0)}function rt(t,l){if(t&1){let e=L$1();g(0,`ezui-orderlist`,10),Ve$1(`valuesChange`,function(c){E(e);let v=f();return ze$1(v.values,c)||(v.values=c),M(c)}),v(),A(1),zt(2,`json`)}if(t&2){let e=f();Le$1(`values`,e.values),C(`showButtons`,!0),m(),X(` `,rr(2,3,e.values),` `)}}function st(t,l){if(t&1&&(g(0,`div`,16)(1,`h3`),A(2),v(),g(3,`span`),A(4),v(),g(5,`span`),A(6),v()()),t&2){let e=l.$implicit,w=l.index;m(2),ct(e.label),m(2),ct(e.label),m(2),ct(w)}}function ot(t,l){if(t&1){let e=L$1();g(0,`div`,14)(1,`h1`),A(2,`Order List`),v(),g(3,`ezui-orderlist`,15),Ve$1(`valuesChange`,function(c){E(e);let v=f(2);return ze$1(v.values2,c)||(v.values2=c),M(c)}),Z(4,st,7,3,`ng-template`,null,2,Vt),v()()}if(t&2){let e=f(2);m(3),Le$1(`values`,e.values2)}}function mt(t,l){if(t&1){let e=L$1();g(0,`span`,11),A(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),v(),g(2,`button`,12),w(`click`,function(){E(e);return M(f().showDialog.set(!0))}),A(3,` Open `),v(),g(4,`ezui-dialog`,13),Z(5,ot,6,1,`ng-template`,null,1,Vt),v()}if(t&2){let e=f();m(4),C(`showDialog`,e.showDialog)}}var H=class t{values=[{label:`item1`,icon:`list`},{label:`item2`,icon:`list`},{label:`item3`,icon:`list`},{label:`item4`,icon:`list`}];showDialog=O(!1);values2=[{label:`item1`,icon:`list`},{label:`item2`,icon:`list`},{label:`item3`,icon:`list`},{label:`item4`,icon:`list`},{label:`item5`,icon:`list`},{label:`item6`,icon:`list`},{label:`item7`,icon:`list`},{label:`item8`,icon:`list`},{label:`item9`,icon:`list`},{label:`item10`,icon:`list`},{label:`item11`,icon:`list`},{label:`item12`,icon:`list`},{label:`item13`,icon:`list`},{label:`item14`,icon:`list`},{label:`item15`,icon:`list`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=k({type:t,selectors:[[`app-orderlist`]],hostAttrs:[1,`base-view`],decls:15,vars:1,consts:[[`preview`,``],[`content`,``],[`itemTemplate`,``],[`label`,`Simple`,`html`,``],[`label`,`Empty`,`html`,``],[`label`,`Disabled`,`html`,``],[`label`,`Buttons`,`html`,``],[`label`,`In Dialog`,`html`,`<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog [showDialog]="showDialog">
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>`,`ts`,`showDialog = signal<boolean>(false);`,3,`enableTypescript`],[`optionLabel`,`label`,3,`valuesChange`,`values`],[`optionLabel`,`label`,3,`valuesChange`,`values`,`disabled`],[`optionLabel`,`label`,3,`valuesChange`,`values`,`showButtons`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[2,`height`,`80vh`,`overflow`,`auto`],[3,`valuesChange`,`values`],[2,`display`,`flex`,`flex-direction`,`column`]],template:function(e,w){e&1&&(g(0,`app-samplecontainer`,3),Z(1,it,3,4,`ng-template`,null,0,Vt),v(),g(3,`app-samplecontainer`,4),Z(4,nt,1,0,`ng-template`,null,0,Vt),v(),g(6,`app-samplecontainer`,5),Z(7,lt,1,2,`ng-template`,null,0,Vt),v(),g(9,`app-samplecontainer`,6),Z(10,rt,3,5,`ng-template`,null,0,Vt),v(),g(12,`app-samplecontainer`,7),Z(13,mt,7,1,`ng-template`,null,0,Vt),v()),e&2&&(m(12),C(`enableTypescript`,!0))},dependencies:[Kt,St,G,MVe,bVe,Xe$1,EU],encapsulation:2})};var ea=[{path:`markdowneditor`,component:P},{path:`tables`,component:B},{path:`iconselector`,component:V},{path:`showmoretext`,component:L},{path:`orderlist`,component:H}];export{ea as default};