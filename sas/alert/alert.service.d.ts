import { UpdateAlertDto } from './dto/update-alert.dto';
import { Repository } from 'typeorm';
import { Alert } from './entities/alert.entity';
import { WorkflowService } from './workflow/workflow.service';
export declare class AlertService {
    private alertRepository;
    private workflowService;
    constructor(alertRepository: Repository<Alert>, workflowService: WorkflowService);
    create(alert: Alert): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Alert[]>;
    findOne(id: number): string;
    update(id: number, updateAlertDto: UpdateAlertDto): string;
    remove(id: number): string;
}
