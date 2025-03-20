import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DomainService } from './domain.service';
import { CreateDomainDto, UpdateDomainDto } from './dto/domain.dto';
import { Domain } from './entity/domain.entity';

@ApiTags('Domains')
@Controller('domains')
export class DomainController {
  constructor(private readonly domainService: DomainService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new domain' })
  @ApiResponse({ status: 201, type: Domain })
  create(@Body() createDomainDto: CreateDomainDto) {
    return this.domainService.create(createDomainDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all domains' })
  @ApiResponse({ status: 200, type: [Domain] })
  findAll() {
    return this.domainService.findAll();
  }

  @Get(':domain_uuid')
  @ApiOperation({ summary: 'Get a domain by UUID' })
  @ApiResponse({ status: 200, type: Domain })
  findOne(@Param('domain_uuid') domain_uuid: string) {
    return this.domainService.findOne(domain_uuid);
  }

  @Patch(':domain_uuid')
  @ApiOperation({ summary: 'Update a domain' })
  @ApiResponse({ status: 200, type: Domain })
  update(@Param('domain_uuid') domain_uuid: string, @Body() updateDomainDto: UpdateDomainDto) {
    return this.domainService.update(domain_uuid, updateDomainDto);
  }

  @Delete(':domain_uuid')
  @ApiOperation({ summary: 'Delete a domain' })
  @ApiResponse({ status: 204 })
  remove(@Param('domain_uuid') domain_uuid: string) {
    return this.domainService.remove(domain_uuid);
  }
}
