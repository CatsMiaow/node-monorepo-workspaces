import { getBar } from '../src';

describe('sample-lib-test', () => {
  test('getBar', () => {
    expect(getBar()).toBe('bar');
  });
});
