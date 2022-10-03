import { AgFormService } from '@ag-forms/core';
import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent, MockProvider } from 'ng-mocks';

import { InputComponent } from './input/input.component';
import { TailwindCdkComponent } from './tailwindcss-forms.component';

const schema = [{ type: 'input' }];

const testForm = new FormGroup({
  test: new FormControl('abc'),
});

describe('TailwindCdkComponent', () => {
  let spectator: Spectator<TailwindCdkComponent>;

  const createComponent = createComponentFactory({
    component: TailwindCdkComponent,
    declarations: [MockComponent(InputComponent)],
    providers: [
      MockProvider(AgFormService, {
        buildForm: () => testForm,
      }),
    ],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({ props: { schema } });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create 2', () => {
    expect(spectator.component.form.controls['test'].value).toEqual('abc');
  });
});
