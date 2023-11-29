import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class ListExpensesRequestDTO {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 11, description: 'Month', required: false })
  month: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 2023, description: 'Year', required: false })
  year: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 10, description: 'Page size', default: 10 })
  size: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 0, description: 'Page number', default: 0 })
  page: number;
}
