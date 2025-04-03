import { describe, expect, test } from 'vitest';

import { getBar } from '../src/index.js';

describe('sample-lib-test', () => {
  test('getBar', () => {
    expect(getBar()).toBe('bar');
  });
});
