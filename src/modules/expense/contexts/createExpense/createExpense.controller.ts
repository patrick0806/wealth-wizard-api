import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { CreateExpenseService } from './createExpense.service';
import { CreateExpenseRequestDTO } from './dtos/request.dto';
import { Problem } from '@shared/filters/Problem';

@ApiTags(API_TAGS.EXPENSES)
@Controller()
export class CreateExpenseController {
  constructor(private createExpenseService: CreateExpenseService) {}

  @Post()
  @ApiOperation({ summary: 'Create expense' })
  @ApiBody({ type: CreateExpenseRequestDTO })
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateExpenseRequestDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  @HttpCode(HttpStatus.CREATED)
  async createExpense(@Body() data: CreateExpenseRequestDTO) {
    return this.createExpenseService.execute(data);
  }
}
