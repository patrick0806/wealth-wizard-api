import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { Problem } from '@shared/filters/Problem';
import { ResumeExpenseService } from './resumeExpense.service';
import { ResumeExpenseResponseDTO } from './dtos/response.dto';

@ApiTags(API_TAGS.EXPENSES)
@Controller('/resume')
export class ResumeExpenseController {
  constructor(private resumeExpenseService: ResumeExpenseService) {}

  @Get()
  @ApiOperation({
    summary: 'Resume total expense value for this and next month',
  })
  @ApiResponse({ status: HttpStatus.CREATED, type: ResumeExpenseResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  async handle() {
    return this.resumeExpenseService.execute();
  }
}
