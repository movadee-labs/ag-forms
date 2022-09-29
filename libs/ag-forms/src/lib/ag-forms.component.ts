import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AgFormsService } from './ag-forms.service';
import { InputComponent } from './input/input.component';

const components = {
  comp1: InputComponent,
};

@Component({
  selector: 'ag-forms',
	template: `
		<form [formGroup]="form">
			<ng-template #formUI></ng-template>
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgFormsComponent implements OnInit {
	@ViewChild('formUI', { static: true, read: ViewContainerRef }) formUI: ViewContainerRef;
	@Input() schema: any;
	public form: FormGroup;
	 
  constructor(public fs: AgFormsService){}
	
  ngOnInit(): void {
		this.form = this.fs.buildForm(this.schema);
		this.formUI.createComponent(components.comp1).instance.control = <FormControl>this.fs.agForm.controls["test"];
	}
}
