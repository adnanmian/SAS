import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MatchDetail, SasHeader } from './common.entity';

@Entity()
export class TBMLStatusResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => SasHeader)
  sasHeader: SasHeader;

  @Column()
  status: string;

  @Column()
  errorCode: string;

  @Column()
  errorMessage: string;

  @Column()
  description: string;


}

