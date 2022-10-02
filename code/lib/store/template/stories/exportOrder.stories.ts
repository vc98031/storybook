import globalThis from 'global';

export default {
  component: globalThis.Components.Pre,
  args: { text: 'Check that Story2 is listed before Story1' },
};

export const Story1 = {};
export const Story2 = {};

// eslint-disable-next-line no-underscore-dangle
export const __namedExportsOrder = ['Story2', 'Story1'];
