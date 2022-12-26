import { Injectable } from '@nestjs/common';
import { getBar, isBar } from 'sample-lib';
import { SampleService } from 'sample-nestjs-lib';

@Injectable()
export class AppService {
  constructor(private sample: SampleService) {}

  public getHello(): string {
    return 'Hello World!';
  }

  public isGetFoo(): boolean {
    return this.sample.isFoo(this.sample.getFoo());
  }

  public isGetBar(): boolean {
    return isBar(getBar());
  }
}
