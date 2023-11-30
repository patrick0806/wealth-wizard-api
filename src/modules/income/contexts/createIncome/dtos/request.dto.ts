import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateIncomeRequestDTO {
  @IsString()
  @ApiProperty({ example: 'Salário' })
  description: string;

  @IsNumber()
  @ApiProperty({ example: 5000 })
  value: number;
}
