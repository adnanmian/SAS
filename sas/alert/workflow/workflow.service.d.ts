import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { Notification } from '../entities/Screening/common.entity';
export declare class WorkflowService {
    private readonly httpService;
    private schedulerRegistry;
    private logger;
    count: number;
    constructor(httpService: HttpService, schedulerRegistry: SchedulerRegistry, logger: Logger);
    callESBAfterinterval(uniqueTxnRefNo: string, callbackEndPoint: string, notification: Notification): void;
    private addInterval;
    deleteInterval(name: string): void;
}
