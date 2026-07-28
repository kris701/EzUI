import {Y}from'./chunk-CWOWvw3-.js';import {M as M$1,E,A as An,q as qn,u as uMe,_,s as se$1,b,h as R,I,v,x as xf,k as iA,J as Jw,m as vMe,n as hMe,o as gMe,r as mMe,t as ul,w as jV,y as cMe,K,R as Rt,i as g,O as Ot,g as le$1,z as _t,D,F as F$1,B as ag,$,C as dr,j as Ln,X,G as $t,H as Fn,P as Oh,L,N as Nt,V}from'./main-JAFBDQSW.js';var Z=(()=>{class e{static{this.\u0275fac=function(u){return new(u||e)};}static{this.\u0275cmp=E({type:e,selectors:[["ng-component"]],exportAs:["tui-message-5.15.0"],decls:0,vars:0,template:function(u,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.15.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--tui-typography-ui-m);border-radius:var(--tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.15.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2});}}return e})(),Q=(()=>{class e{constructor(){this.nothing=_t(Z);}static{this.\u0275fac=function(u){return new(u||e)};}static{this.\u0275dir=D({type:e,selectors:[["","tuiMessage",""]],features:[F$1([{provide:ag,useValue:{appearance:"neutral"}}]),$([dr])]});}}return e})();function ee(e,p){e&1&&le$1(0,"ezui-iconselector");}function te(e,p){if(e&1){let t=K();_(0,"ezui-iconselector",5),Rt("selectedChange",function(y){L(t);let x=g();return Nt(x.binding,y)||(x.binding=y),V(y)}),b(),_(1,"span"),R(2),b();}if(e&2){let t=g();Ot("selected",t.binding),v(2),X('You have selected: "',t.binding(),'"');}}function ie(e,p){e&1&&le$1(0,"ezui-iconselector",6),e&2&&I("disabled",true);}function ne(e,p){e&1&&le$1(0,"ezui-iconselector",7)(1,"ezui-iconselector",8)(2,"ezui-iconselector",9);}var C=class e{binding=M$1("circle");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-icon-selector"]],hostAttrs:[1,"base-view"],decls:12,vars:1,consts:[["preview",""],["label","Simple","html","<ezui-EzUIIconSelector />"],["label","Binding","html",'<ezui-EzUIIconSelector [(selected)]="binding"/>',"ts",'binding = signal<string>("circle");',3,"enableTypescript"],["label","Disabled","html",'<ezui-EzUIIconSelector [disabled]="true"/>'],["label","Sizes","html",`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,"selectedChange","selected"],[3,"disabled"],["size","s"],["size","m"],["size","l"]],template:function(t,u){t&1&&(_(0,"app-samplecontainer",1),se$1(1,ee,1,0,"ng-template",null,0,Ln),b(),_(3,"app-samplecontainer",2),se$1(4,te,3,2,"ng-template",null,0,Ln),b(),_(6,"app-samplecontainer",3),se$1(7,ie,1,1,"ng-template",null,0,Ln),b(),_(9,"app-samplecontainer",4),se$1(10,ne,3,0,"ng-template",null,0,Ln),b()),t&2&&(v(3),I("enableTypescript",true));},dependencies:[An,qn,cMe,Y],encapsulation:2})};function ae(e,p){if(e&1){let t=K();_(0,"ezui-markdowneditor",3),Rt("valueChange",function(y){L(t);let x=g();return Nt(x.binding,y)||(x.binding=y),V(y)}),b();}if(e&2){let t=g();Ot("value",t.binding);}}function le(e,p){if(e&1&&le$1(0,"ezui-markdowneditor",4),e&2){let t=g();I("value",t.binding())("disabled",true);}}var M=class e{binding=M$1("Text");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-markdowneditor"]],hostAttrs:[1,"base-view"],decls:7,vars:2,consts:[["preview",""],["label","Simple","html",'<ezui-markdowneditor [(value)]="binding" />',"ts",'binding = signal<string>("Text");',3,"enableTypescript"],["label","Disabled","html",'<ezui-markdowneditor [value]="binding()" [disabled]="true" />',"ts",'binding = signal<string>("Text");',3,"enableTypescript"],[3,"valueChange","value"],[3,"value","disabled"]],template:function(t,u){t&1&&(_(0,"app-samplecontainer",1),se$1(1,ae,1,1,"ng-template",null,0,Ln),b(),_(3,"app-samplecontainer",2),R(4," > "),se$1(5,le,1,2,"ng-template",null,0,Ln),b()),t&2&&(I("enableTypescript",true),v(3),I("enableTypescript",true));},dependencies:[An,qn,uMe,Y],encapsulation:2})};function pe(e,p){e&1&&(_(0,"div",10),le$1(1,"ezui-table"),b());}function me(e,p){e&1&&(_(0,"th",12),R(1,"ID"),b(),_(2,"th",12),R(3,"Value"),b(),_(4,"th",12),R(5,"Description"),b());}function re(e,p){if(e&1&&(_(0,"td",13),R(1),b(),_(2,"td",13),R(3),b(),_(4,"td",13),R(5),b()),e&2){let t=p.$implicit;v(),$t(t.id),v(2),$t(t.value),v(2),$t(t.desc);}}function se(e,p){if(e&1&&(_(0,"ezui-table",11),se$1(1,me,6,0,"ng-template",null,1,Ln)(3,re,6,3,"ng-template",null,2,Ln),b()),e&2){let t=g();I("values",t.data);}}function de(e,p){e&1&&(_(0,"th",12),R(1,"ID"),b(),_(2,"th",12),R(3,"Value"),b(),_(4,"th",12),R(5,"Description"),b());}function oe(e,p){if(e&1&&(_(0,"td",13),R(1),b(),_(2,"td",13),R(3),b(),_(4,"td",13),R(5),b()),e&2){let t=p.$implicit;v(),$t(t.id),v(2),$t(t.value),v(2),$t(t.desc);}}function ce(e,p){if(e&1&&(_(0,"ezui-table",14),se$1(1,de,6,0,"ng-template",null,1,Ln)(3,oe,6,3,"ng-template",null,2,Ln),b()),e&2){let t=g();I("values",t.longData)("pageSize",t.pageSize);}}function ue(e,p){e&1&&(_(0,"th",12),R(1," ID "),le$1(2,"ezui-table-sortable",17),b(),_(3,"th",12),R(4," Value "),le$1(5,"ezui-table-sortable",18),b(),_(6,"th",12),R(7," Description "),le$1(8,"ezui-table-sortable",19),b());}function ye(e,p){if(e&1&&(_(0,"td",13),R(1),b(),_(2,"td",13),R(3),b(),_(4,"td",13),R(5),b()),e&2){let t=p.$implicit;v(),$t(t.id),v(2),$t(t.value),v(2),$t(t.desc);}}function we(e,p){if(e&1&&(_(0,"span",15),R(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),b(),_(2,"ezui-table",16),se$1(3,ue,9,0,"ng-template",null,1,Ln)(5,ye,6,3,"ng-template",null,2,Ln),b()),e&2){let t=g();v(2),I("values",t.data)("showClearFilters",true);}}function ge(e,p){if(e&1&&(_(0,"th",12),R(1," ID "),le$1(2,"ezui-table-textfilter",17),b(),_(3,"th",12),R(4," Type "),le$1(5,"ezui-table-selectfilter",20),b(),_(6,"th",12),R(7," Timestamp "),le$1(8,"ezui-table-datefilter",21),b()),e&2){let t=g(2);v(5),I("options",t.filterOptions);}}function be(e,p){if(e&1&&(_(0,"td",13),R(1),b(),_(2,"td",13)(3,"span",22),R(4),b()(),_(5,"td",13),R(6),Fn(7,"date"),b()),e&2){let t=p.$implicit;v(),$t(t.id),v(3),X(" ",t.type," "),v(2),$t(Oh(7,3,t.timestamp,"dd/MM/yyyy HH:mm:ss"));}}function Te(e,p){if(e&1&&(_(0,"span",15),R(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),b(),_(2,"ezui-table",16),se$1(3,ge,9,1,"ng-template",null,1,Ln)(5,be,8,6,"ng-template",null,2,Ln),b()),e&2){let t=g();v(2),I("values",t.filterData)("showClearFilters",true);}}function fe(e,p){if(e&1&&(_(0,"th",12),R(1," ID "),le$1(2,"ezui-table-sortable",17)(3,"ezui-table-textfilter",17),b(),_(4,"th",12),R(5," Type "),le$1(6,"ezui-table-sortable",23)(7,"ezui-table-selectfilter",20),b(),_(8,"th",12),R(9," Timestamp "),le$1(10,"ezui-table-sortable",21)(11,"ezui-table-datefilter",21),b()),e&2){let t=g(2);v(7),I("options",t.filterOptions);}}function ve(e,p){if(e&1&&(_(0,"td",13),R(1),b(),_(2,"td",13)(3,"span",22),R(4),b()(),_(5,"td",13),R(6),Fn(7,"date"),b()),e&2){let t=p.$implicit;v(),$t(t.id),v(3),X(" ",t.type," "),v(2),$t(Oh(7,3,t.timestamp,"dd/MM/yyyy HH:mm:ss"));}}function xe(e,p){if(e&1&&(_(0,"span",15),R(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),b(),_(2,"ezui-table",16),se$1(3,fe,12,1,"ng-template",null,1,Ln)(5,ve,8,6,"ng-template",null,2,Ln),b()),e&2){let t=g();v(2),I("values",t.filterData)("showClearFilters",true);}}function _e(e,p){if(e&1&&(_(0,"th",12),R(1," ID "),le$1(2,"ezui-table-sortable",17)(3,"ezui-table-textfilter",17),b(),_(4,"th",12),R(5," Type "),le$1(6,"ezui-table-sortable",23)(7,"ezui-table-selectfilter",20),b(),_(8,"th",12),R(9," Timestamp "),le$1(10,"ezui-table-sortable",21)(11,"ezui-table-datefilter",21),b()),e&2){let t=g(2);v(7),I("options",t.longFilterOptions);}}function De(e,p){if(e&1&&(_(0,"td",13),R(1),b(),_(2,"td",13)(3,"span",22),R(4),b()(),_(5,"td",13),R(6),Fn(7,"date"),b()),e&2){let t=p.$implicit;v(),$t(t.id),v(3),X(" ",t.type," "),v(2),$t(Oh(7,3,t.timestamp,"dd/MM/yyyy HH:mm:ss"));}}function he(e,p){if(e&1&&(_(0,"span",15),R(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),b(),_(2,"ezui-table",24),se$1(3,_e,12,1,"ng-template",null,1,Ln)(5,De,8,6,"ng-template",null,2,Ln),b()),e&2){let t=g();v(2),I("values",t.longFilterData)("showClearFilters",true)("allowPresets",true);}}var F=class e{data=[{id:"abc",value:"123",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"}];pageSize=M$1(10);longData=[{id:"abc",value:"123",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"}];filterOptions=["Type 1","Type 2","Type 3"];filterData=[{id:"abc",type:"Type 1",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date}];longFilterOptions=["Type 1","Type 2","Type 3"];longFilterData=[{id:"abc",type:"Type 1",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-tables"]],hostAttrs:[1,"base-view"],decls:21,vars:6,consts:[["preview",""],["tableHeader",""],["tableRows",""],["label","Simple","html","<ezui-table />"],["label","Simple 2","html",`<ezui-table [values]="data">
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
</ezui-table>`,"ts",`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,"enableTypescript"],["label","Pagination","html",`<ezui-table [values]="longData" [pageSize]="pageSize">
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
</ezui-table>`,"ts",`pageSize = signal<number>(10);
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
]`,3,"enableTypescript"],["label","Sortable","html",`<ezui-table [values]="data" [showClearFilters]="true">
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
</ezui-table>`,"ts",`data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]`,3,"enableTypescript"],["label","Filtering","html",`<ezui-table [values]="filterData" [showClearFilters]="true">
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
</ezui-table>`,"ts",`filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
]`,3,"enableTypescript"],["label","Filtering And Sorting","html",`<ezui-table [values]="filterData" [showClearFilters]="true">
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
</ezui-table>`,"ts",`filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
]`,3,"enableTypescript"],["label","Presets","html",`<ezui-table [values]="longFilterData" [showClearFilters]="true" storageKey="ezui-table" [allowPresets]="true">
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
</ezui-table>`,"ts",`longFilterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
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
]`,3,"enableTypescript"],[2,"height","300px"],[3,"values"],["tuiTh",""],["tuiTd",""],[3,"values","pageSize"],["appearance","warning","tuiMessage","",2,"width","100%"],[3,"values","showClearFilters"],["column","id"],["column","value"],["column","desc"],["column","type",3,"options"],["column","timestamp"],["size","xs","tuiChip",""],["column","type"],["storageKey","ezui-table",3,"values","showClearFilters","allowPresets"]],template:function(t,u){t&1&&(_(0,"app-samplecontainer",3),se$1(1,pe,2,0,"ng-template",null,0,Ln),b(),_(3,"app-samplecontainer",4),se$1(4,se,5,1,"ng-template",null,0,Ln),b(),_(6,"app-samplecontainer",5),se$1(7,ce,5,2,"ng-template",null,0,Ln),b(),_(9,"app-samplecontainer",6),se$1(10,we,7,2,"ng-template",null,0,Ln),b(),_(12,"app-samplecontainer",7),se$1(13,Te,7,2,"ng-template",null,0,Ln),b(),_(15,"app-samplecontainer",8),se$1(16,xe,7,2,"ng-template",null,0,Ln),b(),_(18,"app-samplecontainer",9),se$1(19,he,7,3,"ng-template",null,0,Ln),b()),t&2&&(v(3),I("enableTypescript",true),v(3),I("enableTypescript",true),v(3),I("enableTypescript",true),v(3),I("enableTypescript",true),v(3),I("enableTypescript",true),v(3),I("enableTypescript",true));},dependencies:[An,qn,xf,Y,iA,Jw,vMe,Q,hMe,gMe,mMe,ul,jV],encapsulation:2})};var nt=[{path:"markdowneditor",component:M},{path:"tables",component:F},{path:"iconselector",component:C}];export{nt as default};