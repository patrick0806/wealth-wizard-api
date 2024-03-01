import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { SignInService } from './signIn.service';
import { SignInRequestDTO } from './dtos/request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from '@shared/decorators/public.decorator';
import { ExceptionDTO } from '@shared/filters/exception.dto';
import { Response } from 'express';

@Controller()
export class SignInController {
  constructor(private signInService: SignInService) {}

  @ApiOperation({ summary: 'Login in app' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: ExceptionDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ExceptionDTO })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ExceptionDTO,
  })
  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async handle(@Body() loginData: SignInRequestDTO, @Res() res: Response) {
    const { accessToken } = await this.signInService.execute(
      loginData.email,
      loginData.password,
    );
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.send();
  }
}
