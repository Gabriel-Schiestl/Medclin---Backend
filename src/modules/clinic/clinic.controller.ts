import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ClinicService } from "./application/clinic.service";
import { ClinicDto } from "./application/clinic-dto";

@Controller('clinics')
export class ClinicController {

    constructor(private readonly clinicService: ClinicService) { }

@Post()
async create(@Body() clinic: ClinicDto) {
  return await this.clinicService.create(clinic);
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
}