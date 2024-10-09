import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClinicService } from './application/clinic.service';
import { ClinicDto } from './application/clinic-dto';

interface SpecialityProp {
  name: string;
}

@Controller('clinics')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  async create(@Body() clinic: ClinicDto) {
    return await this.clinicService.create(clinic);
  }

  @Post('/speciality')
  async createSpeciality(@Body() data: SpecialityProp) {
    return await this.clinicService.createSpeciality(data.name);
  }

  @Get('/speciality/:speciality')
  async findForSpeciality(@Param('speciality') speciality: string) {
    return await this.clinicService.findForSpeciality(speciality);
  }

  @Get('/name/:name')
  async findForName(@Param('name') name: string) {
    return await this.clinicService.findForName(name);
  }

  @Get()
  async findAll() {
    return await this.clinicService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.clinicService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() clinic: ClinicDto) {
    return await this.clinicService.update(id, clinic);
  }
}
