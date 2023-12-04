import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '@shared/enums/CategoryTypes';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ListCategoriesRequestDTO {
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ enum: CategoryType, required: false })
  type: CategoryType;
}
