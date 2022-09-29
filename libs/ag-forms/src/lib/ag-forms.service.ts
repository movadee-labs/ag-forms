import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AgFormsService {
  private _agForm: FormGroup;
	
	public get agForm(): FormGroup {
		console.log("i am in getter")
		return this._agForm;
	}
	
	public set agForm(value: FormGroup) {
		this._agForm = value;
	}

  constructor(public fb: FormBuilder) {}

  public buildForm(schema: any[]) {
    return this.agForm = this.fb.group({
      test: ['test field', [Validators.required]],
    })
  }
}
