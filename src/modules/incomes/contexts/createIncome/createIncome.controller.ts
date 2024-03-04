import { Body, Controller } from '@nestjs/common';
import { CreateIncomeService } from './createIncome.service';
import { CreateIncomeRequestDTO } from './dtos/request.dto';
import { CreateIncomeResponseDTO } from './dtos/response.dto';

@Controller()
export class CreateIncomeController {
  constructor(private createIncomeService: CreateIncomeService) {}

  async handle(
    @Body() incomeData: CreateIncomeRequestDTO,
  ): Promise<CreateIncomeResponseDTO> {
    return this.createIncomeService.execute(incomeData);
  }
}
