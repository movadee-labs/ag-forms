import { AgFormService } from '@ag-forms/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent, MockProvider } from 'ng-mocks';

import { InputComponent } from './input/input.component';
import { TailwindCdkComponent } from './tailwindcss-forms.component';

const schema = [];

describe('TailwindCdkComponent', () => {
  let spectator: Spectator<TailwindCdkComponent>;

  const createComponent = createComponentFactory({
    component: TailwindCdkComponent,
    declarations: [MockComponent(InputComponent)],
    providers: [MockProvider(AgFormService)],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({ props: { schema } });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
