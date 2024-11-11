

export class Notification {
    sasHeader: SasHeader
    alertdecision: string
    alertId: string
    finalComments: string
  }
  

  export class PepReview {
    uid: string
    idNumber: string
    idType: string
    reviewFlag: string
    pepFlag: string
  }
  
  export class SasHeader {
    zoneId: string
    regionCode: string
    branchId: string
    departmentId: string
    userGroup: string
    channelId: string
    applicationId: string
    applicationModule: string
    uniqueTxnRefNo: string
    messageType: string
    sysId: string
    timestamp: string
    userId: string
    metaData: MetaData[]
  }
  
  export class MetaData {
    name: string
    value: string
  }
  
  