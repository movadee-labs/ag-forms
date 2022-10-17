// https://github.com/storybookjs/storybook/issues/9682
if (localStorage['storybook-layout']) {
  const storybookLayout = JSON.parse(localStorage['storybook-layout']);
  const newLayout = { resizerPanel: { x: window.innerWidth - 400, y: 0 } };
  localStorage['storybook-layout'] = JSON.stringify({
    ...storybookLayout,
    ...newLayout,
  });
}
