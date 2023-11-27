import { ApiProperty } from '@nestjs/swagger';
import { Expense } from '@shared/entities/expense';

export class ListExpensesResponseDTO {
  @ApiProperty({ example: 1, description: 'Page number' })
  page: number;

  @ApiProperty({ example: 1, description: 'Page size' })
  size: number;

  @ApiProperty({ example: 1, description: 'totalElements' })
  totalElements: number;

  @ApiProperty({ example: 1, description: 'total pages' })
  totalPages: number;

  @ApiProperty({ example: 1, description: 'Expenses' })
  content: Expense[];
}
