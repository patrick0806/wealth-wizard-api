import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString, Min } from 'class-validator';

export class CreateExpenseRequestDTO {
  @ApiProperty({ example: 'b4d9d9d3-0e9f-4a5c-9c5f-3e9e9e9e9e9e' })
  @IsString()
  userId: string;

  @Min(0)
  @ApiProperty({ example: 50.0 })
  value: number;

  @IsString()
  @ApiProperty({ example: 'X-Burg' })
  description: string;

  @IsDateString()
  @ApiProperty({ example: '2022-01-01' })
  date: Date;

  @IsString()
  @ApiProperty({ example: 'FOOD' })
  category: string;
}
