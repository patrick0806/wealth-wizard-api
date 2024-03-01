import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { SignUpService } from './signUp.service';
import { Public } from '@shared/decorators/public.decorator';
import { SignUpRequestDTO } from './dtos/request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SignUpResponseDTO } from './dtos/response.dto';

@Controller()
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: HttpStatus.OK, type: SignUpResponseDTO })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: SignUpResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: SignUpResponseDTO })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: SignUpResponseDTO,
  })
  @Public()
  @Post('/sign-up')
  async handle(@Body() signUpData: SignUpRequestDTO) {
    return this.signUpService.execute(signUpData);
  }
}
