import { ApiProperty } from '@nestjs/swagger';

export class ResumeExpenseResponseDTO {
  @ApiProperty({ example: 1200 })
  expenseAmountThisMonth: number;

  @ApiProperty({ example: 200 })
  expenseAmountNextMonth: number;
}
