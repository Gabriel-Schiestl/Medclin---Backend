import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DocumentDto } from './application/document-dto';
import { DocumentService } from './application/document.service';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  async create(@Body() document: DocumentDto) {
    return await this.documentService.create(document);
  }

  @Get()
  async findAll() {
    return await this.documentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.documentService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() document: DocumentDto) {
    return await this.documentService.update(id, document);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.documentService.delete(id);
  }
}
