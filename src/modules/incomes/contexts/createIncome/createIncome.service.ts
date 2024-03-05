import { Injectable } from '@nestjs/common';
import { CreateIncomeResponseDTO } from './dtos/response.dto';
import { CreateIncomeRequestDTO } from './dtos/request.dto';
import { IncomeRepository } from '@shared/repositories/income.repository';

@Injectable()
export class CreateIncomeService {
  constructor(private incomeRepository: IncomeRepository) {}

  async execute(
    incomeData: CreateIncomeRequestDTO,
    userId: string,
  ): Promise<CreateIncomeResponseDTO> {
    incomeData.userId = userId;
    return await this.incomeRepository.createIncome(incomeData);
  }
}
