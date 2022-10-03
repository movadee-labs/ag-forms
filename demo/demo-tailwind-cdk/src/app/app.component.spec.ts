import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent - Demo Tailwind CDK', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
