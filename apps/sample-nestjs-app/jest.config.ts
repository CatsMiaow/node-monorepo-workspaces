import type { Config } from 'jest';

import config from '../../jest.config';

const jestConfig: Config = {
  ...config,
  testMatch: ['**/*.+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
  /* moduleNameMapper: {
    'sample-nestjs-lib': '<rootDir>/../../packages/sample-nestjs-lib/src',
    'sample-lib': '<rootDir>/../../packages/sample-lib/src'
  }, */
};

export default jestConfig;
