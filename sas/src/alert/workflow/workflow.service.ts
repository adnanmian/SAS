import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';
import { MetaData, Notification } from '../entities/Screening/common.entity';
import internal from 'stream';

@Injectable()
export class WorkflowService {


     count :number = 0;

    constructor(
        private readonly httpService: HttpService,
        private schedulerRegistry: SchedulerRegistry,
        private logger: Logger
    ) {}

    callESBAfterinterval(uniqueTxnRefNo : string, callbackEndPoint : string, notification: Notification){
        var time = Math.floor((Math.random() * 10) + 1);
        time = time * 1000
        console.log(`calling timer for ${ time.toString()}`);
        this.addInterval(uniqueTxnRefNo.toString(), time, callbackEndPoint, notification);
    }

    private addInterval(name: string, milliseconds: number, callbackEndPoint : string, notification: Notification) {
        const callback = async () => {
          this.logger.warn(`Interval ${name} executing at time (${milliseconds})!`);

            console.log(`calling timer name ${ name }`);
            const response: AxiosResponse = await this.httpService.post(callbackEndPoint, notification)
                .toPromise();
            this.deleteInterval(name);
        };
        const interval = setInterval(callback, milliseconds);
        this.schedulerRegistry.addInterval(name, interval);
      }

      deleteInterval(name: string) {
        if (this.schedulerRegistry.doesExist('interval',name) ){
          this.schedulerRegistry.deleteInterval(name);
          this.logger.warn(`Timeout ${name} deleted!`);
        }
      
      }
}
