import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertModule } from './alert/alert.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    AlertModule, TaskModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot(), // Import TypeOrmModule.forRoot() to set up TypeORM
    // TypeOrmModule.forFeature([Alert]), // Import your entities using TypeOrmModule.forFeature()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
