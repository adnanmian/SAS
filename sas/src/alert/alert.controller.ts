import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlertService } from './alert.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
// import { Alert, AlertDetail } from './entities/alert.entity';


import { Alert } from './entities/alert.entity';

// var alerts = [
//   new Alert()

// ];

// const alert = new Alert(1, 'john_doe', 'john@example.com', new AlertDetail('Some detail information'));

// const alertDetail = new AlertDetail('Some detail information');

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}




  @Post()
  // create(@Body() createAlertDto: CreateAlertDto) {
  //   return this.alertService.create(createAlertDto);
  // }

  create(@Body() alert: Alert) {
    console.log(JSON.stringify(alert));
    return this.alertService.create(alert);
  }

  @Get()
  findAll() {
    console.log("calling findAll");
    // return alert;
    return this.alertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlertDto: UpdateAlertDto) {
    return this.alertService.update(+id, updateAlertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertService.remove(+id);
  }
}
