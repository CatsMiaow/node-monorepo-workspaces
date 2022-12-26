import { helloWorld, isGetBar } from '../src/service';

describe('sample-app-test', () => {
  test('helloWorld', () => {
    expect(helloWorld()).toBe('Hello World!');
  });

  // method in sample-lib
  test('isGetBar', () => {
    expect(isGetBar()).toBe(true);
  });
});
