import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ListExpensesRequestDTO {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 10, description: 'Page size', default: 10 })
  size: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 0, description: 'Page number', default: 0 })
  page: number;
}
