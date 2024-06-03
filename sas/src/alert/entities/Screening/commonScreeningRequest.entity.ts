import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AccountWithInstitution, AvailableWithByBank, BeneficiaryCustomer, BeneficiaryInstitution, CustomerDetails, Description, Discrepancies, InstructingParty, IntermediaryInstitution, NonBankIssuer, OrderingCustomer, OrderingInstitution, ReceiverCorrespondent, ReceiverInstitution, RegulatoryReporting, RelatedReference, RemittanceInformation, SasHeader, SenderCorrespondent, SenderInstitution, SenderReference, SenderToReceiverInformation, SendingInstitution, Tbml, ThirdReimbursementInstitution, UdfFields } from './common.entity';




// export class MetaData {
//   name: string;
//   value: string;
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
export class CommonScreeningRequest {

  @PrimaryGeneratedColumn()
  id: number;

  sasHeader: SasHeader
  senderInstitution: SenderInstitution
  receiverInstitution: ReceiverInstitution
  senderReference: SenderReference
  relatedReference: RelatedReference
  instructingParty: InstructingParty
  valueDate: string
  transferCurrency: string
  transferAmount: string
  udfFields: UdfFields
  orderingCustomer: OrderingCustomer
  nonBankIssuer: NonBankIssuer
  availableWithByBank: AvailableWithByBank
  sendingInstitution: SendingInstitution
  orderingInstitution: OrderingInstitution
  senderCorrespondent: SenderCorrespondent
  receiverCorrespondent: ReceiverCorrespondent
  thirdReimbursementInstitution: ThirdReimbursementInstitution
  intermediaryInstitution: IntermediaryInstitution
  accountWithInstitution: AccountWithInstitution
  beneficiaryInstitution: BeneficiaryInstitution
  beneficiaryCustomer: BeneficiaryCustomer
  remittanceInformation: RemittanceInformation
  senderToReceiverInformation: SenderToReceiverInformation
  regulatoryReporting: RegulatoryReporting
  discrepancies: Discrepancies
  description: Description
  tbml: Tbml
  payload: string
}



// @Entity()
// export class CommonScreeningRequest {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column('json')
//   sasHeader: SasHeader;

//   @Column('json', { array: true })
//   senderInstitution: CustomerDetails[];

//   @Column('json', { array: true })
//   receiverInstitution: CustomerDetails[];

//   @Column()
//   senderReference: string;

//   @Column()
//   relatedReference: string;

//   @Column('json', { array: true })
//   instructingParty: CustomerDetails[];

//   @Column()
//   valueDate: string;

//   @Column()
//   transferCurrency: string;

//   @Column()
//   transferAmount: string;

//   @Column()
//   udfFields: string;

//   @Column('json', { array: true })
//   orderingCustomer: CustomerDetails[];

//   @Column()
//   nonBankIssuer: string;

//   @Column()
//   availableWithByBank: string;

//   @Column('json', { array: true })
//   sendingInstitution: CustomerDetails[];

//   @Column('json', { array: true })
//   orderingInstitution: CustomerDetails[];

//   @Column()
//   senderCorrespondent: string;

//   @Column()
//   receiverCorrespondent: string;

//   @Column()
//   thirdReimbursementInstitution: string;

//   @Column('json', { array: true })
//   intermediaryInstitution: CustomerDetails[];

//   @Column('json', { array: true })
//   accountWithInstitution: CustomerDetails[];

//   @Column('json', { array: true })
//   beneficiaryInstitution: CustomerDetails[];

//   @Column('json', { array: true })
//   beneficiaryCustomer: CustomerDetails[];

//   @Column()
//   remittanceInformation: string;

//   @Column()
//   senderToReceiverInformation: string;

//   @Column()
//   regulatoryReporting: string;

//   @Column()
//   discrepancies: string;

//   @Column()
//   description: string;

//   @Column()
//   tbml: string;

//   @Column()
//   payload: string;
// }
