import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@shared/constants/apiTags';
import { ListCategoriesService } from './listCategories.service';
import { ListCategoriesResponseDTO } from './dtos/response.dto';
import { Problem } from '@shared/filters/Problem';
import { ListCategoriesRequestDTO } from './dtos/request.dto';

@ApiTags(API_TAGS.CATEGORY)
@Controller()
export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List categories' })
  @ApiResponse({ status: HttpStatus.OK, type: ListCategoriesResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Problem })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, type: Problem })
  async handler(@Query() params: ListCategoriesRequestDTO) {
    return this.listCategoriesService.execute(params);
  }
}
