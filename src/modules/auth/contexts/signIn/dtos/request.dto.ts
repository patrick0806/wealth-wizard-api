import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInRequestDTO {
  @IsEmail()
  @ApiProperty({ example: 'QnQp7@example.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: '123456' })
  password: string;
}
