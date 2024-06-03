import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alert } from './entities/alert.entity';
import { AlertDetails } from './entities/alertDetails.entity';
import { AlertLog } from './entities/alertLog.entity';
import { WorkflowService } from './workflow/workflow.service';
import { AxiosResponse } from 'axios';


@Injectable()
export class AlertService {
  
  
  constructor(
    @InjectRepository(Alert)
    private alertRepository: Repository<Alert>,
    private workflowService: WorkflowService,
    
  ) {}

  
  async create(alert: Alert) {
    // console.log(JSON.stringify(alert));
    console.log(`Alert Name  ${alert.strategy}`);
    console.log(`Alert email  ${alert.sysId}`);
    return this.alertRepository.insert(alert);
  }

  // create(alertcreateAlertDto: CreateAlertDto) {
  //   this.alertRepository.insert()
  //   return 'This action adds a new alert';
  // }

  // findAll() {
  //   return `This action returns all alert`;
  // }

  async findAll(): Promise<Alert[]> {
    return this.alertRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} alert`;
  }

  update(id: number, updateAlertDto: UpdateAlertDto) {
    return `This action updates a #${id} alert`;
  }

  remove(id: number) {
    return `This action removes a #${id} alert`;
  }
}
