import { ApiProperty } from '@nestjs/swagger';

export class CreateIncomeResponseDTO {
  @ApiProperty({ example: '963ef33c-642d-47e1-8db4-692945292b85' })
  id: string;

  @ApiProperty({ example: 'Salário' })
  description: string;

  @ApiProperty({ example: 5000 })
  value: number;
}
