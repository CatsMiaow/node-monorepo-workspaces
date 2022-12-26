import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  public getFoo(): string {
    return 'foo';
  }

  public isFoo(val: string): boolean {
    return val === 'foo';
  }
}
