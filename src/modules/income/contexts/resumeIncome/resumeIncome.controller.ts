import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { Problem } from '@shared/filters/Problem';
import { ResumeIncomeService } from './resumeIncome.service';
import { ResumeIncomeResponseDTO } from './dtos/response.dto';

@ApiTags(API_TAGS.INCOME)
@Controller('/resume')
export class ResumeIncomeController {
  constructor(private resumeIncomeService: ResumeIncomeService) {}

  @Get()
  @ApiOperation({
    summary: 'Resume total income value for this month',
  })
  @ApiResponse({ status: HttpStatus.CREATED, type: ResumeIncomeResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  async handle() {
    return this.resumeIncomeService.execute();
  }
}
