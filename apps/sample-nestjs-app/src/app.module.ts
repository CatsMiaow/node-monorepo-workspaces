import { Module } from '@nestjs/common';
import { UtilsModule } from 'sample-nestjs-lib';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
