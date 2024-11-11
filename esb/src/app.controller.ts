import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Notification } from './notification.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private logger: Logger
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('notification')
  receiveNotification(@Body() notification: Notification){
    
    
    this.logger.log(`Notification \n ${  JSON.stringify(notification, null, 2) }`);
    
    //this.logger.log(`Notification \n ${  JSON.stringify(notification)}`);
    
    // console.log(`Notification received ${ JSON.stringify(notification) }`);
 
    return "SUCCESS";
  }



}
