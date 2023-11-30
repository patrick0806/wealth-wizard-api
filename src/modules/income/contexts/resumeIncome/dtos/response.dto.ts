import { ApiProperty } from '@nestjs/swagger';

export class ResumeIncomeResponseDTO {
  @ApiProperty({ example: 50000 })
  totalIncomeThisMonth: number;
}
