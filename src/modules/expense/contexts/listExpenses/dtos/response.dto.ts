import { ApiProperty } from '@nestjs/swagger';
import { Expense } from '@shared/entities/expense.entity';
import { randomUUID } from 'crypto';

export class ListExpensesResponseDTO {
  @ApiProperty({ example: 0, description: 'Page number' })
  page: number;

  @ApiProperty({ example: 10, description: 'Page size' })
  size: number;

  @ApiProperty({ example: 10, description: 'totalElements' })
  totalElements: number;

  @ApiProperty({ example: 10, description: 'total pages' })
  totalPages: number;

  @ApiProperty({
    example: [
      {
        id: randomUUID(),
        description: 'test',
        category: 'test',
        origin: 'test',
        installments: 0,
        installmentValue: 0,
        totalValue: 0,
        initialDate: new Date(),
      },
    ],
    description: 'Expenses',
  })
  content: Expense[];
}
