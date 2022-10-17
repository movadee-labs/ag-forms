import { create } from '@storybook/theming/create';

export const globalTypes = {
  framework: {
    defaultValue: 'sidebyside',
    toolbar: {
      items: [
        { value: 'tailwind', title: 'TailwindCSS' },
        { value: 'material', title: 'Angular Material' },
        { value: 'sidebyside', title: 'TailwindCSS & Angular Material' },
      ],
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  toolbar: {
    zoom: { hidden: true },
    copy: { hidden: true },
    eject: { hidden: true },
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'ag-forms',
      brandUrl: 'https://storybook.js.org',
      // To control appearance:
      // brandImage:
      //   'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg',
    }),
    panelPosition: 'right',
  },
};
