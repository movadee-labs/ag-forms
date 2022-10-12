import { Meta, moduleMetadata } from '@storybook/angular';

import { StorybookComponent } from './storybook.component';

export default {
  title: 'StorybookComponent',
  component: StorybookComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    toolbar: {
      remount: { hidden: true },
      title: { hidden: true },
      zoom: { hidden: true },
      eject: { hidden: true },
      copy: { hidden: true },
      fullscreen: { hidden: true },
      'storybook/background': { hidden: true },
    },
  },
} as Meta<StorybookComponent>;

export const Input = (args: StorybookComponent) => ({
  // props: args,
});

export const Input2 = (args: StorybookComponent) => ({
  // props: args,
});
