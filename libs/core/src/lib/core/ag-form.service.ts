import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AgFormService {
  private _agForm: FormGroup;

  public get agForm(): FormGroup {
    return this._agForm;
  }

  public set agForm(value: FormGroup) {
    this._agForm = value;
  }

  constructor(public fb: FormBuilder) {}

  public buildForm(schema: any): FormGroup {
    this.agForm = this.fb.group({
      test: ['test field', [Validators.required]],
    });
    return this.agForm;
  }

  // public buildMultiStepForm(schema: any[]): FormArray {
  //   this.agForm = this.fb.array([]);
  // 	this.agForm.push(this.fb.group({
  //     test: ['test field', [Validators.required]]
  //   }))
  // 	return this.agForm;
  // }
}
