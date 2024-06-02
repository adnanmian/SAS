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
exports.NameScreeningRequest = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("./common.entity");
let NameScreeningRequest = class NameScreeningRequest {
};
exports.NameScreeningRequest = NameScreeningRequest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NameScreeningRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", common_entity_1.SasHeader)
], NameScreeningRequest.prototype, "sasHeader", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], NameScreeningRequest.prototype, "orderingSenderCustomer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], NameScreeningRequest.prototype, "beneficiaryReceiverCustomer", void 0);
exports.NameScreeningRequest = NameScreeningRequest = __decorate([
    (0, typeorm_1.Entity)()
], NameScreeningRequest);
//# sourceMappingURL=nameScreeningRequest.entity.js.map