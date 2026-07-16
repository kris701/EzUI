import { Routes } from '@angular/router';
import { DateInput } from './dateinput';
import { MultiSelect } from './multiselect';
import { NumberInput } from './numberinput';
import { PasswordInput } from './passwordinput';
import { TextInput } from './textInput';

export default [
    { path: 'text', component: TextInput },
    { path: 'password', component: PasswordInput },
    { path: 'number', component: NumberInput },
    { path: 'date', component: DateInput },
    { path: 'multiselect', component: MultiSelect },
] as Routes;
