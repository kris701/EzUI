import { Routes } from '@angular/router';
import { BooleanInput } from './booleaninput';
import { DateInput } from './dateinput';
import { DateTimeInput } from './datetimeinput';
import { FileInput } from './fileinput';
import { MultiSelect } from './multiselect';
import { NumberInput } from './numberinput';
import { PasswordInput } from './passwordinput';
import { Select } from './selectinput';
import { TextInput } from './textInput';
import { TreeSelect } from './treeselectinput';

export default [
    { path: 'text', component: TextInput },
    { path: 'password', component: PasswordInput },
    { path: 'number', component: NumberInput },
    { path: 'date', component: DateInput },
    { path: 'datetime', component: DateTimeInput },
    { path: 'multiselect', component: MultiSelect },
    { path: 'select', component: Select },
    { path: 'treeselect', component: TreeSelect },
    { path: 'files', component: FileInput },
    { path: 'boolean', component: BooleanInput },
] as Routes;
