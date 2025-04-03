import { Test, TestingModule } from '@nestjs/testing';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { AppController } from '../src/app.controller.js';
import { AppModule } from '../src/app.module.js';
import { AppService } from '../src/app.service.js';

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
