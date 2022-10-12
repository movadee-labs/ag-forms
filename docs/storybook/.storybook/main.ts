import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        measure: false,
        outline: false,
      },
    },
  ],
  stories: ['../src/*.stories.ts'],
  framework: '@storybook/angular',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};

module.exports = config;
