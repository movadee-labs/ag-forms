import { AgFormService } from '@ag-forms/core';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FORM_ELEMENTS } from './form-elements';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ag-form',
  templateUrl: './tailwindcss-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TailwindCdkComponent implements OnInit {
  @ViewChild('formElement', { static: true, read: ViewContainerRef })
  formElement: ViewContainerRef;
  @Input() schema: any;
  public form: FormGroup;

  constructor(public fs: AgFormService) {}

  ngOnInit(): void {
    if (this.schema.length) {
      this.form = this.fs.buildForm(this.schema);
      this.formElement.createComponent(FORM_ELEMENTS.input).instance.control = 
      <FormControl>this.form.controls['test'];
    }
  }
}
