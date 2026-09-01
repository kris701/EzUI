import{$ as m,A as TLe,Ct as yt,D as Re$1,E as RA,F as Vt,K as f,L as Y,M as Um,O as Rt,P as Ve$1,Q as k,S as Q,U as cS,X as hLe,Z as ho,_ as N,at as sc,b as Pe$1,c as DLe,dt as v,et as mLe,f as ILe,g as MLe,gt as wt,h as M$1,i as C$1,it as qt,k as SLe,l as ELe,o as D,r as Be,rt as q,st as tU,t as A,v as O,wt as z,x as Pt,xt as y,y as Oe$1,yt as xLe}from"./main-M46CH3BF.js";import{t as h}from"./chunk-Cj7dCk_Y.js";import{t as G}from"./chunk-BPCw10oY.js";function te(e,m){e&1&&q(0,`ezui-iconselector`)}function ie(e,m$1){if(e&1){let a=z();v(0,`ezui-iconselector`,5),Pe$1(`selectedChange`,function(c){N(a);let f$1=f();return Re$1(f$1.binding,c)||(f$1.binding=c),k(c)}),y(),v(1,`span`),A(2),y()}if(e&2){let a=f();Oe$1(`selected`,a.binding),m(2),Y(`You have selected: "`,a.binding(),`"`)}}function ae(e,m){e&1&&q(0,`ezui-iconselector`,6),e&2&&C$1(`disabled`,!0)}function ne(e,m){e&1&&q(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var C=class e{binding=O(`circle`);static ɵfac=function(a){return new(a||e)};static ɵcmp=M$1({type:e,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(a,T){a&1&&(v(0,`app-samplecontainer`,1),Q(1,te,1,0,`ng-template`,null,0,Pt),y(),v(3,`app-samplecontainer`,2),Q(4,ie,3,2,`ng-template`,null,0,Pt),y(),v(6,`app-samplecontainer`,3),Q(7,ae,1,1,`ng-template`,null,0,Pt),y(),v(9,`app-samplecontainer`,4),Q(10,ne,3,0,`ng-template`,null,0,Pt),y()),a&2&&(m(3),C$1(`enableTypescript`,!0))},dependencies:[qt,wt,hLe,G],encapsulation:2})};function le(e,m){if(e&1){let a=z();v(0,`ezui-markdowneditor`,4),Pe$1(`valueChange`,function(c){N(a);let f$2=f();return Re$1(f$2.binding,c)||(f$2.binding=c),k(c)}),y()}if(e&2)Oe$1(`value`,f().binding)}function me(e,m){if(e&1&&q(0,`ezui-markdowneditor`,5),e&2)C$1(`value`,f().binding())(`disabled`,!0)}function re(e,m){if(e&1&&q(0,`ezui-markdowneditor`,6),e&2)C$1(`value`,f().binding())(`disabled`,!0)(`slim`,!0)}var R=class e{binding=O(`Text`);static ɵfac=function(a){return new(a||e)};static ɵcmp=M$1({type:e,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:11,vars:3,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Slim`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`],[3,`value`,`disabled`,`slim`]],template:function(a,T){a&1&&(v(0,`app-samplecontainer`,1),Q(1,le,1,1,`ng-template`,null,0,Pt),y(),v(3,`app-samplecontainer`,2),A(4,` > `),Q(5,me,1,2,`ng-template`,null,0,Pt),y(),v(7,`app-samplecontainer`,3),A(8,` > `),Q(9,re,1,3,`ng-template`,null,0,Pt),y()),a&2&&(C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(4),C$1(`enableTypescript`,!0))},dependencies:[qt,wt,mLe,G],encapsulation:2})};function pe(e,m){e&1&&q(0,`ezui-showmoretext`,2)}var M=class e{static ɵfac=function(a){return new(a||e)};static ɵcmp=M$1({type:e,selectors:[[`app-showmoretext`]],hostAttrs:[1,`base-view`],decls:3,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-showmoretext value="Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum."/>`],[`value`,`Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.`]],template:function(a,T){a&1&&(v(0,`app-samplecontainer`,1),Q(1,pe,1,0,`ng-template`,null,0,Pt),y())},dependencies:[qt,wt,SLe,G],encapsulation:2})};function se(e,m){e&1&&(v(0,`div`,15),q(1,`ezui-table`),y())}function de(e,m){e&1&&(v(0,`th`,17),A(1,`ID`),y(),v(2,`th`,17),A(3,`Value`),y(),v(4,`th`,17),A(5,`Description`),y())}function oe(e,m$2){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),A(3),y(),v(4,`td`,18),A(5),y()),e&2){let a=m$2.$implicit;m(),yt(a.id),m(2),yt(a.value),m(2),yt(a.desc)}}function ue(e,m){if(e&1&&(v(0,`ezui-table`,16),Q(1,de,6,0,`ng-template`,null,1,Pt)(3,oe,6,3,`ng-template`,null,2,Pt),y()),e&2)C$1(`values`,f().data)}function ce(e,m){e&1&&(v(0,`th`,17),A(1,`ID`),y(),v(2,`th`,17),A(3,`Value`),y(),v(4,`th`,17),A(5,`Description`),y())}function ye(e,m$3){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),A(3),y(),v(4,`td`,18),A(5),y()),e&2){let a=m$3.$implicit;m(),yt(a.id),m(2),yt(a.value),m(2),yt(a.desc)}}function we(e,m){if(e&1){let a=z();v(0,`ezui-table`,19),D(`onRowClick`,function(c){N(a);return k(f().rowClicked(c))}),Q(1,ce,6,0,`ng-template`,null,1,Pt)(3,ye,6,3,`ng-template`,null,2,Pt),y()}if(e&2)C$1(`values`,f().data)(`clickable`,!0)}function ge(e,m){e&1&&(v(0,`th`,17),A(1,`ID`),y(),v(2,`th`,17),A(3,`Value`),y(),v(4,`th`,17),A(5,`Description`),y())}function be(e,m$4){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),A(3),y(),v(4,`td`,18),A(5),y()),e&2){let a=m$4.$implicit;m(),yt(a.id),m(2),yt(a.value),m(2),yt(a.desc)}}function ve(e,m$5){if(e&1&&(v(0,`td`,21)(1,`span`,22),A(2),y()()),e&2){let a=m$5.$implicit;m(2),Y(`You expanded the row `,a.id,`!`)}}function fe(e,m){if(e&1&&(v(0,`ezui-table`,20),Q(1,ge,6,0,`ng-template`,null,1,Pt)(3,be,6,3,`ng-template`,null,2,Pt)(5,ve,3,1,`ng-template`,null,3,Pt),y()),e&2)C$1(`values`,f().data)(`expandable`,!0)}function Te(e,m){e&1&&(v(0,`th`,17),A(1,`ID`),y(),v(2,`th`,17),A(3,`Value`),y(),v(4,`th`,17),A(5,`Description`),y())}function xe(e,m$6){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),A(3),y(),v(4,`td`,18),A(5),y()),e&2){let a=m$6.$implicit;m(),yt(a.id),m(2),yt(a.value),m(2),yt(a.desc)}}function _e(e,m){if(e&1&&(v(0,`ezui-table`,23),Q(1,Te,6,0,`ng-template`,null,1,Pt)(3,xe,6,3,`ng-template`,null,2,Pt),y()),e&2){let a=f();C$1(`values`,a.longData)(`pageSize`,a.pageSize)}}function he(e,m){e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-sortable`,26),y(),v(3,`th`,17),A(4,` Value `),q(5,`ezui-table-sortable`,27),y(),v(6,`th`,17),A(7,` Description `),q(8,`ezui-table-sortable`,28),y())}function ke(e,m$7){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),A(3),y(),v(4,`td`,18),A(5),y()),e&2){let a=m$7.$implicit;m(),yt(a.id),m(2),yt(a.value),m(2),yt(a.desc)}}function Ee(e,m$8){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),y(),v(2,`ezui-table`,25),Q(3,he,9,0,`ng-template`,null,1,Pt)(5,ke,6,3,`ng-template`,null,2,Pt),y()),e&2){let a=f();m(2),C$1(`values`,a.data)(`showClearFilters`,!0)}}function De(e,m$9){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-textfilter`,26),y(),v(3,`th`,17),A(4,` Type `),q(5,`ezui-table-selectfilter`,29),y(),v(6,`th`,17),A(7,` Timestamp `),q(8,`ezui-table-datetimefilter`,30),y(),v(9,`th`,17),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,31),y()),e&2){let a=f(2);m(5),C$1(`options`,a.filterOptions)}}function ze(e,m$10){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18)(3,`span`,32),A(4),y()(),v(5,`td`,18),A(6),Rt(7,`date`),y(),v(8,`td`,18),A(9),y()),e&2){let a=m$10.$implicit;m(),yt(a.id),m(3),Y(` `,a.type,` `),m(2),yt(Um(7,4,a.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),yt(a.active)}}function Se(e,m$11){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),y(),v(2,`ezui-table`,25),Q(3,De,12,1,`ng-template`,null,1,Pt)(5,ze,10,7,`ng-template`,null,2,Pt),y()),e&2){let a=f();m(2),C$1(`values`,a.filterData)(`showClearFilters`,!0)}}function Ie(e,m$12){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-sortable`,26)(3,`ezui-table-textfilter`,26),y(),v(4,`th`,17),A(5,` Type `),q(6,`ezui-table-sortable`,33)(7,`ezui-table-selectfilter`,29),y(),v(8,`th`,17),A(9,` Timestamp `),q(10,`ezui-table-sortable`,30)(11,`ezui-table-datefilter`,30),y()),e&2){let a=f(2);m(7),C$1(`options`,a.filterOptions)}}function Ce(e,m$13){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18)(3,`span`,32),A(4),y()(),v(5,`td`,18),A(6),Rt(7,`date`),y()),e&2){let a=m$13.$implicit;m(),yt(a.id),m(3),Y(` `,a.type,` `),m(2),yt(Um(7,3,a.timestamp,`dd/MM/yyyy`))}}function Re(e,m$14){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),y(),v(2,`ezui-table`,25),Q(3,Ie,12,1,`ng-template`,null,1,Pt)(5,Ce,8,6,`ng-template`,null,2,Pt),y()),e&2){let a=f();m(2),C$1(`values`,a.filterData)(`showClearFilters`,!0)}}function Me(e,m$15){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-sortable`,26)(3,`ezui-table-textfilter`,26),y(),v(4,`th`,17),A(5,` Type `),q(6,`ezui-table-sortable`,33)(7,`ezui-table-selectfilter`,29),y(),v(8,`th`,17),A(9,` Timestamp `),q(10,`ezui-table-sortable`,30)(11,`ezui-table-datefilter`,30),y()),e&2){let a=f(2);m(7),C$1(`options`,a.longFilterOptions)}}function Fe(e,m$16){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18)(3,`span`,32),A(4),y()(),v(5,`td`,18),A(6),Rt(7,`date`),y()),e&2){let a=m$16.$implicit;m(),yt(a.id),m(3),Y(` `,a.type,` `),m(2),yt(Um(7,3,a.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Ve(e,m$17){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),y(),v(2,`ezui-table`,34),Q(3,Me,12,1,`ng-template`,null,1,Pt)(5,Fe,8,6,`ng-template`,null,2,Pt),y()),e&2){let a=f();m(2),C$1(`values`,a.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function He(e,m$18){if(e&1&&(v(0,`th`,17),A(1,` ID `),q(2,`ezui-table-textfilter`,26),y(),v(3,`th`,17),A(4,` Type `),q(5,`ezui-table-selectfilter`,35),y(),v(6,`th`,17),A(7,` Timestamp `),q(8,`ezui-table-datefilter`,30),y(),v(9,`th`,17),A(10,` Is Active `),q(11,`ezui-table-booleanfilter`,31),y()),e&2){let a=f(2);m(5),C$1(`options`,a.filterOptions2)}}function Pe(e,m$19){if(e&1&&(v(0,`span`,36),A(1),y()),e&2){let a=m$19.$implicit;m(),Y(` `,a,` `)}}function Ue(e,m$20){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),Ve$1(3,Pe,2,1,`span`,36,Vt),y(),v(5,`td`,18),A(6),Rt(7,`date`),y(),v(8,`td`,18),A(9),y()),e&2){let a=m$20.$implicit;m(),yt(a.id),m(2),Be(a.types),m(3),yt(Um(7,3,a.timestamp,`dd/MM/yyyy HH:mm:ss`)),m(3),yt(a.active)}}function Oe(e,m$21){if(e&1&&(v(0,`span`,24),A(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),y(),v(2,`ezui-table`,25),Q(3,He,12,1,`ng-template`,null,1,Pt)(5,Ue,10,6,`ng-template`,null,2,Pt),y()),e&2){let a=f();m(2),C$1(`values`,a.filterData2)(`showClearFilters`,!0)}}function qe(e,m){e&1&&(v(0,`th`,17),A(1,`ID`),y(),v(2,`th`,17),A(3,`Value 1`),y(),v(4,`th`,17),A(5,`Value 2`),y(),v(6,`th`,17),A(7,`Value 3`),y(),v(8,`th`,17),A(9,`Value 4`),y(),v(10,`th`,17),A(11,`Value 5`),y(),v(12,`th`,17),A(13,`Value 6`),y(),v(14,`th`,17),A(15,`Value 7`),y(),v(16,`th`,17),A(17,`Value 8`),y())}function Ae(e,m$22){if(e&1&&(v(0,`td`,18),A(1),y(),v(2,`td`,18),A(3),y(),v(4,`td`,18),A(5),y(),v(6,`td`,18),A(7),y(),v(8,`td`,18),A(9),y(),v(10,`td`,18),A(11),y(),v(12,`td`,18),A(13),y(),v(14,`td`,18),A(15),y(),v(16,`td`,18),A(17),y()),e&2){let a=m$22.$implicit;m(),yt(a.id),m(2),yt(a.value1),m(2),yt(a.value2),m(2),yt(a.value3),m(2),yt(a.value4),m(2),yt(a.value5),m(2),yt(a.value6),m(2),yt(a.value7),m(2),yt(a.value8)}}function Ne(e,m){if(e&1&&(v(0,`ezui-table`,16),Q(1,qe,18,0,`ng-template`,null,1,Pt)(3,Ae,18,9,`ng-template`,null,2,Pt),y()),e&2)C$1(`values`,f().scrollData)}var F=class e{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=O(10);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date},{id:`123`,type:`Type 1`,timestamp:new Date},{id:`55g`,type:`Type 2`,timestamp:new Date},{id:`dfg`,type:`Type 3`,timestamp:new Date}];rowClicked(m){alert(`Clicked on row `+m.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:new Date,active:!1}];scrollData=[{id:`abc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`1213`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`s`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`aa`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a22bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works with some very wide value like this one is`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5sbc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a56bc`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a51bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works with some very wide value like this one is`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`}];static ɵfac=function(a){return new(a||e)};static ɵcmp=M$1({type:e,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:33,vars:10,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`tableExpandedrow`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
]`,3,`enableTypescript`],[2,`height`,`300px`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`values`,`expandable`],[`colSpan`,`4`],[2,`margin`,`10px`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`]],template:function(a,T){a&1&&(v(0,`app-samplecontainer`,4),Q(1,se,2,0,`ng-template`,null,0,Pt),y(),v(3,`app-samplecontainer`,5),Q(4,ue,5,1,`ng-template`,null,0,Pt),y(),v(6,`app-samplecontainer`,6),Q(7,we,5,2,`ng-template`,null,0,Pt),y(),v(9,`app-samplecontainer`,7),Q(10,fe,7,2,`ng-template`,null,0,Pt),y(),v(12,`app-samplecontainer`,8),Q(13,_e,5,2,`ng-template`,null,0,Pt),y(),v(15,`app-samplecontainer`,9),Q(16,Ee,7,2,`ng-template`,null,0,Pt),y(),v(18,`app-samplecontainer`,10),Q(19,Se,7,2,`ng-template`,null,0,Pt),y(),v(21,`app-samplecontainer`,11),Q(22,Re,7,2,`ng-template`,null,0,Pt),y(),v(24,`app-samplecontainer`,12),Q(25,Ve,7,3,`ng-template`,null,0,Pt),y(),v(27,`app-samplecontainer`,13),Q(28,Oe,7,2,`ng-template`,null,0,Pt),y(),v(30,`app-samplecontainer`,14),Q(31,Ne,5,1,`ng-template`,null,0,Pt),y()),a&2&&(m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0),m(3),C$1(`enableTypescript`,!0))},dependencies:[qt,wt,sc,G,RA,cS,MLe,h,DLe,ELe,ILe,ho,TLe,xLe,tU],encapsulation:2})};var xt=[{path:`markdowneditor`,component:R},{path:`tables`,component:F},{path:`iconselector`,component:C},{path:`showmoretext`,component:M}];export{xt as default};