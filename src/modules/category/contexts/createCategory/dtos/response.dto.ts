import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryResponseDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'HOUSE' })
  description: string;

  @ApiProperty({ example: 'EXPENSE' })
  type: string;
}
