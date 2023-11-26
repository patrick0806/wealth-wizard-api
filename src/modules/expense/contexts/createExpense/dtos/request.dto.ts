import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateExpenseRequestDTO {
  @IsString()
  @ApiProperty({ example: 'Maquina de lavar' })
  description: string;

  @IsString()
  @ApiProperty({ example: 'HOUSE' })
  category: string; //TODO: ENUM

  @IsString()
  @ApiProperty({ example: 'Cartão de crédito luiza' })
  origin: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 2 })
  installments: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 100 })
  installmentValue: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 200 })
  totalValue?: number;

  @IsDateString()
  @ApiProperty({ example: '2023-11-23' })
  initialDate: Date;
}
