import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '@shared/entities/category.entity';
import { CategoryType } from '@shared/enums/CategoryTypes';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async save(category: Partial<Category>) {
    return this.categoryRepository.save(category);
  }

  async listCategories(categoryType?: CategoryType): Promise<Category[]> {
    const query = this.categoryRepository.createQueryBuilder('category');
    if (categoryType) {
      query.where('category.type = :type', { type: categoryType });
    }
    const categories = query.getMany();
    return categories;
  }
}
