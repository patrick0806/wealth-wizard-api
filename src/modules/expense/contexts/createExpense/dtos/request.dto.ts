import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@shared/entities/category.entity';
import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateExpenseRequestDTO {
  @IsString()
  @ApiProperty({ example: 'Maquina de lavar' })
  description: string;

  @IsObject()
  @ApiProperty({
    example: {
      id: 1,
    },
  })
  category: Category;

  @IsString()
  @ApiProperty({ example: 'Cartão de crédito luiza' })
  paymentMethod: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 2 })
  installments: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 100 })
  installmentValue: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty({ example: 200 })
  totalValue?: number;

  @IsDateString()
  @ApiProperty({ example: '2023-12-01' })
  initialDate: Date;

  @IsString()
  @ApiProperty({ example: 'PENDING' })
  status: string;
}
