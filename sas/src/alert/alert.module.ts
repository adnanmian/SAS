import { Logger, Module } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertController } from './alert.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alert } from './entities/alert.entity';
// import { AlertDetails } from './entities/alertDetails.entity';
import { AlertLog } from './entities/alertLog.entity';
import { WorkflowService } from './workflow/workflow.service';
import { HttpModule } from '@nestjs/axios';
import { NameScreeningRequest } from './entities/Screening/nameScreeningRequest.entity';
import {  NameScreeningResponse } from './entities/Screening/nameScreeningResponse.entity';
import { AlertDetails, Customer, CustomerDetails, MatchDetail, MatchDetails, MetaData, SasHeader } from './entities/Screening/common.entity';
import { ScreeningController } from './screening.controller';
import { ScreeningService } from './screening.service';


@Module({

  imports: [
    HttpModule,
    // TypeOrmModule.forRoot(), // Import TypeOrmModule.forRoot() to set up TypeORM
    TypeOrmModule.forFeature([Alert, AlertLog,  NameScreeningRequest, NameScreeningResponse,
      SasHeader,
      MetaData,
      Customer,
      CustomerDetails,
      MatchDetail,
      AlertDetails,
      MatchDetails,
      Customer,


    ]), // Import your entities using TypeOrmModule.forFeature()
  ],
  controllers: [AlertController, ScreeningController],
  providers: [AlertService, TypeOrmModule, WorkflowService, ScreeningService, Logger],
})
export class AlertModule {}

