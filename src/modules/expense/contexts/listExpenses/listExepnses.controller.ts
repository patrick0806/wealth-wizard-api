import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { ListExpensesService } from './listExpenses.service';
import { ListExpensesRequestDTO } from './dtos/request.dto';
import { ListExpensesResponseDTO } from './dtos/response.dto';
import { Problem } from '@shared/filters/Problem';

@ApiTags(API_TAGS.EXPENSES)
@Controller()
export class ListExpensesController {
  constructor(private listExpensesService: ListExpensesService) {}

  @Get()
  @ApiOperation({ summary: 'List expenses' })
  @ApiResponse({ status: HttpStatus.OK, type: ListExpensesResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  async handle(@Query() params: ListExpensesRequestDTO) {
    return this.listExpensesService.execute(params);
  }
}
