import { SasHeader, Customer } from './common.entity';
export declare class NameScreeningRequest {
    id: number;
    sasHeader: SasHeader;
    orderingSenderCustomer: Customer[];
    beneficiaryReceiverCustomer: Customer[];
}
