import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryRequestDTO {
  @IsString()
  @ApiProperty({ example: 'HOUSE' })
  description: string;

  @IsString()
  @ApiProperty({ example: 'EXPENSE' })
  type: string;
}
