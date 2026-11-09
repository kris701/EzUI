import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIList } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-lists',
    imports: [
    FormsModule,
    CommonModule,
    EzUIList,
    SampleContainer
],
    template: `
    <app-samplecontainer
		label="Simple"
		html='<ezui-list />'>
		<ng-template #preview>
			<div style="height:300px;display:flex;flex-direction:column">
				<ezui-list />
			</div>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Loading"
		html='<ezui-list [isLoading]="isLoading"/>'>
		<ng-template #preview>
			<div style="height:300px;display:flex;flex-direction:column">
				<ezui-list [isLoading]="isLoading" />
			</div>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Simple 2"
		html='<ezui-list [values]="data">
	<ng-template #listRows let-item>
		<div style="display:flex;flex-direction:row;gap:10px;">
			<span>\{\{ item.id \} \}</span>
			<span>\{\{ item.value \} \}</span>
			<span>\{\{ item.desc \} \}</span>
		</div>
	</ng-template>
</ezui-list>'
		[enableTypescript]="true"
		ts='data : any = [
	{ id:"abc", value: "123", desc: "works" },
	{ id:"123", value: "wwww", desc: "works" },
	{ id:"55g", value: "1115892", desc: "works :)" },
	{ id:"dfg", value: "yyes", desc: "works" },
]'>
		<ng-template #preview>
			<ezui-list [values]="data">
				<ng-template #listRows let-item>
					<div style="display:flex;flex-direction:row;gap:10px;">
						<span>{{item.id}}</span>
						<span>{{item.value}}</span>
						<span>{{item.desc}}</span>
					</div>
				</ng-template>
			</ezui-list>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Pagination"
		html='<ezui-list [values]="longData" [pageSize]="pageSize">
	<ng-template #listRows let-item>
		<div style="display:flex;flex-direction:row;gap:10px;">
			<span>\{\{ item.id \} \}</span>
			<span>\{\{ item.value \} \}</span>
			<span>\{\{ item.desc \} \}</span>
		</div>
	</ng-template>
</ezui-list>'
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
			<ezui-list [values]="longData" [pageSize]="pageSize">
				<ng-template #listRows let-item>
					<div style="display:flex;flex-direction:row;gap:10px;">
						<span>{{ item.id }}</span>
						<span>{{ item.value }}</span>
						<span>{{ item.desc }}</span>
					</div>
				</ng-template>
			</ezui-list>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class Lists {
	isLoading = signal<boolean>(true);

	data : any = [
		{ id:"abc", value: "123", desc: "works" },
		{ id:"123", value: "wwww", desc: "works" },
		{ id:"55g", value: "1115892", desc: "works :)" },
		{ id:"dfg", value: "yyes", desc: "works" },
	]

	pageSize = signal<number>(20);
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
}
