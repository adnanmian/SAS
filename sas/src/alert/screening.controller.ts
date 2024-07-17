import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScreeningService } from './screening.service';
import { NameScreeningRequest } from './entities/Screening/nameScreeningRequest.entity';
import { NameScreeningResponse } from './entities/Screening/nameScreeningResponse.entity';
import { CommonScreeningRequest } from './entities/Screening/commonScreeningRequest.entity';
import { CommonScreeningResponse } from './entities/Screening/commonScreeningResponse.entity';
import { TBMLStatusRequest } from './entities/Screening/tbmlStatusRequest.entity';
import { TBMLStatusResponse } from './entities/Screening/tbmlStatusResponse.entity';

@Controller()
export class ScreeningController {
  constructor(private readonly screeningService: ScreeningService) {}

  
  @Post('/api/v1/namescreening')
  processNameScreeningRequest(@Body() nameScreeningRequest: NameScreeningRequest) {

    var nsrp : NameScreeningResponse = this.screeningService.createNameScreeningResponse(nameScreeningRequest);
    console.log(`Received Name Scrrening Request`);
    return nsrp;
    // return this.alertService.create(alert);
  }

  @Post('/api/v1/commonscreening')
  processCommonScreeningRequest(@Body() commonScreeningRequest: CommonScreeningRequest) {

    var csrp : CommonScreeningResponse = this.screeningService.createCommonScreeningResponse(commonScreeningRequest);
    console.log(`Received TBML Status Request`);
    
    return csrp;
    // return this.alertService.create(alert);
  }

  @Post('/api/v1/tbmlstatus')
  processTBMLStatusRequest(@Body() tbmlStatusRequest: TBMLStatusRequest) {

    var nsrp : TBMLStatusResponse  = this.screeningService.processTBMLStatus(tbmlStatusRequest);
    console.log(`Received TBML Status Response`);
    return nsrp;
    // return this.alertService.create(alert);
  }



  
  
}
