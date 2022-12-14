/* eslint-disable no-await-in-loop */
import { $, cd } from 'zx';
import { commitEverythingInDirectory, initRepo } from './git-helper.mjs';
import { copy, createTmpDir } from './fs-helper.mjs';

export const frameworks = [
  'cra',
  'cra_typescript',
  'react',
  'angular',
  'web_components_typescript',
  'web_components_lit2',
  'vue',
  'vue3',
  'html',
  'preact',
  'svelte',
];

const logger = console;
const tmpFolder = await createTmpDir();
const scriptPath = __dirname;
const templatesFolderPath = `${scriptPath}/templates`;

const useNextVersion = process.argv.next;
const { remote } = process.argv;
const { push } = process.argv;
const forcePush = process.argv['force-push'];
const gitBranch = useNextVersion ? 'next' : 'main';
const sbCliVersion = useNextVersion ? 'next' : 'latest';

cd(tmpFolder);

await initRepo(gitBranch);
await copy(`${templatesFolderPath}/${gitBranch}/README.md`, tmpFolder);

// eslint-disable-next-line no-restricted-syntax
for (const framework of frameworks) {
  await $`npx sb@${sbCliVersion} repro --template ${framework} ${framework}`;
  await $`rm -rf ${framework}/.git`;
  await copy(`${templatesFolderPath}/${gitBranch}/.stackblitzrc`, `${tmpFolder}/${framework}`);
}

const commitMessage = `Storybook Examples - ${new Date().toDateString()}`;
await commitEverythingInDirectory(commitMessage);

logger.info(`
 All the examples were bootstrapped:
    - in ${tmpFolder}
    - using the '${sbCliVersion}' version of Storybook CLI
    - and committed on the '${gitBranch}' branch of a local Git repository 
 
 Also all the files in the 'templates' folder were copied at the root of the Git repository.
`);

try {
  if (remote) {
    await $`git remote add origin ${remote}`;

    if (push) {
      await $`git push --set-upstream origin ${gitBranch} ${forcePush ? '--force' : ''}`;
      const remoteRepoUrl = `${remote.replace('.git', '')}/tree/${gitBranch}`;
      logger.info(`🚀 Everything was pushed on ${remoteRepoUrl}`);
    } else {
      logger.info(`
   To publish these examples you just need to:
      - push the branch: 'git push --set-upstream origin ${gitBranch}' (you might need '--force' option ;))
  `);
    }
  } else {
    logger.info(`
   To publish these examples you just need to:
      - add a remote Git repository: 'git remote add origin XXXXXXX'
      - push the branch: 'git push --set-upstream origin ${gitBranch}' (you might need '--force' option ;))
  `);
  }
} catch (e) {
  logger.error(e);
}
