import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInService } from './signIn.service';
import { SignInRequestDTO } from './dtos/request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SignInResponseDTO } from './dtos/response.dto';
import { Public } from '@shared/decorators/public.decorator';

@Controller()
export class SignInController {
  constructor(private signInService: SignInService) {}

  @ApiOperation({ summary: 'Login in app' })
  @ApiResponse({ status: HttpStatus.OK, type: SignInResponseDTO })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: SignInResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: SignInResponseDTO })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: SignInResponseDTO,
  })
  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async handle(
    @Body() loginData: SignInRequestDTO,
  ): Promise<SignInResponseDTO> {
    return this.signInService.execute(loginData.email, loginData.password);
  }
}
