import { AlertService } from './alert.service';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { Alert } from './entities/alert.entity';
export declare class AlertController {
    private readonly alertService;
    constructor(alertService: AlertService);
    create(alert: Alert): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Alert[]>;
    findOne(id: string): string;
    update(id: string, updateAlertDto: UpdateAlertDto): string;
    remove(id: string): string;
}
