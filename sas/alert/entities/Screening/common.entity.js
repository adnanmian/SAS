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
exports.SblcIssuance = exports.SblcAmendment = exports.Other = exports.LgIssuance = exports.LgAmendment = exports.LcIssuance = exports.LcAmendment = exports.FinanceTransactions = exports.ExportSblcamend = exports.ExportSblcadvice = exports.ExportLctransferable = exports.ExportLcdocuments = exports.ExportLcamend = exports.ExportLcadvice = exports.DocumentaryCollectionsInwardAndOutward = exports.Tbml = exports.Description = exports.Discrepancies = exports.RegulatoryReporting = exports.SenderToReceiverInformation = exports.RemittanceInformation = exports.BeneficiaryCustomer = exports.BeneficiaryInstitution = exports.AccountWithInstitution = exports.IntermediaryInstitution = exports.ThirdReimbursementInstitution = exports.ReceiverCorrespondent = exports.SenderCorrespondent = exports.OrderingInstitution = exports.SendingInstitution = exports.AvailableWithByBank = exports.NonBankIssuer = exports.OrderingCustomer = exports.UdfFields = exports.InstructingParty = exports.RelatedReference = exports.SenderReference = exports.ReceiverInstitution = exports.SenderInstitution = exports.CustomerDetails = exports.MatchDetail = exports.Detail = exports.AlertDetail = exports.Customer = exports.MatchDetails = exports.AlertDetails = exports.MetaData = exports.SasHeader = exports.PepReview = exports.Notification = void 0;
exports.LcBillsLodgementSightSettlementsAcceptance = exports.ImportCollectionsSightSettlementOrAcceptance = exports.LcDocumentsDueDateSettlement = exports.ShippingGuaranteeUnderBillsForCollection = exports.SgdoUnderLc = exports.DocumentaryCollectionsDueDateSettlement = exports.LgInvocationClaimAndExtendOrPay = void 0;
const typeorm_1 = require("typeorm");
class Notification {
}
exports.Notification = Notification;
class PepReview {
}
exports.PepReview = PepReview;
class SasHeader {
}
exports.SasHeader = SasHeader;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "regionCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "userGroup", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "channelId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "applicationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "applicationModule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "uniqueTxnRefNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "messageType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SasHeader.prototype, "sysId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SasHeader.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { array: true }),
    __metadata("design:type", Array)
], SasHeader.prototype, "metaData", void 0);
class MetaData {
}
exports.MetaData = MetaData;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MetaData.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MetaData.prototype, "value", void 0);
class AlertDetails {
}
exports.AlertDetails = AlertDetails;
class MatchDetails {
}
exports.MatchDetails = MatchDetails;
class Customer {
}
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "idType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "idNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Customer.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "placeOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "residenceCountry", void 0);
class AlertDetail {
}
exports.AlertDetail = AlertDetail;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertDetail.prototype, "scannedName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertDetail.prototype, "matchedName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertDetail.prototype, "uidSerialNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AlertDetail.prototype, "matchScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertDetail.prototype, "pepFlag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertDetail.prototype, "watchlistName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertDetail.prototype, "keyword", void 0);
class Detail {
}
exports.Detail = Detail;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Detail.prototype, "alertId", void 0);
__decorate([
    (0, typeorm_1.Column)(type => AlertDetail),
    __metadata("design:type", Array)
], Detail.prototype, "alertDetails", void 0);
class MatchDetail {
}
exports.MatchDetail = MatchDetail;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchDetail.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchDetail.prototype, "matchFound", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MatchDetail.prototype, "maxScore", void 0);
__decorate([
    (0, typeorm_1.Column)(type => Detail),
    __metadata("design:type", Detail)
], MatchDetail.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchDetail.prototype, "errorCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchDetail.prototype, "errorMessage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchDetail.prototype, "description", void 0);
class CustomerDetails {
}
exports.CustomerDetails = CustomerDetails;
class SenderInstitution {
}
exports.SenderInstitution = SenderInstitution;
class ReceiverInstitution {
}
exports.ReceiverInstitution = ReceiverInstitution;
class SenderReference {
}
exports.SenderReference = SenderReference;
class RelatedReference {
}
exports.RelatedReference = RelatedReference;
class InstructingParty {
}
exports.InstructingParty = InstructingParty;
class UdfFields {
}
exports.UdfFields = UdfFields;
class OrderingCustomer {
}
exports.OrderingCustomer = OrderingCustomer;
class NonBankIssuer {
}
exports.NonBankIssuer = NonBankIssuer;
class AvailableWithByBank {
}
exports.AvailableWithByBank = AvailableWithByBank;
class SendingInstitution {
}
exports.SendingInstitution = SendingInstitution;
class OrderingInstitution {
}
exports.OrderingInstitution = OrderingInstitution;
class SenderCorrespondent {
}
exports.SenderCorrespondent = SenderCorrespondent;
class ReceiverCorrespondent {
}
exports.ReceiverCorrespondent = ReceiverCorrespondent;
class ThirdReimbursementInstitution {
}
exports.ThirdReimbursementInstitution = ThirdReimbursementInstitution;
class IntermediaryInstitution {
}
exports.IntermediaryInstitution = IntermediaryInstitution;
class AccountWithInstitution {
}
exports.AccountWithInstitution = AccountWithInstitution;
class BeneficiaryInstitution {
}
exports.BeneficiaryInstitution = BeneficiaryInstitution;
class BeneficiaryCustomer {
}
exports.BeneficiaryCustomer = BeneficiaryCustomer;
class RemittanceInformation {
}
exports.RemittanceInformation = RemittanceInformation;
class SenderToReceiverInformation {
}
exports.SenderToReceiverInformation = SenderToReceiverInformation;
class RegulatoryReporting {
}
exports.RegulatoryReporting = RegulatoryReporting;
class Discrepancies {
}
exports.Discrepancies = Discrepancies;
class Description {
}
exports.Description = Description;
class Tbml {
}
exports.Tbml = Tbml;
class DocumentaryCollectionsInwardAndOutward {
}
exports.DocumentaryCollectionsInwardAndOutward = DocumentaryCollectionsInwardAndOutward;
class ExportLcadvice {
}
exports.ExportLcadvice = ExportLcadvice;
class ExportLcamend {
}
exports.ExportLcamend = ExportLcamend;
class ExportLcdocuments {
}
exports.ExportLcdocuments = ExportLcdocuments;
class ExportLctransferable {
}
exports.ExportLctransferable = ExportLctransferable;
class ExportSblcadvice {
}
exports.ExportSblcadvice = ExportSblcadvice;
class ExportSblcamend {
}
exports.ExportSblcamend = ExportSblcamend;
class FinanceTransactions {
}
exports.FinanceTransactions = FinanceTransactions;
class LcAmendment {
}
exports.LcAmendment = LcAmendment;
class LcIssuance {
}
exports.LcIssuance = LcIssuance;
class LgAmendment {
}
exports.LgAmendment = LgAmendment;
class LgIssuance {
}
exports.LgIssuance = LgIssuance;
class Other {
}
exports.Other = Other;
class SblcAmendment {
}
exports.SblcAmendment = SblcAmendment;
class SblcIssuance {
}
exports.SblcIssuance = SblcIssuance;
class LgInvocationClaimAndExtendOrPay {
}
exports.LgInvocationClaimAndExtendOrPay = LgInvocationClaimAndExtendOrPay;
class DocumentaryCollectionsDueDateSettlement {
}
exports.DocumentaryCollectionsDueDateSettlement = DocumentaryCollectionsDueDateSettlement;
class SgdoUnderLc {
}
exports.SgdoUnderLc = SgdoUnderLc;
class ShippingGuaranteeUnderBillsForCollection {
}
exports.ShippingGuaranteeUnderBillsForCollection = ShippingGuaranteeUnderBillsForCollection;
class LcDocumentsDueDateSettlement {
}
exports.LcDocumentsDueDateSettlement = LcDocumentsDueDateSettlement;
class ImportCollectionsSightSettlementOrAcceptance {
}
exports.ImportCollectionsSightSettlementOrAcceptance = ImportCollectionsSightSettlementOrAcceptance;
class LcBillsLodgementSightSettlementsAcceptance {
}
exports.LcBillsLodgementSightSettlementsAcceptance = LcBillsLodgementSightSettlementsAcceptance;
//# sourceMappingURL=common.entity.js.map