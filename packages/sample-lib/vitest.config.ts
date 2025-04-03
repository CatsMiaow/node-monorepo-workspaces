import { defineProject, mergeConfig } from 'vitest/config';

import config from '../../vitest.config.js';

export default mergeConfig(config, defineProject({
  test: {
    include: ['**/*.(spec|test).ts'],
  },
}));
