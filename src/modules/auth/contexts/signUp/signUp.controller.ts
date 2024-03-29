import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SignUpService } from './signUp.service';
import { Public } from '@shared/decorators/public.decorator';
import { SignUpRequestDTO } from './dtos/request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExceptionDTO } from '@shared/filters/exception.dto';
import { Response } from 'express';
import { API_TAGS } from '@shared/constants/apiTags';

@ApiTags(API_TAGS.AUTH)
@Controller()
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: HttpStatus.CREATED })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: ExceptionDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ExceptionDTO })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ExceptionDTO,
  })
  @Public()
  @Post('/sign-up')
  async handle(
    @Body() signUpData: SignUpRequestDTO,
    @Res() res: Response,
  ): Promise<void> {
    const { accessToken } = await this.signUpService.execute(signUpData);
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.send();
  }
}
