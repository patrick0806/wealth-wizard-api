import { Body, Controller, HttpStatus, Post, Req } from '@nestjs/common';
import { CreateIncomeService } from './createIncome.service';
import { CreateIncomeRequestDTO } from './dtos/request.dto';
import { CreateIncomeResponseDTO } from './dtos/response.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExceptionDTO } from '@shared/filters/exception.dto';
import { API_TAGS } from '@shared/constants/apiTags';
import { IRequest } from '@shared/interfaces/request.interface';

@ApiTags(API_TAGS.INCOMES)
@Controller()
export class CreateIncomeController {
  constructor(private createIncomeService: CreateIncomeService) {}

  @ApiOperation({ summary: 'Create new Income' })
  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateIncomeResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ExceptionDTO })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: ExceptionDTO })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ExceptionDTO })
  @Post()
  async handle(
    @Body() incomeData: CreateIncomeRequestDTO,
    @Req() req: IRequest,
  ): Promise<CreateIncomeResponseDTO> {
    return this.createIncomeService.execute(incomeData, req.user.sub);
  }
}
