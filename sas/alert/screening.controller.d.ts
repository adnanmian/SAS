import { ScreeningService } from './screening.service';
import { NameScreeningRequest } from './entities/Screening/nameScreeningRequest.entity';
import { NameScreeningResponse } from './entities/Screening/nameScreeningResponse.entity';
import { CommonScreeningRequest } from './entities/Screening/commonScreeningRequest.entity';
import { CommonScreeningResponse } from './entities/Screening/commonScreeningResponse.entity';
export declare class ScreeningController {
    private readonly screeningService;
    constructor(screeningService: ScreeningService);
    processNameScreeningRequest(nameScreeningRequest: NameScreeningRequest): NameScreeningResponse;
    processCommonScreeningRequest(commonScreeningRequest: CommonScreeningRequest): CommonScreeningResponse;
}
