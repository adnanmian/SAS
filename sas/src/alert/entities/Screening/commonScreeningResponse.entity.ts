import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MatchDetails, SasHeader,  } from './common.entity';


// export class MetaData {
//   name: string;
//   value: string;
// }

// export class AlertDetails {
//   scannedName: string;
//   matchedName: string;
//   uidSerialNo: string;
//   matchScore: number;
//   pepFlag: string;
//   watchlistName: string;
//   keyword: string;
// }

// export class MatchDetails {
//   uid: string;
//   matchFound: string;
//   maxScore: number;
//   details: {
//     alertId: string;
//     alertDetails: AlertDetails[];
//   };
//   errorCode: string;
//   errorMessage: string;
//   description: string;
// }

// export class SasHeader {
//   zoneId: string;
//   regionCode: string;
//   branchId: string;
//   departmentId: string;
//   userGroup: string;
//   channelId: string;
//   applicationId: string;
//   applicationModule: string;
//   uniqueTxnRefNo: string;
//   messageType: string;
//   sysId: string;
//   timestamp: string;
//   userId: string;
//   metaData: MetaData[];
// }

@Entity()
export class CommonScreeningResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  sasHeader: SasHeader;

  @Column('json', { array: true })
  matchDetails: MatchDetails;

  
}
