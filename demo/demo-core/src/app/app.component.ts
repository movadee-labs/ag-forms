import { agFormService } from '@ag-forms/core';
import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'agf-demo-core',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form: FormGroup;
  public formMultiStep: FormArray;
  private schema = [{"type": "input"}, {"type": 'email'}];
  
  constructor(public fs: agFormService){
    this.form = this.fs.buildForm(this.schema);
    console.log("demo core - form", this.form)
  }
}
