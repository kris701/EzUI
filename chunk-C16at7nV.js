import {Y}from'./chunk-BZOE14EV.js';import {S,E,P as Pn,_ as _n,p as pAe,y,i as ie$1,a as _,d as P,I,g,j as zp,D as DA,n as mC,o as _Ae,q as gAe,r as yAe,s as vAe,w as ml,C as CV,x as dAe,K,O as Ot,v,k as kt,t as te$1,B as wt,F as D,N,G as bg,H as j,J as fr,e as En,X,Z as Zt,U as Un,W as Wh,L,A as At,z}from'./main-XJBZG3YG.js';var Z=(()=>{class e{static{this.\u0275fac=function(u){return new(u||e)};}static{this.\u0275cmp=E({type:e,selectors:[["ng-component"]],exportAs:["tui-message-5.15.0"],decls:0,vars:0,template:function(u,y){},styles:[`[tuiMessage]:where(*[data-tui-version="5.15.0"]){display:inline-flex;padding:.5rem .625rem;min-block-size:2.25rem;block-size:auto;box-sizing:border-box;inline-size:fit-content;isolation:isolate;white-space:nowrap;text-align:start;font:var(--tui-typography-ui-m);border-radius:var(--tui-radius-l)}[tuiMessage]:where(*[data-tui-version="5.15.0"])>[tuiLink]{color:inherit!important;text-decoration:underline solid!important}
`],encapsulation:2});}}return e})(),Q=(()=>{class e{constructor(){this.nothing=wt(Z);}static{this.\u0275fac=function(u){return new(u||e)};}static{this.\u0275dir=D({type:e,selectors:[["","tuiMessage",""]],features:[N([{provide:bg,useValue:{appearance:"neutral"}}]),j([fr])]});}}return e})();function ee(e,p){e&1&&te$1(0,"ezui-iconselector");}function te(e,p){if(e&1){let t=K();y(0,"ezui-iconselector",5),Ot("selectedChange",function(y){L(t);let x=v();return At(x.binding,y)||(x.binding=y),z(y)}),_(),y(1,"span"),P(2),_();}if(e&2){let t=v();kt("selected",t.binding),g(2),X('You have selected: "',t.binding(),'"');}}function ie(e,p){e&1&&te$1(0,"ezui-iconselector",6),e&2&&I("disabled",true);}function ne(e,p){e&1&&te$1(0,"ezui-iconselector",7)(1,"ezui-iconselector",8)(2,"ezui-iconselector",9);}var C=class e{binding=S("circle");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-icon-selector"]],hostAttrs:[1,"base-view"],decls:12,vars:1,consts:[["preview",""],["label","Simple","html","<ezui-EzUIIconSelector />"],["label","Binding","html",'<ezui-EzUIIconSelector [(selected)]="binding"/>',"ts",'binding = signal<string>("circle");',3,"enableTypescript"],["label","Disabled","html",'<ezui-EzUIIconSelector [disabled]="true"/>'],["label","Sizes","html",`<ezui-iconselector size="s"/>
<ezui-iconselector size="m"/>
<ezui-iconselector size="l"/>`],[3,"selectedChange","selected"],[3,"disabled"],["size","s"],["size","m"],["size","l"]],template:function(t,u){t&1&&(y(0,"app-samplecontainer",1),ie$1(1,ee,1,0,"ng-template",null,0,En),_(),y(3,"app-samplecontainer",2),ie$1(4,te,3,2,"ng-template",null,0,En),_(),y(6,"app-samplecontainer",3),ie$1(7,ie,1,1,"ng-template",null,0,En),_(),y(9,"app-samplecontainer",4),ie$1(10,ne,3,0,"ng-template",null,0,En),_()),t&2&&(g(3),I("enableTypescript",true));},dependencies:[Pn,_n,dAe,Y],encapsulation:2})};function ae(e,p){if(e&1){let t=K();y(0,"ezui-markdowneditor",3),Ot("valueChange",function(y){L(t);let x=v();return At(x.binding,y)||(x.binding=y),z(y)}),_();}if(e&2){let t=v();kt("value",t.binding);}}function le(e,p){if(e&1&&te$1(0,"ezui-markdowneditor",4),e&2){let t=v();I("value",t.binding())("disabled",true);}}var M=class e{binding=S("Text");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-markdowneditor"]],hostAttrs:[1,"base-view"],decls:7,vars:2,consts:[["preview",""],["label","Simple","html",'<ezui-markdowneditor [(value)]="binding" />',"ts",'binding = signal<string>("Text");',3,"enableTypescript"],["label","Disabled","html",'<ezui-markdowneditor [value]="binding()" [disabled]="true" />',"ts",'binding = signal<string>("Text");',3,"enableTypescript"],[3,"valueChange","value"],[3,"value","disabled"]],template:function(t,u){t&1&&(y(0,"app-samplecontainer",1),ie$1(1,ae,1,1,"ng-template",null,0,En),_(),y(3,"app-samplecontainer",2),P(4," > "),ie$1(5,le,1,2,"ng-template",null,0,En),_()),t&2&&(I("enableTypescript",true),g(3),I("enableTypescript",true));},dependencies:[Pn,_n,pAe,Y],encapsulation:2})};function pe(e,p){e&1&&(y(0,"div",10),te$1(1,"ezui-table"),_());}function me(e,p){e&1&&(y(0,"th",12),P(1,"ID"),_(),y(2,"th",12),P(3,"Value"),_(),y(4,"th",12),P(5,"Description"),_());}function re(e,p){if(e&1&&(y(0,"td",13),P(1),_(),y(2,"td",13),P(3),_(),y(4,"td",13),P(5),_()),e&2){let t=p.$implicit;g(),Zt(t.id),g(2),Zt(t.value),g(2),Zt(t.desc);}}function se(e,p){if(e&1&&(y(0,"ezui-table",11),ie$1(1,me,6,0,"ng-template",null,1,En)(3,re,6,3,"ng-template",null,2,En),_()),e&2){let t=v();I("values",t.data);}}function de(e,p){e&1&&(y(0,"th",12),P(1,"ID"),_(),y(2,"th",12),P(3,"Value"),_(),y(4,"th",12),P(5,"Description"),_());}function oe(e,p){if(e&1&&(y(0,"td",13),P(1),_(),y(2,"td",13),P(3),_(),y(4,"td",13),P(5),_()),e&2){let t=p.$implicit;g(),Zt(t.id),g(2),Zt(t.value),g(2),Zt(t.desc);}}function ce(e,p){if(e&1&&(y(0,"ezui-table",14),ie$1(1,de,6,0,"ng-template",null,1,En)(3,oe,6,3,"ng-template",null,2,En),_()),e&2){let t=v();I("values",t.longData)("pageSize",t.pageSize);}}function ue(e,p){e&1&&(y(0,"th",12),P(1," ID "),te$1(2,"ezui-table-sortable",17),_(),y(3,"th",12),P(4," Value "),te$1(5,"ezui-table-sortable",18),_(),y(6,"th",12),P(7," Description "),te$1(8,"ezui-table-sortable",19),_());}function ye(e,p){if(e&1&&(y(0,"td",13),P(1),_(),y(2,"td",13),P(3),_(),y(4,"td",13),P(5),_()),e&2){let t=p.$implicit;g(),Zt(t.id),g(2),Zt(t.value),g(2),Zt(t.desc);}}function we(e,p){if(e&1&&(y(0,"span",15),P(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),_(),y(2,"ezui-table",16),ie$1(3,ue,9,0,"ng-template",null,1,En)(5,ye,6,3,"ng-template",null,2,En),_()),e&2){let t=v();g(2),I("values",t.data)("showClearFilters",true);}}function ge(e,p){if(e&1&&(y(0,"th",12),P(1," ID "),te$1(2,"ezui-table-textfilter",17),_(),y(3,"th",12),P(4," Type "),te$1(5,"ezui-table-selectfilter",20),_(),y(6,"th",12),P(7," Timestamp "),te$1(8,"ezui-table-datefilter",21),_()),e&2){let t=v(2);g(5),I("options",t.filterOptions);}}function be(e,p){if(e&1&&(y(0,"td",13),P(1),_(),y(2,"td",13)(3,"span",22),P(4),_()(),y(5,"td",13),P(6),Un(7,"date"),_()),e&2){let t=p.$implicit;g(),Zt(t.id),g(3),X(" ",t.type," "),g(2),Zt(Wh(7,3,t.timestamp,"dd/MM/yyyy HH:mm:ss"));}}function Te(e,p){if(e&1&&(y(0,"span",15),P(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),_(),y(2,"ezui-table",16),ie$1(3,ge,9,1,"ng-template",null,1,En)(5,be,8,6,"ng-template",null,2,En),_()),e&2){let t=v();g(2),I("values",t.filterData)("showClearFilters",true);}}function fe(e,p){if(e&1&&(y(0,"th",12),P(1," ID "),te$1(2,"ezui-table-sortable",17)(3,"ezui-table-textfilter",17),_(),y(4,"th",12),P(5," Type "),te$1(6,"ezui-table-sortable",23)(7,"ezui-table-selectfilter",20),_(),y(8,"th",12),P(9," Timestamp "),te$1(10,"ezui-table-sortable",21)(11,"ezui-table-datefilter",21),_()),e&2){let t=v(2);g(7),I("options",t.filterOptions);}}function ve(e,p){if(e&1&&(y(0,"td",13),P(1),_(),y(2,"td",13)(3,"span",22),P(4),_()(),y(5,"td",13),P(6),Un(7,"date"),_()),e&2){let t=p.$implicit;g(),Zt(t.id),g(3),X(" ",t.type," "),g(2),Zt(Wh(7,3,t.timestamp,"dd/MM/yyyy HH:mm:ss"));}}function xe(e,p){if(e&1&&(y(0,"span",15),P(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),_(),y(2,"ezui-table",16),ie$1(3,fe,12,1,"ng-template",null,1,En)(5,ve,8,6,"ng-template",null,2,En),_()),e&2){let t=v();g(2),I("values",t.filterData)("showClearFilters",true);}}function _e(e,p){if(e&1&&(y(0,"th",12),P(1," ID "),te$1(2,"ezui-table-sortable",17)(3,"ezui-table-textfilter",17),_(),y(4,"th",12),P(5," Type "),te$1(6,"ezui-table-sortable",23)(7,"ezui-table-selectfilter",20),_(),y(8,"th",12),P(9," Timestamp "),te$1(10,"ezui-table-sortable",21)(11,"ezui-table-datefilter",21),_()),e&2){let t=v(2);g(7),I("options",t.longFilterOptions);}}function De(e,p){if(e&1&&(y(0,"td",13),P(1),_(),y(2,"td",13)(3,"span",22),P(4),_()(),y(5,"td",13),P(6),Un(7,"date"),_()),e&2){let t=p.$implicit;g(),Zt(t.id),g(3),X(" ",t.type," "),g(2),Zt(Wh(7,3,t.timestamp,"dd/MM/yyyy HH:mm:ss"));}}function he(e,p){if(e&1&&(y(0,"span",15),P(1,' Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work! '),_(),y(2,"ezui-table",24),ie$1(3,_e,12,1,"ng-template",null,1,En)(5,De,8,6,"ng-template",null,2,En),_()),e&2){let t=v();g(2),I("values",t.longFilterData)("showClearFilters",true)("allowPresets",true);}}var F=class e{data=[{id:"abc",value:"123",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"}];pageSize=S(10);longData=[{id:"abc",value:"123",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"},{id:"123",value:"wwww",desc:"works"},{id:"55g",value:"1115892",desc:"works :)"},{id:"dfg",value:"yyes",desc:"works"}];filterOptions=["Type 1","Type 2","Type 3"];filterData=[{id:"abc",type:"Type 1",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date}];longFilterOptions=["Type 1","Type 2","Type 3"];longFilterData=[{id:"abc",type:"Type 1",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date},{id:"123",type:"Type 1",timestamp:new Date},{id:"55g",type:"Type 2",timestamp:new Date},{id:"dfg",type:"Type 3",timestamp:new Date}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-tables"]],hostAttrs:[1,"base-view"],decls:21,vars:6,consts:[["preview",""],["tableHeader",""],["tableRows",""],["label","Simple","html","<ezui-table />"],["label","Simple 2","html",`<ezui-table [values]="data">
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
]`,3,"enableTypescript"],[2,"height","300px"],[3,"values"],["tuiTh",""],["tuiTd",""],[3,"values","pageSize"],["appearance","warning","tuiMessage","",2,"width","100%"],[3,"values","showClearFilters"],["column","id"],["column","value"],["column","desc"],["column","type",3,"options"],["column","timestamp"],["size","xs","tuiChip",""],["column","type"],["storageKey","ezui-table",3,"values","showClearFilters","allowPresets"]],template:function(t,u){t&1&&(y(0,"app-samplecontainer",3),ie$1(1,pe,2,0,"ng-template",null,0,En),_(),y(3,"app-samplecontainer",4),ie$1(4,se,5,1,"ng-template",null,0,En),_(),y(6,"app-samplecontainer",5),ie$1(7,ce,5,2,"ng-template",null,0,En),_(),y(9,"app-samplecontainer",6),ie$1(10,we,7,2,"ng-template",null,0,En),_(),y(12,"app-samplecontainer",7),ie$1(13,Te,7,2,"ng-template",null,0,En),_(),y(15,"app-samplecontainer",8),ie$1(16,xe,7,2,"ng-template",null,0,En),_(),y(18,"app-samplecontainer",9),ie$1(19,he,7,3,"ng-template",null,0,En),_()),t&2&&(g(3),I("enableTypescript",true),g(3),I("enableTypescript",true),g(3),I("enableTypescript",true),g(3),I("enableTypescript",true),g(3),I("enableTypescript",true),g(3),I("enableTypescript",true));},dependencies:[Pn,_n,zp,Y,DA,mC,_Ae,Q,gAe,yAe,vAe,ml,CV],encapsulation:2})};var nt=[{path:"markdowneditor",component:M},{path:"tables",component:F},{path:"iconselector",component:C}];export{nt as default};