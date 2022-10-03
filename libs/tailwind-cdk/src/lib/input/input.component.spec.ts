import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let spectator: Spectator<InputComponent>;

  const createComponent = createComponentFactory({
    component: InputComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
