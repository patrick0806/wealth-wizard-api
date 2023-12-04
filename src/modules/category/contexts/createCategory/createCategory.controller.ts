import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { CreateCategoryRequestDTO } from './dtos/request.dto';
import { CreateCategoryService } from './createCategory.service';
import { CreateCategoryResponseDTO } from './dtos/response.dto';
import { Problem } from '@shared/filters/Problem';

@ApiTags(API_TAGS.CATEGORY)
@Controller()
export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateCategoryResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  @HttpCode(HttpStatus.CREATED)
  async handler(@Body() data: CreateCategoryRequestDTO) {
    return this.createCategoryService.execute(data);
  }
}
