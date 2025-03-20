import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Extension } from './entities/extension.entity';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ExtensionsService {
  constructor(
    @InjectRepository(Extension)
    private readonly extensionRepository: Repository<Extension>,
  ) {}

  async create(createExtensionDto: CreateExtensionDto) {
    const newExtension = plainToInstance(Extension, createExtensionDto);

    const extension = this.extensionRepository.create(newExtension);
    return this.extensionRepository.save(extension);
  }

  findAll(domain_id:string) {
    return this.extensionRepository.find({where:{domain_uuid:domain_id}});
  }

  findOne(id: string) {
    return this.extensionRepository.findOne({ where: { extension_uuid: id } });
  }

  async update(id: string, updateExtensionDto: UpdateExtensionDto) {
    const existingExtension = await this.extensionRepository.findOne({ where: { extension_uuid: id } });

    if (!existingExtension) {
      throw new NotFoundException(`Extension Not Found`);
    }
        // Convert DTO to Entity & Merge with Existing Entity
        const updatedEntity = plainToInstance(Extension, {
          ...existingExtension,
          ...updateExtensionDto,
        });
    await this.extensionRepository.update(id, updatedEntity);
    return this.findOne(id);
  }

  async remove(id: string) {
    const ext = await this.findOne(id);
    if (ext) {
      await this.extensionRepository.delete(id);
      return { message: 'Extension deleted successfully' };
    }
    return { message: 'Extension not found' };
  }
}
