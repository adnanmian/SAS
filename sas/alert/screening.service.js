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
exports.ScreeningService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nameScreeningRequest_entity_1 = require("./entities/Screening/nameScreeningRequest.entity");
const nameScreeningResponse_entity_1 = require("./entities/Screening/nameScreeningResponse.entity");
const common_entity_1 = require("./entities/Screening/common.entity");
const commonScreeningResponse_entity_1 = require("./entities/Screening/commonScreeningResponse.entity");
const workflow_service_1 = require("./workflow/workflow.service");
const CALLBACK = "Callback";
let ScreeningService = class ScreeningService {
    constructor(nameScreeningRequestRepository, workflowService) {
        this.nameScreeningRequestRepository = nameScreeningRequestRepository;
        this.workflowService = workflowService;
    }
    findAll() {
        return this.nameScreeningRequestRepository.find();
    }
    async remove(id) {
        await this.nameScreeningRequestRepository.delete(id);
    }
    createNameScreeningResponse(nameScreeningRequest) {
        var hit = false;
        const response = new nameScreeningResponse_entity_1.NameScreeningResponse();
        try {
            response.sasHeader = new common_entity_1.SasHeader();
            response.sasHeader.zoneId = nameScreeningRequest.sasHeader.zoneId;
            response.sasHeader.regionCode = nameScreeningRequest.sasHeader.regionCode;
            response.sasHeader.branchId = nameScreeningRequest.sasHeader.branchId;
            response.sasHeader.departmentId = nameScreeningRequest.sasHeader.departmentId;
            response.sasHeader.userGroup = nameScreeningRequest.sasHeader.userGroup;
            response.sasHeader.channelId = nameScreeningRequest.sasHeader.channelId;
            response.sasHeader.applicationId = nameScreeningRequest.sasHeader.applicationId;
            response.sasHeader.applicationModule = nameScreeningRequest.sasHeader.applicationModule;
            response.sasHeader.uniqueTxnRefNo = nameScreeningRequest.sasHeader.uniqueTxnRefNo;
            response.sasHeader.messageType = nameScreeningRequest.sasHeader.messageType;
            response.sasHeader.sysId = nameScreeningRequest.sasHeader.sysId;
            response.sasHeader.timestamp = nameScreeningRequest.sasHeader.timestamp;
            response.sasHeader.metaData = nameScreeningRequest.sasHeader.metaData.map((item) => ({
                name: item.name,
                value: item.value,
            }));
            const notification = new common_entity_1.Notification();
            notification.sasHeader = nameScreeningRequest.sasHeader;
            const matchDetails = new common_entity_1.MatchDetails();
            response.matchDetails = matchDetails;
            matchDetails.details = {
                alertId: this.alertId(),
                alertDetails: []
            };
            nameScreeningRequest.orderingSenderCustomer.map((customer) => {
                console.log(`Customer Name ${customer.fullName}`);
                matchDetails.uid = customer.uid;
                if (this.hitNoHit() === 'HIT') {
                    matchDetails.matchFound = 'HIT';
                    hit = true;
                    matchDetails.maxScore = this.score();
                    const alertDetail = new common_entity_1.AlertDetails();
                    alertDetail.scannedName = customer.fullName;
                    alertDetail.matchedName = customer.fullName;
                    alertDetail.uidSerialNo = this.serialNumber();
                    alertDetail.matchScore = this.score();
                    if (alertDetail.matchScore > matchDetails.maxScore) {
                        matchDetails.maxScore = alertDetail.matchScore;
                    }
                    alertDetail.pepFlag = this.pepFlag();
                    alertDetail.watchlistName = this.watchlist();
                    alertDetail.keyword = "PEP~EU~UN~";
                    matchDetails.details.alertDetails.push(alertDetail);
                    matchDetails.description = "";
                    if (alertDetail.pepFlag === 'Y') {
                        var pepReview = {
                            uid: customer.uid,
                            idNumber: customer.idNumber,
                            idType: customer.idType,
                            reviewFlag: alertDetail.pepFlag,
                            pepFlag: alertDetail.pepFlag
                        };
                        notification.pepReview.push(pepReview);
                    }
                }
            });
            if (hit) {
                const metadata = this.findMetaDataByName(nameScreeningRequest.sasHeader.metaData, CALLBACK);
                if (metadata) {
                    console.log(`Found object: ${metadata.name} - ${metadata.value}`);
                    notification.alertdecision = this.alertDecision();
                    this.workflowService.callESBAfterinterval(nameScreeningRequest.sasHeader.uniqueTxnRefNo, metadata.value, notification);
                }
                else {
                    console.log("Object not found");
                }
            }
            else {
                response.matchDetails.matchFound = 'NOHIT';
                delete response.matchDetails["details"];
            }
        }
        catch (e) {
            console.log(e.message);
        }
        return response;
    }
    createCommonScreeningResponse(commonScreeningRequest) {
        var hit = false;
        const response = new commonScreeningResponse_entity_1.CommonScreeningResponse();
        try {
            response.sasHeader = new common_entity_1.SasHeader();
            response.sasHeader.zoneId = commonScreeningRequest.sasHeader.zoneId;
            response.sasHeader.regionCode = commonScreeningRequest.sasHeader.regionCode;
            response.sasHeader.branchId = commonScreeningRequest.sasHeader.branchId;
            response.sasHeader.departmentId = commonScreeningRequest.sasHeader.departmentId;
            response.sasHeader.userGroup = commonScreeningRequest.sasHeader.userGroup;
            response.sasHeader.channelId = commonScreeningRequest.sasHeader.channelId;
            response.sasHeader.applicationId = commonScreeningRequest.sasHeader.applicationId;
            response.sasHeader.applicationModule = commonScreeningRequest.sasHeader.applicationModule;
            response.sasHeader.uniqueTxnRefNo = commonScreeningRequest.sasHeader.uniqueTxnRefNo;
            response.sasHeader.messageType = commonScreeningRequest.sasHeader.messageType;
            response.sasHeader.sysId = commonScreeningRequest.sasHeader.sysId;
            response.sasHeader.timestamp = commonScreeningRequest.sasHeader.timestamp;
            response.sasHeader.metaData = commonScreeningRequest.sasHeader.metaData.map((item) => ({
                name: item.name,
                value: item.value,
            }));
            const notification = new common_entity_1.Notification();
            notification.sasHeader = commonScreeningRequest.sasHeader;
            const customer = commonScreeningRequest.beneficiaryCustomer;
            const matchDetails = new common_entity_1.MatchDetails();
            matchDetails.details = {
                alertId: this.alertId(),
                alertDetails: []
            };
            response.matchDetails = matchDetails;
            matchDetails.matchFound = this.hitNoHit();
            if (matchDetails.matchFound === 'HIT') {
                hit = true;
                var details = new common_entity_1.Detail();
                matchDetails.maxScore = this.score();
                const alertDetail = new common_entity_1.AlertDetails();
                alertDetail.scannedName = customer.name;
                alertDetail.matchedName = customer.name;
                alertDetail.uidSerialNo = this.serialNumber();
                alertDetail.matchScore = this.score();
                if (alertDetail.matchScore > matchDetails.maxScore) {
                    matchDetails.maxScore = alertDetail.matchScore;
                }
                alertDetail.pepFlag = this.pepFlag();
                alertDetail.watchlistName = this.watchlist();
                alertDetail.keyword = "PEP~EU~UN~";
                matchDetails.details.alertDetails.push(alertDetail);
                matchDetails.description = "";
            }
            if (hit) {
                const metadata = this.findMetaDataByName(commonScreeningRequest.sasHeader.metaData, CALLBACK);
                if (metadata) {
                    console.log(`Found object: ${metadata.name} - ${metadata.value}`);
                    notification.alertdecision = this.alertDecision();
                    this.workflowService.callESBAfterinterval(commonScreeningRequest.sasHeader.uniqueTxnRefNo, metadata.value, notification);
                }
                else {
                    console.log("Not callback URL found");
                }
            }
            else {
                response.matchDetails.matchFound = 'NOHIT';
                delete response.matchDetails["details"];
            }
        }
        catch (e) {
            console.log(e.message);
        }
        return response;
    }
    findMetaDataByName(array, name) {
        return array.find(obj => obj.name === name);
    }
    score() {
        var score = Math.floor((Math.random() * 60) + 1);
        return score;
    }
    alertId() {
        var id = Math.floor((Math.random() * 50000) + 1);
        return "ALRT" + id;
    }
    hitNoHit() {
        var score = Math.floor((Math.random() * 10));
        if (score > 6) {
            return "HIT";
        }
        return "NOHIT";
    }
    serialNumber() {
        var serial = Math.floor((Math.random() * 60000) + 1);
        return "SR" + serial;
    }
    pepFlag() {
        var score = Math.floor((Math.random() * 10));
        if (score > 10) {
            return "Y";
        }
        return "N";
    }
    watchlist() {
        var list = ["QCB", "UN", "ICC"];
        var index = Math.floor((Math.random() * list.length));
        return list[index];
    }
    alertDecision() {
        var decision = ["Release", "Reject", "Reject+Block"];
        var index = Math.floor((Math.random() * decision.length));
        return decision[index];
    }
};
exports.ScreeningService = ScreeningService;
exports.ScreeningService = ScreeningService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nameScreeningRequest_entity_1.NameScreeningRequest)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        workflow_service_1.WorkflowService])
], ScreeningService);
//# sourceMappingURL=screening.service.js.map