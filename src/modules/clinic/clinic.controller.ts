import { Body, Controller, Get, Post } from "@nestjs/common";
import { ClinicService } from "./application/clinic.service";
import { ClinicDto } from "./application/clinic-dto";

@Controller()
export class ClinicController {

    constructor(private readonly clinicService: ClinicService) { }

@Post()
async create(@Body() clinic: ClinicDto) {
  return await this.clinicService.create(clinic);
}
}