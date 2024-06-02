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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alert_entity_1 = require("./entities/alert.entity");
const workflow_service_1 = require("./workflow/workflow.service");
let AlertService = class AlertService {
    constructor(alertRepository, workflowService) {
        this.alertRepository = alertRepository;
        this.workflowService = workflowService;
    }
    async create(alert) {
        console.log(`Alert Name  ${alert.strategy}`);
        console.log(`Alert email  ${alert.sysId}`);
        return this.alertRepository.insert(alert);
    }
    async findAll() {
        return this.alertRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} alert`;
    }
    update(id, updateAlertDto) {
        return `This action updates a #${id} alert`;
    }
    remove(id) {
        return `This action removes a #${id} alert`;
    }
};
exports.AlertService = AlertService;
exports.AlertService = AlertService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alert_entity_1.Alert)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        workflow_service_1.WorkflowService])
], AlertService);
//# sourceMappingURL=alert.service.js.map