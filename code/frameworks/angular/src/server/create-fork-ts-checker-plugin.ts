/* eslint-disable func-names */
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { logger } from '@storybook/node-logger';

import { Options } from 'ts-loader';

export default function (tsLoaderOptions: Partial<Options>) {
  if (tsLoaderOptions && tsLoaderOptions.configFile) {
    return new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: tsLoaderOptions.configFile },
      async: true,
    });
  }

  logger.info('=> Using default options for ForkTsCheckerWebpackPlugin');
  return new ForkTsCheckerWebpackPlugin();
}
