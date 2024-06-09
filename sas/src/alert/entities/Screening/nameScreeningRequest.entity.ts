
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { SasHeader, Customer } from './common.entity';


@Entity()
export class NameScreeningRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  sasHeader: SasHeader;

  // @Column('json', { array: true })
  @Column({ type: 'json', nullable: true })
  orderingSenderCustomer: Customer;

  // @Column('json', { array: true })
  @Column({ type: 'json', nullable: true })
  beneficiaryReceiverCustomer: Customer[];
}

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

//   @Column('json', { array: true })
//   metaData: MetaData[];
// }

// export class MetaData {
//   @Column()
//   name: string;

//   @Column()
//   value: string;
// }

// export class Customer {
//   @Column()
//   uid: string;

//   @Column()
//   idType: string;

//   @Column()
//   idNumber: string;

//   @Column()
//   fullName: string;

//   @Column()
//   nationality: string;

//   @Column()
//   dateOfBirth: Date;

//   @Column()
//   placeOfBirth: string;

//   @Column()
//   residenceCountry: string;
// }
