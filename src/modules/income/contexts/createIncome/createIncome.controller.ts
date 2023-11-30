import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { CreateIncomeService } from './createIncome.service';
import { CreateIncomeRequestDTO } from './dtos/request.dto';
import { CreateIncomeResponseDTO } from './dtos/response.dto';
import { Problem } from '@shared/filters/Problem';

@ApiTags(API_TAGS.INCOME)
@Controller()
export class CreateIncomeController {
  constructor(private createIncomeService: CreateIncomeService) {}

  @Post()
  @ApiOperation({ summary: 'Create Income' })
  @ApiBody({ type: CreateIncomeRequestDTO })
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateIncomeResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateIncomeRequestDTO) {
    return this.createIncomeService.execute(data);
  }
}
