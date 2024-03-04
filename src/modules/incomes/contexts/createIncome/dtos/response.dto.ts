import { ApiProperty } from '@nestjs/swagger';

export class CreateIncomeResponseDTO {
  @ApiProperty({ example: 'b4d9d9d3-0e9f-4a5c-9c5f-3e9e9e9e9e9e' })
  id: string;

  @ApiProperty({ example: 'Salary' })
  description: string;

  @ApiProperty({ example: 5000.0 })
  value: number;

  @ApiProperty({ example: '2022-01-01' })
  date: Date;

  @ApiProperty({ example: 'SALARY' })
  category: string;

  @ApiProperty({ example: 'b4d9d9d3-0e9f-4a5c-9c5f-3e9e9e9e9e9e' })
  userId: string;

  @ApiProperty({ example: '2022-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2022-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
