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
exports.ScreeningController = void 0;
const common_1 = require("@nestjs/common");
const screening_service_1 = require("./screening.service");
const nameScreeningRequest_entity_1 = require("./entities/Screening/nameScreeningRequest.entity");
const commonScreeningRequest_entity_1 = require("./entities/Screening/commonScreeningRequest.entity");
let ScreeningController = class ScreeningController {
    constructor(screeningService) {
        this.screeningService = screeningService;
    }
    processNameScreeningRequest(nameScreeningRequest) {
        var nsrp = this.screeningService.createNameScreeningResponse(nameScreeningRequest);
        console.log(`Received Name Scrrening Request`);
        return nsrp;
    }
    processCommonScreeningRequest(commonScreeningRequest) {
        var csrp = this.screeningService.createCommonScreeningResponse(commonScreeningRequest);
        console.log(`Received Name Scrrening Request`);
        return csrp;
    }
};
exports.ScreeningController = ScreeningController;
__decorate([
    (0, common_1.Post)('/api/v1/namescreening'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nameScreeningRequest_entity_1.NameScreeningRequest]),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "processNameScreeningRequest", null);
__decorate([
    (0, common_1.Post)('/api/v1/commonscreening'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commonScreeningRequest_entity_1.CommonScreeningRequest]),
    __metadata("design:returntype", void 0)
], ScreeningController.prototype, "processCommonScreeningRequest", null);
exports.ScreeningController = ScreeningController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [screening_service_1.ScreeningService])
], ScreeningController);
//# sourceMappingURL=screening.controller.js.map