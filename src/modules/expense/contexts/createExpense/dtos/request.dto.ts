import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseRequestDTO {
  @ApiProperty({ example: 'Maquina de lavar' })
  description: string;

  @ApiProperty({ example: 'HOUSE' })
  category: string; //TODO: ENUM

  @ApiProperty({ example: 'Cartão de crédito luiza' })
  origin: string;

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
}
