import React, { ComponentProps } from 'react';
import deprecate from 'util-deprecate';
import { dedent } from 'ts-dedent';
import { Canvas } from './Canvas';

export const Preview = deprecate(
  (props: ComponentProps<typeof Canvas>) => <Canvas {...props} />,
  dedent`
    Preview doc block has been renamed to Canvas.

    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed
  `
);
