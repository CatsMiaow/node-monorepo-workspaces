import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../src/app.controller';
import { AppModule } from '../src/app.module';
import { AppService } from '../src/app.service';

describe('sample-nestjs-app-test', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  test('getHello"', () => {
    const appController = app.get(AppController);
    expect(appController.getHello()).toBe('Hello World!');
  });

  // method in sample-nestjs-lib
  test('isGetFoo"', () => {
    const appService = app.get(AppService);
    expect(appService.isGetFoo()).toBe(true);
  });

  // method in sample-lib
  test('isGetBar"', () => {
    const appService = app.get(AppService);
    expect(appService.isGetBar()).toBe(true);
  });

  afterAll(async () => {
    await app.close();
  });
});
