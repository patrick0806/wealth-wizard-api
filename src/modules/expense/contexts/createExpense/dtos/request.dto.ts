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
  installmentValue: number;

  @ApiProperty({ example: 200 })
  totalValue?: number;

  @ApiProperty({ example: '2023-11-23' })
  initialDate: Date;
}
