import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Alert } from './alert.entity';



@Entity()
export class AlertDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    details: string;


    @Column()
    strategy: string;

    // @OneToOne(() => Alert, alert => alert.details)
    // alert: Alert;

    
}
