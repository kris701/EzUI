import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiChip, TuiMessage } from '@taiga-ui/kit';
import { EzUITable, EzUITableDateFilter, EzUITableSelectFilter, EzUITableTextFilter, EzUITTableSortableColumn } from 'EzUI';
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
	TuiChip
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
		<td tuiTd>\{\{ item.timestamp | date: "dd/MM/yyyy HH:mm:ss" \} \}</td>
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
					<td tuiTd>{{ item.timestamp| date: 'dd/MM/yyyy HH:mm:ss' }}</td>
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
		{ id:"abc", type: "Type 1", timestamp: new Date() },
		{ id:"123", type: "Type 1", timestamp: new Date() },
		{ id:"55g", type: "Type 2", timestamp: new Date() },
		{ id:"dfg", type: "Type 3", timestamp: new Date() },
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
}
