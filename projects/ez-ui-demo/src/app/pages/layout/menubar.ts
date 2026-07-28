import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIMenuBar, MenuBarItem } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";

@Component({
    selector: 'app-menubar',
    imports: [
    FormsModule,
    CommonModule,
    EzUIMenuBar,
    SampleContainer
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-menubar [items]="items"/>'
		[enableTypescript]="true"
		ts="items : MenuBarItem[] = [
	{
		label: 'Button 1',
		icon: 'check'
	} as MenuBarItem,
	{
		label: 'Button 2',
		icon: 'x'
	} as MenuBarItem,
	{
		label: 'Button 3',
		icon: 'plus'
	} as MenuBarItem,
]"
	>
		<ng-template #preview>
			<ezui-menubar [items]="items"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Hierarchical"
		html='<ezui-menubar [items]="items"/>'
		[enableTypescript]="true"
		ts="items2 : MenuBarItem[] = [
	{
		label: 'Button 1',
		icon: 'check',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click')
			} as MenuBarItem
		] as MenuBarItem[]
	} as MenuBarItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as MenuBarItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: () => alert('opt 3 click')
					} as MenuBarItem
				] as MenuBarItem[]
			} as MenuBarItem,
		] as MenuBarItem[]
	} as MenuBarItem,
]"
	>
		<ng-template #preview>
			<ezui-menubar [items]="items2"/>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class MenuBar {
	items : MenuBarItem[] = [
		{
			label: 'Button 1',
			icon: 'check',
			command: () => alert('button 1 click')
		} as MenuBarItem,
		{
			label: 'Button 2',
			icon: 'x',
			command: () => alert('button 2 click')
		} as MenuBarItem,
		{
			label: 'Button 3',
			icon: 'plus',
			command: () => alert('button 3 click')
		} as MenuBarItem,
	]

	items2 : MenuBarItem[] = [
		{
			label: 'Button 1',
			icon: 'check',
			items: [
				{
					label: 'Opt 1',
					command: () => alert('opt 1 click')
				} as MenuBarItem,
				{
					label: 'Opt 2',
					command: () => alert('opt 2 click')
				} as MenuBarItem
			] as MenuBarItem[]
		} as MenuBarItem,
		{
			label: 'Button 2',
			icon: 'x',
			items: [
				{
					label: 'Opt 1',
					command: () => alert('opt 1 click')
				} as MenuBarItem,
				{
					label: 'Opt 2',
					command: () => alert('opt 2 click'),
					items: [
						{
							label: 'Opt 3',
							command: () => alert('opt 3 click')
						} as MenuBarItem
					] as MenuBarItem[]
				} as MenuBarItem,
			] as MenuBarItem[]
		} as MenuBarItem,
	]
}
