"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModule = void 0;
const common_1 = require("@nestjs/common");
const alert_service_1 = require("./alert.service");
const alert_controller_1 = require("./alert.controller");
const typeorm_1 = require("@nestjs/typeorm");
const alert_entity_1 = require("./entities/alert.entity");
const alertLog_entity_1 = require("./entities/alertLog.entity");
const workflow_service_1 = require("./workflow/workflow.service");
const axios_1 = require("@nestjs/axios");
const nameScreeningRequest_entity_1 = require("./entities/Screening/nameScreeningRequest.entity");
const nameScreeningResponse_entity_1 = require("./entities/Screening/nameScreeningResponse.entity");
const common_entity_1 = require("./entities/Screening/common.entity");
const screening_controller_1 = require("./screening.controller");
const screening_service_1 = require("./screening.service");
let AlertModule = class AlertModule {
};
exports.AlertModule = AlertModule;
exports.AlertModule = AlertModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([alert_entity_1.Alert, alertLog_entity_1.AlertLog, nameScreeningRequest_entity_1.NameScreeningRequest, nameScreeningResponse_entity_1.NameScreeningResponse,
                common_entity_1.SasHeader,
                common_entity_1.MetaData,
                common_entity_1.Customer,
                common_entity_1.CustomerDetails,
                common_entity_1.MatchDetail,
                common_entity_1.AlertDetails,
                common_entity_1.MatchDetails,
                common_entity_1.Customer,
            ]),
        ],
        controllers: [alert_controller_1.AlertController, screening_controller_1.ScreeningController],
        providers: [alert_service_1.AlertService, typeorm_1.TypeOrmModule, workflow_service_1.WorkflowService, screening_service_1.ScreeningService, common_1.Logger],
    })
], AlertModule);
//# sourceMappingURL=alert.module.js.map