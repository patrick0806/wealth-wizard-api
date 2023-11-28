import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class ListExpensesRequestDTO {
  @IsNumber()
  @Min(1)
  @ApiProperty({ example: '11', description: 'Mounth' })
  mounth: number;

  @IsNumber()
  @Min(2000)
  @ApiProperty({ example: '2023', description: 'Year' })
  year: number;

  @IsNumber()
  @Min(1)
  @ApiProperty({ example: 10, description: 'Page size', default: 10 })
  size: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 0, description: 'Page number', default: 0 })
  page: number;
}
