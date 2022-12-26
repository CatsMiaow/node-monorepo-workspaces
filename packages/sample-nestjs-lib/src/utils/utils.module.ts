import { Module } from '@nestjs/common';

import { SampleService } from './providers';

@Module({
  providers: [SampleService],
  exports: [SampleService],
})
export class UtilsModule {}
