import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString, Min } from 'class-validator';

export class CreateIncomeRequestDTO {
  @ApiProperty({ example: 'b4d9d9d3-0e9f-4a5c-9c5f-3e9e9e9e9e9e' })
  @IsString()
  userId: string;

  @Min(0)
  @ApiProperty({ example: 5000.0 })
  value: number;

  @IsString()
  @ApiProperty({ example: 'Salary' })
  description: string;

  @IsDate()
  @ApiProperty({ example: '2022-01-01' })
  date: Date;

  @IsString()
  @ApiProperty({ example: 'SALARY' })
  category: string;
}
