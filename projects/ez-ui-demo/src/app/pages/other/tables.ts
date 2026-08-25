import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiChip, TuiMessage } from '@taiga-ui/kit';
import { EzUITable, EzUITableBooleanFilter, EzUITableDateFilter, EzUITableDateTimeFilter, EzUITableSelectFilter, EzUITableTextFilter, EzUITTableSortableColumn } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-tables',
    imports: [
    FormsModule,
    CommonModule,
    EzUITable,
    SampleContainer,
    TuiTable,
    EzUITTableSortableColumn,
    TuiMessage,
    EzUITableDateFilter,
    EzUITableTextFilter,
    EzUITableSelectFilter,
    TuiChip,
    EzUITableBooleanFilter,
    EzUITableDateTimeFilter
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-table />'>
		<ng-template #preview>
			<div style="height:300px">
				<ezui-table />
			</div>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Simple 2"
		html='<ezui-table [values]="data">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>\{\{ item.value \} \}</td>
		<td tuiTd>\{\{ item.desc \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]'>
		<ng-template #preview>
			<ezui-table [values]="data">
				<ng-template #tableHeader>
					<th tuiTh>ID</th>
					<th tuiTh>Value</th>
					<th tuiTh>Description</th>
				</ng-template>
				<ng-template #tableRows let-item>
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>{{ item.value }}</td>
					<td tuiTd>{{ item.desc }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Row Clickable"
		html='<ezui-table [values]="data" [clickable]="true" (onRowClick)="rowClicked($event)">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>\{\{ item.value \} \}</td>
		<td tuiTd>\{\{ item.desc \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]

rowClicked(item : any){
	alert("Clicked on row " + item.id);
}'>
		<ng-template #preview>
			<ezui-table [values]="data" [clickable]="true" (onRowClick)="rowClicked($event)">
				<ng-template #tableHeader>
					<th tuiTh>ID</th>
					<th tuiTh>Value</th>
					<th tuiTh>Description</th>
				</ng-template>
				<ng-template #tableRows let-item>
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>{{ item.value }}</td>
					<td tuiTd>{{ item.desc }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Expandable"
		html='<ezui-table [values]="data" [expandable]="true">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>\{\{ item.value \} \}</td>
		<td tuiTd>\{\{ item.desc \} \}</td>
	</ng-template>
	<ng-template #tableExpandedrow let-item>
		<td colSpan="4">
			<span style="margin:10px">You expanded the row \{\{item.id\} \}!</span>
		</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]'>
		<ng-template #preview>
			<ezui-table [values]="data" [expandable]="true">
				<ng-template #tableHeader>
					<th tuiTh>ID</th>
					<th tuiTh>Value</th>
					<th tuiTh>Description</th>
				</ng-template>
				<ng-template #tableRows let-item>
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>{{ item.value }}</td>
					<td tuiTd>{{ item.desc }}</td>
				</ng-template>
				<ng-template #tableExpandedrow let-item>
					<td colSpan="4">
						<span style="margin:10px">You expanded the row {{item.id}}!</span>
					</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Pagination"
		html='<ezui-table [values]="longData" [pageSize]="pageSize">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>\{\{ item.value \} \}</td>
		<td tuiTd>\{\{ item.desc \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='pageSize = signal<number>(10);
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
]'>
		<ng-template #preview>
			<ezui-table [values]="longData" [pageSize]="pageSize">
				<ng-template #tableHeader>
					<th tuiTh>ID</th>
					<th tuiTh>Value</th>
					<th tuiTh>Description</th>
				</ng-template>
				<ng-template #tableRows let-item>
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>{{ item.value }}</td>
					<td tuiTd>{{ item.desc }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Sortable"
		html='<ezui-table [values]="data" [showClearFilters]="true">
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
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>\{\{ item.value \} \}</td>
		<td tuiTd>\{\{ item.desc \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]'>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work!
			</span>
			<ezui-table [values]="data" [showClearFilters]="true">
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
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>{{ item.value }}</td>
					<td tuiTd>{{ item.desc }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Filtering"
		html='<ezui-table [values]="filterData" [showClearFilters]="true">
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
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>
			<span size="xs" tuiChip>
				\{\{item.type\} \}
			</span>
		</td>
		<td tuiTd>\{\{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" \} \}</td>
		<td tuiTd>\{\{ item.active \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date(), active:true },
	{ id:"123", type: "Type 1", timestamp: new Date(), active:false },
	{ id:"55g", type: "Type 2", timestamp: new Date(), active:true },
	{ id:"dfg", type: "Type 3", timestamp: new Date(), active:false },
]'>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work!
			</span>
			<ezui-table [values]="filterData" [showClearFilters]="true">
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
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>
						<span size="xs" tuiChip>
							{{item.type}}
						</span>
					</td>
					<td tuiTd>{{ item.timestamp| date: 'dd/MM/yyyy HH:mm:ss' }}</td>
					<td tuiTd>{{ item.active }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Filtering And Sorting"
		html='<ezui-table [values]="filterData" [showClearFilters]="true">
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
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>
			<span size="xs" tuiChip>
				\{\{item.type\} \}
			</span>
		</td>
		<td tuiTd>\{\{ item.timestamp | date: "dd/MM/yyyy" \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
filterData : any = [
	{ id:"abc", type: "Type 1", timestamp: new Date() },
	{ id:"123", type: "Type 1", timestamp: new Date() },
	{ id:"55g", type: "Type 2", timestamp: new Date() },
	{ id:"dfg", type: "Type 3", timestamp: new Date() },
]'>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work!
			</span>
			<ezui-table [values]="filterData" [showClearFilters]="true">
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
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>
						<span size="xs" tuiChip>
							{{item.type}}
						</span>
					</td>
					<td tuiTd>{{ item.timestamp| date: 'dd/MM/yyyy' }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Presets"
		html='<ezui-table [values]="longFilterData" [showClearFilters]="true" storageKey="ezui-table" [allowPresets]="true">
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
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>
			<span size="xs" tuiChip>
				\{\{item.type\} \}
			</span>
		</td>
		<td tuiTd>\{\{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='longFilterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
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
]'>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work!
			</span>
			<ezui-table [values]="longFilterData" [showClearFilters]="true" storageKey="ezui-table" [allowPresets]="true">
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
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>
						<span size="xs" tuiChip>
							{{item.type}}
						</span>
					</td>
					<td tuiTd>{{ item.timestamp| date: 'dd/MM/yyyy HH:mm:ss' }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Filtering (advanced arrays)"
		html='<ezui-table [values]="filterData2" [showClearFilters]="true">
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
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>
			@for(type of item.types;track type){
				<span size="xs" tuiChip style="margin-right:5px">
					\{\{type\} \}
				</span>
			}
		</td>
		<td tuiTd>\{\{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" \} \}</td>
		<td tuiTd>\{\{ item.active \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='filterOptions2 : Example[] = [{id: "tp1", value: "Type 1"}, {id: "tp2", value: "Type 2"}, {id: "tp3", value: "Type 3"}];
filterData2 : any = [
	{ id:"abc", types: ["tp1", "tp2"], timestamp: new Date(), active:true },
	{ id:"123", types: ["tp3", "tp2"], timestamp: new Date(), active:false },
	{ id:"55g", types: ["tp1"], timestamp: new Date(), active:true },
	{ id:"dfg", types: ["tp3", "tp1"], timestamp: new Date(), active:false },
]

interface Example {
	id: string;
	value : string;
}'>
		<ng-template #preview>
			<span appearance="warning" tuiMessage style="width:100%">
				Put "EzUITableFilterService" into your app.config proividers for the sorting and filtering to work!
			</span>
			<ezui-table [values]="filterData2" [showClearFilters]="true">
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
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>
						@for(type of item.types;track type){
							<span size="xs" tuiChip style="margin-right:5px">
								{{type}}
							</span>
						}
					</td>
					<td tuiTd>{{ item.timestamp| date: 'dd/MM/yyyy HH:mm:ss' }}</td>
					<td tuiTd>{{ item.active }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Scroll"
		html='<ezui-table [values]="data">
	<ng-template #tableHeader>
		<th tuiTh>ID</th>
		<th tuiTh>Value</th>
		<th tuiTh>Description</th>
	</ng-template>
	<ng-template #tableRows let-item>
		<td tuiTd>\{\{ item.id \} \}</td>
		<td tuiTd>\{\{ item.value \} \}</td>
		<td tuiTd>\{\{ item.desc \} \}</td>
	</ng-template>
</ezui-table>'
		[enableTypescript]="true"
		ts='data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]'>
		<ng-template #preview>
			<ezui-table [values]="scrollData">
				<ng-template #tableHeader>
					<th tuiTh>ID</th>
					<th tuiTh>Value 1</th>
					<th tuiTh>Value 2</th>
					<th tuiTh>Value 3</th>
					<th tuiTh>Value 4</th>
					<th tuiTh>Value 5</th>
					<th tuiTh>Value 6</th>
					<th tuiTh>Value 7</th>
					<th tuiTh>Value 8</th>
				</ng-template>
				<ng-template #tableRows let-item>
					<td tuiTd>{{ item.id }}</td>
					<td tuiTd>{{ item.value1 }}</td>
					<td tuiTd>{{ item.value2 }}</td>
					<td tuiTd>{{ item.value3 }}</td>
					<td tuiTd>{{ item.value4 }}</td>
					<td tuiTd>{{ item.value5 }}</td>
					<td tuiTd>{{ item.value6 }}</td>
					<td tuiTd>{{ item.value7 }}</td>
					<td tuiTd>{{ item.value8 }}</td>
				</ng-template>
			</ezui-table>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class Tables {
	data : any = [
		{ id:"abc", value: "123", desc: "works" },
		{ id:"123", value: "wwww", desc: "works" },
		{ id:"55g", value: "1115892", desc: "works :)" },
		{ id:"dfg", value: "yyes", desc: "works" },
	]

	pageSize = signal<number>(10);
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
	]

	filterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
	filterData : any = [
		{ id:"abc", type: "Type 1", timestamp: new Date(), active:true },
		{ id:"123", type: "Type 1", timestamp: new Date(), active:false },
		{ id:"55g", type: "Type 2", timestamp: new Date(), active:true },
		{ id:"dfg", type: "Type 3", timestamp: new Date(), active:false },
	]

	longFilterOptions : string[] = ["Type 1", "Type 2", "Type 3"];
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
	]

	rowClicked(item : any){
		alert("Clicked on row " + item.id);
	}

	filterOptions2 : Example[] = [{id: "tp1", value: "Type 1"}, {id: "tp2", value: "Type 2"}, {id: "tp3", value: "Type 3"}];
	filterData2 : any = [
		{ id:"abc", types: ["tp1", "tp2"], timestamp: new Date(), active:true },
		{ id:"123", types: ["tp3", "tp2"], timestamp: new Date(), active:false },
		{ id:"55g", types: ["tp1"], timestamp: new Date(), active:true },
		{ id:"dfg", types: ["tp3", "tp1"], timestamp: new Date(), active:false },
	]

	scrollData : any = [
		{ id:"abc", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"1213", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"s", value1: "123", value2: "works with some very wide value like this one is", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"aa", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"a22bc", value1: "123", value2: "works", value3: "works", value4: "works with some very wide value like this one is", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"a5bc", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"a5sbc", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"a56bc", value1: "123", value2: "works with some very wide value like this one is", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
		{ id:"a51bc", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works with some very wide value like this one is" },
		{ id:"a5b2c", value1: "123", value2: "works", value3: "works", value4: "works", value5: "works", value6: "works", value7: "works", value8: "works" },
	]
}

interface Example {
	id: string;
	value : string;
}
