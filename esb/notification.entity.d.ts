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
    timestamp: string;
    userId: string;
    metaData: MetaData[];
}
export declare class MetaData {
    name: string;
    value: string;
}
