import { ApiProperty } from '@nestjs/swagger';

export class ListExpensesRequestDTO {
  @ApiProperty({ example: '11', description: 'Mounth' })
  mounth: number;

  @ApiProperty({ example: '2023', description: 'Year' })
  year: number;

  @ApiProperty({ example: 10, description: 'Page size', default: 10 })
  size: number;

  @ApiProperty({ example: 0, description: 'Page number', default: 0 })
  page: number;
}
