import { Module } from '@nestjs/common';
import { UtilsModule } from 'sample-nestjs-lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
