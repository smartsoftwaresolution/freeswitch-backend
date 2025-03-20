import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsNumber } from 'class-validator';

export class CreateExtensionDto {
  @ApiProperty({ description: 'Unique identifier for the extension', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  extension_uuid: string;

  @ApiProperty({ description: 'Domain UUID', example: '550e8400-e29b-41d4-a716-446655440000', required: false })
  @IsUUID()
  @IsOptional()
  domain_uuid?: string;

  @ApiProperty({ description: 'Extension number', example: '1001', required: false })
  @IsString()
  @IsOptional()
  extension?: string;

  @ApiProperty({ description: 'Number alias', example: '1001', required: false })
  @IsString()
  @IsOptional()
  number_alias?: string;

  @ApiProperty({ description: 'Password for the extension', required: false })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({ description: 'Account code', required: false })
  @IsString()
  @IsOptional()
  accountcode?: string;

  @ApiProperty({ description: 'Effective caller ID name', required: false })
  @IsString()
  @IsOptional()
  effective_caller_id_name?: string;

  @ApiProperty({ description: 'Effective caller ID number', required: false })
  @IsString()
  @IsOptional()
  effective_caller_id_number?: string;

  @ApiProperty({ description: 'Outbound caller ID name', required: false })
  @IsString()
  @IsOptional()
  outbound_caller_id_name?: string;

  @ApiProperty({ description: 'Outbound caller ID number', required: false })
  @IsString()
  @IsOptional()
  outbound_caller_id_number?: string;

  @ApiProperty({ description: 'Emergency caller ID name', required: false })
  @IsString()
  @IsOptional()
  emergency_caller_id_name?: string;

  @ApiProperty({ description: 'Emergency caller ID number', required: false })
  @IsString()
  @IsOptional()
  emergency_caller_id_number?: string;

  @ApiProperty({ description: 'Directory full name', required: false })
  @IsString()
  @IsOptional()
  directory_full_name?: string;

  @ApiProperty({ description: 'Directory visibility', required: false })
  @IsString()
  @IsOptional()
  directory_visible?: string;

  @ApiProperty({ description: 'Directory extension visibility', required: false })
  @IsString()
  @IsOptional()
  directory_exten_visible?: string;

  @ApiProperty({ description: 'Limit max', required: false })
  @IsString()
  @IsOptional()
  limit_max?: string;

  @ApiProperty({ description: 'Limit destination', required: false })
  @IsString()
  @IsOptional()
  limit_destination?: string;

  @ApiProperty({ description: 'Missed call app', required: false })
  @IsString()
  @IsOptional()
  missed_call_app?: string;

  @ApiProperty({ description: 'Missed call data', required: false })
  @IsString()
  @IsOptional()
  missed_call_data?: string;

  @ApiProperty({ description: 'User context', required: false })
  @IsString()
  @IsOptional()
  user_context?: string;

  @ApiProperty({ description: 'Toll allow', required: false })
  @IsString()
  @IsOptional()
  toll_allow?: string;

  @ApiProperty({ description: 'Call timeout', required: false })
  @IsNumber()
  @IsOptional()
  call_timeout?: number;

  @ApiProperty({ description: 'Call group', required: false })
  @IsString()
  @IsOptional()
  call_group?: string;

  @ApiProperty({ description: 'Call screen enabled', required: false })
  @IsString()
  @IsOptional()
  call_screen_enabled?: string;

  @ApiProperty({ description: 'User record', required: false })
  @IsString()
  @IsOptional()
  user_record?: string;

  @ApiProperty({ description: 'Hold music', required: false })
  @IsString()
  @IsOptional()
  hold_music?: string;

  @ApiProperty({ description: 'Auth ACL', required: false })
  @IsString()
  @IsOptional()
  auth_acl?: string;

  @ApiProperty({ description: 'CIDR', required: false })
  @IsString()
  @IsOptional()
  cidr?: string;

  @ApiProperty({ description: 'SIP force contact', required: false })
  @IsString()
  @IsOptional()
  sip_force_contact?: string;

  @ApiProperty({ description: 'Nibble account', required: false })
  @IsNumber()
  @IsOptional()
  nibble_account?: number;

  @ApiProperty({ description: 'SIP force expires', required: false })
  @IsNumber()
  @IsOptional()
  sip_force_expires?: number;

  @ApiProperty({ description: 'MWI account', required: false })
  @IsString()
  @IsOptional()
  mwi_account?: string;

  @ApiProperty({ description: 'SIP bypass media', required: false })
  @IsString()
  @IsOptional()
  sip_bypass_media?: string;

  @ApiProperty({ description: 'Unique ID', required: false })
  @IsNumber()
  @IsOptional()
  unique_id?: number;

  @ApiProperty({ description: 'Dial string', required: false })
  @IsString()
  @IsOptional()
  dial_string?: string;

  @ApiProperty({ description: 'Dial user', required: false })
  @IsString()
  @IsOptional()
  dial_user?: string;

  @ApiProperty({ description: 'Dial domain', required: false })
  @IsString()
  @IsOptional()
  dial_domain?: string;

  @ApiProperty({ description: 'Do not disturb', required: false })
  @IsString()
  @IsOptional()
  do_not_disturb?: string;

  @ApiProperty({ description: 'Forward all destination', required: false })
  @IsString()
  @IsOptional()
  forward_all_destination?: string;

  @ApiProperty({ description: 'Forward all enabled', required: false })
  @IsString()
  @IsOptional()
  forward_all_enabled?: string;

  @ApiProperty({ description: 'Forward busy destination', required: false })
  @IsString()
  @IsOptional()
  forward_busy_destination?: string;

  @ApiProperty({ description: 'Forward busy enabled', required: false })
  @IsString()
  @IsOptional()
  forward_busy_enabled?: string;

  @ApiProperty({ description: 'Enabled', required: false })
  @IsString()
  @IsOptional()
  enabled?: string;

  @ApiProperty({ description: 'Description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Force ping', required: false })
  @IsString()
  @IsOptional()
  force_ping?: string;
}
