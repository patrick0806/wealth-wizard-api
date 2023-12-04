import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { CreateCategoryRequestDTO } from './dtos/request.dto';
import { CreateCategoryResponseDTO } from './dtos/response.dto';

@Injectable()
export class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(
    categoryDTO: CreateCategoryRequestDTO,
  ): Promise<CreateCategoryResponseDTO> {
    return this.categoryRepository.save(categoryDTO);
  }
}
