import{B as S,Ct as wg,D as Kt,Dt as yx,Et as yr,F as Oze,H as T,J as We$1,L as Qt,Ot as z,P as O$1,Q as Yze,R,S as Hze,St as vt$1,V as SH,W as Ue$1,X,Y as Wze,_ as F,_t as qt,a as Aze,b as Gt,bt as st$1,dt as jze,et as Zze,f as D,h as Du,i as A,j as Mze,lt as jR,m as Dt,nt as b,o as B$1,p as DH,q as Vze,r as $ze,s as Be$1,st as fo,tt as _,u as C,ut as je$1,vt as qze,x as Gze,xt as te,y as Ge$1,yt as re}from"./main-YSFT43XM.js";import{t as y}from"./chunk-CWsJjqfc.js";import{t as G}from"./chunk-Dd2dMboa.js";function me(t,l){t&1&&X(0,`ezui-iconselector`)}function pe(t,l){if(t&1){let e=B$1();C(0,`ezui-iconselector`,5),Ge$1(`selectedChange`,function(c){O$1(e);let v=b();return je$1(v.binding,c)||(v.binding=c),A(c)}),T(),C(1,`span`),z(2),T()}if(t&2){let e=b();We$1(`selected`,e.binding),_(2),re(`You have selected: "`,e.binding(),`"`)}}function ue(t,l){t&1&&X(0,`ezui-iconselector`,6),t&2&&S(`disabled`,!0)}function de(t,l){t&1&&X(0,`ezui-iconselector`,7)(1,`ezui-iconselector`,8)(2,`ezui-iconselector`,9)}var V=class t{binding=F(`circle`);static ɵfac=function(e){return new(e||t)};static ɵcmp=R({type:t,selectors:[[`app-icon-selector`]],hostAttrs:[1,`base-view`],decls:12,vars:1,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-EzUIIconSelector />`],[`label`,`Binding`,`html`,`<ezui-EzUIIconSelector [(selected)]="binding"/>`,`ts`,`binding = signal<string>("circle");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-EzUIIconSelector [disabled]="true"/>`],[`label`,`Sizes`,`html`,`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,`selectedChange`,`selected`],[3,`disabled`],[`size`,`s`],[`size`,`m`],[`size`,`l`]],template:function(e,w){e&1&&(C(0,`app-samplecontainer`,1),te(1,me,1,0,`ng-template`,null,0,qt),T(),C(3,`app-samplecontainer`,2),te(4,pe,3,2,`ng-template`,null,0,qt),T(),C(6,`app-samplecontainer`,3),te(7,ue,1,1,`ng-template`,null,0,qt),T(),C(9,`app-samplecontainer`,4),te(10,de,3,0,`ng-template`,null,0,qt),T()),e&2&&(_(3),S(`enableTypescript`,!0))},dependencies:[Kt,Dt,Oze,G],encapsulation:2})};function ce(t,l){if(t&1){let e=B$1();C(0,`ezui-markdowneditor`,5),Ge$1(`valueChange`,function(c){O$1(e);let v=b();return je$1(v.binding,c)||(v.binding=c),A(c)}),T()}if(t&2){let e=b();We$1(`value`,e.binding)}}function we(t,l){if(t&1&&X(0,`ezui-markdowneditor`,6),t&2){let e=b();S(`value`,e.binding())(`disabled`,!0)}}function ve(t,l){if(t&1&&X(0,`ezui-markdowneditor`,7),t&2){let e=b();S(`value`,e.binding())(`disabled`,!0)(`slim`,!0)}}function ye(t,l){if(t&1&&X(0,`ezui-markdowneditor`,8),t&2){let e=b();S(`value`,e.binding())(`additionalMenuBarItems`,e.additionals)}}var P=class t{binding=F(`Text`);additionals=[{label:`Stuff a`,command:(l,e)=>{alert(`stuff a`)}},{label:`Stuff b`,command:(l,e)=>{alert(`stuff b`)}}];static ɵfac=function(e){return new(e||t)};static ɵcmp=R({type:t,selectors:[[`app-markdowneditor`]],hostAttrs:[1,`base-view`],decls:15,vars:4,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-markdowneditor [(value)]="binding" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Disabled`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Slim`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[`label`,`Additional Menu Items`,`html`,`<ezui-markdowneditor [value]="binding()" [disabled]="true" [slim]="true" />`,`ts`,`binding = signal<string>("Text");`,3,`enableTypescript`],[3,`valueChange`,`value`],[3,`value`,`disabled`],[3,`value`,`disabled`,`slim`],[3,`value`,`additionalMenuBarItems`]],template:function(e,w){e&1&&(C(0,`app-samplecontainer`,1),te(1,ce,1,1,`ng-template`,null,0,qt),T(),C(3,`app-samplecontainer`,2),z(4,` > `),te(5,we,1,2,`ng-template`,null,0,qt),T(),C(7,`app-samplecontainer`,3),z(8,` > `),te(9,ve,1,3,`ng-template`,null,0,qt),T(),C(11,`app-samplecontainer`,4),z(12,` > `),te(13,ye,1,2,`ng-template`,null,0,qt),T()),e&2&&(S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(4),S(`enableTypescript`,!0),_(4),S(`enableTypescript`,!0))},dependencies:[Kt,Dt,Aze,G],encapsulation:2})};function ge(t,l){t&1&&X(0,`ezui-showmoretext`,2)}var O=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=R({type:t,selectors:[[`app-showmoretext`]],hostAttrs:[1,`base-view`],decls:3,vars:0,consts:[[`preview`,``],[`label`,`Simple`,`html`,`<ezui-showmoretext value="Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum."/>`],[`value`,`Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.`]],template:function(e,w){e&1&&(C(0,`app-samplecontainer`,1),te(1,ge,1,0,`ng-template`,null,0,qt),T())},dependencies:[Kt,Dt,Hze,G],encapsulation:2})};function fe(t,l){t&1&&(C(0,`div`,20),X(1,`ezui-table`),T())}function xe(t,l){if(t&1&&(C(0,`div`,20),X(1,`ezui-table`,21),T()),t&2){let e=b();_(),S(`isLoading`,e.isLoading)}}function _e(t,l){t&1&&(C(0,`th`,23),z(1,`ID`),T(),C(2,`th`,23),z(3,`Value`),T(),C(4,`th`,23),z(5,`Description`),T())}function ke(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function Te(t,l){if(t&1&&(C(0,`ezui-table`,22),te(1,_e,6,0,`ng-template`,null,1,qt)(3,ke,6,3,`ng-template`,null,2,qt),T()),t&2){let e=b();S(`values`,e.data)}}function he(t,l){t&1&&(C(0,`th`,23),z(1,`ID`),T(),C(2,`th`,23),z(3,`Value`),T(),C(4,`th`,23),z(5,`Description`),T())}function Ee(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function Se(t,l){if(t&1){let e=B$1();C(0,`ezui-table`,25),D(`onRowClick`,function(c){O$1(e);let v=b();return A(v.rowClicked(c))}),te(1,he,6,0,`ng-template`,null,1,qt)(3,Ee,6,3,`ng-template`,null,2,qt),T()}if(t&2){let e=b();S(`values`,e.data)(`clickable`,!0)}}function ze(t,l){t&1&&(C(0,`th`,23),z(1,`ID`),T(),C(2,`th`,23),z(3,`Value`),T(),C(4,`th`,23),z(5,`Description`),T())}function De(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function Ie(t,l){if(t&1){let e=B$1();C(0,`ezui-table`,26),D(`onRowClick`,function(c){O$1(e);let v=b();return A(v.rowClicked(c))}),te(1,ze,6,0,`ng-template`,null,1,qt)(3,De,6,3,`ng-template`,null,2,qt),T()}if(t&2){let e=b();S(`values`,e.data)(`clickable`,!0)(`showContextMenu`,!0)(`contextMenuItems`,e.contextMenu)}}function Ce(t,l){t&1&&(C(0,`th`,23),z(1,`ID`),T(),C(2,`th`,23),z(3,`Value`),T(),C(4,`th`,23),z(5,`Description`),T())}function Me(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function Re(t,l){if(t&1&&(C(0,`td`,28)(1,`span`,29),z(2),T()()),t&2){let e=l.$implicit;_(2),re(`You expanded the row `,e.id,`!`)}}function Le(t,l){if(t&1&&(C(0,`ezui-table`,27),te(1,Ce,6,0,`ng-template`,null,1,qt)(3,Me,6,3,`ng-template`,null,2,qt)(5,Re,3,1,`ng-template`,null,3,qt),T()),t&2){let e=b();S(`values`,e.data)(`expandable`,!0)}}function Fe(t,l){t&1&&(C(0,`th`,23),z(1,`ID`),T(),C(2,`th`,23),z(3,`Value`),T(),C(4,`th`,23),z(5,`Description`),T())}function Ve(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function Pe(t,l){if(t&1&&(C(0,`ezui-table`,30),te(1,Fe,6,0,`ng-template`,null,1,qt)(3,Ve,6,3,`ng-template`,null,2,qt),T()),t&2){let e=b();S(`values`,e.longData)(`pageSize`,e.pageSize)}}function Oe(t,l){t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-sortable`,33),T(),C(3,`th`,23),z(4,` Value `),X(5,`ezui-table-sortable`,34),T(),C(6,`th`,23),z(7,` Description `),X(8,`ezui-table-sortable`,35),T())}function Be(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function He(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,32),te(3,Oe,9,0,`ng-template`,null,1,qt)(5,Be,6,3,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.data)(`showClearFilters`,!0)}}function Ue(t,l){if(t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-textfilter`,33),T(),C(3,`th`,23),z(4,` Type `),X(5,`ezui-table-selectfilter`,36),T(),C(6,`th`,23),z(7,` Timestamp `),X(8,`ezui-table-datetimefilter`,37),T(),C(9,`th`,23),z(10,` Is Active `),X(11,`ezui-table-booleanfilter`,38),T()),t&2){let e=b(2);_(5),S(`options`,e.filterOptions)}}function We(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24)(3,`span`,39),z(4),T()(),C(5,`td`,24),z(6),Gt(7,`date`),T(),C(8,`td`,24),z(9),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(3),re(` `,e.type,` `),_(2),vt$1(wg(7,4,e.timestamp,`dd/MM/yyyy HH:mm:ss`)),_(3),vt$1(e.active)}}function Ae(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,32),te(3,Ue,12,1,`ng-template`,null,1,qt)(5,We,10,7,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.filterData)(`showClearFilters`,!0)}}function Ne(t,l){if(t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-textfilter`,33),T(),C(3,`th`,23),z(4,` Type `),X(5,`ezui-table-selectfilter`,40),T(),C(6,`th`,23),z(7,` Timestamp `),X(8,`ezui-table-datetimefilter`,37),T(),C(9,`th`,23),z(10,` Is Active `),X(11,`ezui-table-booleanfilter`,38),T()),t&2){let e=b(2);_(5),S(`options`,e.filterOptions)(`appearanceMap`,e.appearanceMap)}}function qe(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24)(3,`span`,41),z(4),T()(),C(5,`td`,24),z(6),Gt(7,`date`),T(),C(8,`td`,24),z(9),T()),t&2){let e=l.$implicit;_(),vt$1(e.id);let w=b(2).appearanceMap.get(e.type);_(2),S(`appearance`,w||``),_(),re(` `,e.type,` `),_(2),vt$1(wg(7,5,e.timestamp,`dd/MM/yyyy HH:mm:ss`)),_(3),vt$1(e.active)}}function je(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,32),te(3,Ne,12,2,`ng-template`,null,1,qt)(5,qe,10,8,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.filterData)(`showClearFilters`,!0)}}function $e(t,l){if(t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-sortable`,33)(3,`ezui-table-textfilter`,33),T(),C(4,`th`,23),z(5,` Type `),X(6,`ezui-table-sortable`,42)(7,`ezui-table-selectfilter`,36),T(),C(8,`th`,23),z(9,` Timestamp `),X(10,`ezui-table-sortable`,37)(11,`ezui-table-datefilter`,37),T()),t&2){let e=b(2);_(7),S(`options`,e.filterOptions)}}function Ye(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24)(3,`span`,39),z(4),T()(),C(5,`td`,24),z(6),Gt(7,`date`),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(3),re(` `,e.type,` `),_(2),vt$1(wg(7,3,e.timestamp,`dd/MM/yyyy`))}}function Ke(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,32),te(3,$e,12,1,`ng-template`,null,1,qt)(5,Ye,8,6,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.filterData)(`showClearFilters`,!0)}}function Je(t,l){if(t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-sortable`,33)(3,`ezui-table-textfilter`,33),T(),C(4,`th`,23),z(5,` Type `),X(6,`ezui-table-sortable`,42)(7,`ezui-table-selectfilter`,36),T(),C(8,`th`,23),z(9,` Timestamp `),X(10,`ezui-table-sortable`,37)(11,`ezui-table-datefilter`,37),T()),t&2){let e=b(2);_(7),S(`options`,e.longFilterOptions)}}function Ge(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24)(3,`span`,39),z(4),T()(),C(5,`td`,24),z(6),Gt(7,`date`),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(3),re(` `,e.type,` `),_(2),vt$1(wg(7,3,e.timestamp,`dd/MM/yyyy HH:mm:ss`))}}function Qe(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,43),te(3,Je,12,1,`ng-template`,null,1,qt)(5,Ge,8,6,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.longFilterData)(`showClearFilters`,!0)(`allowPresets`,!0)}}function Xe(t,l){if(t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-textfilter`,33),T(),C(3,`th`,23),z(4,` Type `),X(5,`ezui-table-selectfilter`,44),T(),C(6,`th`,23),z(7,` Timestamp `),X(8,`ezui-table-datefilter`,37),T(),C(9,`th`,23),z(10,` Is Active `),X(11,`ezui-table-booleanfilter`,38),T()),t&2){let e=b(2);_(5),S(`options`,e.filterOptions2)(`appearanceMap`,e.appearanceMap2)}}function Ze(t,l){if(t&1&&(C(0,`span`,45),z(1),T()),t&2){let e=l.$implicit,w=b(3).appearanceMap2.get(e);S(`appearance`,w||``),_(),re(` `,e,` `)}}function et(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),Be$1(3,Ze,2,2,`span`,45,Qt),T(),C(5,`td`,24),z(6),Gt(7,`date`),T(),C(8,`td`,24),z(9),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),Ue$1(e.types),_(3),vt$1(wg(7,3,e.timestamp,`dd/MM/yyyy HH:mm:ss`)),_(3),vt$1(e.active)}}function tt(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,32),te(3,Xe,12,2,`ng-template`,null,1,qt)(5,et,10,6,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.filterData2)(`showClearFilters`,!0)}}function at(t,l){t&1&&(C(0,`th`,23),z(1,`ID`),T(),C(2,`th`,23),z(3,`Value 1`),T(),C(4,`th`,23),z(5,`Value 2`),T(),C(6,`th`,23),z(7,`Value 3`),T(),C(8,`th`,23),z(9,`Value 4`),T(),C(10,`th`,23),z(11,`Value 5`),T(),C(12,`th`,23),z(13,`Value 6`),T(),C(14,`th`,23),z(15,`Value 7`),T(),C(16,`th`,23),z(17,`Value 8`),T())}function it(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T(),C(6,`td`,24),z(7),T(),C(8,`td`,24),z(9),T(),C(10,`td`,24),z(11),T(),C(12,`td`,24),z(13),T(),C(14,`td`,24),z(15),T(),C(16,`td`,24),z(17),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value1),_(2),vt$1(e.value2),_(2),vt$1(e.value3),_(2),vt$1(e.value4),_(2),vt$1(e.value5),_(2),vt$1(e.value6),_(2),vt$1(e.value7),_(2),vt$1(e.value8)}}function nt(t,l){if(t&1&&(C(0,`div`,48)(1,`h1`),z(2,`Table`),T(),C(3,`span`),z(4,`Sub title`),T(),C(5,`ezui-table`,49),te(6,at,18,0,`ng-template`,null,1,qt)(8,it,18,9,`ng-template`,null,2,qt),T(),C(10,`span`),z(11,`Sub sub title`),T()()),t&2){let e=b(2);_(5),S(`values`,e.scrollData)(`pageSize`,e.pageSize)(`showRefresh`,!0)}}function lt(t,l){if(t&1){let e=B$1();C(0,`span`,31),z(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),T(),C(2,`button`,46),D(`click`,function(){O$1(e);let c=b();return A(c.showDialog.set(!0))}),z(3,` Open `),T(),C(4,`ezui-dialog`,47),te(5,nt,12,3,`ng-template`,null,4,qt),T()}if(t&2){let e=b();_(4),S(`showDialog`,e.showDialog)}}function rt(t,l){t&1&&(C(0,`th`,23),z(1,` ID `),X(2,`ezui-table-sortable`,33)(3,`ezui-table-textfilter`,33),T(),C(4,`th`,23),z(5,` Sub1 `),X(6,`ezui-table-sortable`,50)(7,`ezui-table-textfilter`,50),T(),C(8,`th`,23),z(9,` Description `),X(10,`ezui-table-sortable`,35)(11,`ezui-table-textfilter`,35),T())}function st(t,l){if(t&1&&(C(0,`td`,24),z(1),T(),C(2,`td`,24),z(3),T(),C(4,`td`,24),z(5),T()),t&2){let e=l.$implicit;_(),vt$1(e.id),_(2),vt$1(e.value.sub1),_(2),vt$1(e.desc)}}function ot(t,l){if(t&1&&(C(0,`span`,31),z(1,` Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! `),T(),C(2,`ezui-table`,32),te(3,rt,12,0,`ng-template`,null,1,qt)(5,st,6,3,`ng-template`,null,2,qt),T()),t&2){let e=b();_(2),S(`values`,e.dataWithSub)(`showClearFilters`,!0)}}var B=class t{data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];contextMenu=[{label:`opt 1`,command:(l,e)=>alert(l.id+` opt 1`)},{label:`opt 2`,command:(l,e)=>alert(l.id+` opt 2`)},{label:`opt 3`,command:(l,e)=>alert(l.id+` opt 3`)}];pageSize=F(20);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];filterOptions=[`Type 1`,`Type 2`,`Type 3`];filterData=[{id:`abc`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date,active:!0},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date,active:!1},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date,active:!0},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date,active:!1}];longFilterOptions=[`Type 1`,`Type 2`,`Type 3`];longFilterData=[{id:`abc`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date},{id:`123`,type:`Type 1`,timestamp:/* @__PURE__ */ new Date},{id:`55g`,type:`Type 2`,timestamp:/* @__PURE__ */ new Date},{id:`dfg`,type:`Type 3`,timestamp:/* @__PURE__ */ new Date}];rowClicked(l){alert(`Clicked on row `+l.id)}filterOptions2=[{id:`tp1`,value:`Type 1`},{id:`tp2`,value:`Type 2`},{id:`tp3`,value:`Type 3`}];filterData2=[{id:`abc`,types:[`tp1`,`tp2`],timestamp:/* @__PURE__ */ new Date,active:!0},{id:`123`,types:[`tp3`,`tp2`],timestamp:/* @__PURE__ */ new Date,active:!1},{id:`55g`,types:[`tp1`],timestamp:/* @__PURE__ */ new Date,active:!0},{id:`dfg`,types:[`tp3`,`tp1`],timestamp:/* @__PURE__ */ new Date,active:!1}];appearanceMap2=/* @__PURE__ */ new Map([[`tp1`,`positive`],[`tp2`,`negative`],[`tp3`,`info`]]);scrollData=[{id:`abc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`1213`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`s`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`aa`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a22bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works with some very wide value like this one is`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5sbc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a56bc`,value1:`123`,value2:`works with some very wide value like this one is`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a51bc`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works with some very wide value like this one is`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`},{id:`a5b2c`,value1:`123`,value2:`works`,value3:`works`,value4:`works`,value5:`works`,value6:`works`,value7:`works`,value8:`works`}];appearanceMap=/* @__PURE__ */ new Map([[`Type 1`,`positive`],[`Type 2`,`negative`],[`Type 3`,`info`]]);showDialog=F(!1);isLoading=F(!0);dataWithSub=[{id:`abc`,value:{sub1:`abc`,sub2:`123`},desc:`works`},{id:`123`,value:{sub1:`aaa`,sub2:`2231`},desc:`works`},{id:`55g`,value:{sub1:`5b`,sub2:`444`},desc:`works :)`},{id:`dfg`,value:{sub1:`asd`,sub2:`12313`},desc:`works`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=R({type:t,selectors:[[`app-tables`]],hostAttrs:[1,`base-view`],decls:45,vars:13,consts:[[`preview`,``],[`tableHeader`,``],[`tableRows`,``],[`tableExpandedrow`,``],[`content`,``],[`label`,`Simple`,`html`,`<ezui-table />`],[`label`,`Loading`,`html`,`<ezui-table [isLoading]="isLoading"/>`],[`label`,`Simple 2`,`html`,`<ezui-table [values]="data">
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
</ezui-dialog>`,`ts`,`showDialog = signal<boolean>(false);`,3,`enableTypescript`],[`label`,`Filtering And Sorting (sub types)`,`html`,`<ezui-table [values]="dataWithSub" [showClearFilters]="true">
	<ng-template #tableHeader>
		<th tuiTh>
			ID
			<ezui-table-sortable column="id"></ezui-table-sortable>
			<ezui-table-textfilter column="id"></ezui-table-textfilter>
		</th>
		<th tuiTh>
			Sub1
			<ezui-table-sortable column="value.sub1"></ezui-table-sortable>
			<ezui-table-textfilter column="value.sub1"></ezui-table-textfilter>
		</th>
		<th tuiTh>
			Description
			<ezui-table-sortable column="desc"></ezui-table-sortable>
			<ezui-table-textfilter column="desc"></ezui-table-textfilter>
		</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>{{ item.id } }</td>
		<td tuiTd>{{ item.value.sub1 } }</td>
		<td tuiTd>{{ item.desc } }</td>
	</ng-template>
</ezui-table>`,`ts`,`dataWithSub : any = [
	{ id:"abc", value: { sub1: "abc", sub2: "123" }, desc: "works" },
	{ id:"123", value: { sub1: "aaa", sub2: "2231" }, desc: "works" },
	{ id:"55g", value: { sub1: "5b", sub2: "444" }, desc: "works :)" },
	{ id:"dfg", value: { sub1: "asd", sub2: "12313" }, desc: "works" },
]`,3,`enableTypescript`],[2,`height`,`300px`,`display`,`flex`,`flex-direction`,`column`],[3,`isLoading`],[3,`values`],[`tuiTh`,``],[`tuiTd`,``],[3,`onRowClick`,`values`,`clickable`],[3,`onRowClick`,`values`,`clickable`,`showContextMenu`,`contextMenuItems`],[3,`values`,`expandable`],[`colSpan`,`4`],[2,`margin`,`10px`],[3,`values`,`pageSize`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[3,`values`,`showClearFilters`],[`column`,`id`],[`column`,`value`],[`column`,`desc`],[`column`,`type`,3,`options`],[`column`,`timestamp`],[`column`,`active`],[`size`,`xs`,`tuiChip`,``],[`column`,`type`,3,`options`,`appearanceMap`],[`size`,`xs`,`tuiChip`,``,3,`appearance`],[`column`,`type`],[`storageKey`,`ezui-table`,3,`values`,`showClearFilters`,`allowPresets`],[`column`,`types`,`optionLabel`,`value`,`optionValue`,`id`,3,`options`,`appearanceMap`],[`size`,`xs`,`tuiChip`,``,2,`margin-right`,`5px`,3,`appearance`],[`tuiButton`,``,3,`click`],[`size`,`l`,3,`showDialog`],[2,`display`,`flex`,`flex-direction`,`column`,`margin`,`5px`,`height`,`80vh`],[3,`values`,`pageSize`,`showRefresh`],[`column`,`value.sub1`]],template:function(e,w){e&1&&(C(0,`app-samplecontainer`,5),te(1,fe,2,0,`ng-template`,null,0,qt),T(),C(3,`app-samplecontainer`,6),te(4,xe,2,1,`ng-template`,null,0,qt),T(),C(6,`app-samplecontainer`,7),te(7,Te,5,1,`ng-template`,null,0,qt),T(),C(9,`app-samplecontainer`,8),te(10,Se,5,2,`ng-template`,null,0,qt),T(),C(12,`app-samplecontainer`,9),te(13,Ie,5,4,`ng-template`,null,0,qt),T(),C(15,`app-samplecontainer`,10),te(16,Le,7,2,`ng-template`,null,0,qt),T(),C(18,`app-samplecontainer`,11),te(19,Pe,5,2,`ng-template`,null,0,qt),T(),C(21,`app-samplecontainer`,12),te(22,He,7,2,`ng-template`,null,0,qt),T(),C(24,`app-samplecontainer`,13),te(25,Ae,7,2,`ng-template`,null,0,qt),T(),C(27,`app-samplecontainer`,14),te(28,je,7,2,`ng-template`,null,0,qt),T(),C(30,`app-samplecontainer`,15),te(31,Ke,7,2,`ng-template`,null,0,qt),T(),C(33,`app-samplecontainer`,16),te(34,Qe,7,3,`ng-template`,null,0,qt),T(),C(36,`app-samplecontainer`,17),te(37,tt,7,2,`ng-template`,null,0,qt),T(),C(39,`app-samplecontainer`,18),te(40,lt,7,1,`ng-template`,null,0,qt),T(),C(42,`app-samplecontainer`,19),te(43,ot,7,2,`ng-template`,null,0,qt),T()),e&2&&(_(6),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0))},dependencies:[Kt,Dt,Du,G,jR,yx,Yze,y,$ze,qze,Gze,fo,jze,Wze,Mze,st$1,SH],encapsulation:2})};function mt(t,l){if(t&1){let e=B$1();C(0,`ezui-orderlist`,8),Ge$1(`valuesChange`,function(c){O$1(e);let v=b();return je$1(v.values,c)||(v.values=c),A(c)}),T(),z(1),Gt(2,`json`)}if(t&2){let e=b();We$1(`values`,e.values),_(),re(` `,yr(2,2,e.values),` `)}}function pt(t,l){t&1&&X(0,`ezui-orderlist`)}function ut(t,l){if(t&1){let e=B$1();C(0,`ezui-orderlist`,9),Ge$1(`valuesChange`,function(c){O$1(e);let v=b();return je$1(v.values,c)||(v.values=c),A(c)}),T()}if(t&2){let e=b();We$1(`values`,e.values),S(`disabled`,!0)}}function dt(t,l){if(t&1){let e=B$1();C(0,`ezui-orderlist`,10),Ge$1(`valuesChange`,function(c){O$1(e);let v=b();return je$1(v.values,c)||(v.values=c),A(c)}),T(),z(1),Gt(2,`json`)}if(t&2){let e=b();We$1(`values`,e.values),S(`showButtons`,!0),_(),re(` `,yr(2,3,e.values),` `)}}function ct(t,l){if(t&1&&(C(0,`div`,16)(1,`h3`),z(2),T(),C(3,`span`),z(4),T(),C(5,`span`),z(6),T()()),t&2){let e=l.$implicit,w=l.index;_(2),vt$1(e.label),_(2),vt$1(e.label),_(2),vt$1(w)}}function wt(t,l){if(t&1){let e=B$1();C(0,`div`,14)(1,`h1`),z(2,`Order List`),T(),C(3,`ezui-orderlist`,15),Ge$1(`valuesChange`,function(c){O$1(e);let v=b(2);return je$1(v.values2,c)||(v.values2=c),A(c)}),te(4,ct,7,3,`ng-template`,null,2,qt),T()()}if(t&2){let e=b(2);_(3),We$1(`values`,e.values2)}}function vt(t,l){if(t&1){let e=B$1();C(0,`span`,11),z(1,` The "EzUILayoutService" is required for the dialog to correctly format on mobile! `),T(),C(2,`button`,12),D(`click`,function(){O$1(e);let c=b();return A(c.showDialog.set(!0))}),z(3,` Open `),T(),C(4,`ezui-dialog`,13),te(5,wt,6,1,`ng-template`,null,1,qt),T()}if(t&2){let e=b();_(4),S(`showDialog`,e.showDialog)}}var H=class t{values=[{label:`item1`,icon:`list`},{label:`item2`,icon:`list`},{label:`item3`,icon:`list`},{label:`item4`,icon:`list`}];showDialog=F(!1);values2=[{label:`item1`,icon:`list`},{label:`item2`,icon:`list`},{label:`item3`,icon:`list`},{label:`item4`,icon:`list`},{label:`item5`,icon:`list`},{label:`item6`,icon:`list`},{label:`item7`,icon:`list`},{label:`item8`,icon:`list`},{label:`item9`,icon:`list`},{label:`item10`,icon:`list`},{label:`item11`,icon:`list`},{label:`item12`,icon:`list`},{label:`item13`,icon:`list`},{label:`item14`,icon:`list`},{label:`item15`,icon:`list`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=R({type:t,selectors:[[`app-orderlist`]],hostAttrs:[1,`base-view`],decls:15,vars:1,consts:[[`preview`,``],[`content`,``],[`itemTemplate`,``],[`label`,`Simple`,`html`,``],[`label`,`Empty`,`html`,``],[`label`,`Disabled`,`html`,``],[`label`,`Buttons`,`html`,``],[`label`,`In Dialog`,`html`,`<button tuiButton (click)="showDialog.set(true)">
	Open
</button>
<ezui-dialog [showDialog]="showDialog">
	<ng-template #content>
		<span>This is the content of the dialog</span>
	</ng-template>
</ezui-dialog>`,`ts`,`showDialog = signal<boolean>(false);`,3,`enableTypescript`],[`optionLabel`,`label`,3,`valuesChange`,`values`],[`optionLabel`,`label`,3,`valuesChange`,`values`,`disabled`],[`optionLabel`,`label`,3,`valuesChange`,`values`,`showButtons`],[`appearance`,`warning`,`tuiMessage`,``,2,`width`,`100%`],[`tuiButton`,``,3,`click`],[3,`showDialog`],[2,`height`,`80vh`,`overflow`,`auto`],[3,`valuesChange`,`values`],[2,`display`,`flex`,`flex-direction`,`column`]],template:function(e,w){e&1&&(C(0,`app-samplecontainer`,3),te(1,mt,3,4,`ng-template`,null,0,qt),T(),C(3,`app-samplecontainer`,4),te(4,pt,1,0,`ng-template`,null,0,qt),T(),C(6,`app-samplecontainer`,5),te(7,ut,1,2,`ng-template`,null,0,qt),T(),C(9,`app-samplecontainer`,6),te(10,dt,3,5,`ng-template`,null,0,qt),T(),C(12,`app-samplecontainer`,7),te(13,vt,7,1,`ng-template`,null,0,qt),T()),e&2&&(_(12),S(`enableTypescript`,!0))},dependencies:[Kt,Dt,G,Vze,Mze,st$1,DH],encapsulation:2})};function yt(t,l){t&1&&(C(0,`div`,6),X(1,`ezui-list`),T())}function gt(t,l){if(t&1&&(C(0,`div`,6),X(1,`ezui-list`,7),T()),t&2){let e=b();_(),S(`isLoading`,e.isLoading)}}function bt(t,l){if(t&1&&(C(0,`div`,9)(1,`span`),z(2),T(),C(3,`span`),z(4),T(),C(5,`span`),z(6),T()()),t&2){let e=l.$implicit;_(2),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function ft(t,l){if(t&1&&(C(0,`ezui-list`,8),te(1,bt,7,3,`ng-template`,null,1,qt),T()),t&2){let e=b();S(`values`,e.data)}}function xt(t,l){if(t&1&&(C(0,`div`,9)(1,`span`),z(2),T(),C(3,`span`),z(4),T(),C(5,`span`),z(6),T()()),t&2){let e=l.$implicit;_(2),vt$1(e.id),_(2),vt$1(e.value),_(2),vt$1(e.desc)}}function _t(t,l){if(t&1&&(C(0,`ezui-list`,10),te(1,xt,7,3,`ng-template`,null,1,qt),T()),t&2){let e=b();S(`values`,e.longData)(`pageSize`,e.pageSize)}}var U=class t{isLoading=F(!0);data=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];pageSize=F(20);longData=[{id:`abc`,value:`123`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`},{id:`123`,value:`wwww`,desc:`works`},{id:`55g`,value:`1115892`,desc:`works :)`},{id:`dfg`,value:`yyes`,desc:`works`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=R({type:t,selectors:[[`app-lists`]],hostAttrs:[1,`base-view`],decls:12,vars:2,consts:[[`preview`,``],[`listRows`,``],[`label`,`Simple`,`html`,`<ezui-list />`],[`label`,`Loading`,`html`,`<ezui-list [isLoading]="isLoading"/>`],[`label`,`Simple 2`,`html`,`<ezui-list [values]="data">
	<ng-template #listRows let-item>
		<div style="display:flex;flex-direction:row;gap:10px;">
			<span>{{ item.id } }</span>
			<span>{{ item.value } }</span>
			<span>{{ item.desc } }</span>
		</div>
	</ng-template>
</ezui-list>`,`ts`,`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,`enableTypescript`],[`label`,`Pagination`,`html`,`<ezui-list [values]="longData" [pageSize]="pageSize">
	<ng-template #listRows let-item>
		<div style="display:flex;flex-direction:row;gap:10px;">
			<span>{{ item.id } }</span>
			<span>{{ item.value } }</span>
			<span>{{ item.desc } }</span>
		</div>
	</ng-template>
</ezui-list>`,`ts`,`pageSize = signal<number>(10);
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
]`,3,`enableTypescript`],[2,`height`,`300px`,`display`,`flex`,`flex-direction`,`column`],[3,`isLoading`],[3,`values`],[2,`display`,`flex`,`flex-direction`,`row`,`gap`,`10px`],[3,`values`,`pageSize`]],template:function(e,w){e&1&&(C(0,`app-samplecontainer`,2),te(1,yt,2,0,`ng-template`,null,0,qt),T(),C(3,`app-samplecontainer`,3),te(4,gt,2,1,`ng-template`,null,0,qt),T(),C(6,`app-samplecontainer`,4),te(7,ft,3,1,`ng-template`,null,0,qt),T(),C(9,`app-samplecontainer`,5),te(10,_t,3,2,`ng-template`,null,0,qt),T()),e&2&&(_(6),S(`enableTypescript`,!0),_(3),S(`enableTypescript`,!0))},dependencies:[Kt,Dt,Zze,G],encapsulation:2})};var xa=[{path:`markdowneditor`,component:P},{path:`tables`,component:B},{path:`iconselector`,component:V},{path:`showmoretext`,component:O},{path:`orderlist`,component:H},{path:`lists`,component:U}];export{xa as default};