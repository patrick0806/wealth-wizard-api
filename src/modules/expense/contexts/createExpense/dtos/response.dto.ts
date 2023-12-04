import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@shared/entities/category.entity';
import { CategoryType } from '@shared/enums/CategoryTypes';
import { ExpenseStatus } from '@shared/enums/ExpenseStatus';

export class CreateExpenseRequestDTO {
  @ApiProperty({ example: 'awr5we235fcgbnyugcxdfpl' })
  id: string;

  @ApiProperty({ example: 'Maquina de lavar' })
  description: string;

  @ApiProperty({
    example: {
      id: 1,
      description: 'HOUSE',
      type: CategoryType.EXPENSE,
    },
  })
  category: Category;

  @ApiProperty({ example: 'Cartão de crédito luiza' })
  paymentMethod: string;

  @ApiProperty({ example: 2 })
  installments: number;

  @ApiProperty({ example: 100 })
  installmentsValue: number;

  @ApiProperty({ example: 200 })
  totalPrice?: number;

  @ApiProperty({ example: '2023-11-23' })
  initDate: Date;

  @ApiProperty({ example: '2024-01-23' })
  endDate: Date;

  @ApiProperty({ example: ExpenseStatus.PENDING })
  status: string;
}
