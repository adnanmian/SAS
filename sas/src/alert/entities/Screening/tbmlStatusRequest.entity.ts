
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { SasHeader, Customer } from './common.entity';



@Entity()
export class TBMLStatusRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  sasHeader: SasHeader;

  // @Column('json', { array: true })
  @Column({ type: 'json', nullable: true })
  alertDecision: string;

  @Column({ type: 'json', nullable: true })
  customer_rim: string;

  @Column({ type: 'json', nullable: true })
  alertId: string;
  
  @Column({ type: 'json', nullable: true })
  alertComments: string;


}

