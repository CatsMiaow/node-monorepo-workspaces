import { Module } from '@nestjs/common';

import { SampleService } from './providers/index.js';

@Module({
  providers: [SampleService],
  exports: [SampleService],
})
export class UtilsModule {}
