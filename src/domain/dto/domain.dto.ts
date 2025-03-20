import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateDomainDto {
  @ApiProperty({ description: 'Domain UUID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  domain_uuid: string;

  @ApiProperty({ description: 'Parent domain UUID', required: false, example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  @IsOptional()
  domain_parent_uuid?: string;

  @ApiProperty({ description: 'Domain name', example: 'example.com' })
  @IsString()
  domain_name: string;

  @ApiProperty({ description: 'Is domain enabled?', example: 'true', required: false })
  @IsString()
  @IsOptional()
  domain_enabled?: string;

  @ApiProperty({ description: 'Domain description', required: false })
  @IsString()
  @IsOptional()
  domain_description?: string;
}

export class UpdateDomainDto extends CreateDomainDto {}
