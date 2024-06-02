export declare class Notification {
    sasHeader: SasHeader;
    alertdecision: string;
    createSTRFlag: string;
    createRFIFlag: string;
    pepReview: PepReview[];
    alertId: string;
    finalComments: string;
}
export declare class PepReview {
    uid: string;
    idNumber: string;
    idType: string;
    reviewFlag: string;
    pepFlag: string;
}
export declare class SasHeader {
    zoneId: string;
    regionCode: string;
    branchId: string;
    departmentId: string;
    userGroup: string;
    channelId: string;
    applicationId: string;
    applicationModule: string;
    uniqueTxnRefNo: string;
    messageType: string;
    sysId: string;
    timestamp: Date;
    metaData: MetaData[];
}
export declare class MetaData {
    name: string;
    value: string;
}
export declare class AlertDetails {
    scannedName: string;
    matchedName: string;
    uidSerialNo: string;
    matchScore: number;
    pepFlag: string;
    watchlistName: string;
    keyword: string;
}
export declare class MatchDetails {
    uid: string;
    matchFound: string;
    maxScore: number;
    details: {
        alertId: string;
        alertDetails: AlertDetails[];
    };
    errorCode: string;
    errorMessage: string;
    description: string;
}
export declare class Customer {
    uid: string;
    idType: string;
    idNumber: string;
    fullName: string;
    nationality: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    residenceCountry: string;
}
export declare class AlertDetail {
    scannedName: string;
    matchedName: string;
    uidSerialNo: string;
    matchScore: number;
    pepFlag: string;
    watchlistName: string;
    keyword: string;
}
export declare class Detail {
    alertId: string;
    alertDetails: AlertDetail[];
}
export declare class MatchDetail {
    uid: string;
    matchFound: string;
    maxScore: number;
    details: Detail;
    errorCode: string;
    errorMessage: string;
    description: string;
}
export declare class CustomerDetails {
    uid: string;
    idType: string;
    idNumber: string;
    fullName: string;
    nationality: string;
    dateOfBirth: string;
    placeOfBirth: string;
    residenceCountry: string;
}
export declare class SenderInstitution {
    bic: string;
}
export declare class ReceiverInstitution {
    bic: string;
}
export declare class SenderReference {
    referenceNo: string;
}
export declare class RelatedReference {
    referenceNo: string;
}
export declare class InstructingParty {
    account: string;
    bic: string;
}
export declare class UdfFields {
    udfNameField1: string;
    udfNameField2: string;
    udfBICField: string;
    udfCountryField: string;
}
export declare class OrderingCustomer {
    account: string;
    bic: string;
    name: string;
    address: string;
}
export declare class NonBankIssuer {
    name: string;
    address: string;
}
export declare class AvailableWithByBank {
    bic: string;
    name: string;
    address: string;
}
export declare class SendingInstitution {
    account: string;
    bic: string;
}
export declare class OrderingInstitution {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class SenderCorrespondent {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class ReceiverCorrespondent {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class ThirdReimbursementInstitution {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class IntermediaryInstitution {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class AccountWithInstitution {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class BeneficiaryInstitution {
    account: string;
    bic: string;
    name: string;
    address: string;
    location: string;
}
export declare class BeneficiaryCustomer {
    account: string;
    bic: string;
    name: string;
    address: string;
}
export declare class RemittanceInformation {
    narrative: string;
}
export declare class SenderToReceiverInformation {
    narrative: string;
}
export declare class RegulatoryReporting {
    code: string;
    countryCode: string;
    narrative: string;
}
export declare class Discrepancies {
    narrative: string;
}
export declare class Description {
    narrative: string;
}
export declare class Tbml {
    documentaryCollectionsInwardAndOutward: DocumentaryCollectionsInwardAndOutward;
    exportLCAdvice: ExportLcadvice;
    exportLCAmend: ExportLcamend;
    exportLCDocuments: ExportLcdocuments;
    exportLCTransferable: ExportLctransferable;
    exportSBLCAdvice: ExportSblcadvice;
    exportSBLCAmend: ExportSblcamend;
    financeTransactions: FinanceTransactions;
    lcAmendment: LcAmendment;
    lcIssuance: LcIssuance;
    lgAmendment: LgAmendment;
    lgIssuance: LgIssuance;
    other: Other;
    sblcAmendment: SblcAmendment;
    sblcIssuance: SblcIssuance;
    lgInvocationClaimAndExtendOrPay: LgInvocationClaimAndExtendOrPay;
    documentaryCollectionsDueDateSettlement: DocumentaryCollectionsDueDateSettlement;
    sgdoUnderLC: SgdoUnderLc;
    shippingGuaranteeUnderBillsForCollection: ShippingGuaranteeUnderBillsForCollection;
    lcDocumentsDueDateSettlement: LcDocumentsDueDateSettlement;
    importCollectionsSightSettlementOrAcceptance: ImportCollectionsSightSettlementOrAcceptance;
    lcBillsLodgementSightSettlementsAcceptance: LcBillsLodgementSightSettlementsAcceptance;
}
export declare class DocumentaryCollectionsInwardAndOutward {
    id: string;
    remittingBankCountry: string;
    collectingBankCountry: string;
    drawerCountry: string;
    anyOtherThirdPartiesIdentifiedWithinDocuments: string;
    placeOfLoadingAndAnyPortsMentioned: string;
    placeOfDischargeAndAnyPortsMentioned: string;
    anyPartiesIdentifiedWithinTransportDocument: string;
    remittingBank: string;
    collectingBank: string;
    draweeName: string;
    draweeCountry: string;
    countryOfLoading: string;
    countryOfDischarge: string;
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    countryOfOrigin: string;
    otherThirdPartyOrPlace: string[];
    descriptionOfGoodsMT47AField: string;
}
export declare class ExportLcadvice {
    id: string;
    applicantName: string;
    applicantCountry: string;
    issuingBankName: string;
    issuingBankCountry: string;
    advisingBankName: string;
    advisingBankCountry: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    thirdPartiesUnderRequiredDocs: string;
    beneficiary: string;
    beneficiaryCountry: string;
    beneficiaryAddress: string;
    countryOfLoading: string;
    countryOfDischarge: string;
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    countryOfOrigin: string;
    confirmingBank: string;
    reimbursingBank: string;
    notifyParty: string[];
    descriptionOfGoodsMT47AField: string;
    documentsRequired46A: string;
    additionalCondition47A: string;
    otherThirdPartyOrPlace: string[];
}
export declare class ExportLcamend {
    id: string;
    applicantName: string;
    applicantCountry: string;
    issuingBankName: string;
    issuingBankCountry: string;
    advisingBankName: string;
    advisingBankCountry: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    thirdPartiesUnderRequiredDocs: string;
    beneficiary: string;
    beneficiaryCountry: string;
    beneficiaryAddress: string;
    countryOfLoading: string;
    countryOfDischarge: string;
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    countryOfOrigin: string;
    confirmingBank: string;
    reimbursingBank: string;
    notifyParty: string[];
    descriptionOfGoodsMT47AField: string;
    documentsRequired46A: string;
    additionalCondition47A: string;
    otherThirdPartyOrPlace: string[];
}
export declare class ExportLcdocuments {
    id: string;
    newParty: string;
    notifyParty: string[];
    carrier: string;
    agentOfTheCarrier: string;
    forwarder: string;
    masterOfTheVessel: string;
    presentingBank: string;
    localShippingAgentInQatar: string;
    remitterName: string;
    remitterCountry: string;
    remitterAddress: string;
    benenficiaryName: string;
    benenficiaryCountry: string;
    benenficiaryAddress: string;
    intermediaryBankName: string;
    intermediaryBICCode: string;
    intermediaryBankCountry: string;
    benenficiaryBankName: string;
    benenficiaryBICCode: string;
    benenficiaryBankCountry: string;
    shipperName: string;
    shipperCountry: string;
    vesselName: string;
    vesselIntendedOrPrecarriage: string;
    consigneeName: string;
    consigneeCountry: string;
    portOfLoading: string;
    countryOfLoading: string;
    portOfDischarge: string;
    countryOfDischarge: string;
    placeOfDelivery: string;
    carrierName: string[];
    agentName: string;
    agentCountry: string;
    billOfLadingIssuingPlace: string;
    portOfDischargeAgentName: string;
    vesselProviderIfOtherThanCarrier: string[];
    insuranceCompanyName: string[];
    insuranceCompanyCountry: string[];
    supplierName: string;
    supplierCountry: string;
    benenficiaryAccountNoOrIBANNo: string;
    insuranceCompanyClaimSettlingAgent: string[];
    countryOfOrigin: string;
    applicant: string[];
    advisingBank: string;
    reimbursingBank: string;
    forwardingAgent: string;
    placeOfReceipt: string[];
    transshipmentPort: string[];
    manufacturer: string[];
    insuranceCompanyAgent: string[];
    inspectionCompany: string;
    otherThirdPartyOrPlace: string[];
    chamberOfCommerce: string;
}
export declare class ExportLctransferable {
    id: string;
    applicantName: string;
    applicantCountry: string;
    issuingBankName: string;
    issuingBankCountry: string;
    advisingBankName: string;
    advisingBankCountry: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    goodsDescriptionCode: string;
    thirdPartiesUnderRequiredDocs: string;
    beneficiary: string;
    beneficiaryCountry: string;
    beneficiaryAddress: string;
    countryOfLoading: string;
    countryOfDischarge: string;
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    countryOfOrigin: string;
    confirmingBank: string;
    reimbursingBank: string;
    notifyParty: string[];
    descriptionOfGoodsMT47AField: string;
    documentsRequired46A: string;
    additionalCondition47A: string;
    otherThirdPartyOrPlace: string[];
}
export declare class ExportSblcadvice {
    id: string;
    applicantName: string;
    applicantCountry: string;
    issuingBankName: string;
    issuingBankCountry: string;
    advisingBankName: string;
    advisingBankCountry: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    thirdPartiesUnderRequiredDocs: string;
    otherThirdPartyOrPlace: string[];
}
export declare class ExportSblcamend {
    id: string;
    applicantName: string;
    applicantCountry: string;
    issuingBankName: string;
    issuingBankCountry: string;
    advisingBankName: string;
    advisingBankCountry: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    thirdPartiesUnderRequiredDocs: string;
    otherThirdPartyOrPlace: string[];
}
export declare class FinanceTransactions {
    id: string;
    beneficiary: string;
    intermediaryBanksBeneficiarysBank: string;
    anyOtherThirdPartiesIdentifiedWithinDocuments: string;
    placeOfLoadingAndAnyPortsMentioned: string;
    placeOfDischargeAndAnyPortsMentioned: string;
    anyPartiesIdentifiedWithinTransportDocument: string;
}
export declare class LcAmendment {
    id: string;
    beneficiary: string;
    beneficiaryCountry: string;
    advisingBank: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    thirdPartiesUnderRequiredDocs: string;
    beneficiaryAddress: string;
    countryOfLoading: string;
    countryOfDischarge: string;
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    countryOfOrigin: string;
    applicant: string;
    confirmingBank: string;
    reimbursingBank: string;
    notifyParty: string[];
    descriptionOfGoodsMT47AField: string;
    documentsRequired46A: string;
    additionalCondition47A: string;
    otherThirdPartyOrPlace: string[];
}
export declare class LcIssuance {
    id: string;
    beneficiary: string;
    beneficiaryCountry: string;
    advisingBank: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingDeparture: string;
    placeOfDischargeDestination: string;
    thirdPartiesUnderRequiredDocs: string;
    beneficiaryAddress: string;
    countryOfLoading: string;
    countryOfDischarge: string;
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    countryOfOrigin: string;
    applicant: string;
    confirmingBank: string;
    reimbursingBank: string;
    notifyParty: string[];
    descriptionOfGoodsMT47AField: string;
    documentsRequired46A: string;
    additionalCondition47A: string;
    otherThirdPartyOrPlace: string[];
}
export declare class LgAmendment {
    id: string;
    beneficiary: string;
    beneficiaryCountry: string;
    issuingBankOfCounterGuarantee: string;
    issuingBankCountry: string;
    applicantsName: string;
    advisingBank: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    thirdPartiesUnderRequiredDocs: string;
    deliveryToCollectionBy24G: string;
    deliveryOfUndertaking24E: string;
    otherThirdPartyOrPlace: string[];
}
export declare class LgIssuance {
    id: string;
    beneficiary: string;
    beneficiaryCountry: string;
    issuingBankOfCounterGuarantee: string;
    issuingBankCountry: string;
    applicantsName: string;
    advisingBank: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    thirdPartiesUnderRequiredDocs: string;
    deliveryToCollectionBy24G: string;
    deliveryOfUndertaking24E: string;
    otherThirdPartyOrPlace: string[];
}
export declare class Other {
    id: string;
    type: string;
    data: string;
    beneficiary: string;
    beneficiaryCountry: string;
    issuingBankOfCounterGuarantee: string;
    issuingBankCountry: string;
    applicantsName: string;
    applicantsCountry: string;
    advisingBank: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    counterReceivedFromBank: string;
    presentingBank: string;
    collectingBank: string;
    collectingBankCountry: string;
    remittingBank: string;
    remittingBankCountry: string;
    drawer: string;
    drawerCountry: string;
    intermediaryBanks: string;
    beneficiarysBank: string;
    placeOfTakingCharge: string;
    placeOfFinalDestination: string;
    placeOfLoadingOrDeparture: string;
    shippingAgencyAtDestination: string;
    carrierName: string[];
    shippingCoName: string;
    masterOrCaptainName: string;
    localShippingAgency: string;
    blConsignee: string;
    blNotifyParty: string;
    insuranceCoName: string;
    insuranceAgencyAtDestination: string;
    inspectionCoName: string;
    placeOfDischargeOrDestination: string;
    thirdPartiesUnderRequiredDocsOrAdditionalConditions: string;
}
export declare class SblcAmendment {
    id: string;
    counterReceivedFromBank: string;
    beneficiaryCountry: string;
    advisingBank: string;
    applicantsName: string;
    issuingBanksCountry: string;
    applicantsCountry: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    thirdPartiesUnderRequiredDocsUndertaking: string;
    shipmentPlacesUnderUndertakingTerms: string;
    otherThirdPartyOrPlace: string[];
}
export declare class SblcIssuance {
    id: string;
    counterReceivedFromBank: string;
    beneficiaryCountry: string;
    advisingBank: string;
    applicantsName: string;
    issuingBanksCountry: string;
    applicantsCountry: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    thirdPartiesUnderRequiredDocsUndertaking: string;
    shipmentPlacesUnderUndertakingTerms: string;
    otherThirdPartyOrPlace: string[];
}
export declare class LgInvocationClaimAndExtendOrPay {
    id: string;
    beneficiary: string;
    beneficiaryCountry: string;
    issuingBankOfCounterGuarantee: string;
    issuingBankCountry: string;
    applicantsName: string;
    advisingBank: string;
    applicantBank: string;
    advisingBankCountry: string;
    advisingThroughBank: string;
    advisingThroughBankCountry: string;
    thirdPartiesUnderRequiredDocs: string;
    otherThirdPartyOrPlace: string[];
    nostroBank: string;
}
export declare class DocumentaryCollectionsDueDateSettlement {
    id: string;
    remittingBank: string;
    remittingBankCountry: string;
    collectingBank: string;
    collectingBankCountry: string;
    presentingBank: string;
    presentingBankCountry: string;
    drawer: string;
    drawerCountry: string;
    draweeName: string;
    draweeCountry: string;
    draweeAddress: string;
    intermediaryBankName: string;
    intermediaryBICCode: string;
    intermediaryBankCountry: string;
    nostroBank: string;
    otherThirdPartyOrPlace: string[];
}
export declare class SgdoUnderLc {
    id: string;
    notifyParty: string[];
    carrier: string;
    agentOfTheCarrier: string;
    forwarder: string;
    masterOfTheVessel: string;
    presentingBank: string;
    localShippingAgentInQatar: string;
    beneficiaryName: string;
    beneficiaryCountry: string;
    beneficiaryAddress: string;
    shipperName: string;
    shipperCountry: string;
    vesselName: string;
    vesselIntendedOrPrecarriage: string;
    consigneeName: string;
    consigneeCountry: string;
    portOfLoading: string;
    countryOfLoading: string;
    portOfDischarge: string;
    countryOfDischarge: string;
    placeOfDelivery: string[];
    carrierName: string[];
    agentName: string;
    agentCountry: string;
    billOfLadingIssuingPlace: string;
    portOfDischargeAgentName: string;
    vesselProviderIfOtherThanCarrier: string[];
    supplierName: string;
    supplierCountry: string;
    countryOfOrigin: string[];
    applicant: string;
    advisingBank: string;
    forwardingAgent: string;
    placeOfReceipt: string[];
    transshipmentPort: string[];
    manufacturer: string[];
    otherThirdPartyOrPlace: string[];
    chamberOfCommerce: string;
}
export declare class ShippingGuaranteeUnderBillsForCollection {
    id: string;
    remittingBank: string;
    remittingBankCountry: string;
    collectingBank: string;
    collectingBankCountry: string;
    drawer: string;
    drawerCountry: string;
    anyOtherThirdPartiesIdentifiedWithinDocuments: string;
    placeOfLoadingAndAnyPortsMentioned: string;
    placeOfDischargeAndAnyPortsMentioned: string;
    anyPartiesIdentifiedWithinTransportDocument: string;
    draweeName: string;
    draweeCountry: string;
    draweeAddress: string;
    shipperName: string;
    shipperCountry: string;
    vesselName: string;
    vesselIntendedOrPrecarriage: string;
    consigneeName: string;
    consigneeCountry: string;
    portOfLoading: string;
    countryOfLoading: string;
    portOfDischarge: string;
    countryOfDischarge: string;
    placeOfDelivery: string;
    carrierName: string[];
    agentName: string;
    agentCountry: string;
    billOfLadingIssuingPlace: string;
    portOfDischargeAgentName: string;
    vesselProviderIfOtherThanCarrier: string[];
    supplierName: string[];
    supplierCountry: string[];
    countryOfOrigin: string[];
    forwardingAgent: string;
    placeOfReceipt: string[];
    transshipmentPort: string[];
    manufacturer: string[];
    otherThirdPartyOrPlace: string[];
    chamberOfCommerce: string;
}
export declare class LcDocumentsDueDateSettlement {
    id: string;
    remitterName: string;
    remitterCountry: string;
    remitterAddress: string;
    beneficiaryName: string;
    beneficiaryCountry: string;
    beneficiaryAddress: string;
    intermediaryBankName: string;
    intermediaryBICCode: string;
    intermediaryBankCountry: string;
    beneficiaryBankName: string;
    beneficiaryBankCountry: string;
    applicant: string;
    nostroBank: string;
    otherThirdPartyOrPlace: string[];
}
export declare class ImportCollectionsSightSettlementOrAcceptance {
    id: string;
    remittingBank: string;
    remittingBankCountry: string;
    collectingBank: string;
    collectingBankCountry: string;
    presentingBank: string;
    presentingBankCountry: string;
    drawer: string;
    drawerCountry: string;
    anyOtherThirdPartiesIdentifiedWithinDocuments: string;
    placeOfLoadingAndAnyPortsMentioned: string;
    placeOfDischargeAndAnyPortsMentioned: string;
    anyPartiesIdentifiedWithinTransportDocument: string;
    draweeName: string;
    draweeCountry: string;
    draweeAddress: string;
    intermediaryBankName: string;
    intermediaryBICCode: string;
    intermediaryBankCountry: string;
    shipperName: string;
    shipperCountry: string;
    vesselName: string;
    vesselIntendedOrPrecarriage: string;
    consigneeName: string;
    consigneeCountry: string;
    portOfLoading: string;
    countryOfLoading: string;
    portOfDischarge: string;
    countryOfDischarge: string;
    placeOfDelivery: string[];
    carrierName: string[];
    agentName: string;
    agentCountry: string;
    billOfLadingIssuingPlace: string;
    portOfDischargeAgentName: string;
    vesselProviderIfOtherThanCarrier: string[];
    insuranceCompanyName: string;
    insuranceCompanyCountry: string;
    supplierName: string;
    supplierCountry: string;
    beneficiaryAccountNoOrIBANNo: string;
    insuranceCompanyClaimSettlingAgent: string[];
    countryOfOrigin: string[];
    applicant: string;
    nostroBank: string;
    forwardingAgent: string;
    placeOfReceipt: string[];
    transshipmentPort: string[];
    manufacturer: string[];
    insuranceCompanyAgent: string[];
    inspectionCompany: string;
    otherThirdPartyOrPlace: string[];
}
export declare class LcBillsLodgementSightSettlementsAcceptance {
    id: string;
    newParty: string;
    notifyParty: string[];
    carrier: string;
    agentOfTheCarrier: string;
    forwarder: string;
    masterOfTheVessel: string;
    presentingBank: string;
    localShippingAgentInQatar: string;
    remitterName: string;
    remitterCountry: string;
    remitterAddress: string;
    benenficiaryName: string;
    benenficiaryCountry: string;
    benenficiaryAddress: string;
    intermediaryBankName: string;
    intermediaryBICCode: string;
    intermediaryBankCountry: string;
    benenficiaryBankName: string;
    benenficiaryBICCode: string;
    benenficiaryBankCountry: string;
    shipperName: string;
    shipperCountry: string;
    vesselName: string;
    vesselIntendedOrPrecarriage: string;
    consigneeName: string;
    consigneeCountry: string;
    portOfLoading: string;
    countryOfLoading: string;
    portOfDischarge: string;
    countryOfDischarge: string;
    placeOfDelivery: string;
    carrierName: string[];
    agentName: string;
    agentCountry: string;
    billOfLadingIssuingPlace: string;
    portOfDischargeAgentName: string;
    vesselProviderIfOtherThanCarrier: string[];
    insuranceCompanyName: string[];
    insuranceCompanyCountry: string[];
    supplierName: string;
    supplierCountry: string;
    benenficiaryAccountNoOrIBANNo: string;
    insuranceCompanyClaimSettlingAgent: string[];
    countryOfOrigin: string;
    applicant: string[];
    advisingBank: string;
    reimbursingBank: string;
    forwardingAgent: string;
    placeOfReceipt: string[];
    transshipmentPort: string[];
    manufacturer: string[];
    insuranceCompanyAgent: string[];
    inspectionCompany: string;
    otherThirdPartyOrPlace: string[];
    chamberOfCommerce: string;
}
