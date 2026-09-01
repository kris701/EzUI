import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EzUIPopoutMenu, PopoutMenuItem } from 'EzUI';
import { SampleContainer } from "../../common/samplecontainer";
import { TuiChip } from '@taiga-ui/kit';

@Component({
    selector: 'app-menubar',
    imports: [
    FormsModule,
    CommonModule,
    SampleContainer,
    EzUIPopoutMenu,
	TuiChip
],
    template: `
	<app-samplecontainer
		label="Simple"
		html='<ezui-popoutmenu [items]="items" label="Click Me"/>'
		[enableTypescript]="true"
		ts="items : PopoutMenuItem[] = [
	{
		label: 'Button 1',
		icon: 'check'
	} as PopoutMenuItem,
	{
		label: 'Some longer value name here',
		icon: 'x'
	} as PopoutMenuItem,
	{
		label: 'Button 3',
		icon: 'plus'
	} as PopoutMenuItem,
]"
	>
		<ng-template #preview>
			<ezui-popoutmenu [items]="items" label="Click Me"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Hierarchical"
		html='<ezui-popoutmenu [items]="items" label="Click Me"/>'
		[enableTypescript]="true"
		ts="items2 : PopoutMenuItem[] = [
	{
		label: 'Button 1',
		icon: 'check',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as PopoutMenuItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click')
			} as PopoutMenuItem
		] as PopoutMenuItem[]
	} as PopoutMenuItem,
	{
		label: 'Button 2',
		icon: 'x',
		items: [
			{
				label: 'Opt 1',
				command: () => alert('opt 1 click')
			} as PopoutMenuItem,
			{
				label: 'Opt 2',
				command: () => alert('opt 2 click'),
				items: [
					{
						label: 'Opt 3',
						command: () => alert('opt 3 click')
					} as PopoutMenuItem
				] as PopoutMenuItem[]
			} as PopoutMenuItem,
		] as PopoutMenuItem[]
	} as PopoutMenuItem,
]"
	>
		<ng-template #preview>
			<ezui-popoutmenu [items]="items2" label="Click Me"/>
		</ng-template>
	</app-samplecontainer>

	<app-samplecontainer
		label="Templating"
		html='<ezui-popoutmenu [items]="items" label="Click Me"/>'
		[enableTypescript]="true"
		ts="items : PopoutMenuItem[] = [
	{
		label: 'Button 1',
		icon: 'check'
	} as PopoutMenuItem,
	{
		label: 'Some longer value name here',
		icon: 'x'
	} as PopoutMenuItem,
	{
		label: 'Button 3',
		icon: 'plus'
	} as PopoutMenuItem,
]"
	>
		<ng-template #preview>
			<ezui-popoutmenu [items]="items" label="Click Me">
				<ng-template #itemTemplate let-item>
					<span tuiChip appearance="info">Special text: {{item.label}}</span>
				</ng-template>
			</ezui-popoutmenu>
		</ng-template>
	</app-samplecontainer>
    `,
    host: {
        class: 'base-view'
    }
})
export class PopoutMenu {
	items : PopoutMenuItem[] = [
		{
			label: 'Button 1',
			icon: 'check',
			command: () => alert('button 1 click')
		} as PopoutMenuItem,
		{
			label: 'Some longer value name here',
			icon: 'x',
			command: () => alert('button 2 click')
		} as PopoutMenuItem,
		{
			label: 'Button 3',
			icon: 'plus',
			command: () => alert('button 3 click')
		} as PopoutMenuItem,
	]

	items2 : PopoutMenuItem[] = [
		{
			label: 'Button 1',
			icon: 'check',
			items: [
				{
					label: 'Opt 1',
					command: () => alert('opt 1 click')
				} as PopoutMenuItem,
				{
					label: 'Opt 2',
					command: () => alert('opt 2 click')
				} as PopoutMenuItem
			] as PopoutMenuItem[]
		} as PopoutMenuItem,
		{
			label: 'Button 2',
			icon: 'x',
			items: [
				{
					label: 'Opt 1',
					command: () => alert('opt 1 click')
				} as PopoutMenuItem,
				{
					label: 'Opt 2',
					command: () => alert('opt 2 click'),
					items: [
						{
							label: 'Opt 3',
							command: () => alert('opt 3 click')
						} as PopoutMenuItem
					] as PopoutMenuItem[]
				} as PopoutMenuItem,
			] as PopoutMenuItem[]
		} as PopoutMenuItem,
	]
}
