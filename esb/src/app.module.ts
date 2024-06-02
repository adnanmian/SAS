import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaData, Notification, PepReview, SasHeader } from './notification.entity';

@Module({
  imports: [Notification, SasHeader, MetaData, PepReview],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
