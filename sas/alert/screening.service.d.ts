import { Repository } from 'typeorm';
import { NameScreeningRequest } from './entities/Screening/nameScreeningRequest.entity';
import { NameScreeningResponse } from './entities/Screening/nameScreeningResponse.entity';
import { MetaData } from './entities/Screening/common.entity';
import { CommonScreeningRequest } from './entities/Screening/commonScreeningRequest.entity';
import { CommonScreeningResponse } from './entities/Screening/commonScreeningResponse.entity';
import { WorkflowService } from './workflow/workflow.service';
export declare class ScreeningService {
    private nameScreeningRequestRepository;
    private workflowService;
    constructor(nameScreeningRequestRepository: Repository<NameScreeningRequest>, workflowService: WorkflowService);
    findAll(): Promise<NameScreeningRequest[]>;
    remove(id: number): Promise<void>;
    createNameScreeningResponse(nameScreeningRequest: NameScreeningRequest): NameScreeningResponse;
    createCommonScreeningResponse(commonScreeningRequest: CommonScreeningRequest): CommonScreeningResponse;
    findMetaDataByName(array: MetaData[], name: string): MetaData | undefined;
    score(): number;
    alertId(): string;
    hitNoHit(): string;
    serialNumber(): string;
    pepFlag(): string;
    watchlist(): string;
    alertDecision(): string;
}
