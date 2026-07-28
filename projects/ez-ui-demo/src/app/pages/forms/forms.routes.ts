import { Routes } from '@angular/router';
import { DateInput } from './dateinput';
import { DateTimeInput } from './datetimeinput';
import { FileInput } from './fileinput';
import { MultiSelect } from './multiselect';
import { NumberInput } from './numberinput';
import { PasswordInput } from './passwordinput';
import { TextInput } from './textInput';

export default [
    { path: 'text', component: TextInput },
    { path: 'password', component: PasswordInput },
    { path: 'number', component: NumberInput },
    { path: 'date', component: DateInput },
    { path: 'datetime', component: DateTimeInput },
    { path: 'multiselect', component: MultiSelect },
    { path: 'files', component: FileInput },
] as Routes;
