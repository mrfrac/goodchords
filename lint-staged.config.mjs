import path from 'node:path';

const quote = (file) => `"${path.resolve(file)}"`;

export default {
  'packages/goodchords/src/**/*.ts': (files) => [
    `prettier --write ${files.map(quote).join(' ')}`,
    'npm run lint',
    'npm run typecheck',
  ],
};
