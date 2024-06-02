import { AlertLog } from './alertLog.entity';
export declare class Alert {
    id: number;
    sysId: string;
    strategy: string;
    alertLogs: AlertLog[];
    alertDetails: AlertLog[];
}
