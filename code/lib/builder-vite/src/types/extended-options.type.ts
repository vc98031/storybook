import type { Options } from '@storybook/core-common';

// Using instead of `Record<string, string>` to provide better aware of used options
type IframeOptions = {
  title: string;
};

export type ExtendedOptions = Options & IframeOptions;
