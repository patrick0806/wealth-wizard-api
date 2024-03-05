import { Body, Controller, HttpStatus, Post, Req } from '@nestjs/common';
import { CreateExpenseService } from './createExpense.service';
import { CreateExpenseRequestDTO } from './dtos/request.dto';
import { CreateExpenseResponseDTO } from './dtos/response.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExceptionDTO } from '@shared/filters/exception.dto';
import { API_TAGS } from '@shared/constants/apiTags';
import { IRequest } from '@shared/interfaces/request.interface';

@ApiTags(API_TAGS.EXPENSES)
@Controller()
export class CreateExpenseController {
  constructor(private createExpenseService: CreateExpenseService) {}

  @ApiOperation({ summary: 'Create new expense' })
  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateExpenseResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ExceptionDTO })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: ExceptionDTO })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: ExceptionDTO })
  @Post()
  async handle(
    @Body() expenseData: CreateExpenseRequestDTO,
    @Req() req: IRequest,
  ): Promise<CreateExpenseResponseDTO> {
    return this.createExpenseService.execute(expenseData, req.user.sub);
  }
}
