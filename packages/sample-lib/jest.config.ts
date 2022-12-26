import type { Config } from 'jest';

import config from '../../jest.config';

const jestConfig: Config = {
  ...config,
  testMatch: ['**/*.+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default jestConfig;
