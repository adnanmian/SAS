"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let WorkflowService = class WorkflowService {
    constructor(httpService, schedulerRegistry, logger) {
        this.httpService = httpService;
        this.schedulerRegistry = schedulerRegistry;
        this.logger = logger;
        this.count = 0;
    }
    callESBAfterinterval(uniqueTxnRefNo, callbackEndPoint, notification) {
        var time = Math.floor((Math.random() * 10) + 1);
        time = time * 1000;
        console.log(`calling timer for ${time.toString()}`);
        this.addInterval(uniqueTxnRefNo.toString(), time, callbackEndPoint, notification);
    }
    addInterval(name, milliseconds, callbackEndPoint, notification) {
        const callback = async () => {
            this.logger.warn(`Interval ${name} executing at time (${milliseconds})!`);
            console.log(`calling timer name ${name}`);
            const response = await this.httpService.post(callbackEndPoint, notification)
                .toPromise();
            this.deleteInterval(name);
        };
        const interval = setInterval(callback, milliseconds);
        this.schedulerRegistry.addInterval(name, interval);
    }
    deleteInterval(name) {
        if (this.schedulerRegistry.doesExist('interval', name)) {
            this.schedulerRegistry.deleteInterval(name);
            this.logger.warn(`Timeout ${name} deleted!`);
        }
    }
};
exports.WorkflowService = WorkflowService;
exports.WorkflowService = WorkflowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        schedule_1.SchedulerRegistry,
        common_1.Logger])
], WorkflowService);
//# sourceMappingURL=workflow.service.js.map