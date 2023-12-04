import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { ListCategoriesRequestDTO } from './dtos/request.dto';
import { ListCategoriesResponseDTO } from './dtos/response.dto';

@Injectable()
export class ListCategoriesService {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute({
    type,
  }: ListCategoriesRequestDTO): Promise<ListCategoriesResponseDTO> {
    const categories = await this.categoryRepository.listCategories(type);
    return { categories };
  }
}
