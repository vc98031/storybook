import path from 'path';
import initStoryshots, { renderWithOptions } from '../dist/types';

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
  test: renderWithOptions({}),
});
