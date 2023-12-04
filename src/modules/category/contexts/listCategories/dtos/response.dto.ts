import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@shared/entities/category.entity';

export class ListCategoriesResponseDTO {
  @ApiProperty({ example: [Category] })
  categories: Category[];
}
