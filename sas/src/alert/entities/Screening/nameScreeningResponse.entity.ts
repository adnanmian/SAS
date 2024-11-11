import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Data, MatchDetail, ReturnStatus, SasHeader } from './common.entity';

@Entity()
export class NameScreeningResponse {
  @PrimaryGeneratedColumn()
  id: number;

  data: Data;
  returnStatus: ReturnStatus;
}



// @Entity()
// export class NameScreeningResponse {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column(type => SasHeader)
//   sasHeader: SasHeader;

//   @Column(type => MatchDetail)
//   matchDetails: MatchDetail;
// }


// export class SasHeader {
//   @Column()
//   zoneId: string;

//   @Column()
//   regionCode: string;

//   @Column()
//   branchId: string;

//   @Column()
//   departmentId: string;

//   @Column()
//   userGroup: string;

//   @Column()
//   channelId: string;

//   @Column()
//   applicationId: string;

//   @Column()
//   applicationModule: string;

//   @Column()
//   uniqueTxnRefNo: string;

//   @Column()
//   messageType: string;

//   @Column()
//   sysId: string;

//   @Column()
//   timestamp: Date;

//   @Column()
//   userId: string;

//   @Column(type => MetaData)
//   metaData: MetaData[];
// }

// export class MetaData {
//   @Column()
//   name: string;

//   @Column()
//   value: string;
// }

// export class MatchDetail {
//   @Column()
//   uid: string;

//   @Column()
//   matchFound: string;

//   @Column()
//   maxScore: number;

//   @Column(type => Detail)
//   details: Detail;

//   @Column()
//   errorCode: string;

//   @Column()
//   errorMessage: string;

//   @Column()
//   description: string;
// }

// export class Detail {
//   @Column()
//   alertId: string;

//   @Column(type => AlertDetail)
//   alertDetails: AlertDetail[];
// }

// export class AlertDetail {
//   @Column()
//   scannedName: string;

//   @Column()
//   matchedName: string;

//   @Column()
//   uidSerialNo: string;

//   @Column()
//   matchScore: number;

//   @Column()
//   pepFlag: string;

//   @Column()
//   watchlistName: string;

//   @Column()
//   keyword: string;
// }
