import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiFiles } from '@taiga-ui/kit';

@Component({
	selector: 'ezui-fileinput',
    imports: [FormsModule, TuiFiles],
	template:`
		<label tuiInputFiles>
			<input
				#validator="tuiInputFilesValidator"
				[accept]="accept"
				tuiInputFiles
				[ngModel]="files()"
				(ngModelChange)="onChange($event)"
				[disabled]="disabled"
			/>
		</label>

		<tui-files>
			@for(file of files(); track file){
				<tui-file
					state="normal"
					[file]="file"
					(remove)="removeFile(file)"
				/>
			}
		</tui-files>
	`
})
export class EzUIFileInput {
	public files = signal<File[]>([]);

	@Input() disabled: boolean = false;
	@Input() accept: string = "*/*";

	public clear(){
		this.files.set([]);
	}

	protected onChange(files: File[] | File): void {
		if (files instanceof File)
			this.files.set([files]);
		else
			this.files.set(files);
	}

	removeFile(file : File){
		const files = this.files();
		const index = files.indexOf(file);
		if (index != -1){
			files.splice(index, 1);
			this.files.set(files);
		}
	}
}
