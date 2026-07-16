import { Routes } from '@angular/router';
import { NumberInput } from './numberinput';
import { PasswordInput } from './passwordinput';
import { TextInput } from './textInput';

export default [
    { path: 'text', component: TextInput },
    { path: 'password', component: PasswordInput },
    { path: 'number', component: NumberInput },
] as Routes;
