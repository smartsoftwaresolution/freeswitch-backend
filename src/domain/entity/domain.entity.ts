import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('v_domains')
export class Domain {
  @PrimaryColumn({ type: 'char', length: 36 })
  domain_uuid: string;

  @Column({ type: 'char', length: 36, nullable: true })
  domain_parent_uuid?: string;

  @Column({ type: 'text', nullable: true })
  domain_name?: string;

  @Column({ type: 'text', nullable: true })
  domain_enabled?: string;

  @Column({ type: 'text', nullable: true })
  domain_description?: string;
}
