import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { CriteriaService } from './criteria.service';

@Controller('criteria')
export class CriteriaController {
  constructor(private readonly criteriaService: CriteriaService) {}

  @Get()
  async getAllCriteria() {
    return this.criteriaService.getAllCriteria();
  }

  @Get(':id')
  async getCriteriaById(@Param('id') id: string) {
    return this.criteriaService.getCriteriaById(id);
  }

  @Post()
  async createCriteria(@Body() criteriaDto: any) {
    return this.criteriaService.createCriteria(criteriaDto);
  }

  @Post('/configs')
  async createOrUpdateConfigs(@Body() configDto: any) {
    return this.criteriaService.createOrUpdateConfigs(configDto);
  }

  @Delete('delete-by-user')
  async deleteByUserId(@Query('userId') userId: string) {
    return this.criteriaService.deleteByUserId(userId);
  }
}
