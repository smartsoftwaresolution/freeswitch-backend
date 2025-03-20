import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Domain } from './entity/domain.entity';
import { CreateDomainDto, UpdateDomainDto } from './dto/domain.dto';

@Injectable()
export class DomainService {
  constructor(
    @InjectRepository(Domain)
    private readonly domainRepository: Repository<Domain>,
  ) {}

  async create(createDomainDto: CreateDomainDto): Promise<Domain> {
    const domain = this.domainRepository.create(createDomainDto);
    return this.domainRepository.save(domain);
  }

  async findAll(): Promise<Domain[]> {
    return this.domainRepository.find();
  }

  async findOne(domain_uuid: string): Promise<Domain> {
    const domain = await this.domainRepository.findOne({ where: { domain_uuid } });
    if (!domain) {
      throw new NotFoundException(`Domain with UUID ${domain_uuid} not found`);
    }
    return domain;
  }

  async update(domain_uuid: string, updateDomainDto: UpdateDomainDto): Promise<Domain> {
    await this.domainRepository.update(domain_uuid, updateDomainDto);
    return this.findOne(domain_uuid);
  }

  async remove(domain_uuid: string): Promise<void> {
    const result = await this.domainRepository.delete(domain_uuid);
    if (result.affected === 0) {
      throw new NotFoundException(`Domain with UUID ${domain_uuid} not found`);
    }
  }
}
