
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { AlertDetails } from './alertDetails.entity';
import { AlertLog } from './alertLog.entity';



// import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

// export interface Alert extends InMemoryDBEntity {
//     name: string;
//     price: number;
//     seller: string;
//     discount: number;
// }


// export class AlertDetail {

//     constructor(detail: string) {
//         this.detail = detail;
//     }    
//     detail: string;
// }


// import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

// export interface EmployeeEntity extends InMemoryDBEntity {
//     name: string;
//     email: string;
//     department: string;
//     age: number;
// }

@Entity()
export class Alert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sysId: string;

    @Column()
    strategy: string;

    @Column({ type: 'json', nullable: true })
    alertLogs: AlertLog[];

    @Column({ type: 'json', nullable: true })
    alertDetails: AlertLog[];

}

    // @OneToOne(() => AlertDetails, alertDetails => alertDetails.alert)
    // @JoinColumn()
    // alertDetails: AlertDetails;

    // @OneToMany(() => AlertLog, alertLog => alertLog.alert)
    // alertLog: AlertLog[];

    // @OneToOne(() => AlertDetails, alertDetails => alertDetails.alert)
    // @JoinColumn()
    // details: AlertDetails;
    
// }



