import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '@shared/entities/category.entity';
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
}
