import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Alert } from './alert.entity';



@Entity()
export class AlertLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    log: string;

    // @ManyToOne(() => Alert, alert => alert.alertLog)
    // alert: Alert;
}
