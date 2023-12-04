import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '@shared/entities/category.entity';
import { CreateCategoryService } from './contexts/createCategory/createCategory.service';
import { CategoryRepository } from '@shared/repositories/category.repository';
import { CreateCategoryController } from './contexts/createCategory/createCategory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CreateCategoryController],
  providers: [CreateCategoryService, CategoryRepository],
})
export class CategoryModule {}
