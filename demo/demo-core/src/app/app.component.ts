import { AgFormService } from '@ag-forms/core';
import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-core',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public form: FormGroup;
  public formMultiStep: FormArray;
  private schema = [{ type: 'input' }, { type: 'email' }];

  constructor(public fs: AgFormService) {
    this.form = this.fs.buildForm(this.schema);
  }
}
