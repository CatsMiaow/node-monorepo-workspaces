import { Test, TestingModule } from '@nestjs/testing';

import { SampleService, UtilsModule } from '../src';

describe('sample-nestjs-lib-test', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [UtilsModule],
    }).compile();
  });

  test('getFoo', () => {
    const sample = app.get(SampleService);
    expect(sample.getFoo()).toBe('foo');
  });

  afterAll(async () => {
    await app.close();
  });
});
