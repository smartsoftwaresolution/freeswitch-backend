import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('extensions')
export class Extension {
  @PrimaryGeneratedColumn('uuid')
  extension_uuid: string;

  @Column({ type: 'char', length: 36, nullable: true })
  domain_uuid: string;

  @Column({ type: 'text', nullable: true })
  extension: string;

  @Column({ type: 'text', nullable: true })
  number_alias: string;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  accountcode: string;

  @Column({ type: 'text', nullable: true })
  effective_caller_id_name: string;

  @Column({ type: 'text', nullable: true })
  effective_caller_id_number: string;

  @Column({ type: 'text', nullable: true })
  outbound_caller_id_name: string;

  @Column({ type: 'text', nullable: true })
  outbound_caller_id_number: string;

  @Column({ type: 'text', nullable: true })
  emergency_caller_id_name: string;

  @Column({ type: 'text', nullable: true })
  emergency_caller_id_number: string;

  @Column({ type: 'text', nullable: true })
  directory_full_name: string;

  @Column({ type: 'text', nullable: true })
  directory_visible: string;

  @Column({ type: 'text', nullable: true })
  directory_exten_visible: string;

  @Column({ type: 'text', nullable: true })
  limit_max: string;

  @Column({ type: 'text', nullable: true })
  limit_destination: string;

  @Column({ type: 'text', nullable: true })
  missed_call_app: string;

  @Column({ type: 'text', nullable: true })
  missed_call_data: string;

  @Column({ type: 'text', nullable: true })
  user_context: string;

  @Column({ type: 'text', nullable: true })
  toll_allow: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  call_timeout: number;

  @Column({ type: 'text', nullable: true })
  call_group: string;

  @Column({ type: 'text', nullable: true })
  call_screen_enabled: string;

  @Column({ type: 'text', nullable: true })
  user_record: string;

  @Column({ type: 'text', nullable: true })
  hold_music: string;

  @Column({ type: 'text', nullable: true })
  auth_acl: string;

  @Column({ type: 'text', nullable: true })
  cidr: string;

  @Column({ type: 'text', nullable: true })
  sip_force_contact: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  nibble_account: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  sip_force_expires: number;

  @Column({ type: 'text', nullable: true })
  mwi_account: string;

  @Column({ type: 'text', nullable: true })
  sip_bypass_media: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  unique_id: number;

  @Column({ type: 'text', nullable: true })
  dial_string: string;

  @Column({ type: 'text', nullable: true })
  dial_user: string;

  @Column({ type: 'text', nullable: true })
  dial_domain: string;

  @Column({ type: 'text', nullable: true })
  do_not_disturb: string;

  @Column({ type: 'text', nullable: true })
  forward_all_destination: string;

  @Column({ type: 'text', nullable: true })
  forward_all_enabled: string;

  @Column({ type: 'text', nullable: true })
  forward_busy_destination: string;

  @Column({ type: 'text', nullable: true })
  forward_busy_enabled: string;

  @Column({ type: 'text', nullable: true })
  forward_no_answer_destination: string;

  @Column({ type: 'text', nullable: true })
  forward_no_answer_enabled: string;

  @Column({ type: 'text', nullable: true })
  forward_user_not_registered_destination: string;

  @Column({ type: 'text', nullable: true })
  forward_user_not_registered_enabled: string;

  @Column({ type: 'char', length: 36, nullable: true })
  follow_me_uuid: string;

  @Column({ type: 'text', nullable: true })
  enabled: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'char', length: 36, nullable: true })
  forward_caller_id_uuid: string;

  @Column({ type: 'char', length: 36, nullable: true })
  absolute_codec_string: string;

  @Column({ type: 'text', nullable: true })
  force_ping: string;
}
