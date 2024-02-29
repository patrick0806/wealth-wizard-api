import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInRequestDTO {
  @IsEmail()
  @ApiProperty({ example: 'jS9Zs@example.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'changeme' })
  password: string;
}
