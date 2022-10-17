import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { StorybookComponent } from './storybook.component';

export default {
  title: 'Storybook Component',
  component: StorybookComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story = (args, { globals: { framework } }) => ({
  props: { ...args, framework },
});

export const Default = Template.bind({});
Default.args = {
  form_schema: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};
